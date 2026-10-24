import type { Motif, Property } from '@/content/types';
import { Composer } from './Composer';
import { Pairs } from './Pairs';
import { prose, secHead, sub } from './styles';

/** The mat behind the composer carries the theme's motif. */
const matMotif: Record<Motif, string> = {
  lattice: 'motif-lattice',
  arches: '',
  ridgelines: '',
  weave: '',
  'breeze-block': '',
  none: '',
};

export function Enquiry({ p, motif }: { p: Property; motif: Motif }) {
  return (
    <section id="enquire" aria-labelledby="enq-title" className="pt-16 pb-[88px] lg:pt-28 lg:pb-32">
      <div className="wrap grid gap-2 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-[72px]">
        <div>
          <h2 id="enq-title" className={secHead}>
            Check availability
          </h2>
          <p className={prose}>{p.enquiry.intro}</p>
          {p.details.length > 0 && (
            <>
              <h3 className={sub}>Good to know</h3>
              <Pairs rows={p.details} />
            </>
          )}
        </div>
        <div
          className={`mx-[calc(-1*var(--gutter))] mt-5 px-(--gutter) py-[22px] lg:m-0 lg:rounded-[14px] lg:p-9 ${matMotif[motif]}`}
        >
          <Composer
            name={p.name}
            whatsapp={p.contact.whatsapp}
            phoneDisplay={p.contact.phoneDisplay}
            rooms={p.rooms.items.map((r) => r.name)}
            maxGuests={p.enquiry.maxGuests}
          />
        </div>
      </div>
    </section>
  );
}
