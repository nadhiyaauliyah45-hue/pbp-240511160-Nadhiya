// Dekorasi latar (statis): gelombang, lingkaran, dan tanaman
export default function Dekorasi() {
  return (
    <>
      {/* Dekorasi latar: lingkaran */}
      <span className="bulat c1" aria-hidden="true"></span>
      <span className="bulat c2" aria-hidden="true"></span>
      <span className="bulat c3" aria-hidden="true"></span>
      <span className="bulat c4" aria-hidden="true"></span>
      {/* Dekorasi latar: gelombang coklat */}
      <svg className="wave w-tl" viewBox="0 0 260 180" aria-hidden="true"><path d="M0 0H210C160 40 130 30 95 82C60 134 22 120 0 172Z" fill="#D2A67C"/></svg>
      <svg className="wave w-tr" viewBox="0 0 320 140" aria-hidden="true"><path d="M320 0V118C262 108 250 52 192 46C142 40 112 14 92 0Z" fill="#8B5330"/><path d="M320 96C270 92 256 40 200 34" fill="none" stroke="#D2A67C" strokeWidth="2"/></svg>
      <svg className="wave w-bottom" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true"><path d="M0 70C200 20 400 110 600 60C800 10 1000 80 1200 40V160H0Z" fill="#E7C9A6"/><path d="M0 112C250 72 450 142 700 102C900 72 1050 122 1200 92V160H0Z" fill="#7A4A2B"/></svg>
      {/* Tanaman */}
      <svg className="plant" viewBox="0 0 100 120" aria-hidden="true">
        <g fill="#8C8B5C" stroke="#7A4A2B" strokeWidth="2.5" strokeLinejoin="round">
          <ellipse cx="36" cy="40" rx="13" ry="26" transform="rotate(-28 36 40)"/>
          <ellipse cx="64" cy="44" rx="12" ry="24" transform="rotate(30 64 44)"/>
          <ellipse cx="50" cy="28" rx="11" ry="24"/>
        </g>
        <path d="M50 76V40M44 74L36 48M56 74L64 52" stroke="#7A4A2B" strokeWidth="2" fill="none"/>
        <path d="M20 76h60l-6 36H26z" fill="#FFF0DD" stroke="#7A4A2B" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M50 100s-12-7-12-14a6 6 0 0112-3 6 6 0 0112 3c0 7-12 14-12 14z" fill="#B07A55"/>
      </svg>
    </>
  );
}
