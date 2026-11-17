import { useState } from "react";

export default function TodoForm({ onTambah }) {
  const [teks, setTeks] = useState("");
  const [galat, setGalat] = useState("");
  const [getar, setGetar] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!teks.trim()) {
      setGalat("Tugas tidak boleh kosong ya 🙂");
      setGetar(true);
      return;
    }
    onTambah(teks.trim());
    setTeks("");
    setGalat("");
  };

  return (
    <>
      <form
        onSubmit={submit}
        className={`form ${getar ? "shake" : ""}`}
        onAnimationEnd={() => setGetar(false)}
        noValidate
      >
        <div className="kolom-input">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 20l1-5L16 4l4 4L9 19zM14 6l4 4" fill="none" stroke="#A8693F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="text"
            value={teks}
            onChange={(e) => {
              setTeks(e.target.value);
              setGalat("");
            }}
            placeholder="Tulis tugas baru..."
            maxLength={120}
            autoComplete="off"
            aria-label="Tugas baru"
          />
        </div>
        <button type="submit" className="tambah">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          Tambah
        </button>
      </form>
      <p className="error" role="alert">{galat}</p>
    </>
  );
}
