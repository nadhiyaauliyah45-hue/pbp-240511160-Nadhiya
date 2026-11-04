// =====================================================
//  To-Do List  |  data disimpan di localStorage (JSON)
// =====================================================
const KUNCI = "todos";

// ===== DOM ELEMENTS =====
const form = document.querySelector("#form-todo");
const input = document.querySelector("#input-todo");
const list = document.querySelector("#list-todo");
const teksStats = document.querySelector("#teks-stats");
const bar = document.querySelector("#bar");
const heart = document.querySelector("#heart");
const persenEl = document.querySelector("#persen");
const selamat = document.querySelector("#selamat");
const galat = document.querySelector("#error");

// ===== PENYIMPANAN =====
// Struktur data: { id: "unik", teks: "isi tugas", selesai: false }
function buatId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function bacaTodos() {
    try {
        const data = JSON.parse(localStorage.getItem(KUNCI));
        if (!Array.isArray(data)) return [];
        return data
            .filter((t) => t && typeof t.teks === "string")
            .map((t) => ({ id: String(t.id ?? buatId()), teks: t.teks, selesai: Boolean(t.selesai) }));
    } catch {
        return []; // data rusak atau localStorage diblokir
    }
}

function simpan() {
    try { localStorage.setItem(KUNCI, JSON.stringify(todos)); }
    catch { /* penyimpanan tidak tersedia: data hanya ada di memori */ }
}

let todos = bacaTodos();
let barusId = null; // tugas yang baru ditambahkan (untuk animasi masuk)

// ===== TAMPILAN =====
// Mengamankan teks agar tidak dibaca sebagai HTML
function esc(teks) {
    return String(teks).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

// Menghitung tugas, progress bar, dan pesan selesai
function updateStats() {
    const total = todos.length;
    const belum = todos.filter((t) => !t.selesai).length;
    const persen = total ? Math.round(((total - belum) / total) * 100) : 0;

    teksStats.textContent = `${belum} tugas belum selesai`;
    bar.style.width = persen + "%";
    heart.style.left = persen + "%";
    persenEl.textContent = persen + "%";
    selamat.hidden = !(total > 0 && belum === 0);
}

function render() {
    list.innerHTML = "";

    if (todos.length === 0) {
        list.innerHTML = "<li class='kosong'>🌿 Belum ada tugas. Yuk, tambahkan satu!</li>";
        updateStats();
        return;
    }

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
        if (todo.selesai) li.classList.add("selesai");
        if (todo.id === barusId) li.classList.add("baru");
        li.innerHTML = `
            <label>
                <input type="checkbox" ${todo.selesai ? "checked" : ""} aria-label="Tandai selesai">
                <span class="teks">${esc(todo.teks)}</span>
            </label>
            <button type="button" class="hapus">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10 11v6M14 11v6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Hapus
            </button>
        `;
        list.appendChild(li);
    });

    barusId = null;
    updateStats();
}

// ===== AKSI =====
function tampilkanError(pesan) {
    galat.textContent = pesan;
    form.classList.remove("shake");
    void form.offsetWidth;           // memulai ulang animasi
    form.classList.add("shake");
}

function tambahTodo(teks) {
    const todo = { id: buatId(), teks: teks.trim(), selesai: false };
    todos.push(todo);                // tugas lama tetap ada
    barusId = todo.id;
    simpan();
    render();
}

function hapusTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    simpan();
    render();
}

// Hanya mengubah kelas elemen agar transisi centang dan coretan terlihat
function toggleSelesai(id) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    todo.selesai = !todo.selesai;
    simpan();
    const li = list.querySelector(`li[data-id="${id}"]`);
    if (li) li.classList.toggle("selesai", todo.selesai);
    updateStats();
}

// ===== EVENTS =====
form.addEventListener("submit", (e) => {
    e.preventDefault();                       // Enter dan klik Tambah sama-sama lewat sini
    if (!input.value.trim()) {
        tampilkanError("Tugas tidak boleh kosong ya 🙂");
        input.focus();
        return;
    }
    galat.textContent = "";
    tambahTodo(input.value);
    input.value = "";
    input.focus();
});

input.addEventListener("input", () => { galat.textContent = ""; });

list.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        toggleSelesai(e.target.closest("li").dataset.id);
    }
});

list.addEventListener("click", (e) => {
    const tombol = e.target.closest(".hapus");
    if (!tombol) return;
    const li = tombol.closest("li");
    li.classList.add("keluar");               // animasi keluar
    setTimeout(() => hapusTodo(li.dataset.id), 300);
});

// ===== INIT =====
render();
