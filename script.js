/* ====== KONFIGURASI ======
   Tempel link folder Google Drive Anda di driveUrl (di antara tanda kutip).
   Folder harus dibagikan: Anyone with the link -> Viewer. */
const CONFIG = Object.freeze({
  driveUrl: "https://drive.google.com/drive/folders/14ZEuOfxmCde2Ig2tZ46CC3XpA6bx93Oj?usp=drive_link",
  siteTitle: "PBP Assignment Collection",
  tagline: "My Practice, My Progress, My Portfolio.",
  photo: "assets/images/profile.jpg" // foto profil tetap: letakkan file di folder ini
});
const KEY = { profile: "pbp_profile_v1", works: "pbp_works_v3", settings: "pbp_settings_v1" };

const DEFAULT_PROFILE = {
  nama: "Nadhiya Auliyah Ramadhani", nim: "240511160", prodi: "S1 Teknik Informatika",
  kelas: "TI24D", univ: "Universitas Muhammadiyah Cirebon",
  deskripsi: "Mahasiswa Teknik Informatika yang sedang belajar mengembangkan aplikasi pada platform Web, Desktop, dan Mobile.",
  photo: "assets/images/profile.jpg"
};
const TITLES = ["Setup Environment & Eksplorasi Platform","HTML5 & CSS Dasar: Halaman Profil","Responsive Design: Halaman Profil Responsif","JavaScript Fundamentals & DOM","React Fundamentals","Back-End dengan Express.js","Integrasi Database (MongoDB)","UTS (Proyek Web Full-Stack)","Konsep Event-Driven Programming & JavaFX","Event Handling Lanjutan & Aplikasi Kalkulator","Android Fundamentals & UI Dasar","Activity Lifecycle & State Management","Persistensi Data dengan Room","Konsumsi API dari Android (Retrofit)","Finalisasi Proyek Akhir & Deployment","UAS (Presentasi & Demo Proyek Akhir)"];
const DESCS = {
  1: "Hello World pada platform Web, Node.js, dan Desktop (Java), serta analisis perbandingan platform. Preview menampilkan hello.html; hello.js dan HelloDesktop.java dijalankan lewat terminal.",
  2: "Halaman profil pribadi menggunakan HTML5 semantik, CSS, Flexbox, dan CSS Grid.",
  3: "Pengembangan halaman profil agar responsif menggunakan media queries untuk mobile, tablet, dan desktop.",
  4: "Aplikasi To-Do List dengan JavaScript murni: manipulasi DOM, event handling, dan penyimpanan data di localStorage.",
  5: "Konversi To-Do List ke React: komponen, props, state (useState), dan useEffect dengan localStorage."
};
const PATHS = { 1: "praktikum/pertemuan-1/hello.html", 2: "praktikum/lpk-2a/index.html", 3: "praktikum/lpk-2b/index.html", 4: "praktikum/lpk-3a/index.html", 5: "praktikum/lpk-3b/dist/index.html" };

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const load = (k, fb) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fb; } catch { return fb; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { toast("Penyimpanan penuh, coba foto yang lebih kecil."); return false; } };

const defaultWorks = () => TITLES.map((t, i) => {
  const n = i + 1, ok = n <= 5;
  return { num: n, title: t, desc: ok ? DESCS[n] : "Belum dikerjakan.", path: ok ? PATHS[n] : "", status: ok ? "available" : "soon" };
});

let profile = { ...DEFAULT_PROFILE, ...load(KEY.profile, {}) };
profile.photo = CONFIG.photo; // foto selalu dari CONFIG (sama di semua perangkat)
let settings = { siteTitle: CONFIG.siteTitle, ...load(KEY.settings, {}) };
let works = load(KEY.works, null) || defaultWorks();
let editingNum = null;

