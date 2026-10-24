/** The reference's inline icons. */

const common = {
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function ChatIcon() {
  return (
    <svg {...common}>
      <path d="M4.5 19.5l1.2-3.4A8 8 0 1 1 8.6 19z" />
      <path d="M9 10.5h6M9 13.5h4" />
    </svg>
  );
}

export function PrevIcon() {
  return (
    <svg {...common}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function NextIcon() {
  return (
    <svg {...common}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}
