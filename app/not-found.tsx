import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="wrap grid min-h-svh content-center gap-3 py-16 font-ui">
      <h1 className="font-display text-4xl/tight">Page not found</h1>
      <p>
        There is nothing at this address. <Link href="/">Go to the home page</Link>
      </p>
    </main>
  );
}
