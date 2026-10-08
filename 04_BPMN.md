# BPMN: Pemodelan Proses Bisnis
## Website Portofolio Pribadi (React.js)

> Diagram memakai **Mermaid** yang dipetakan ke notasi BPMN 2.0 (Mermaid belum mendukung BPMN secara native). Setiap *lane* digambarkan sebagai `subgraph`. Untuk mengimpor ke Camunda Modeler, bpmn.io, atau Bizagi, gunakan tabel elemen di tiap proses sebagai acuan.

## Legenda Notasi

| Elemen BPMN | Simbol di diagram | Arti |
|---|---|---|
| Start Event | `(( ))` lingkaran | Awal proses |
| End Event | `((( )))` lingkaran ganda | Akhir proses |
| Task | `[ ]` persegi | Aktivitas yang dilakukan |
| Exclusive Gateway (XOR) | `{ }` belah ketupat | Percabangan satu jalur |
| Subprocess | `[[ ]]` | Aktivitas yang punya rincian sendiri |
| Data / Artefak | `[( )]` silinder | Berkas atau data |
| Lane / Pool | `subgraph` | Pelaku atau sistem |

Daftar proses:

| ID | Proses | Pelaku |
|---|---|---|
| BP-01 | Pengunjung menjelajah portofolio | Pengunjung, Website |
| BP-02 | Pengunjung menghubungi pemilik / mengunduh CV | Pengunjung, Website, Pemilik |
| BP-03 | Pemilik memperbarui konten | Pemilik, Repositori, Hosting |
| BP-04 | Pengembangan fitur (vibe coding) hingga rilis | Pemilik, AI Assistant, Repositori, Hosting |
| BP-05 | Interaksi galeri Achievement | Pengunjung, Website |

---

## BP-01: Pengunjung Menjelajah Portofolio

```mermaid
flowchart LR
  subgraph PENG["Lane: Pengunjung"]
    P0(("Mulai"))
    P1["Membuka URL portofolio"]
    P2["Membaca Hero"]
    P3{"Ingin langsung menghubungi?"}
    P4["Menggulir / memilih menu"]
    P5["Membaca About Me"]
    P6["Melihat Skills dan Tools"]
    P7["Melihat Achievement"]
    P8{"Cukup yakin?"}
    P9[["Hubungi / unduh CV (BP-02)"]]
    P10(((" Selesai ")))
  end
  subgraph WEB["Lane: Website"]
    W1["Memuat halaman dan data"]
    W2["Menampilkan Navbar dan Hero dengan parallax"]
    W3["Menggulir halus ke section dipilih"]
    W4["Memperbarui menu aktif (scroll spy)"]
    W5["Reveal section saat masuk viewport"]
  end

  P0 --> P1 --> W1 --> W2 --> P2 --> P3
  P3 -->|"Ya"| P9
  P3 -->|"Tidak"| P4 --> W3 --> W4 --> W5 --> P5 --> P6 --> P7 --> P8
  P8 -->|"Ya"| P9 --> P10
  P8 -->|"Belum"| P4
```

**Rincian elemen**

| Elemen | Jenis | Pelaku | Input | Output |
|---|---|---|---|---|
| Membuka URL | Task | Pengunjung | URL | Permintaan halaman |
| Memuat halaman dan data | Task | Website | HTML, JS, data lokal | Halaman ter-render |
| Menampilkan Navbar dan Hero | Task | Website | Data profil | UI awal |
| Ingin langsung menghubungi? | XOR Gateway | Pengunjung | Niat pengunjung | Jalur cepat atau jelajah |
| Menggulir halus | Task | Website | Klik menu / scroll | Posisi section |
| Cukup yakin? | XOR Gateway | Pengunjung | Informasi yang dilihat | Lanjut kontak atau lanjut menjelajah |

---

## BP-02: Menghubungi Pemilik / Mengunduh CV

```mermaid
flowchart LR
  subgraph PENG["Lane: Pengunjung"]
    A0(("Mulai"))
    A1["Melihat section Contact"]
    A2{"Pilih kanal"}
    A3["Klik Download CV"]
    A4["Klik LinkedIn / Instagram"]
    A5["Klik Email / Telepon"]
    A6["Membaca CV"]
    A7["Mengirim pesan / menelepon"]
    A9(((" Selesai ")))
  end
  subgraph WEB["Lane: Website"]
    B1["Menampilkan 5 kanal kontak"]
    B2["Browser mengunduh PDF"]
    B3["Membuka tab baru ke profil"]
    B4["Membuka aplikasi email / telepon"]
  end
  subgraph OWN["Lane: Pemilik"]
    C1["Menerima pesan atau panggilan"]
    C2["Menindaklanjuti"]
  end
  DATA[("CV_NamaAnda.pdf")]

  A0 --> A1 --> B1 --> A2
  A2 -->|"CV"| A3 --> B2 --> A6 --> A9
  DATA -.-> B2
  A2 -->|"Sosial media"| A4 --> B3 --> A9
  A2 -->|"Email / telepon"| A5 --> B4 --> A7 --> C1 --> C2 --> A9
```

**Aturan bisnis terkait:** BRL-05 (CV PDF < 2 MB), BRL-07 (link eksternal tab baru), BRL-04 (privasi nomor telepon).

