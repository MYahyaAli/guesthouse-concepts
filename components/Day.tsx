import type { Property } from '@/content/types';
import { Photo } from './Photo';
import { secHead, section } from './styles';

/** Jackie's only. Structure in place; its weave styling comes after Small House is approved. */
export function Day({ day }: { day: NonNullable<Property['day']> }) {
  return (
    <section id="day" aria-labelledby="day-title" className={`${section} wrap`}>
      <h2 id="day-title" className={secHead}>
        {day.title}
      </h2>
      <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-start">
        <ol className="grid gap-6 lg:grid-cols-3">
          {day.moments.map((m) => (
            <li key={m.when} className="border-t border-line pt-3.5">
              <h3 className="mb-1 font-ui text-[17.5px]/[1.3] font-bold">{m.when}</h3>
              <p className="text-base/[1.55] text-ink-soft">{m.text}</p>
            </li>
          ))}
        </ol>
        {day.photo && <Photo photo={day.photo} className="aspect-[4/5] w-full" />}
      </div>
    </section>
  );
}
