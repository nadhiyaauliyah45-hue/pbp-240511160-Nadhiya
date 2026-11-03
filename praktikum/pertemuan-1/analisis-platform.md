# Analisis Platform dan Refleksi

**Tugas Pertemuan 1 — Eksplorasi Platform & Setup Environment**
**Mata Kuliah:** Pemrograman Berbasis Platform

| | |
|---|---|
| **Nama** | Nadhiya Auliyah Ramadhani |
| **NIM** | 240511160 |
| **Kelas** | TI24D |

---

## Daftar Isi

1. [Analisis Komparatif Platform](#1-analisis-komparatif-platform)
2. [Daftar Referensi](#2-daftar-referensi)
3. [Refleksi Diri](#3-refleksi-diri)

---

## 1. Analisis Komparatif Platform

Tabel berikut membandingkan karakteristik tiga platform pengembangan aplikasi, yaitu Web, Desktop, dan Mobile, berdasarkan bahasa utama, arsitektur, cara distribusi, keunggulan, keterbatasan, dan contoh aplikasi. Penyusunan tabel merujuk pada dokumentasi resmi pengembangan web (MDN Web Docs, 2025), aplikasi desktop (Electron, n.d.; Microsoft, 2026), dan aplikasi mobile Android (Android Developers, 2026).

| Aspek | Web | Desktop | Mobile |
|---|---|---|---|
| **Bahasa utama** | **Front-end:** HTML, CSS, JavaScript/TypeScript.<br>**Back-end:** JavaScript (Node.js), PHP, Python, Java, Go (MDN Web Docs, 2025). | C# (.NET/WPF/WinForms), C++ (Qt), Java (JavaFX), Python (Tkinter/PyQt), serta JavaScript/TypeScript melalui Electron (Electron, n.d.; Microsoft, 2026). | **Android:** Kotlin dan Java.<br>**iOS:** Swift dan Objective-C.<br>**Lintas platform:** Dart (Flutter), JavaScript/TypeScript (React Native). |
| **Arsitektur** | Client-server: browser (client) mengirim request HTTP ke server dan menerima response.<br>Umumnya berlapis (presentation, business logic, data) dan dapat berupa SPA, MPA, atau REST/GraphQL API (MDN Web Docs, 2025). | Aplikasi berjalan langsung di sistem operasi dan memakai sumber daya lokal (CPU, memori, berkas).<br>Pola umum: MVC/MVVM; dapat standalone atau terhubung ke server/database. | Aplikasi berjalan di atas OS mobile melalui SDK/framework platform dan memakai sensor perangkat (kamera, GPS).<br>Pola umum: MVVM/MVI; umumnya terhubung ke backend melalui API (Android Developers, 2026). |
| **Cara distribusi** | Di-deploy ke web server atau cloud hosting dan diakses lewat URL melalui browser, tanpa instalasi.<br>Pembaruan langsung berlaku bagi semua pengguna. | Installer (.exe, .msi, .dmg, .deb), situs resmi vendor, atau toko aplikasi seperti Microsoft Store.<br>Pembaruan memerlukan mekanisme auto-update atau unduh ulang. | Toko aplikasi resmi: Google Play Store dan Apple App Store (Android juga dapat memakai berkas APK).<br>Melalui proses review dan pembaruan versi. |
| **Keunggulan** | Lintas platform dan perangkat, tanpa instalasi.<br>Pembaruan terpusat dan mudah.<br>Jangkauan pengguna luas. | Performa tinggi dan akses penuh ke sistem serta perangkat keras.<br>Dapat berjalan offline.<br>Cocok untuk aplikasi berat dan kompleks. | Portabel dan selalu dibawa pengguna.<br>Akses fitur perangkat seperti kamera, GPS, dan notifikasi push.<br>Pengalaman pengguna yang sangat personal. |
| **Keterbatasan** | Bergantung pada koneksi internet dan kompatibilitas browser.<br>Akses perangkat keras terbatas.<br>Performa umumnya di bawah aplikasi native. | Perlu instalasi dan sering terikat pada sistem operasi tertentu.<br>Distribusi dan pembaruan lebih rumit.<br>Jangkauan pengguna lebih sempit. | Ukuran layar dan sumber daya terbatas (baterai, memori).<br>Fragmentasi perangkat dan versi OS.<br>Terikat kebijakan dan biaya toko aplikasi. |
| **Contoh aplikasi** | Google Docs, GitHub, Tokopedia (versi web), Canva (web). | Microsoft Word, Visual Studio Code, Adobe Photoshop, Spotify (desktop). | WhatsApp, Gojek, Instagram, Google Maps. |

---

## 2. Daftar Referensi

Android Developers. (2026). *Guide to app architecture*. Google. https://developer.android.com/topic/architecture

Electron. (n.d.). *Introduction*. OpenJS Foundation. https://www.electronjs.org/docs/latest

MDN Web Docs. (2025). *Learn web development*. Mozilla. https://developer.mozilla.org/en-US/docs/Learn

Microsoft. (2026). *Windows Presentation Foundation documentation*. Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/desktop/wpf/

---

## 3. Refleksi Diri

### 3.1 Platform yang paling menarik untuk dipelajari

Menurut saya, platform yang paling menarik untuk dipelajari adalah Mobile. Alasannya, hampir semua aktivitas sehari-hari kini dilakukan melalui ponsel, sehingga aplikasi mobile memiliki dampak langsung dan nyata bagi pengguna. Selain itu, platform ini menawarkan tantangan menarik karena pengembang dapat memanfaatkan fitur perangkat seperti kamera, GPS, dan notifikasi, sekaligus harus memperhatikan keterbatasan layar dan baterai.

### 3.2 Tantangan terbesar saat setup environment

Tantangan terbesar saat setup environment adalah ukuran berkas dan kebutuhan sumber daya, terutama pada Android Studio yang memerlukan unduhan besar, ruang penyimpanan luas, dan memori yang cukup. Selain itu, pengaturan variabel lingkungan (PATH) untuk Java JDK dan Node.js sering menyebabkan perintah tidak dikenali di terminal, serta adanya ketidakcocokan versi antar tool.

### 3.3 Rencana mengatasi tantangan

Untuk mengatasinya, saya berencana mengunduh berkas saat koneksi internet stabil dan menyisakan ruang penyimpanan yang cukup sebelum instalasi. Jika terjadi kendala PATH, saya akan merujuk dokumentasi resmi masing-masing tool dan memeriksa konfigurasi variabel lingkungan secara bertahap. Saya juga akan menggunakan versi LTS yang stabil, mencatat setiap langkah instalasi, dan bertanya kepada dosen atau teman apabila masalah belum terselesaikan.