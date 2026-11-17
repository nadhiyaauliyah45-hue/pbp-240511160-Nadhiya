import TodoItem from "./TodoItem";

export default function TodoList({ todos, onHapus, onToggle }) {
  if (todos.length === 0) {
    return <p className="kosong">🌿 Belum ada tugas. Yuk, tambahkan satu!</p>;
  }

  const semuaSelesai = todos.every((t) => t.selesai);

  return (
    <>
      <ul className="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onHapus={onHapus}
            onToggle={onToggle}
          />
        ))}
      </ul>
      {semuaSelesai && <p className="selamat">🎉 Semua tugas selesai! Kerja bagus.</p>}
    </>
  );
}
