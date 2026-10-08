# BRD: Business Requirements Document
## Website Portofolio Pribadi

| | |
|---|---|
| **Versi** | 1.0 |
| **Tanggal** | 6 Oktober 2026 |
| **Status** | Draft |
| **Dokumen terkait** | PRD, SRS, UML, BPMN, User Stories |

---

## 1. Ringkasan Eksekutif

Pemilik (mahasiswa) membutuhkan media presentasi diri online yang profesional, mudah dibagikan, dan berkesan. Saat ini informasi tentang profil, keahlian, dan pencapaian tersebar di CV, media sosial, dan sertifikat fisik/digital sehingga sulit dinilai secara cepat oleh pihak luar. Solusinya adalah **website portofolio single-page** yang menyatukan semua informasi tersebut dalam satu tautan dengan desain minimalist dan elegant.

---

## 2. Latar Belakang dan Permasalahan

| No | Masalah | Dampak |
|---|---|---|
| P1 | Informasi diri tersebar di banyak tempat | Rekruiter/dosen sulit menilai secara utuh |
| P2 | CV statis tidak menampilkan bukti visual pencapaian | Pencapaian kurang meyakinkan |
| P3 | Tidak ada satu tautan profesional untuk dibagikan | Kesan kurang profesional saat melamar |
| P4 | Template portofolio generik terlihat sama dengan orang lain | Sulit menonjol |

---

## 3. Tujuan Bisnis (SMART)

| ID | Tujuan | Ukuran | Target Waktu |
|---|---|---|---|
| BO-01 | Memiliki satu tautan portofolio profesional | Website live dan dapat diakses publik | 4 minggu sejak kickoff |
| BO-02 | Memudahkan pihak luar menghubungi pemilik | Kontak dan CV dapat diakses dalam maksimal 2 klik | Saat rilis |
| BO-03 | Menampilkan seluruh pencapaian secara visual | Minimal 3 pencapaian lengkap dengan foto dan keterangan | Saat rilis |
| BO-04 | Memberi kesan pertama yang kuat | Skor Lighthouse ≥ 90 dan desain minimalist elegant | Saat rilis |
| BO-05 | Biaya operasional minimal | Hosting gratis (Vercel/Netlify/GitHub Pages) | Berkelanjutan |

---

## 4. Ruang Lingkup Bisnis

### 4.1 Dalam Lingkup
- Profil diri: deskripsi, nama, NIM, program studi, pendidikan, aktivitas.
- Keahlian: skills dan tools.
- Pencapaian: gambar, nama, tahun, lembaga, deskripsi singkat.
- Kanal kontak: LinkedIn, unduh CV, Instagram, email, telepon.
- Pengalaman visual: parallax dan galeri bergeser kanan ke kiri.

### 4.2 Di Luar Lingkup
- Sistem login, panel admin, blog, form kontak berbackend, multi-bahasa, dark mode.
- Pembuatan konten (foto, tulisan, CV) oleh pengembang.

---

## 5. Pemangku Kepentingan (Stakeholder)

| Stakeholder | Peran | Kepentingan | Pengaruh |
|---|---|---|---|
| Pemilik portofolio | Sponsor, product owner, content owner | Citra profesional, peluang karier | Tinggi |
| Rekruiter / HRD | Pengguna utama | Menilai kandidat dengan cepat | Sedang |
| Dosen / akademisi | Pengguna | Mengetahui identitas dan capaian | Sedang |
| Klien / kolaborator | Pengguna | Menilai kemampuan, menghubungi | Sedang |
| Masyarakat umum | Pengguna | Pengalaman visual yang nyaman | Rendah |
| Pengembang (pemilik atau AI-assisted) | Pelaksana | Spesifikasi yang jelas | Tinggi |

---

## 6. Kebutuhan Bisnis (Business Requirements)

| ID | Kebutuhan Bisnis | Terkait Tujuan | Prioritas |
|---|---|---|---|
| BR-01 | Website harus memperkenalkan identitas pemilik secara lengkap (deskripsi, nama, NIM, prodi, pendidikan, aktivitas). | BO-01 | Must |
| BR-02 | Website harus menampilkan keahlian (skills dan tools) secara jelas. | BO-01 | Must |
| BR-03 | Website harus menampilkan pencapaian beserta bukti visual dan keterangannya. | BO-03 | Must |
| BR-04 | Website harus menyediakan kanal kontak lengkap dan CV yang dapat diunduh. | BO-02 | Must |
| BR-05 | Navigasi harus memudahkan pengunjung menuju bagian yang diinginkan. | BO-02 | Must |
| BR-06 | Tampilan harus minimalist, elegant, dengan parallax dan galeri bergeser kanan ke kiri. | BO-04 | Must |
| BR-07 | Website harus dapat diakses di perangkat mobile, tablet, dan desktop. | BO-04 | Must |
| BR-08 | Website harus cepat dimuat dan dapat ditemukan mesin pencari. | BO-04 | Should |
| BR-09 | Konten harus mudah diperbarui oleh pemilik tanpa mengubah banyak kode. | BO-05 | Should |
| BR-10 | Biaya hosting dan operasional harus minimal. | BO-05 | Must |

---

