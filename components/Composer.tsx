'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { greeting } from '@/content/site';
import { ASK_ROOM_EVENT } from './AskAboutRoom';
import { ChatIcon } from './icons';
import { btn } from './styles';

const DAY = 864e5;
const iso = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
/** Input values are local dates. new Date('2027-01-02') would be UTC. */
const parse = (v: string) => {
  if (!v) return null;
  const [y, m, d] = v.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const fmt = (d: Date) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
const nextDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);

/** Today in the visitor's browser. The page is built ahead of time, so the server knows nothing ('' ). */
const noSubscribe = () => () => {};
const todayIso = () => iso(new Date());
const useToday = () => useSyncExternalStore(noSubscribe, todayIso, () => '');

const field = 'grid min-w-0 gap-1.5 font-ui text-sm/[1.2] font-semibold';
const control =
  'min-h-12 w-full min-w-0 rounded-lg border border-[#C2CBCE] bg-surface px-3 py-2.5 font-ui text-base/[1.2] font-medium text-ink ' +
  'focus:border-accent focus:outline-2 focus:outline-offset-1 focus:outline-accent';

export function Composer({
  name,
  whatsapp,
  phoneDisplay,
  rooms,
  maxGuests,
}: {
  name: string;
  whatsapp: string;
  phoneDisplay: string;
  /** Room names for the Room select. */
  rooms: string[];
  maxGuests: number;
}) {
  const [arrive, setArrive] = useState('');
  const [leave, setLeave] = useState('');
  const [room, setRoom] = useState('');
  const [guests, setGuests] = useState(String(Math.min(2, maxGuests)));
  const [guestName, setGuestName] = useState('');
  const roomRef = useRef<HTMLSelectElement>(null);
  const todayValue = useToday();

  // "Ask about this room": pick it, scroll to the form, focus the Room select.
  useEffect(() => {
    const onAsk = (e: Event) => {
      setRoom((e as CustomEvent<string>).detail);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById('enquire')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      setTimeout(() => roomRef.current?.focus({ preventScroll: true }), reduce ? 0 : 600);
    };
    window.addEventListener(ASK_ROOM_EVENT, onAsk);
    return () => window.removeEventListener(ASK_ROOM_EVENT, onAsk);
  }, []);

  // The reference's update(), as a render.
  const today = parse(todayValue);
  const a = parse(arrive);
  const l = parse(leave);
  const leaveMin = a ? iso(nextDay(a)) : today ? iso(nextDay(today)) : undefined;
  let problem = '';
  if (a && today && a < today) problem = 'Your arrival date is in the past. Pick a date from today onwards.';
  else if (a && l && l <= a) problem = 'Your leave date needs to be after your arrival date.';

  const lines = [greeting(name)];
  if (a && l && !problem) {
    const n = Math.round((l.getTime() - a.getTime()) / DAY);
    lines.push(`Dates: ${fmt(a)} to ${fmt(l)} (${n} night${n === 1 ? '' : 's'})`);
  } else if (a && !l && !problem) lines.push(`Arriving: ${fmt(a)}`);
  else if (!a && l) lines.push(`Leaving: ${fmt(l)}`);
  else if (!a && !l) lines.push('Dates: not fixed yet');
  lines.push(`Guests: ${guests}`);
  lines.push(`Room: ${room || 'any'}`);
  const nm = guestName.trim();
  if (nm) lines.push(`Name: ${nm}`);

  const text = lines.join('\n');
  const href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <form className="grid gap-4 rounded-xl border border-line bg-surface p-5 lg:p-7" noValidate onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-3 *:min-w-0">
        <label className={field}>
          <span>Arrive</span>
          <input type="date" className={control} value={arrive} min={todayValue || undefined} onChange={(e) => setArrive(e.target.value)} />
        </label>
        <label className={field}>
          <span>Leave</span>
          <input type="date" className={control} value={leave} min={leaveMin} onChange={(e) => setLeave(e.target.value)} />
        </label>
      </div>
      <label className={field}>
        <span>Room</span>
        <select ref={roomRef} className={`${control} select-arrow`} value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="">Any room</option>
          {rooms.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>
      <div className="grid grid-cols-2 gap-3 *:min-w-0">
        <label className={field}>
          <span>Guests</span>
          <select className={`${control} select-arrow`} value={guests} onChange={(e) => setGuests(e.target.value)}>
            {Array.from({ length: maxGuests }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label className={field}>
          <span>
            Your name <span className="font-medium text-ink-soft">(optional)</span>
          </span>
          <input
            type="text"
            className={control}
            autoComplete="given-name"
            maxLength={60}
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
        </label>
      </div>
      <p role="alert" hidden={!problem} className="font-ui text-[14.5px]/[1.4] font-semibold text-[#A3261B]">
        {problem}
      </p>
      <div className="rounded-[10px] bg-[#EFEAE2] py-3.5 pr-[18px] pl-3.5">
        <p id="chat-label" className="mb-2 font-ui text-[12.5px]/none font-semibold text-[#5D6B72]">
          Your message
        </p>
        <div className="bubble" aria-labelledby="chat-label" aria-live="polite">
          {text}
        </div>
      </div>
      <a
        className={`${btn} w-full`}
        href={href}
        target="_blank"
        rel="noopener"
        aria-disabled={problem ? 'true' : 'false'}
        onClick={(e) => {
          if (problem) e.preventDefault();
        }}
      >
        <ChatIcon />
        <span>Send on WhatsApp</span>
      </a>
      <p className="-mt-1 font-ui text-[13.5px]/[1.45] text-ink-soft">
        Opens WhatsApp with this message, ready to send to {phoneDisplay}.
      </p>
    </form>
  );
}
