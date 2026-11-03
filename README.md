<div align="center">

# 📚 PBP Assignment Collection

**My Practice, My Progress, My Portfolio.**

Website portofolio pribadi untuk mengumpulkan tugas praktikum, menampilkan hasil coding, dan mengakses laporan PDF mata kuliah **Pemrograman Berbasis Platform**.

![HTML5](https://img.shields.io/badge/HTML5-76563F?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-76563F?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6-76563F?style=flat-square&logo=javascript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-493629?style=flat-square&logo=github&logoColor=white)

🔗 **Demo:** `https://nadhiyaauliyah45-hue.github.io/pbp-240511160-Nadhiya/` 

</div>

---

## 👤 Identita

| | |
|---|---|
| **Nama** | Nadhiya Auliyah Ramadhani |
| **NIM** | 240511160 |
| **Program Studi** | S1 Teknik Informatika |
| **Kelas** | TI24D |
| **Universitas** | Universitas Muhammadiyah Cirebon |
| **Mata Kuliah** | Pemrograman Berbasis Platform |

## ✨ Fitur

- **My Profile** – profil mahasiswa yang dapat diedit (nama, NIM, prodi, kelas, deskripsi) dan foto profil dengan preview sebelum disimpan.
- **My Practical Works** – daftar Pertemuan 1–16 dalam bentuk card; pertemuan yang sudah tersedia dibedakan tampilannya dari yang belum.
- **Preview hasil coding** – hasil setiap pertemuan ditampilkan melalui `iframe` ber-`sandbox`, sehingga kode antarpertemuan tidak saling mengganggu.
- **CRUD praktikum** – tambah, lihat, ubah, dan hapus data praktikum (judul, deskripsi, lokasi file). Penghapusan memakai konfirmasi dan **tidak menghapus file kode asli**.
- **Assignment Reports** – tombol menuju folder Google Drive berisi laporan PDF; link dapat diganti lewat satu konfigurasi.
- **Responsif** – nyaman dibuka di laptop, tablet, dan smartphone.

## 🛠️ Teknologi

- HTML5, CSS3, dan JavaScript Vanilla (ES6) – tanpa framework
- LocalStorage untuk menyimpan profil, pengaturan, dan metadata praktikum
- GitHub Pages untuk hosting

## 🎨 Tema

Warm Neutral dengan palet Coffee Brown, Cream, dan Beige.

| Warna | Kode |
|---|---|
| Background | `#F7F3EB` |
| Cream | `#F3EBDD` |
| Beige | `#E5D5BE` |
| Soft Brown | `#C8AE91` |
| Coffee Brown | `#76563F` |
| Dark Brown | `#493629` |
| White Cream | `#FFFCF7` |

## 📁 Struktur Folder

```
pbp-assignment/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   └── images/
│       └── profile.jpg
└── praktikum/
    ├── pertemuan-1/   # Hello World 3 platform + analisis platform
    ├── pertemuan-2/   # Halaman profil HTML5 & CSS
    └── pertemuan-3/   # Halaman profil responsif (media queries)
```

## 🚀 Cara Menjalankan

**Lokal**
1. Clone repository:
   ```bash
   git clone https://github.com/nadhiyaauliyah45-hue/NAMA-REPOSITORY.git
   cd NAMA-REPOSITORY
   ```
2. Jalankan dengan **Live Server** di VS Code (klik kanan `index.html` → *Open with Live Server*), atau buka `index.html` di browser.

**GitHub Pages**
1. Buka **Settings → Pages** pada repository.
2. Pilih *Source*: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Simpan, lalu tunggu beberapa menit sampai alamat situs aktif.

## ⚙️ Konfigurasi

| Yang ingin diubah | Cara |
|---|---|
| Link Google Drive laporan | Ubah `CONFIG.driveUrl` di `script.js`, atau lewat tombol **Edit Profil** |
| Foto profil | Letakkan `profile.jpg` di `assets/images/`, atau upload lewat **Edit Profil** |
| Judul website | Lewat **Edit Profil** |

## ➕ Menambah Praktikum Baru

1. Buat folder `praktikum/pertemuan-N/` berisi `index.html`, `style.css`, dan `script.js`.
2. Klik **+ Tambah Praktikum** (atau **Edit Informasi** pada pertemuan terkait).
3. Isi judul, deskripsi, dan lokasi file, misalnya `praktikum/pertemuan-4/index.html`, lalu ubah status menjadi *Tersedia*.

## 📌 Daftar Praktikum

| Pertemuan | Materi | Status |
|---|---|---|
| 1 | Setup Environment & Eksplorasi Platform | ✅ Tersedia |
| 2 | HTML5 & CSS Dasar: Halaman Profil | ✅ Tersedia |
| 3 | Responsive Design: Halaman Profil Responsif | ✅ Tersedia |
| 4–16 | Menyusul | ⏳ Belum tersedia |

## 📝 Catatan

- Data profil dan metadata praktikum disimpan di **LocalStorage browser**, sehingga hanya berlaku pada browser yang digunakan.
- Laporan PDF disimpan di Google Drive; website ini tidak menyediakan upload file.

## 📄 Lisensi

Dibuat untuk keperluan akademik mata kuliah Pemrograman Berbasis Platform, Universitas Muhammadiyah Cirebon.

<div align="center">

© 2026 Nadhiya Auliyah Ramadhani

</div>