## 7. Aturan Bisnis (Business Rules)

| ID | Aturan |
|---|---|
| BRL-01 | Setiap achievement wajib memiliki: foto, nama pencapaian, tahun, lembaga, dan deskripsi singkat. |
| BRL-02 | Deskripsi achievement maksimal 2 kalimat agar kartu tetap ringkas. |
| BRL-03 | Data identitas (nama, NIM, prodi) harus sesuai dokumen resmi. |
| BRL-04 | Pemilik memutuskan apakah NIM dan nomor telepon ditampilkan penuh, sebagian, atau disembunyikan (pertimbangan privasi). |
| BRL-05 | File CV harus berformat PDF dengan ukuran di bawah 2 MB. |
| BRL-06 | Semua klaim pada website harus dapat dibuktikan (sertifikat, dokumen, atau tautan). |
| BRL-07 | Link eksternal selalu dibuka di tab baru. |
| BRL-08 | Perubahan konten dilakukan melalui file data, bukan dengan mengubah komponen. |

---

## 8. Analisis Solusi

| Opsi | Kelebihan | Kekurangan | Keputusan |
|---|---|---|---|
| Template website builder (Wix, Canva) | Cepat | Kurang unik, kontrol terbatas, sering berbayar | Ditolak |
| Template React siap pakai | Cepat | Tampilan umum, perlu banyak penyesuaian | Ditolak |
| **Dibangun sendiri dengan React.js** | Unik, kontrol penuh, gratis, menjadi bukti kemampuan | Butuh waktu pengembangan | **Dipilih** |

---

## 9. Analisis Biaya dan Manfaat

| Komponen | Estimasi |
|---|---|
| Hosting | Rp 0 (tier gratis Vercel/Netlify/GitHub Pages) |
| Domain kustom (opsional) | Sekitar Rp 150.000 – 250.000 per tahun |
| Tools (VS Code, Figma free, GitHub) | Rp 0 |
| Waktu pengembangan | ± 4 minggu paruh waktu |

**Manfaat:** citra profesional, bukti kemampuan teknis, satu tautan untuk semua kebutuhan promosi diri, meningkatkan peluang magang/kerja/beasiswa.

---

## 10. Asumsi, Batasan, dan Ketergantungan

**Asumsi**
- Pemilik menyediakan seluruh konten tepat waktu.
- Pengunjung memiliki browser modern dan koneksi internet.

**Batasan**
- Anggaran minimal; seluruh pengembangan menggunakan React.js.
- Dikerjakan oleh satu orang (dibantu AI coding assistant).

**Ketergantungan**
- Layanan hosting (Vercel/Netlify/GitHub Pages).
- Ketersediaan font dan ikon dari penyedia pustaka.
- Kesiapan konten (foto, CV, daftar pencapaian).

---

## 11. Risiko Bisnis

| ID | Risiko | Kemungkinan | Dampak | Mitigasi |
|---|---|---|---|---|
| RB-01 | Konten terlambat siap | Sedang | Sedang | Mulai dengan placeholder, isi bertahap |
| RB-02 | Website lambat karena gambar dan animasi berat | Sedang | Tinggi | Optimasi gambar, batasi parallax, uji Lighthouse |
| RB-03 | Data pribadi disalahgunakan | Rendah | Tinggi | Tampilkan data seperlunya (BRL-04) |
| RB-04 | Informasi usang | Tinggi | Sedang | Jadwalkan pembaruan konten tiap semester |
| RB-05 | Tampilan tidak konsisten di perangkat tertentu | Sedang | Sedang | Uji lintas browser dan perangkat |

---

## 12. Kriteria Keberhasilan Bisnis

| Indikator | Target |
|---|---|
| Website live dengan URL publik | Ya |
| Seluruh 5 kanal kontak berfungsi | 100% |
| Minimal pencapaian ditampilkan | ≥ 3 |
| Lighthouse Performance / Accessibility / SEO | ≥ 90 |
| Tampil benar di mobile, tablet, desktop | Ya |
| Umpan balik pengguna uji (3–5 orang) | Menilai tampilan "rapi dan profesional" |

---

## 13. Rencana Tingkat Tinggi

| Fase | Durasi | Hasil |
|---|---|---|
| Persiapan konten dan desain | Minggu 1 | Konten lengkap, desain disetujui |
| Pengembangan inti | Minggu 2–3 | Seluruh section berfungsi |
| Penyempurnaan dan rilis | Minggu 4 | Website live |

---

## 14. Persetujuan

| Peran | Nama | Tanda tangan | Tanggal |
|---|---|---|---|
| Pemilik / Sponsor | | | |
| Pengembang | | | |

---

## 15. Matriks Ketertelusuran (BR ke Tujuan Bisnis)

| BR | BO-01 | BO-02 | BO-03 | BO-04 | BO-05 |
|---|:-:|:-:|:-:|:-:|:-:|
| BR-01 | X | | | | |
| BR-02 | X | | | | |
| BR-03 | | | X | | |
| BR-04 | | X | | | |
| BR-05 | | X | | | |
| BR-06 | | | | X | |
| BR-07 | | | | X | |
| BR-08 | | | | X | |
| BR-09 | | | | | X |
| BR-10 | | | | | X |
