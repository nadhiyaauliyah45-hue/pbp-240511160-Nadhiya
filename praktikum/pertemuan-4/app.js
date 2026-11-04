// ===== STATE =====
// Penyimpanan dibungkus try/catch agar aplikasi tetap jalan
// bila localStorage diblokir browser (mis. di dalam iframe ber-sandbox).
function bacaTodos() {
    try { return JSON.parse(localStorage.getItem("todos")) || []; }
    catch { return []; }
}
let todos = bacaTodos();
let barusId = null; // id tugas yang baru ditambahkan (untuk animasi masuk)

// ===== DOM ELEMENTS =====
const form = document.querySelector("#form-todo");
const input = document.querySelector("#input-todo");
const list = document.querySelector("#list-todo");
const stats = document.querySelector("#stats");
const bar = document.querySelector("#bar");
const selamat = document.querySelector("#selamat");

// ===== FUNCTIONS =====
// Mengamankan teks agar tidak dibaca sebagai HTML
function esc(teks) {
    return String(teks).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

function simpan() {
    try { localStorage.setItem("todos", JSON.stringify(todos)); }
    catch { /* penyimpanan tidak tersedia, data hanya di memori */ }
}

// Memperbarui teks statistik, progress bar, dan pesan selesai
function updateStats() {
    const total = todos.length;
    const belum = todos.filter(t => !t.selesai).length;
    stats.textContent = `${belum} tugas belum selesai`;
    bar.style.width = (total ? Math.round(((total - belum) / total) * 100) : 0) + "%";
    selamat.hidden = !(total > 0 && belum === 0);
}

function render() {
    list.innerHTML = "";

    if (todos.length === 0) {
        list.innerHTML = "<li class='kosong'><span class='teks'>🌿 Belum ada tugas. Tambahkan!</span></li>";
        updateStats();
        return;
    }

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
        if (todo.selesai) li.classList.add("selesai");
        if (todo.id === barusId) li.classList.add("baru");
        li.innerHTML = `
            <input type="checkbox" ${todo.selesai ? "checked" : ""} data-id="${todo.id}">
            <span class="teks">${esc(todo.teks)}</span>
            <button class="hapus" data-id="${todo.id}">Hapus</button>
        `;
        list.appendChild(li);
    });

    barusId = null;
    updateStats();
}

function tambahTodo(teks) {
    const todo = {
        id: Date.now(),
        teks: teks.trim(),
        selesai: false
    };
    todos.push(todo);
    barusId = todo.id;
    simpan();
    render();
}

function hapusTodo(id) {
    todos = todos.filter(t => t.id !== id);
    simpan();
    render();
}

// Toggle diperbarui langsung pada elemen agar transisi CSS (centang & coretan) terlihat
function toggleSelesai(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.selesai = !todo.selesai;
        simpan();
        const li = list.querySelector(`li[data-id="${id}"]`);
        if (li) li.classList.toggle("selesai", todo.selesai);
        updateStats();
    }
}

// ===== EVENTS =====
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        tambahTodo(input.value);
        input.value = "";
    }
});

list.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        toggleSelesai(Number(e.target.dataset.id));
    }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("hapus")) {
        const id = Number(e.target.dataset.id);
        const li = e.target.closest("li");
        li.classList.add("keluar");                  // animasi keluar
        setTimeout(() => hapusTodo(id), 300);        // hapus setelah animasi selesai
    }
});

// ===== INIT =====
render();
