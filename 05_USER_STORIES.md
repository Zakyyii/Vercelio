# User Stories
## Website Portofolio Pribadi (React.js)

Dokumen ini memecah kebutuhan SRS menjadi tugas kecil yang dapat dikerjakan **satu per satu** (cocok untuk satu prompt vibe coding per story).

## 1. Persona

| Kode | Persona | Tujuan utama |
|---|---|---|
| **PG** | Pengunjung (rekruiter, dosen, klien, umum) | Menilai pemilik dengan cepat dan menghubunginya |
| **PM** | Pemilik portofolio | Tampil profesional dan mudah memperbarui konten |
| **DEV** | Pengembang | Spesifikasi jelas, kode mudah dirawat |

## 2. Ringkasan Backlog

Estimasi poin memakai skala Fibonacci (1, 2, 3, 5, 8). Prioritas MoSCoW.

| Epic | ID | Judul | Prio | Poin | Sprint |
|---|---|---|:-:|:-:|:-:|
| EP-09 Setup | US-901 | Inisialisasi proyek dan struktur folder | M | 3 | 0 |
| EP-09 Setup | US-902 | File data konten | M | 2 | 0 |
| EP-01 Navigasi | US-101 | Navbar sticky dengan menu utama | M | 3 | 1 |
| EP-01 Navigasi | US-102 | Efek hover menu | M | 1 | 1 |
| EP-01 Navigasi | US-103 | Smooth scroll dan scroll spy | M | 3 | 1 |
| EP-01 Navigasi | US-104 | Hamburger menu mobile | M | 3 | 1 |
| EP-02 Hero | US-201 | Hero dengan CTA | M | 3 | 1 |
| EP-03 About | US-301 | Foto dan deskripsi diri | M | 2 | 1 |
| EP-03 About | US-302 | Identitas: nama, NIM, prodi | M | 1 | 1 |
| EP-03 About | US-303 | Timeline pendidikan | M | 2 | 1 |
| EP-03 About | US-304 | Kartu aktivitas | M | 2 | 1 |
| EP-04 Skills | US-401 | Daftar skills | M | 3 | 2 |
| EP-04 Skills | US-402 | Grid tools | M | 2 | 2 |
| EP-05 Achievement | US-501 | Kartu achievement lengkap | M | 3 | 2 |
| EP-05 Achievement | US-502 | Marquee kanan ke kiri | M | 5 | 2 |
| EP-05 Achievement | US-503 | Pause saat hover/sentuh | S | 2 | 2 |
| EP-05 Achievement | US-504 | Geser manual di layar sentuh | S | 2 | 2 |
| EP-05 Achievement | US-505 | Lazy load dan placeholder | M | 2 | 2 |
| EP-05 Achievement | US-506 | Modal detail achievement | C | 3 | 3 |
| EP-06 Contact | US-601 | LinkedIn dan Instagram | M | 1 | 2 |
| EP-06 Contact | US-602 | Download CV | M | 1 | 2 |
| EP-06 Contact | US-603 | Email dan telepon | M | 1 | 2 |
| EP-06 Contact | US-604 | Hover kontak dan footer | S | 2 | 2 |
| EP-07 Efek | US-701 | Parallax | M | 5 | 3 |
| EP-07 Efek | US-702 | Reveal animation | S | 2 | 3 |
| EP-07 Efek | US-703 | Dukungan reduced motion | M | 2 | 3 |
| EP-08 Kualitas | US-801 | Optimasi performa | M | 3 | 3 |
| EP-08 Kualitas | US-802 | Aksesibilitas | M | 3 | 3 |
| EP-08 Kualitas | US-803 | SEO dasar | S | 2 | 3 |
| EP-08 Kualitas | US-804 | Responsif dan lintas browser | M | 3 | 3 |
| EP-09 Rilis | US-903 | Deploy ke hosting | M | 2 | 3 |
| EP-09 Rilis | US-904 | README proyek | S | 1 | 3 |

**Total:** 75 poin.

## 3. Definition of Ready dan Definition of Done

**Definition of Ready**
- [ ] Story punya acceptance criteria dan referensi FR.
- [ ] Data/konten yang dibutuhkan sudah tersedia (atau placeholder disepakati).
- [ ] Dependensi story sebelumnya selesai.

