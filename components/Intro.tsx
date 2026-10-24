import type { Property } from '@/content/types';
import { Photo } from './Photo';
import { note, prose, secHead, section, sub } from './styles';

export function Intro({ p }: { p: Property }) {
  const { intro } = p;
  return (
    <section
      id="house"
      aria-labelledby="house-title"
      className={`${section} wrap grid gap-8 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-[72px]`}
    >
      {intro.photo && (
        <figure className="lg:sticky lg:top-6">
          <Photo photo={intro.photo} className="aspect-[4/5] w-full" />
        </figure>
      )}
      <div>
        <h2 id="house-title" className={secHead}>
          {intro.title}
        </h2>
        <div className={`${prose} [&_p]:mb-[1em]`}>
          {intro.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        {p.mentions.length > 0 && (
          <>
            <h3 className={sub}>What guests mention most</h3>
            <ul className="mt-[18px] grid gap-[22px] sm:grid-cols-2 sm:gap-x-9">
              {p.mentions.map((m) => (
                <li key={m.title} className="border-t border-line pt-3.5">
                  <h4 className="mb-1 font-text text-[17.5px]/[1.3] font-bold">{m.title}</h4>
                  <p className="text-base/[1.55] text-ink-soft">{m.text}</p>
                </li>
              ))}
            </ul>
            <p className={note}>{p.mentionsSource}</p>
          </>
        )}
      </div>
    </section>
  );
}
