import { useState } from "react";

export default function TodoItem({ todo, onHapus, onToggle }) {
  const [keluar, setKeluar] = useState(false);

  // Animasi keluar dijalankan dulu, baru data dihapus
  const hapus = () => {
    setKeluar(true);
    setTimeout(() => onHapus(todo.id), 300);
  };

  const kelas = `${todo.selesai ? "selesai" : ""} ${keluar ? "keluar" : "baru"}`.trim();

  return (
    <li className={kelas}>
      <label>
        <input
          type="checkbox"
          checked={todo.selesai}
          onChange={() => onToggle(todo.id)}
          aria-label="Tandai selesai"
        />
        <span className="teks">{todo.teks}</span>
      </label>
      <button type="button" className="hapus" onClick={hapus}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10 11v6M14 11v6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Hapus
      </button>
    </li>
  );
}