**Definition of Done**
- [ ] Seluruh acceptance criteria lolos.
- [ ] Berjalan tanpa error di console dan `npm run lint` bersih.
- [ ] Teruji di 360, 768, dan 1440 px.
- [ ] Dapat dioperasikan dengan keyboard; gambar ber-`alt`.
- [ ] Konten dibaca dari `src/data/`, tidak hardcode.
- [ ] Animasi hanya `transform`/`opacity` dan menghormati reduced motion.
- [ ] Di-commit dengan pesan jelas (`feat(US-xxx): ...`).

---

## EP-09: Setup dan Rilis

### US-901: Inisialisasi proyek dan struktur folder
**Sebagai** DEV, **saya ingin** proyek React + Vite + Tailwind + Framer Motion yang sudah terstruktur, **agar** pengembangan berikutnya konsisten.
**Prio:** Must | **Poin:** 3 | **FR:** NFR-MNT-01 | **Bergantung:** -

```gherkin
Scenario: Proyek berjalan
  Given repositori baru
  When saya menjalankan npm install lalu npm run dev
  Then halaman kosong tampil tanpa error di console

Scenario: Token desain tersedia
  Given tailwind.config.js
  Then warna bg, bgAlt, ink, muted, accent, line dan font serif/sans terdefinisi sesuai SRS 5.2

Scenario: Struktur folder
  Then folder components, data, hooks, styles, dan public/cv, public/images tersedia sesuai SRS 6.2
```

### US-902: File data konten
**Sebagai** PM, **saya ingin** semua konten ada di file data, **agar** mudah diperbarui tanpa menyentuh komponen.
**Prio:** Must | **Poin:** 2 | **FR:** FR-DATA-01, FR-DATA-02 | **Bergantung:** US-901

```gherkin
Scenario: File data lengkap
  Given folder src/data
  Then terdapat profile.js, skills.js, achievements.js, navigation.js dengan contoh data sesuai SRS 7.2

Scenario: Menambah achievement
  When saya menambah satu objek pada achievements.js
  Then kartu baru muncul tanpa mengubah komponen
```

### US-903: Deploy ke hosting
**Sebagai** PM, **saya ingin** website live di URL publik, **agar** dapat dibagikan.
**Prio:** Must | **Poin:** 2 | **FR:** NFR-SEC-02 | **Bergantung:** US-804

```gherkin
Scenario: Deploy otomatis
  Given repositori terhubung ke Vercel/Netlify
  When saya push ke branch main
  Then build berjalan dan situs ter-update di URL publik via HTTPS
```

### US-904: README proyek
**Sebagai** DEV, **saya ingin** README berisi cara menjalankan dan memperbarui konten, **agar** mudah dilanjutkan kelak.
**Prio:** Should | **Poin:** 1 | **Bergantung:** US-902

```gherkin
Scenario: README memadai
  Then README memuat: deskripsi, tech stack, perintah install/dev/build, cara mengubah data, cara deploy
```

---

## EP-01: Navigasi

### US-101: Navbar sticky dengan menu utama
**Sebagai** PG, **saya ingin** navbar yang selalu terlihat di atas, **agar** saya dapat berpindah section kapan saja.
**Prio:** Must | **Poin:** 3 | **FR:** FR-NAV-01, 02, 07 | **Bergantung:** US-901

```gherkin
Scenario: Navbar tetap terlihat
  Given halaman dimuat
  When saya menggulir ke bawah
  Then navbar tetap di bagian atas layar

Scenario: Menu lengkap
  Then menu Home, About, What I Can Do, Achievement, Contact tampil

Scenario: Gaya setelah scroll
  When scrollY lebih dari 50 px
  Then navbar memiliki background blur dan bayangan halus
```

### US-102: Efek hover menu
**Sebagai** PG, **saya ingin** umpan balik visual saat menyorot menu, **agar** terasa interaktif dan elegan.
**Prio:** Must | **Poin:** 1 | **FR:** FR-NAV-03 | **Bergantung:** US-101

```gherkin
Scenario: Hover menu
  When kursor berada di atas item menu
  Then garis bawah muncul dengan animasi scaleX dan warna berubah ke aksen dalam 250 ms
```

### US-103: Smooth scroll dan scroll spy
**Sebagai** PG, **saya ingin** menu membawa saya ke section dan menandai posisi saya, **agar** tidak tersesat.
**Prio:** Must | **Poin:** 3 | **FR:** FR-NAV-04, 05 | **Bergantung:** US-101