---

## BP-03: Pemilik Memperbarui Konten

```mermaid
flowchart LR
  subgraph OWN["Lane: Pemilik"]
    O0(("Mulai: ada pencapaian atau data baru"))
    O1["Menyiapkan foto dan teks"]
    O2["Mengompres gambar ke WebP"]
    O3["Mengedit src/data dan menaruh gambar"]
    O4["Menjalankan npm run dev"]
    O5{"Tampilan sudah benar?"}
    O6["Commit dan push ke main"]
    O7["Memeriksa situs publik"]
    O8(((" Selesai ")))
  end
  subgraph REPO["Lane: Repositori GitHub"]
    R1["Menerima push"]
    R2["Memicu webhook"]
  end
  subgraph HOST["Lane: Hosting"]
    H1["Menjalankan npm run build"]
    H2{"Build berhasil?"}
    H3["Deploy ke CDN"]
    H4["Mengirim notifikasi gagal"]
  end

  O0 --> O1 --> O2 --> O3 --> O4 --> O5
  O5 -->|"Belum"| O3
  O5 -->|"Ya"| O6 --> R1 --> R2 --> H1 --> H2
  H2 -->|"Ya"| H3 --> O7 --> O8
  H2 -->|"Tidak"| H4 --> O3
```

**Aturan bisnis terkait:** BRL-01 (kelengkapan data achievement), BRL-02 (maks. 2 kalimat), BRL-06 (klaim dapat dibuktikan), BRL-08 (ubah lewat file data).

---

## BP-04: Pengembangan Fitur (Vibe Coding) hingga Rilis

```mermaid
flowchart LR
  subgraph OWN["Lane: Pemilik / Developer"]
    D0(("Mulai: ambil user story berikutnya"))
    D1["Memberi prompt satu story + konteks docs"]
    D2["Menjalankan dan meninjau di browser"]
    D3{"Acceptance criteria terpenuhi?"}
    D4["Memberi umpan balik perbaikan"]
    D5["Cek Definition of Done"]
    D6["Commit dan push"]
    D7{"Masih ada story?"}
    D8["Audit Lighthouse dan uji lintas perangkat"]
    D9(((" Rilis ")))
  end
  subgraph AI["Lane: AI Assistant"]
    A1["Membaca PRD, SRS, UML, User Story"]
    A2["Menulis atau mengubah kode sesuai story"]
    A3["Merangkum file yang berubah dan cara uji"]
  end
  subgraph CI["Lane: Repositori dan Hosting"]
    C1["Build otomatis"]
    C2["Deploy ke produksi"]
  end

  D0 --> D1 --> A1 --> A2 --> A3 --> D2 --> D3
  D3 -->|"Belum"| D4 --> A2
  D3 -->|"Ya"| D5 --> D6 --> C1 --> D7
  D7 -->|"Ya"| D0
  D7 -->|"Tidak"| D8 --> C2 --> D9
```

---

## BP-05: Interaksi Galeri Achievement

```mermaid
flowchart LR
  subgraph PENG["Lane: Pengunjung"]
    V0(("Mulai"))
    V1["Menggulir ke Achievement"]
    V2["Melihat kartu bergeser"]
    V3{"Berinteraksi?"}
    V4["Hover / sentuh"]
    V5["Klik kartu"]
    V6["Geser manual (swipe)"]
    V7["Menutup modal"]
    V8(((" Selesai ")))
  end
  subgraph WEB["Lane: Website"]
    S0{"Reduced motion aktif?"}
    S1["Jalankan marquee kanan ke kiri"]
    S2["Mode scroll manual tanpa animasi otomatis"]
    S3["Jeda animasi"]
    S4["Lanjutkan animasi"]
    S5["Buka modal detail"]
    S6["Geser track mengikuti jari"]
  end

  V0 --> V1 --> S0
  S0 -->|"Tidak"| S1 --> V2 --> V3
  S0 -->|"Ya"| S2 --> V2
  V3 -->|"Hover / sentuh"| V4 --> S3 --> S4 --> V8
  V3 -->|"Klik"| V5 --> S5 --> V7 --> S4 --> V8
  V3 -->|"Swipe"| V6 --> S6 --> V8
  V3 -->|"Tidak"| V8
```

---

## Ringkasan Peristiwa dan Pesan (Message Flow)

| Dari | Ke | Pesan | Proses |
|---|---|---|---|
| Pengunjung | Website | Permintaan halaman (HTTP GET) | BP-01 |
| Website | Pengunjung | Halaman ter-render | BP-01 |
| Pengunjung | Browser | Klik Download CV | BP-02 |
| Browser | Hosting | GET berkas PDF | BP-02 |
| Pengunjung | Pemilik | Email / panggilan / pesan | BP-02 |
| Pemilik | Repositori | `git push` | BP-03, BP-04 |
| Repositori | Hosting | Webhook build | BP-03, BP-04 |
| Hosting | Pemilik | Notifikasi build gagal | BP-03 |

## Catatan Mengubah ke File `.bpmn`

Jika membutuhkan berkas BPMN XML asli, minta AI assistant: *"Ubah proses BP-03 dari 04_BPMN.md menjadi BPMN 2.0 XML dengan pool dan lane, siap dibuka di bpmn.io."*
