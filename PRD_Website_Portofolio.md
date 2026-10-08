# PRD: Website Portofolio Pribadi (React.js)

| | |
|---|---|
| **Versi** | 2.0 |
| **Tanggal** | 6 Oktober 2026 |
| **Status** | Draft untuk pengembangan |
| **Tech stack** | React.js (Vite), Tailwind CSS, Framer Motion |
| **Jenis situs** | Single-page, statis |

## Daftar Isi

1. [Ringkasan Produk](#1-ringkasan-produk)
2. [Goals](#2-goals)
3. [Target Pengguna](#3-target-pengguna)
4. [Scope Project](#4-scope-project)
5. [Fitur dan Kebutuhan Fungsional](#5-fitur-dan-kebutuhan-fungsional)
6. [User Flow](#6-user-flow)
7. [UI/UX](#7-uiux)
8. [Database Overview](#8-database-overview)
9. [Technical Requirements](#9-technical-requirements)
10. [Konten yang Perlu Disiapkan](#10-konten-yang-perlu-disiapkan)
11. [Timeline](#11-timeline-estimasi--4-minggu)
12. [Kriteria Penerimaan](#12-kriteria-penerimaan)
13. [Risiko dan Mitigasi](#13-risiko-dan-mitigasi)
14. [Pengembangan Lanjutan (Fase 2)](#14-pengembangan-lanjutan-fase-2)

---

## 1. Ringkasan Produk

Website portofolio single-page berbasis React.js yang memperkenalkan profil, keahlian, dan pencapaian pemilik kepada masyarakat luas (rekruiter, dosen, kolaborator, klien, dan umum). Desainnya minimalist dan elegant, dengan efek parallax serta galeri pencapaian yang bergeser dari kanan ke kiri.

---

## 2. Goals

### 2.1 Tujuan Bisnis / Personal
- Membangun citra profesional dan kredibel secara online.
- Menjadi satu tautan utama yang dapat dibagikan untuk lamaran kerja, magang, beasiswa, atau kolaborasi.
- Meningkatkan peluang dihubungi (klik LinkedIn, email, telepon, dan unduhan CV).

### 2.2 Tujuan Produk
- Pengunjung memahami siapa pemilik, apa keahliannya, dan apa prestasinya dalam **kurang dari 2 menit**.
- Pengunjung dapat menghubungi atau mengunduh CV dalam **maksimal 2 klik**.
- Pengalaman visual berkesan tanpa mengorbankan kecepatan.

### 2.3 Tujuan Teknis
- Kode modular; konten terpisah dari komponen sehingga mudah diperbarui.
- Performa dan aksesibilitas tinggi.
- Mudah di-deploy dan dirawat tanpa biaya hosting besar.

### 2.4 Indikator Keberhasilan (KPI)

| Metrik | Target |
|---|---|
| Lighthouse Performance / Accessibility / SEO | ≥ 90 / ≥ 90 / ≥ 90 |
| Largest Contentful Paint | < 2,5 detik |
| Cumulative Layout Shift | < 0,1 |
| Klik kontak dan unduh CV | Terlacak (opsional, via analytics) |
| Kompatibilitas perangkat | Layak tampil di lebar 360 px hingga 1440 px |

---

## 3. Target Pengguna

| Persona | Kebutuhan | Perilaku |
|---|---|---|
| Rekruiter / HRD | Melihat skill, pendidikan, prestasi, dan CV dengan cepat | Scan cepat, langsung mencari tombol CV dan LinkedIn |
| Dosen / Akademisi | Identitas, prodi, aktivitas, dan capaian | Membaca bagian About dan Achievement |
| Klien / Kolaborator | Menilai kemampuan, lalu menghubungi | Melihat skills, lalu menuju kontak |
| Masyarakat Umum | Tampilan menarik dan mudah dipahami | Scroll santai, sering lewat mobile |

---

## 4. Scope Project

### 4.1 In Scope (MVP)
- Single-page website dengan 6 bagian: Navbar, Hero, About Me, What I Can Do, Achievement, Contact.
- Navbar sticky dengan efek hover dan scroll spy.
- Efek parallax dan animasi gambar kanan ke kiri.
- Desain responsif (mobile, tablet, desktop).
- Konten dikelola dari file data terstruktur (JSON/JS).
- Tombol unduh CV (PDF).
- SEO dasar, aksesibilitas dasar, dan deploy ke hosting publik.

### 4.2 Out of Scope (MVP)
- Panel admin / CMS dan sistem login.
- Blog / artikel.
- Form kontak dengan backend.
- Multi-bahasa dan dark mode (fase 2).
- Section Projects/karya terpisah (fase 2).

### 4.3 Asumsi
- Konten (foto, teks, CV) disediakan oleh pemilik.
- Website statis, dikelola oleh satu orang.
- Tidak ada data pengunjung yang disimpan.

### 4.4 Batasan
- Anggaran minimal (hosting gratis).
- Seluruh pengembangan menggunakan React.js.

---

## 5. Fitur dan Kebutuhan Fungsional

### 5.1 Daftar Fitur Utama

| No | Fitur | Prioritas | Deskripsi |
|---|---|---|---|
| F1 | Navigation Bar | Must | Sticky, hover animasi, scroll spy, hamburger di mobile |
| F2 | Hero | Must | Nama, headline, CTA, background parallax |
| F3 | About Me | Must | Deskripsi, nama, NIM, prodi, pendidikan, aktivitas |
| F4 | What I Can Do | Must | Skills dan Tools |
| F5 | Achievement | Must | Galeri kartu (gambar, nama, tahun, lembaga, deskripsi) bergeser kanan ke kiri |
| F6 | Contact | Must | LinkedIn, Download CV, Instagram, Email, Telepon |
| F7 | Efek Parallax | Must | Layer bergerak dengan kecepatan berbeda saat scroll |
| F8 | Animasi Reveal | Should | Fade/slide-in saat section masuk viewport |
| F9 | Modal Detail Achievement | Could | Foto besar dan deskripsi lengkap |
| F10 | Back-to-top button | Could | Tombol kembali ke atas |

### 5.2 Detail Per Fitur

#### F1: Navigation Bar
- Menu: Home, About, What I Can Do, Achievement, Contact.
- Hover: garis bawah beranimasi (`scaleX`) dan perubahan warna halus.
- Klik menu memicu smooth scroll; menu aktif ter-highlight sesuai posisi scroll.
- Setelah scroll lebih dari 50 px, navbar mendapat background blur tipis dan bayangan halus.
- Mobile (< 768 px): hamburger menu dengan panel slide.

#### F3: About Me
- Foto profil dan teks deskripsi (80–150 kata).
- Blok identitas: Nama, NIM, Program Studi.
- Pendidikan dalam bentuk timeline (jenjang, institusi, tahun).
- Aktivitas dalam bentuk kartu (nama kegiatan, peran, periode, keterangan singkat).

#### F4: What I Can Do
- **Skills:** chip atau bar tipis, dikelompokkan (Technical dan Soft Skills).
- **Tools:** grid ikon + nama (misal Figma, VS Code, Excel).
- Hover pada kartu: naik tipis dan bayangan lembut.

#### F5: Achievement
- Setiap kartu: foto, nama pencapaian, tahun, lembaga, deskripsi singkat (maks. 2 kalimat).
- Track horizontal bergerak otomatis dari kanan ke kiri tanpa henti (loop).
- Berhenti saat hover (desktop) atau disentuh (mobile); swipe manual didukung.
- Lazy loading gambar; menghormati `prefers-reduced-motion`.

#### F6: Contact

| Kontak | Perilaku |
|---|---|
| LinkedIn | Buka profil di tab baru |
| Download CV | Mengunduh file PDF |
| Instagram | Buka profil di tab baru |
| Email | Tautan `mailto:` |
| Nomor telepon | Tautan `tel:` (opsional tautan WhatsApp) |

#### F7: Parallax
- Hero: layer dekoratif/background bergerak sekitar 0,3× kecepatan scroll.
- Minimal satu section lain (misal pemisah About dan What I Can Do) memakai layer parallax.
- Dikurangi atau dinonaktifkan pada perangkat low-end dan saat `prefers-reduced-motion`.

---

## 6. User Flow

### 6.1 Alur Utama (Pengunjung)

```
[Buka website]
      |
      v
[Hero: lihat nama + headline]
      |
      +-- Klik CTA "Hubungi Saya" ----------------------------> [Contact]
      +-- Klik CTA "Lihat Achievement" -----------------------> [Achievement]
      v
[About Me] --> [What I Can Do] --> [Achievement (galeri bergeser)] --> [Contact]
                                                                          |
          +-------------+--------------+--------------+-----------------+
          v             v              v              v                 v
      LinkedIn     Download CV     Instagram        Email            Telepon
     (tab baru)    (unduh PDF)     (tab baru)      (mailto)           (tel)
```

### 6.2 Alur Navigasi

```
[Klik menu navbar] --> [Smooth scroll ke section] --> [Menu aktif ter-highlight]
```

### 6.3 Alur Achievement

```
[Section Achievement terlihat]
      |
      v
[Kartu bergeser kanan --> kiri otomatis]
      |
      +-- Hover / sentuh --> [Animasi berhenti]
      |                          +-- Klik kartu --> [Modal detail] --> [Tutup] --> [Animasi lanjut]
      +-- Swipe (mobile) --> [Geser manual]
```

### 6.4 Alur Per Persona

| Persona | Alur |
|---|---|
| Rekruiter | Hero, About, What I Can Do, Contact, lalu Download CV |
| Dosen | Hero, About (prodi, aktivitas), Achievement |
| Klien | Hero, What I Can Do, Contact, lalu Email/Telepon |

### 6.5 Edge Case
- Gambar gagal dimuat: tampilkan placeholder netral dengan teks alternatif.
- File CV tidak ditemukan: tampilkan pesan error singkat atau tautan cadangan.
- JavaScript lambat dimuat: tampilkan skeleton/loading ringan.

---

## 7. UI/UX

### 7.1 Prinsip Desain
- **Minimalist:** ruang kosong lega, satu fokus per section.
- **Elegant:** palet terbatas, tipografi serif-sans yang serasi, animasi halus.
- **Konsisten:** komponen dan jarak seragam di seluruh halaman.
- **Mudah dipindai:** hierarki jelas, teks ringkas.

### 7.2 Palet Warna (Rekomendasi)

| Peran | Kode |
|---|---|
| Background utama | `#FAFAF8` |
| Background alternatif | `#F2F0EB` |
| Teks utama | `#1A1A1A` |
| Teks sekunder | `#6B6B6B` |
| Aksen (emas lembut) | `#B08D57` |
| Border | `#E6E4DF` |

### 7.3 Tipografi

| Elemen | Font | Ukuran |
|---|---|---|
| Heading | Playfair Display / Cormorant Garamond | H1 48–64 px, H2 32–40 px |
| Body | Inter / Poppins | 16–18 px, line-height 1,6 |
| Label kecil | Inter | 12–14 px, letter-spacing 0,05 em |

### 7.4 Layout dan Grid
- Container maksimum 1200 px; grid 12 kolom (desktop), 8 (tablet), 4 (mobile).
- Padding samping: 24 px (mobile), 48 px (tablet), 80 px (desktop).
- Jarak antar section: 96–140 px (desktop), 64–80 px (mobile).

### 7.5 Wireframe Per Section

```
NAVBAR   [Nama/Logo]               Home  About  What I Can Do  Achievement  Contact
-----------------------------------------------------------------------------------
HERO     +-----------------------------------------------------------------------+
         |  Halo, saya                                          (layer parallax) |
         |  NAMA LENGKAP                                                         |
         |  Headline singkat                                                     |
         |  [Lihat Achievement]   [Hubungi Saya]                                 |
         +-----------------------------------------------------------------------+
ABOUT    +--------+  Deskripsi singkat ...
         |  Foto  |  Nama : ...    NIM : ...    Prodi : ...
         +--------+  Pendidikan (timeline)       Aktivitas (kartu)
WHAT I CAN DO
         Skills : [chip] [chip] [chip] [chip]
         Tools  : [ikon] [ikon] [ikon] [ikon] [ikon]
ACHIEVEMENT
   <--   +-------+ +-------+ +-------+ +-------+ +-------+   <--  (bergeser)
         | Foto  | | Foto  | | Foto  | | Foto  | | Foto  |
         | Nama  | | Nama  | | Nama  | | Nama  | | Nama  |
         | Tahun | | Tahun | | Tahun | | Tahun | | Tahun |
         |Lembaga| |Lembaga| |Lembaga| |Lembaga| |Lembaga|
         +-------+ +-------+ +-------+ +-------+ +-------+
CONTACT  LinkedIn  |  Download CV  |  Instagram  |  Email  |  Telepon
         (c) 2026 Nama Lengkap
```

### 7.6 Interaksi dan Animasi

| Elemen | Efek | Durasi |
|---|---|---|
| Menu navbar hover | Underline bergerak + ubah warna | 250 ms |
| Tombol | Naik 2 px + bayangan halus | 200 ms |
| Kartu skill/tools | Naik tipis + bayangan | 250 ms |
| Reveal section | Fade + translateY 24 px | 600 ms |
| Parallax | Translate Y berdasarkan scroll | Mengikuti scroll |
| Galeri achievement | Translate X linear, loop | 30–40 detik/siklus |
| Ikon kontak hover | Warna aksen + skala 1,05 | 200 ms |

### 7.7 Responsif

| Breakpoint | Perilaku |
|---|---|
| < 768 px | Hamburger menu, 1 kolom, kartu galeri lebih kecil, parallax disederhanakan |
| 768–1023 px | 2 kolom di About dan Skills |
| ≥ 1024 px | Layout penuh, parallax aktif |

### 7.8 Aksesibilitas
- Kontras teks minimal WCAG AA (4,5:1).
- Navigasi keyboard dengan fokus terlihat jelas.
- Atribut `alt` pada semua gambar; label ARIA pada ikon kontak.
- Animasi dikurangi saat `prefers-reduced-motion`.
- Tag semantik: `header`, `nav`, `main`, `section`, `footer`.

---

## 8. Database Overview

Untuk MVP, website bersifat **statis** sehingga **tidak membutuhkan database server**. Data disimpan di file lokal (JSON/JS) dan dibundel bersama aplikasi.

### 8.1 Opsi Penyimpanan Data

| Opsi | Cocok untuk | Kelebihan | Kekurangan |
|---|---|---|---|
| **A. File data statis (JSON/JS)** (direkomendasikan untuk MVP) | Konten jarang berubah | Gratis, cepat, sederhana | Ubah konten = edit kode dan deploy ulang |
| B. Headless CMS (Sanity/Contentful) | Konten sering diubah | Edit lewat dashboard | Setup tambahan |
| C. BaaS (Firebase/Supabase) | Fase 2 (form kontak, admin) | Realtime, autentikasi | Lebih kompleks |

### 8.2 Model Data (Entity Overview)

**Profile**

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Primary key |
| name | string | Nama lengkap |
| nim | string | Nomor Induk Mahasiswa |
| major | string | Program studi |
| headline | string | Kalimat singkat di Hero |
| description | text | Deskripsi diri |
| photo | string | Path/URL foto profil |

**Education**

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Primary key |
| level | string | Jenjang (SMA, S1, dll.) |
| institution | string | Nama institusi |
| startYear | number | Tahun mulai |
| endYear | number/string | Tahun selesai atau "Sekarang" |

**Activity**

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Primary key |
| title | string | Nama aktivitas/organisasi |
| role | string | Peran |
| period | string | Periode |
| description | string | Keterangan singkat |

**Skill**

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Primary key |
| name | string | Nama skill |
| category | enum | `technical` / `soft` |
| level | number (opsional) | 0–100 |

**Tool**

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Primary key |
| name | string | Nama tools |
| icon | string | Path/ikon |

**Achievement**

| Field | Tipe | Keterangan |
|---|---|---|
| id | number | Primary key |
| title | string | Nama pencapaian |
| year | number | Tahun |
| organization | string | Lembaga penyelenggara |
| description | string | Deskripsi singkat |
| image | string | Path/URL foto |

**Contact**

| Field | Tipe | Keterangan |
|---|---|---|
| linkedin | string | URL LinkedIn |
| instagram | string | URL Instagram |
| email | string | Alamat email |
| phone | string | Nomor telepon |
| cvFile | string | Path file CV (PDF) |

### 8.3 Relasi

```
Profile 1 ---- * Education
Profile 1 ---- * Activity
Profile 1 ---- * Skill
Profile 1 ---- * Tool
Profile 1 ---- * Achievement
Profile 1 ---- 1 Contact
```

### 8.4 Contoh Struktur Data

```js
// src/data/achievements.js
export const achievements = [
  {
    id: 1,
    title: "Juara 1 Lomba ...",
    year: 2025,
    organization: "Nama Lembaga",
    description: "Deskripsi singkat pencapaian.",
    image: "/images/achievements/ach-1.webp",
  },
];
```

### 8.5 Rencana Fase 2 (Jika Memakai Backend)
- Tabel tambahan `messages` (name, email, message, created_at) untuk form kontak.
- Autentikasi admin untuk mengelola konten.
- Penyimpanan gambar di cloud storage (Supabase Storage / Cloudinary).

---

## 9. Technical Requirements

### 9.1 Tech Stack

| Kebutuhan | Teknologi |
|---|---|
| Framework | React.js 18+ |
| Build tool | Vite |
| Bahasa | JavaScript (ES6+) atau TypeScript |
| Styling | Tailwind CSS (atau CSS Modules) |
| Animasi dan parallax | Framer Motion (`useScroll`, `useTransform`) |
| Galeri bergeser | CSS keyframes marquee atau Swiper.js |
| Ikon | React Icons / Lucide React |
| Scroll spy | IntersectionObserver / `react-scroll` |
| Linting dan format | ESLint, Prettier |
| Version control | Git + GitHub |
| Hosting | Vercel / Netlify / GitHub Pages |
| Analytics (opsional) | Google Analytics / Plausible |

### 9.2 Arsitektur Aplikasi
- **Pola:** Single Page Application (SPA), komponen fungsional dengan Hooks.
- **State:** lokal (`useState`, `useEffect`); tidak perlu state manager global.
- **Rendering:** Client-Side Rendering. Pertimbangkan pre-render/SSG bila SEO menjadi prioritas tinggi.

### 9.3 Struktur Folder

```
portfolio/
+-- public/
|   +-- cv/CV_NamaAnda.pdf
|   +-- images/
|   +-- favicon.ico
+-- src/
|   +-- components/
|   |   +-- Navbar.jsx
|   |   +-- Hero.jsx
|   |   +-- About.jsx
|   |   +-- Skills.jsx
|   |   +-- Achievement.jsx
|   |   +-- AchievementCard.jsx
|   |   +-- Contact.jsx
|   |   +-- ParallaxLayer.jsx
|   +-- data/
|   |   +-- profile.js
|   |   +-- skills.js
|   |   +-- achievements.js
|   +-- hooks/
|   |   +-- useActiveSection.js
|   +-- styles/
|   +-- App.jsx
|   +-- main.jsx
+-- index.html
+-- package.json
```

### 9.4 Daftar Komponen

| Komponen | Tanggung Jawab |
|---|---|
| `Navbar` | Menu, hover, scroll spy, hamburger |
| `Hero` | Pembuka + parallax |
| `About` | Foto, deskripsi, identitas, pendidikan, aktivitas |
| `Skills` | Skills dan Tools |
| `Achievement` | Track galeri bergeser |
| `AchievementCard` | Kartu individual |
| `Contact` | Tautan kontak + CV |
| `ParallaxLayer` | Pembungkus layer parallax yang dapat dipakai ulang |

### 9.5 Persyaratan Performa
- Bundle JS awal < 200 KB (gzip) bila memungkinkan.
- Gambar WebP/AVIF, maks. sekitar 200 KB per gambar, lazy loading, atribut `width`/`height` untuk mencegah layout shift.
- Animasi hanya memakai properti `transform` dan `opacity` (ramah GPU).
- Font di-preload dan memakai `font-display: swap`.

### 9.6 Keamanan
- Link eksternal memakai `rel="noopener noreferrer"`.
- HTTPS (otomatis dari Vercel/Netlify).
- Pertimbangkan privasi: apakah NIM dan nomor telepon ditampilkan penuh atau sebagian.

### 9.7 SEO
- `<title>` dan meta description unik, Open Graph dan Twitter Card, favicon.
- Heading berjenjang (satu `h1`), `sitemap.xml` dan `robots.txt`.

### 9.8 Kompatibilitas
Chrome, Edge, Firefox, dan Safari (2 versi terakhir), serta Chrome Android dan Safari iOS.

### 9.9 Deployment dan CI/CD
1. Push kode ke GitHub.
2. Hubungkan repositori ke Vercel/Netlify.
3. Build otomatis (`npm run build`) pada setiap push ke branch `main`.
4. Opsional: domain kustom (misal `namaanda.com`).

### 9.10 Pengujian

| Jenis | Alat |
|---|---|
| Manual lintas browser/perangkat | Chrome DevTools, perangkat nyata |
| Performa dan aksesibilitas | Lighthouse, axe DevTools |
| Responsif | Mode device DevTools |
| Keyboard dan reduced motion | Pengujian manual |

---

## 10. Konten yang Perlu Disiapkan

| Konten | Spesifikasi |
|---|---|
| Foto profil | Rasio 4:5 atau 1:1, ≥ 800 px, latar bersih |
| Deskripsi diri | 80–150 kata |
| Nama, NIM, prodi | Data resmi |
| Pendidikan | Jenjang, institusi, tahun |
| Aktivitas | Nama, peran, periode |
| Skills dan Tools | Daftar + ikon |
| Achievement | Foto, nama, tahun, lembaga, deskripsi |
| CV | PDF, ukuran < 2 MB |
| Link kontak | LinkedIn, Instagram, email, telepon |

---

## 11. Timeline (Estimasi ± 4 Minggu)

| Minggu | Aktivitas | Output |
|---|---|---|
| 1 | Kumpulkan konten, moodboard, wireframe, desain UI di Figma | Desain disetujui |
| 2 | Setup Vite + React, Navbar, Hero, About, file data | Halaman statis dasar |
| 3 | Skills, Achievement (galeri), Contact, parallax, animasi | Fitur lengkap |
| 4 | Responsif, optimasi, aksesibilitas, testing, deploy | Website live |

---

## 12. Kriteria Penerimaan

- [ ] Navbar sticky, hover berfungsi, scroll spy akurat.
- [ ] About memuat deskripsi, nama, NIM, prodi, pendidikan, aktivitas.
- [ ] What I Can Do memuat skills dan tools.
- [ ] Achievement memuat foto, nama, tahun, lembaga, deskripsi, dan bergeser kanan ke kiri.
- [ ] Contact memuat LinkedIn, Download CV, Instagram, Email, Telepon dan semuanya berfungsi.
- [ ] Parallax berjalan mulus tanpa patah-patah.
- [ ] Tampilan benar di mobile, tablet, dan desktop.
- [ ] Lighthouse ≥ 90 untuk Performance, Accessibility, SEO.
- [ ] Tidak ada error di console.

---

## 13. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Parallax berat di perangkat lama | Scroll tersendat | Batasi layer, pakai `transform`, nonaktifkan di low-end |
| Gambar terlalu besar | Loading lambat | WebP, kompresi, lazy load |
| Animasi mengganggu pengguna tertentu | Aksesibilitas buruk | Dukung `prefers-reduced-motion` |
| Konten terlambat siap | Jadwal mundur | Mulai dengan placeholder |
| Data pribadi terlalu terbuka | Privasi | Tampilkan data seperlunya |

---

## 14. Pengembangan Lanjutan (Fase 2)

Dark mode, toggle bahasa ID/EN, section Projects, form kontak (EmailJS/Formspree), analytics, dan CMS.