```gherkin
Scenario: Klik menu
  When saya klik "Achievement"
  Then halaman menggulir halus ke section Achievement dengan offset tinggi navbar

Scenario: Menu aktif
  When section About berada di viewport
  Then menu About ditandai aktif
```
*Petunjuk teknis:* hook `useActiveSection` memakai IntersectionObserver (lihat UML 5.2).

### US-104: Hamburger menu mobile
**Sebagai** PG di ponsel, **saya ingin** menu ringkas, **agar** layar tidak penuh.
**Prio:** Must | **Poin:** 3 | **FR:** FR-NAV-06 | **Bergantung:** US-101

```gherkin
Scenario: Tampilan mobile
  Given lebar layar kurang dari 768 px
  Then menu horizontal disembunyikan dan ikon hamburger tampil

Scenario: Buka dan tutup
  When saya ketuk hamburger
  Then panel menu terbuka
  When saya memilih satu menu
  Then panel menutup dan halaman menggulir ke section tujuan

Scenario: Esc
  Given panel terbuka
  When saya menekan Esc
  Then panel menutup
```
*Petunjuk teknis:* ikuti state diagram UML 7.1; tombol punya `aria-expanded`.

---

## EP-02: Hero

### US-201: Hero dengan CTA
**Sebagai** PG, **saya ingin** kesan pertama yang jelas tentang siapa pemilik, **agar** saya tahu apakah ingin membaca lebih lanjut.
**Prio:** Must | **Poin:** 3 | **FR:** FR-HERO-01, 02 | **Bergantung:** US-902

```gherkin
Scenario: Konten Hero
  Then nama, headline, dan dua tombol CTA tampil dari src/data/profile.js

Scenario: CTA
  When saya klik "Lihat Achievement"
  Then halaman menggulir ke Achievement
  When saya klik "Hubungi Saya"
  Then halaman menggulir ke Contact
```

---

## EP-03: About Me

### US-301: Foto dan deskripsi diri
**Sebagai** PG, **saya ingin** membaca deskripsi singkat dan melihat foto pemilik, **agar** mengenalnya secara personal.
**Prio:** Must | **Poin:** 2 | **FR:** FR-ABT-01 | **Bergantung:** US-902

```gherkin
Scenario: Tampil
  Then foto profil (alt terisi) dan deskripsi dari data tampil berdampingan di desktop dan bertumpuk di mobile
```

### US-302: Identitas nama, NIM, prodi
**Sebagai** PG, **saya ingin** melihat identitas akademik, **agar** dapat memverifikasi latar belakangnya.
**Prio:** Must | **Poin:** 1 | **FR:** FR-ABT-02, 05 | **Bergantung:** US-301

```gherkin
Scenario: Identitas tampil
  Then Nama, NIM, dan Program Studi tampil sebagai pasangan label-nilai

Scenario: NIM disamarkan
  Given maskNim bernilai true
  Then NIM tampil sebagian, misalnya 2210****00
```

### US-303: Timeline pendidikan
**Sebagai** PG, **saya ingin** riwayat pendidikan berurutan, **agar** memahami jenjangnya.
**Prio:** Must | **Poin:** 2 | **FR:** FR-ABT-03 | **Bergantung:** US-301

```gherkin
Scenario: Timeline
  Then setiap item menampilkan jenjang, institusi, dan rentang tahun, dengan yang terbaru di atas

Scenario: Masih berjalan
  Given endYear bernilai "Sekarang"
  Then teks "Sekarang" tampil sebagai akhir rentang
```

### US-304: Kartu aktivitas
**Sebagai** PG, **saya ingin** melihat organisasi dan kegiatan, **agar** menilai pengalaman non-akademik.
**Prio:** Must | **Poin:** 2 | **FR:** FR-ABT-04 | **Bergantung:** US-301

```gherkin
Scenario: Kartu aktivitas
  Then tiap aktivitas tampil sebagai kartu berisi judul, peran, periode, dan keterangan

Scenario: Responsif
  Then kartu tersusun 2 kolom di tablet/desktop dan 1 kolom di mobile
```

---

## EP-04: What I Can Do

### US-401: Daftar skills
**Sebagai** PG, **saya ingin** melihat keahlian terkelompok, **agar** cepat menilai kemampuan.
**Prio:** Must | **Poin:** 3 | **FR:** FR-SKL-01, 03 | **Bergantung:** US-902

