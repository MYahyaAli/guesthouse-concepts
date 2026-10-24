import { site } from '@/content/site';

export function ConceptBanner({ name }: { name: string }) {
  return (
    <div role="note" className="bg-ink px-(--gutter) py-2 text-center font-ui text-[12.5px]/[1.45] font-medium text-bg">
      Website concept for {name} by{' '}
      <a href={site.conceptLink} target="_blank" rel="noopener" className="text-surface">
        {site.conceptBy}
      </a>
      . Not the official site.
    </div>
  );
}
