/* Highlight to discuss. Select any passage on a reading page and a bar offers
   to open a GitHub discussion with the passage quoted and linked back to it.
   This file is the site's only script. It loads nothing, stores nothing and
   sends nothing: the only thing it does is build a link you choose to follow. */
(function () {
  var me = document.currentScript;
  if (!me) return;
  var cfg = me.dataset;
  var root = document.querySelector('main article.prose') || document.querySelector('main');
  if (!root) return;

  var bar = document.createElement('div');
  bar.className = 'hl-bar';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Discuss the selected passage');
  bar.hidden = true;
  bar.innerHTML = '<span class="hl-bar__q"></span><a class="hl-bar__go" href="#"></a><a class="hl-bar__mail" href="#">or email</a><button type="button" class="hl-bar__x" aria-label="Close">×</button>';
  document.body.appendChild(bar);
  var qEl = bar.querySelector('.hl-bar__q'), go = bar.querySelector('.hl-bar__go'), mail = bar.querySelector('.hl-bar__mail'), x = bar.querySelector('.hl-bar__x');
  go.textContent = cfg.open === '1' ? 'Discuss this passage' : 'Comment by email';
  if (cfg.open === '1') { go.target = '_blank'; go.rel = 'noopener'; } else { mail.hidden = true; }

  // A small resting hint, so people know the feature is there before they
  // select anything. Dismissed for this page view only; nothing is stored.
  var tip = document.createElement('div');
  tip.className = 'hl-tip';
  tip.setAttribute('role', 'note');
  tip.innerHTML = '<span class="hl-tip__dot" aria-hidden="true"></span><span>Select any sentence to comment.</span> <a href="/join/#new">How it works</a><button type="button" class="hl-tip__x" aria-label="Hide this tip">×</button>';
  document.body.appendChild(tip);
  var tipOff = false;
  tip.querySelector('.hl-tip__x').addEventListener('click', function () { tipOff = true; tip.hidden = true; });

  function words(s) { return s.replace(/\s+/g, ' ').trim().split(' '); }
  function fragment(s) {
    var w = words(s);
    if (w.length <= 10) return encodeURIComponent(w.join(' '));
    return encodeURIComponent(w.slice(0, 5).join(' ')) + ',' + encodeURIComponent(w.slice(-4).join(' '));
  }
  function nearestId(node) {
    var el = node.nodeType === 1 ? node : node.parentElement;
    while (el && el !== document.body) {
      var h = el.previousElementSibling;
      while (h) { if (/^H[2-4]$/.test(h.tagName) && h.id) return h.id; h = h.previousElementSibling; }
      el = el.parentElement;
    }
    return '';
  }
  function q(o) { return Object.keys(o).map(function (k) { return k + '=' + encodeURIComponent(o[k]); }).join('&'); }

  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  var holdUntil = 0, hideT;
  bar.addEventListener('pointerdown', function () { holdUntil = Date.now() + 2000; });
  go.addEventListener('click', function () { setTimeout(function () { bar.hidden = true; tip.hidden = tipOff; }, 300); });

  function update() {
    var sel = window.getSelection();
    var text = sel && !sel.isCollapsed ? sel.toString().replace(/\s+/g, ' ').trim() : '';
    if (text.length < 12 || !root.contains(sel.anchorNode)) {
      // On phones, the first touch of a tap clears the selection. Keep the bar
      // up long enough to be tapped; it still closes with the x or Escape.
      if (!bar.hidden && (Date.now() < holdUntil || coarse)) {
        clearTimeout(hideT); hideT = setTimeout(function () { bar.hidden = true; tip.hidden = tipOff; }, coarse ? 8000 : 1500);
        return;
      }
      bar.hidden = true; tip.hidden = tipOff; return;
    }
    clearTimeout(hideT);
    if (text.length > 600) text = text.slice(0, 600).replace(/\s+\S*$/, '') + '…';
    var url = cfg.site.replace(/\/$/, '') + location.pathname + '#:~:text=' + fragment(text.replace(/…$/, ''));
    var head = cfg.page + ': "' + words(text).slice(0, 8).join(' ') + (words(text).length > 8 ? '…' : '') + '"';
    var section = nearestId(sel.anchorNode);
    var body = '> ' + text + '\n\nFrom [' + cfg.page + '](' + url + ')' + (section ? ' · section anchor `#' + section + '`' : '') + '\n\n**Your comment:**\n';
    var mailto = 'mailto:' + cfg.contact + '?' + q({ subject: head, body: body });
    go.href = cfg.open === '1' ? cfg.repo + '/discussions/new?' + q({ category: 'sections', title: head, body: body }) : mailto;
    mail.href = mailto;
    qEl.textContent = '“' + words(text).slice(0, 10).join(' ') + (words(text).length > 10 ? '…' : '') + '”';
    bar.hidden = false;
    tip.hidden = true;
  }
  var t;
  document.addEventListener('selectionchange', function () { clearTimeout(t); t = setTimeout(update, 250); });
  x.addEventListener('click', function () { clearTimeout(hideT); bar.hidden = true; tip.hidden = tipOff; var s = window.getSelection(); if (s) s.removeAllRanges(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') bar.hidden = true; });
})();