```gherkin
Scenario: Kelompok skill
  Then skills tampil dalam dua kelompok: Technical dan Soft Skills sesuai field category

Scenario: Hover
  When kursor di atas kartu skill
  Then kartu naik 4 px dan mendapat bayangan lembut
```

### US-402: Grid tools
**Sebagai** PG, **saya ingin** melihat tools yang dikuasai, **agar** tahu teknologi yang dipakai.
**Prio:** Must | **Poin:** 2 | **FR:** FR-SKL-02 | **Bergantung:** US-401

```gherkin
Scenario: Grid tools
  Then setiap tool tampil dengan ikon dan nama dari skills.js dalam grid responsif
```

---

## EP-05: Achievement

### US-501: Kartu achievement lengkap
**Sebagai** PG, **saya ingin** tiap pencapaian memuat bukti dan keterangan, **agar** saya yakin akan kredibilitasnya.
**Prio:** Must | **Poin:** 3 | **FR:** FR-ACH-01 | **Bergantung:** US-902

```gherkin
Scenario: Isi kartu
  Then setiap kartu menampilkan foto, nama pencapaian, tahun, lembaga, dan deskripsi singkat
```

### US-502: Marquee kanan ke kiri
**Sebagai** PG, **saya ingin** galeri yang bergeser otomatis dari kanan ke kiri, **agar** pengalaman terasa dinamis.
**Prio:** Must | **Poin:** 5 | **FR:** FR-ACH-02 | **Bergantung:** US-501

```gherkin
Scenario: Pergerakan
  Given section Achievement terlihat
  Then kartu bergerak dari kanan ke kiri terus-menerus tanpa jeda atau lompatan terlihat

Scenario: Loop mulus
  Then daftar kartu diduplikasi dua kali dan animasi translateX 0 ke -50 persen berdurasi 30-40 detik
```
*Petunjuk teknis:* lihat SRS 6.5 untuk CSS marquee.

### US-503: Pause saat hover/sentuh
**Sebagai** PG, **saya ingin** galeri berhenti saat saya menyorotnya, **agar** dapat membaca kartu.
**Prio:** Should | **Poin:** 2 | **FR:** FR-ACH-03 | **Bergantung:** US-502

```gherkin
Scenario: Hover
  When kursor berada di atas galeri
  Then animasi berhenti
  When kursor keluar
  Then animasi berlanjut dari posisi terakhir

Scenario: Sentuhan
  When saya menyentuh galeri di perangkat sentuh
  Then animasi berhenti selama sentuhan berlangsung
```

### US-504: Geser manual di layar sentuh
**Sebagai** PG di ponsel, **saya ingin** menggeser galeri dengan jari, **agar** mengontrol apa yang saya lihat.
**Prio:** Should | **Poin:** 2 | **FR:** FR-ACH-04 | **Bergantung:** US-502

```gherkin
Scenario: Swipe
  Given perangkat layar sentuh
  When saya menggeser galeri ke kiri atau kanan
  Then track bergeser mengikuti jari dan lanjut berjalan setelah dilepas
```

### US-505: Lazy load dan placeholder gambar
**Sebagai** PG, **saya ingin** halaman cepat dan tidak rusak bila gambar bermasalah, **agar** pengalaman tetap nyaman.
**Prio:** Must | **Poin:** 2 | **FR:** FR-ACH-05, 07 | **Bergantung:** US-501

```gherkin
Scenario: Lazy load
  Then gambar achievement memakai loading="lazy" serta atribut width dan height

Scenario: Gambar gagal
  Given path gambar salah
  Then placeholder netral dengan ikon tampil dan tata letak tidak bergeser
```

### US-506: Modal detail achievement
**Sebagai** PG, **saya ingin** melihat foto lebih besar dan deskripsi lengkap, **agar** dapat menilai lebih detail.
**Prio:** Could | **Poin:** 3 | **FR:** FR-ACH-06 | **Bergantung:** US-501

```gherkin
Scenario: Buka modal
  When saya klik sebuah kartu
  Then modal terbuka berisi foto besar, nama, tahun, lembaga, deskripsi
  And galeri berhenti bergerak

Scenario: Tutup modal
  When saya klik tombol tutup, klik latar, atau menekan Esc
  Then modal menutup dan galeri berlanjut

Scenario: Fokus
  Then fokus keyboard terkunci di dalam modal selama terbuka dan kembali ke kartu setelah ditutup
```
*Petunjuk teknis:* ikuti sequence UML 5.4.

