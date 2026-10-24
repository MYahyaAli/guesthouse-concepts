/** Label/value rows: the walks under Location and "Good to know". */
export function Pairs({ rows }: { rows: [string, string][] }) {
  return (
    <ul className="mt-[22px] mb-5 border-t border-line">
      {rows.map(([label, value]) => (
        <li
          key={label}
          className="flex justify-between gap-4 border-b border-line py-3 font-ui text-[15.5px]/[1.4] font-medium"
        >
          <span>{label}</span>
          <span className="text-right text-ink-soft">{value}</span>
        </li>
      ))}
    </ul>
  );
}
