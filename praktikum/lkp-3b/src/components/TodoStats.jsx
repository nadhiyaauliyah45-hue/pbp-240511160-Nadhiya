export default function TodoStats({ todos }) {
  const total = todos.length;
  const belum = todos.filter((t) => !t.selesai).length;
  const persen = total ? Math.round(((total - belum) / total) * 100) : 0;

  return (
    <div className="status">
      <p className="stats" aria-live="polite">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#7A4A2B" />
          <path d="M7 12.5l3.5 3.5L17 9" stroke="#fff" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{belum} tugas belum selesai</span>
      </p>
      <div className="track" aria-hidden="true">
        <div className="bar" style={{ width: `${persen}%` }} />
        <svg className="heart" viewBox="0 0 24 24" style={{ left: `${persen}%` }}>
          <path d="M12 21s-8-5.5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.5-8 11-8 11z" fill="#FFF6EC" stroke="#A8693F" strokeWidth="2" />
        </svg>
      </div>
      <span className="persen">{persen}%</span>
    </div>
  );
}
