import type { Property } from '@/content/types';

/** Desktop only (from 900px). Every section it links to always exists. */
export function Header({ p }: { p: Property }) {
  const links: [string, string][] = [
    ['#house', p.intro.navLabel ?? 'The house'],
    ['#rooms', 'Rooms'],
    ['#location', 'Location'],
    ['#enquire', 'Availability'],
  ];
  return (
    <header className="wrap hidden items-center justify-between gap-6 py-5 lg:flex">
      <a href="#main" className="font-display text-[26px]/none text-ink no-underline">
        {p.name}
      </a>
      <nav aria-label="Sections" className="flex items-center gap-7 font-ui text-[15px]/none font-medium">
        {links.map(([href, label]) => (
          <a key={href} href={href} className="text-ink no-underline hover:text-accent">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
