# LKP 4A - RESTful API Sederhana dengan Express

REST API dengan endpoint CRUD untuk data `items` yang disimpan dalam **array in-memory** (data kembali ke awal setiap server dimulai ulang).

Nadhiya Auliyah Ramadhani - 240511160 - TI24D - Pemrograman Berbasis Platform (Pertemuan 6)

## Menjalankan
```bash
cd praktikum/lpk-4a
npm install
npm run dev      # nodemon, otomatis restart saat file berubah
# atau
npm start        # node server.js
```
Server berjalan di **http://localhost:3000**.

## Struktur
```
lpk-4a/
├── server.js        # seluruh route API
├── package.json
├── api.http         # kumpulan request uji (ekstensi REST Client VS Code)
├── docs/index.html  # halaman dokumentasi statis (tampil di portal)
└── README.md
```

## Endpoint
| Method | Endpoint | Fungsi | Status sukses |
|---|---|---|---|
| GET | `/` | Informasi singkat API | 200 |
| GET | `/api/items` | Ambil semua item | 200 |
| GET | `/api/items/:id` | Ambil satu item | 200 |
| POST | `/api/items` | Tambah item | 201 |
| PUT | `/api/items/:id` | Ubah item (sebagian atau semua field) | 200 |
| DELETE | `/api/items/:id` | Hapus item | 200 |

Data awal:
```json
[
  { "id": 1, "nama": "Laptop", "harga": 8000000 },
  { "id": 2, "nama": "Mouse", "harga": 150000 }
]
```

### GET /api/items
```
GET http://localhost:3000/api/items
```
Respons `200`:
```json
{ "sukses": true, "data": [ { "id": 1, "nama": "Laptop", "harga": 8000000 }, { "id": 2, "nama": "Mouse", "harga": 150000 } ] }
```

### GET /api/items/:id
```
GET http://localhost:3000/api/items/1
```
Respons `200`:
```json
{ "sukses": true, "data": { "id": 1, "nama": "Laptop", "harga": 8000000 } }
```
Respons `404` bila id tidak ada:
```json
{ "sukses": false, "pesan": "Item tidak ditemukan" }
```

### POST /api/items
```
POST http://localhost:3000/api/items
Content-Type: application/json

{ "nama": "Keyboard", "harga": 300000 }
```
Respons `201`:
```json
{ "sukses": true, "data": { "id": 3, "nama": "Keyboard", "harga": 300000 } }
```
Respons `400` bila `nama` atau `harga` tidak ada, `nama` bukan teks, atau `harga` bukan angka tidak negatif:
```json
{ "sukses": false, "pesan": "nama dan harga wajib diisi" }
```

### PUT /api/items/:id
```
PUT http://localhost:3000/api/items/1
Content-Type: application/json

{ "harga": 7500000 }
```
Respons `200`:
```json
{ "sukses": true, "data": { "id": 1, "nama": "Laptop", "harga": 7500000 } }
```
Respons `404` bila id tidak ada, `400` bila nilai yang dikirim tidak valid.

### DELETE /api/items/:id
```
DELETE http://localhost:3000/api/items/2
```
Respons `200`:
```json
{ "sukses": true, "pesan": "Item berhasil dihapus" }
```
Respons `404` bila id tidak ada.

## Status code yang digunakan
| Code | Makna | Dipakai saat |
|---|---|---|
| 200 | OK | GET, PUT, DELETE berhasil |
| 201 | Created | POST berhasil |
| 400 | Bad Request | Input tidak lengkap atau tidak valid, JSON rusak |
| 404 | Not Found | Id atau alamat tidak ditemukan |
| 500 | Internal Server Error | Galat tak terduga pada server |

## Catatan
- Data bersifat sementara (in-memory); pada Pertemuan 7 penyimpanan diganti database.
- `express.json()` diperlukan agar `req.body` terbaca dari request berformat JSON.
- Server berjalan di komputer lokal. GitHub Pages hanya menampilkan halaman statis, sehingga `docs/index.html` hanya dokumentasi.
