import { conceptNote, site } from '@/content/site';
import type { Property } from '@/content/types';

export function Footer({ p }: { p: Property }) {
  return (
    <footer className="border-t border-line pt-10 pb-[calc(96px+env(safe-area-inset-bottom))] font-ui text-[15px]/[1.6] text-ink-soft lg:pb-12">
      <div className="wrap grid gap-6 lg:grid-cols-2 lg:items-start [&_p]:mb-1.5">
        <div>
          <p className="font-display text-[26px]/none text-ink">{p.name}</p>
          <p>
            {p.contact.address.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
          <p>
            <a href={`tel:+${p.contact.whatsapp}`}>{p.contact.phoneDisplay}</a>
          </p>
          {p.links?.map((l) => (
            <p key={l.url}>
              <a href={l.url} target="_blank" rel="noopener">
                {l.label}
              </a>
            </p>
          ))}
        </div>
        <p className="max-w-[52ch]">
          {conceptNote(p.fullName)}{' '}
          <a href={site.conceptLink} target="_blank" rel="noopener">
            More of my work
          </a>
        </p>
      </div>
    </footer>
  );
}