function toast(msg) { const t = $("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2600); }
const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
const avatar = (p, cls = "", id = "") => `<div class="avatar ${cls}" ${id ? `id="${id}"` : ""}>${esc(initials(p.nama))}${p.photo ? `<img src="${esc(p.photo)}" alt="Foto ${esc(p.nama)}" onerror="this.remove()">` : ""}</div>`;
const safePath = (p) => !/^\s*(javascript|data|vbscript):/i.test(p);

/* ====== RENDER ====== */
function renderAll() {
  document.title = settings.siteTitle;
  $("siteTitle").textContent = settings.siteTitle;
  $("profil").innerHTML = `
    ${avatar(profile)}
    <div class="hero-text">
      <p class="hello">Welcome to my portfolio</p>
      <h1>${esc(profile.nama)}</h1>
      <div class="chips"><span class="chip">NIM ${esc(profile.nim)}</span><span class="chip">${esc(profile.prodi)}</span><span class="chip">Kelas ${esc(profile.kelas)}</span></div>
      <p class="desc">${esc(profile.deskripsi)}</p>
      <p class="tagline">${esc(CONFIG.tagline)}</p>
      <div class="chips"><span class="chip">${esc(profile.univ)}</span></div>
      <button class="btn" type="button" data-edit-profile>Edit Profil</button>
    </div>`;
  $("works").innerHTML = [...works].sort((a, b) => a.num - b.num).map((w) => {
    const on = w.status === "available";
    return `<article class="work ${on ? "on" : "off"}">
      <span class="num">${String(w.num).padStart(2, "0")}</span>
      <h3>Pertemuan ${w.num}: ${esc(w.title)}</h3>
      <p>${esc(w.desc || "Belum ada deskripsi.")}</p>
      <div class="foot"><span class="pill">${on ? "Tersedia" : "Belum tersedia"}</span>
      <a class="btn sm" href="#p${w.num}">Lihat Hasil</a></div></article>`;
  }).join("");
  $("btnDrive").href = CONFIG.driveUrl; // link Drive tetap, tidak bisa diubah dari website
  $("footName").textContent = profile.nama;
  $("footUniv").textContent = profile.univ;
  $("footYear").textContent = "© " + new Date().getFullYear();
}

function renderDetail(n) {
  const w = works.find((x) => x.num === n), v = $("viewDetail");
  if (!w) { v.innerHTML = `<a class="btn ghost sm back" href="#praktikum">← Kembali</a><div class="detail empty">Pertemuan tidak ditemukan.</div>`; return; }
  const sorted = [...works].sort((a, b) => a.num - b.num), i = sorted.indexOf(w);
  const prev = sorted[i - 1], next = sorted[i + 1], on = w.status === "available" && w.path && safePath(w.path);
  v.innerHTML = `<a class="btn ghost sm back" href="#praktikum">← Kembali ke Daftar Praktikum</a>
  <article class="detail">
    <div class="top"><div class="ttl"><span class="big">${String(w.num).padStart(2, "0")}</span>
      <div><span class="pill" style="${on ? "" : "background:transparent;color:#76563F;border:1px solid #C8AE91"}">${on ? "Tersedia" : "Belum tersedia"}</span><h1>Pertemuan ${w.num}: ${esc(w.title)}</h1></div></div></div>
    <p class="desc">${esc(w.desc || "Belum ada deskripsi.")}</p>
    <div class="tools">
      ${on ? `<a class="btn sm" href="${esc(w.path)}" target="_blank" rel="noopener">Buka di Tab Baru</a>` : ""}
      <button class="btn ghost sm" type="button" data-edit-work="${w.num}">Edit Informasi</button>
      <button class="btn danger sm" type="button" data-del-work="${w.num}">Hapus Data</button>
    </div>
    <div class="frame"><div class="frame-bar"><i></i><i></i><i></i><span>${esc(w.path || "belum ada file hasil")}</span></div>
      ${on ? `<iframe title="Hasil Pertemuan ${w.num}" src="${esc(w.path)}" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms" loading="lazy"></iframe>`
           : `<div class="empty"><h3>Hasil belum tersedia</h3><p>Isi lokasi file hasil dan ubah status menjadi Tersedia lewat Edit Informasi.</p></div>`}
    </div>
    <div class="pager">${prev ? `<a class="btn ghost sm" href="#p${prev.num}">← Pertemuan ${prev.num}</a>` : "<span></span>"}${next ? `<a class="btn ghost sm" href="#p${next.num}">Pertemuan ${next.num} →</a>` : "<span></span>"}</div>
  </article>`;
}

/* ====== ROUTING ====== */
function route() {
  const m = location.hash.match(/^#p(\d+)$/);
  $("viewHome").hidden = !!m; $("viewDetail").hidden = !m;
  if (m) { renderDetail(+m[1]); window.scrollTo({ top: 0 }); }
  else { const el = location.hash.length > 1 && document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
}
window.addEventListener("hashchange", route);

/* ====== DIALOG PROFIL ====== */
function openProfile() {
  $("fNama").value = profile.nama; $("fNim").value = profile.nim; $("fProdi").value = profile.prodi;
  $("fKelas").value = profile.kelas; $("fUniv").value = profile.univ; $("fDesk").value = profile.deskripsi;
  $("fSite").value = settings.siteTitle;
  $("errProfile").textContent = "";
  $("dlgProfile").showModal();
}
$("formProfile").addEventListener("submit", (e) => {
  e.preventDefault();
  const vals = ["fNama", "fNim", "fProdi", "fKelas", "fUniv", "fSite"].map((id) => $(id).value.trim());
  if (vals.some((v) => !v)) { $("errProfile").textContent = "Nama, NIM, prodi, kelas, universitas, dan judul website wajib diisi."; return; }
  profile = { ...profile, nama: vals[0], nim: vals[1], prodi: vals[2], kelas: vals[3], univ: vals[4], deskripsi: $("fDesk").value.trim(), photo: CONFIG.photo };
  settings = { siteTitle: vals[5] };
  if (save(KEY.profile, profile) && save(KEY.settings, settings)) { $("dlgProfile").close(); renderAll(); toast("Profil berhasil disimpan"); }
});

/* ====== CRUD PRAKTIKUM ====== */
function openWork(n) {
  editingNum = n ?? null;
  const w = works.find((x) => x.num === n);
  $("workDlgTitle").textContent = w ? `Edit Pertemuan ${n}` : "Tambah Praktikum";
  $("wNum").value = w ? w.num : ""; $("wNum").readOnly = !!w;
  $("wTitle").value = w?.title || ""; $("wDesc").value = w?.desc || ""; $("wPath").value = w?.path || "";
  $("wStatus").value = w?.status || "soon"; $("errWork").textContent = "";
  $("dlgWork").showModal();
}
$("formWork").addEventListener("submit", (e) => {
  e.preventDefault();
  const num = parseInt($("wNum").value, 10), title = $("wTitle").value.trim(), path = $("wPath").value.trim(), status = $("wStatus").value;
  const err = (m) => { $("errWork").textContent = m; };
  if (!(num >= 1 && num <= 99)) return err("Nomor pertemuan harus 1–99.");
  if (!title) return err("Judul wajib diisi.");
  if (!safePath(path)) return err("Lokasi file tidak diperbolehkan.");
  if (status === "available" && !path) return err("Isi lokasi file hasil untuk status Tersedia.");
  const item = { num, title, desc: $("wDesc").value.trim(), path, status };
  const idx = works.findIndex((x) => x.num === num);
  if (editingNum === null && idx >= 0) return err("Nomor sudah ada. Gunakan Edit Informasi pada pertemuan tersebut.");
  if (idx >= 0) works[idx] = item; else works.push(item);
  if (save(KEY.works, works)) { $("dlgWork").close(); renderAll(); route(); toast("Data praktikum disimpan"); }
});
function deleteWork(n) {
  if (!confirm(`Hapus data Pertemuan ${n}?\n\nHanya data (judul, deskripsi, lokasi) yang dihapus dari daftar. File kode asli di folder praktikum TIDAK dihapus.`)) return;
  works = works.filter((x) => x.num !== n);
  save(KEY.works, works); location.hash = "#praktikum"; renderAll(); route(); toast(`Data Pertemuan ${n} dihapus`);
}

/* ====== EVENT ====== */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-edit-profile],[data-edit-work],[data-del-work],[data-close]"); if (!t) return;
  if (t.hasAttribute("data-edit-profile")) openProfile();
  else if (t.dataset.editWork) openWork(+t.dataset.editWork);
  else if (t.dataset.delWork) deleteWork(+t.dataset.delWork);
  else if (t.dataset.close) $(t.dataset.close).close();
});
$("btnEditProfile").addEventListener("click", openProfile);
$("btnAddWork").addEventListener("click", () => openWork());
$("btnDrive").addEventListener("click", (e) => { if (/GANTI_DENGAN/.test(CONFIG.driveUrl)) { e.preventDefault(); toast("Isi link Drive pada CONFIG.driveUrl di script.js (baris 3)"); } });
["dlgProfile", "dlgWork"].forEach((id) => $(id).addEventListener("click", (e) => { if (e.target.id === id) e.target.close(); }));

renderAll(); route();