---

## EP-06: Contact

### US-601: LinkedIn dan Instagram
**Sebagai** PG, **saya ingin** membuka profil sosial pemilik, **agar** dapat melihat jejak profesionalnya.
**Prio:** Must | **Poin:** 1 | **FR:** FR-CNT-01, 02, NFR-SEC-01 | **Bergantung:** US-902

```gherkin
Scenario: Tautan sosial
  When saya klik ikon LinkedIn atau Instagram
  Then profil terbuka di tab baru dengan rel="noopener noreferrer"
```

### US-602: Download CV
**Sebagai** PG, **saya ingin** mengunduh CV, **agar** dapat menyimpannya untuk keperluan seleksi.
**Prio:** Must | **Poin:** 1 | **FR:** FR-CNT-03 | **Bergantung:** US-902

```gherkin
Scenario: Unduh
  When saya klik "Download CV"
  Then berkas CV_NamaAnda.pdf terunduh
```

### US-603: Email dan telepon
**Sebagai** PG, **saya ingin** menghubungi langsung, **agar** dapat bertanya atau menawarkan peluang.
**Prio:** Must | **Poin:** 1 | **FR:** FR-CNT-04, 05 | **Bergantung:** US-902

```gherkin
Scenario: Email
  When saya klik email
  Then aplikasi email terbuka melalui mailto: dengan alamat pemilik

Scenario: Telepon
  When saya klik nomor telepon di ponsel
  Then aplikasi telepon terbuka melalui tel:
```

### US-604: Hover kontak dan footer
**Sebagai** PG, **saya ingin** tampilan kontak yang rapi dan interaktif, **agar** terasa profesional.
**Prio:** Should | **Poin:** 2 | **FR:** FR-CNT-06, 07 | **Bergantung:** US-601

```gherkin
Scenario: Hover ikon
  When kursor di atas ikon kontak
  Then warna berubah ke aksen dan skala menjadi 1,05 dalam 200 ms

Scenario: Footer
  Then teks hak cipta dengan tahun berjalan dan nama pemilik tampil di bagian paling bawah
```

---

## EP-07: Efek Visual

### US-701: Parallax
**Sebagai** PG, **saya ingin** efek kedalaman saat menggulir, **agar** pengalaman terasa premium.
**Prio:** Must | **Poin:** 5 | **FR:** FR-FX-01, 02 | **Bergantung:** US-201

```gherkin
Scenario: Parallax Hero
  When saya menggulir di area Hero
  Then minimal dua layer bergerak dengan kecepatan berbeda (sekitar 0,2x dan 0,4x) dari konten

Scenario: Performa
  Then efek hanya memakai transform dan berjalan mulus di perangkat menengah

Scenario: Section lain
  Then minimal satu section selain Hero memiliki elemen dekoratif atau gambar berparallax
```
*Petunjuk teknis:* komponen `ParallaxLayer` (SRS 6.3, 6.5).

### US-702: Reveal animation
**Sebagai** PG, **saya ingin** konten muncul halus saat digulir, **agar** alurnya enak diikuti.
**Prio:** Should | **Poin:** 2 | **FR:** FR-FX-03 | **Bergantung:** US-301

```gherkin
Scenario: Reveal
  When sebuah section pertama kali masuk viewport
  Then konten fade-in dan bergeser naik 24 px dalam 600 ms, hanya sekali
```

### US-703: Dukungan reduced motion
**Sebagai** PG yang sensitif gerakan, **saya ingin** animasi dikurangi, **agar** nyaman dan aman.
**Prio:** Must | **Poin:** 2 | **FR:** FR-FX-04, NFR-ACC-03 | **Bergantung:** US-502, US-701, US-702

```gherkin
Scenario: Reduced motion aktif
  Given pengaturan OS prefers-reduced-motion: reduce
  Then parallax dan reveal nonaktif
  And marquee tidak bergerak otomatis dan track dapat digulir horizontal secara manual
```

---

## EP-08: Kualitas

### US-801: Optimasi performa
**Sebagai** PG, **saya ingin** halaman cepat dimuat, **agar** tidak meninggalkan situs.
**Prio:** Must | **Poin:** 3 | **FR:** NFR-PERF-01–04 | **Bergantung:** semua fitur

