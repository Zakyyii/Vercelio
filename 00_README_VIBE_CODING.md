# Paket Dokumentasi Website Portofolio (React.js)

Paket ini disusun supaya bisa langsung dipakai sebagai **konteks untuk AI coding assistant** (Claude Code, Cursor, Windsurf, Copilot, dan sejenisnya) saat vibe coding.

## Isi Paket

| File | Fungsi | Kapan dipakai |
|---|---|---|
| `PRD_Website_Portofolio.md` | Gambaran produk, fitur, UI/UX, tech stack | Awal proyek, sebagai sumber utama |
| `01_BRD.md` | Alasan bisnis, tujuan, stakeholder, aturan bisnis | Menjelaskan "kenapa" proyek ini ada |
| `02_SRS.md` | Kebutuhan fungsional dan non-fungsional yang terukur, spesifikasi komponen | Saat menulis kode, sebagai kontrak teknis |
| `03_UML.md` | Use case, class, sequence, activity, state, component, ER, deployment | Saat merancang struktur kode dan alur logika |
| `04_BPMN.md` | Proses bisnis dan alur kerja (pengunjung, pemilik, rilis) | Memahami alur proses end-to-end |
| `05_USER_STORIES.md` | Epic, user story, acceptance criteria (Given/When/Then), sprint plan | Memecah pekerjaan menjadi tugas kecil per prompt |

> Diagram memakai **Mermaid**. Bisa dirender di GitHub, GitLab, Notion, Obsidian, VS Code (ekstensi Markdown Preview Mermaid Support), dan mermaid.live.

## Cara Memakai Saat Vibe Coding

1. Taruh semua file ini di folder `docs/` pada repositori proyek.
2. Tambahkan file aturan untuk AI (misal `CLAUDE.md`, `.cursorrules`, atau `AGENTS.md`) berisi **Master Prompt** di bawah.
3. Kerjakan **satu user story per prompt**, urut sesuai Sprint Plan di `05_USER_STORIES.md`.
4. Setelah tiap story selesai, jalankan checklist Definition of Done, lalu commit.

## Master Prompt (salin ke CLAUDE.md / .cursorrules)

```
Kamu adalah senior frontend engineer yang membangun website portofolio pribadi.

KONTEKS
- Baca docs/PRD_Website_Portofolio.md, docs/02_SRS.md, docs/03_UML.md, dan docs/05_USER_STORIES.md sebelum menulis kode.
- Tech stack: React 18 + Vite, Tailwind CSS, Framer Motion, React Icons. Tanpa backend.
- Gaya desain: minimalist, elegant. Palet: #FAFAF8, #1A1A1A, #6B6B6B, #B08D57, #E6E4DF.
- Font: Playfair Display (heading), Inter (body).

ATURAN KODE
- Komponen fungsional + Hooks, satu komponen per file di src/components/.
- Semua konten (teks, daftar skill, achievement, kontak) HARUS dibaca dari src/data/, jangan di-hardcode di komponen.
- Animasi hanya memakai transform dan opacity. Wajib hormati prefers-reduced-motion.
- Gunakan tag semantik (header, nav, main, section, footer), alt pada gambar, aria-label pada ikon.
- Mobile-first. Breakpoint: 768px dan 1024px.
- Link eksternal: target="_blank" rel="noopener noreferrer".
- Jangan menambah library di luar daftar tanpa bertanya.

CARA KERJA
- Kerjakan HANYA user story yang saya sebutkan. Jangan mengubah file di luar cakupannya.
- Pastikan semua acceptance criteria story terpenuhi.
- Di akhir, tampilkan: daftar file yang dibuat/diubah, dan cara mengujinya.
```

## Urutan Prompt yang Disarankan

| Langkah | Contoh prompt |
|---|---|
| 1 | "Kerjakan US-901 dan US-902: setup Vite + React + Tailwind + struktur folder + file data kosong, sesuai SRS bagian 5." |
| 2 | "Kerjakan US-101 sampai US-104: Navbar sticky dengan hover, smooth scroll, scroll spy, dan hamburger." |
| 3 | "Kerjakan US-201: Hero dengan CTA. Parallax ditunda dulu." |
| 4 | "Kerjakan US-301 sampai US-304: section About Me dari src/data/profile.js." |
| 5 | "Kerjakan US-401 sampai US-402: section What I Can Do." |
| 6 | "Kerjakan US-501 sampai US-505: Achievement dengan marquee kanan ke kiri, pause saat hover, swipe, lazy load." |
| 7 | "Kerjakan US-601 sampai US-604: Contact + tombol unduh CV." |
| 8 | "Kerjakan US-701 sampai US-703: parallax, reveal animation, reduced motion." |
| 9 | "Kerjakan US-801 sampai US-804: optimasi performa, aksesibilitas, SEO." |
| 10 | "Kerjakan US-903 sampai US-904: deploy ke Vercel dan README." |

## Tips Agar Hasil Lebih Ciamik

- **Beri contoh data nyata** di `src/data/*.js` sejak awal (nama, NIM, 3 achievement) supaya AI tidak menghasilkan placeholder generik.
- **Minta satu hal per prompt.** Prompt yang menggabungkan banyak section biasanya menghasilkan kode berantakan.
- **Minta AI membaca diagram** di `03_UML.md` sebelum membuat komponen yang punya state (navbar mobile, carousel, modal).
- **Review visual tiap story**: jalankan `npm run dev`, cek di lebar 360, 768, dan 1440 px.
- **Gunakan referensi desain**: tempel screenshot situs portofolio yang Anda sukai dan minta "ikuti nuansanya, bukan menyalin".
- **Commit kecil dan sering** (satu story = satu commit) agar mudah rollback.
