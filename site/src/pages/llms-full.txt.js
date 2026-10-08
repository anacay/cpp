// The whole paper as plain markdown, rebuilt from the manifest's blocks.
import { load } from '../lib/paper.mjs';
export function GET() {
  const { manifest } = load();
  const out = [];
  for (const b of manifest.blocks) {
    if (b.starts_heading) out.push(`${'#'.repeat(b.heading_level)} ${b.heading}`);
    if (b.type === 'text') { if (b.markdown) out.push(b.markdown); }
    else out.push(`[${b.figure.label}${b.figure.page ? `, page ${b.figure.page}` : ''}. Image description: ${b.figure.alt}]\n\n${b.figure.caption}`);
  }
  return new Response(out.join('\n\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
