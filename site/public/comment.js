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
  bar.innerHTML = '<span class="hl-bar__q"></span><a class="hl-bar__go" href="#"></a><button type="button" class="hl-bar__x" aria-label="Close">×</button>';
  document.body.appendChild(bar);
  var qEl = bar.querySelector('.hl-bar__q'), go = bar.querySelector('.hl-bar__go'), x = bar.querySelector('.hl-bar__x');
  go.textContent = cfg.open === '1' ? 'Discuss this passage' : 'Comment by email';
  if (cfg.open === '1') { go.target = '_blank'; go.rel = 'noopener'; }

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

  function update() {
    var sel = window.getSelection();
    var text = sel && !sel.isCollapsed ? sel.toString().replace(/\s+/g, ' ').trim() : '';
    if (text.length < 12 || !root.contains(sel.anchorNode)) { bar.hidden = true; return; }
    if (text.length > 600) text = text.slice(0, 600).replace(/\s+\S*$/, '') + '…';
    var url = cfg.site.replace(/\/$/, '') + location.pathname + '#:~:text=' + fragment(text.replace(/…$/, ''));
    var head = cfg.page + ': "' + words(text).slice(0, 8).join(' ') + (words(text).length > 8 ? '…' : '') + '"';
    var section = nearestId(sel.anchorNode);
    var body = '> ' + text + '\n\nFrom [' + cfg.page + '](' + url + ')' + (section ? ' · section anchor `#' + section + '`' : '') + '\n\n**Your comment:**\n';
    go.href = cfg.open === '1'
      ? cfg.repo + '/discussions/new?' + q({ category: 'sections', title: head, body: body })
      : 'mailto:' + cfg.contact + '?' + q({ subject: head, body: body });
    qEl.textContent = '“' + words(text).slice(0, 10).join(' ') + (words(text).length > 10 ? '…' : '') + '”';
    bar.hidden = false;
  }
  var t;
  document.addEventListener('selectionchange', function () { clearTimeout(t); t = setTimeout(update, 250); });
  x.addEventListener('click', function () { bar.hidden = true; var s = window.getSelection(); if (s) s.removeAllRanges(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') bar.hidden = true; });
})();
