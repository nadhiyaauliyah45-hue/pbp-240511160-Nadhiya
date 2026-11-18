const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: membaca body request berformat JSON
app.use(express.json());

// Data in-memory (hilang saat server dimatikan)
let items = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "Mouse", harga: 150000 }
];
let nextId = 3;

// Memeriksa nama (teks tidak kosong) dan harga (angka tidak negatif)
function validasiNama(nama) {
    return typeof nama === "string" && nama.trim() !== "";
}
function validasiHarga(harga) {
    return harga !== "" && harga !== null && !Number.isNaN(Number(harga)) && Number(harga) >= 0;
}

// GET / : informasi singkat API
app.get("/", (req, res) => {
    res.json({ pesan: "REST API Express - LKP 4A", endpoint: "/api/items" });
});

// GET semua
app.get("/api/items", (req, res) => {
    res.json({ sukses: true, data: items });
});

// GET by id
app.get("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
    }
    res.json({ sukses: true, data: item });
});

// POST
app.post("/api/items", (req, res) => {
    const { nama, harga } = req.body || {};
    if (!nama || harga === undefined) {
        return res.status(400).json({ sukses: false, pesan: "nama dan harga wajib diisi" });
    }
    if (!validasiNama(nama) || !validasiHarga(harga)) {
        return res.status(400).json({ sukses: false, pesan: "nama harus berupa teks dan harga harus berupa angka tidak negatif" });
    }
    const baru = { id: nextId++, nama: nama.trim(), harga: Number(harga) };
    items.push(baru);
    res.status(201).json({ sukses: true, data: baru });
});

// PUT
app.put("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) {
        return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
    }
    const { nama, harga } = req.body || {};
    if (nama !== undefined && !validasiNama(nama)) {
        return res.status(400).json({ sukses: false, pesan: "nama harus berupa teks yang tidak kosong" });
    }
    if (harga !== undefined && !validasiHarga(harga)) {
        return res.status(400).json({ sukses: false, pesan: "harga harus berupa angka tidak negatif" });
    }
    if (nama !== undefined) item.nama = nama.trim();
    if (harga !== undefined) item.harga = Number(harga);
    res.json({ sukses: true, data: item });
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);
    const exists = items.some(i => i.id === id);
    if (!exists) {
        return res.status(404).json({ sukses: false, pesan: "Item tidak ditemukan" });
    }
    items = items.filter(i => i.id !== id);
    res.json({ sukses: true, pesan: "Item berhasil dihapus" });
});

// Alamat yang tidak dikenal
app.use((req, res) => {
    res.status(404).json({ sukses: false, pesan: "Endpoint tidak ditemukan" });
});

// Penanganan galat (mis. JSON rusak pada body)
app.use((err, req, res, next) => {
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({ sukses: false, pesan: "Format JSON tidak valid" });
    }
    console.error(err);
    res.status(500).json({ sukses: false, pesan: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
