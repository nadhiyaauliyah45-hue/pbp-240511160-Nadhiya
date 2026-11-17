import { useState, useEffect } from "react";
import Dekorasi from "./components/Dekorasi";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

const KUNCI = "todos-react";

// Membaca data dari localStorage (aman bila data rusak atau diblokir)
function bacaTodos() {
  try {
    const data = JSON.parse(localStorage.getItem(KUNCI));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

const buatId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

export default function App() {
  // State awal dibaca langsung dari localStorage (lazy initial state)
  const [todos, setTodos] = useState(bacaTodos);

  // Simpan ke localStorage setiap kali todos berubah
  useEffect(() => {
    try {
      localStorage.setItem(KUNCI, JSON.stringify(todos));
    } catch {
      /* penyimpanan tidak tersedia: data hanya ada di memori */
    }
  }, [todos]);

  const tambah = (teks) => {
    setTodos((prev) => [...prev, { id: buatId(), teks, selesai: false }]);
  };

  const hapus = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t))
    );
  };

  return (
    <>
      <Dekorasi />
      <main className="app">
        <header className="judul">
          <svg className="logo" viewBox="0 0 120 120" aria-hidden="true">
            <g stroke="#7A4A2B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <g transform="rotate(-8 45 61)">
                <rect x="14" y="20" width="62" height="82" rx="10" fill="#FFF4E8"/>
                <rect x="32" y="10" width="26" height="14" rx="5" fill="#7A4A2B"/>
                <path d="M28 44l4 4 7-8M46 42h22M28 62l4 4 7-8M46 60h22M28 80l4 4 7-8M46 78h14" fill="none" strokeWidth="4"/>
              </g>
              <circle cx="80" cy="82" r="24" fill="#FFF4E8"/>
              <path d="M80 68v14l8 5M75 56h10" fill="none"/>
            </g>
          </svg>
          <div className="teks-judul">
            <h1>To-Do List React</h1>
            <svg className="garis-judul" viewBox="0 0 300 12" aria-hidden="true"><path d="M2 8c40-8 80 4 120-2s90-6 176 0" fill="none" stroke="#A8693F" strokeWidth="3" strokeLinecap="round"/></svg>
            <p className="sub">Catat, selesaikan, dan rayakan setiap langkah kecil.</p>
          </div>
          <svg className="kilau k1" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z" fill="#D2A67C"/></svg>
          <svg className="kilau k2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z" fill="#B07A55"/></svg>
        </header>

        <TodoForm onTambah={tambah} />
        <TodoStats todos={todos} />
        <TodoList todos={todos} onHapus={hapus} onToggle={toggle} />
      </main>
    </>
  );
}
