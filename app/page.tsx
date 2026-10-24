import { site } from '@/content/site';

export default function Home() {
  return (
    <main className="wrap grid min-h-svh content-center gap-3 py-16 font-ui">
      <h1 className="text-2xl/tight font-semibold">Website concepts by {site.conceptBy}</h1>
      <p>
        <a href={site.conceptLink}>More of my work</a>
      </p>
    </main>
  );
}
