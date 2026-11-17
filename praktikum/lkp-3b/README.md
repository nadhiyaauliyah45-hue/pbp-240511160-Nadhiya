# Pertemuan 5 (LKP 3B) - To-Do List React

Konversi To-Do List ke React menggunakan Vite. Folder ini berisi kode sumber **dan** hasil build (`dist/`) yang ditampilkan di portal.

## Struktur
```
pertemuan-5/
├── index.html
├── package.json            (dibuat oleh Vite)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   └── components/
│       ├── TodoForm.jsx
│       ├── TodoList.jsx
│       ├── TodoItem.jsx
│       ├── TodoStats.jsx
│       └── Dekorasi.jsx
└── dist/                   (hasil build, tampil di portal)
```

## Membuat project dari awal
```bash
cd praktikum
npm create vite@latest pertemuan-5 -- --template react
cd pertemuan-5
npm install
```
Timpa `index.html`, `src/main.jsx`, `src/App.jsx`, `src/App.css`, dan `src/components/` dengan versi di folder ini. Hapus `src/index.css` dan `src/assets/`.

## Menjalankan
```bash
npm run dev                  # http://localhost:5173
npm run build -- --base=./   # hasil di dist/ (jalur relatif agar tampil di portal)
```

## Catatan Git
`dist/` masuk `.gitignore` bawaan Vite, jadi tambahkan paksa:
```bash
git add -f praktikum/pertemuan-5/dist
```