```gherkin
Scenario: Skor Lighthouse
  When audit dijalankan pada build produksi
  Then Performance lebih dari atau sama dengan 90, LCP kurang dari 2,5 detik, CLS kurang dari 0,1

Scenario: Aset
  Then gambar berformat WebP maks. sekitar 200 KB, font memakai font-display: swap, bundle JS awal kurang dari 200 KB gzip
```

### US-802: Aksesibilitas
**Sebagai** PG pengguna teknologi bantu, **saya ingin** situs dapat diakses, **agar** semua orang dapat memakainya.
**Prio:** Must | **Poin:** 3 | **FR:** NFR-ACC-01, 02, NFR-USA-02 | **Bergantung:** semua fitur

```gherkin
Scenario: Keyboard
  When saya menekan Tab berulang kali
  Then semua kontrol dapat difokus dengan indikator fokus jelas

Scenario: Alt dan label
  Then semua gambar punya alt dan ikon tanpa teks punya aria-label

Scenario: Kontras
  Then rasio kontras teks minimal 4,5:1 dan skor Accessibility Lighthouse lebih dari atau sama dengan 90
```

### US-803: SEO dasar
**Sebagai** PM, **saya ingin** situs mudah ditemukan dan menarik saat dibagikan, **agar** jangkauannya luas.
**Prio:** Should | **Poin:** 2 | **FR:** NFR-SEO-01 | **Bergantung:** US-201

```gherkin
Scenario: Metadata
  Then title, meta description, Open Graph, Twitter Card, dan favicon terisi

Scenario: Struktur
  Then terdapat satu h1, heading berjenjang, robots.txt, dan sitemap.xml
```

### US-804: Responsif dan lintas browser
**Sebagai** PG, **saya ingin** tampilan benar di perangkat saya, **agar** pengalaman konsisten.
**Prio:** Must | **Poin:** 3 | **FR:** NFR-RES-01, NFR-CMP-01 | **Bergantung:** semua fitur

```gherkin
Scenario: Lebar layar
  When saya membuka situs di 360, 768, 1024, dan 1440 px
  Then tata letak benar dan tidak ada scroll horizontal pada body

Scenario: Browser
  Then situs berfungsi di Chrome, Edge, Firefox, Safari, Chrome Android, dan Safari iOS
```

---

## 4. Rencana Sprint (4 Minggu)

| Sprint | Fokus | Story | Poin |
|---|---|---|:-:|
| 0 (Minggu 1) | Setup dan data | US-901, 902 | 5 |
| 1 (Minggu 2) | Navbar, Hero, About | US-101–104, 201, 301–304 | 20 |
| 2 (Minggu 3) | Skills, Achievement, Contact | US-401, 402, 501–505, 601–604 | 24 |
| 3 (Minggu 4) | Efek, kualitas, rilis | US-506, 701–703, 801–804, 903, 904 | 26 |

## 5. Template Prompt per Story

```
Kerjakan US-xxx dari docs/05_USER_STORIES.md.
Baca juga bagian terkait di docs/02_SRS.md (FR yang disebut di story) dan diagram di docs/03_UML.md.
Syarat:
- Penuhi semua acceptance criteria.
- Konten harus dibaca dari src/data/.
- Jangan ubah file di luar cakupan story.
Setelah selesai, tampilkan: file yang dibuat/diubah, dan langkah menguji tiap scenario.
```

## 6. Matriks Ketertelusuran Ringkas

| Epic | BR (BRD) | FR/NFR (SRS) | Test (SRS 8) |
|---|---|---|---|
| EP-01 Navigasi | BR-05 | FR-NAV | TC-01–04, 15 |
| EP-02 Hero | BR-05, BR-06 | FR-HERO | TC-11 |
| EP-03 About | BR-01 | FR-ABT | TC-05 |
| EP-04 Skills | BR-02 | FR-SKL | TC-05 |
| EP-05 Achievement | BR-03, BR-06 | FR-ACH | TC-06–08 |
| EP-06 Contact | BR-04 | FR-CNT | TC-09, 10 |
| EP-07 Efek | BR-06 | FR-FX | TC-11, 12 |
| EP-08 Kualitas | BR-07, BR-08 | NFR-PERF, ACC, SEO, RES, CMP | TC-13–15 |
| EP-09 Setup dan Rilis | BR-09, BR-10 | FR-DATA, NFR-MNT, SEC | Review kode |
