# UML: Pemodelan Sistem
## Website Portofolio Pribadi (React.js)

> Semua diagram memakai **Mermaid**. Render di GitHub, VS Code (Markdown Preview Mermaid Support), Obsidian, Notion, atau https://mermaid.live.

| Diagram | Tujuan |
|---|---|
| 1. Use Case | Siapa melakukan apa pada sistem |
| 2. Spesifikasi Use Case | Detail skenario utama dan alternatif |
| 3. Class Diagram (data) | Struktur data konten |
| 4. Class Diagram (komponen) | Struktur komponen React |
| 5. Sequence Diagram | Urutan interaksi runtime |
| 6. Activity Diagram | Alur logika aktivitas |
| 7. State Diagram | Perubahan status komponen interaktif |
| 8. Component Diagram | Dependensi antar modul |
| 9. ER Diagram | Relasi entitas data |
| 10. Deployment Diagram | Infrastruktur rilis |

---

## 1. Use Case Diagram

```mermaid
flowchart LR
  V(["Pengunjung"])
  O(["Pemilik"])

  subgraph SYS["Website Portofolio"]
    UC1(("Menjelajah halaman"))
    UC2(("Menggunakan navigasi"))
    UC3(("Melihat About Me"))
    UC4(("Melihat Skills dan Tools"))
    UC5(("Melihat Achievement"))
    UC6(("Melihat detail Achievement"))
    UC7(("Menghubungi pemilik"))
    UC8(("Mengunduh CV"))
    UC9(("Memperbarui konten"))
    UC10(("Merilis perubahan"))
  end

  V --> UC1
  V --> UC2
  V --> UC3
  V --> UC4
  V --> UC5
  V --> UC7
  V --> UC8
  UC5 -. "extend" .-> UC6
  UC1 -. "include" .-> UC2
  O --> UC9
  O --> UC10
  UC9 -. "include" .-> UC10
```

---

## 2. Spesifikasi Use Case

### UC-05: Melihat Achievement

| Item | Isi |
|---|---|
| Aktor | Pengunjung |
| Prasyarat | Halaman telah dimuat |
| Pemicu | Pengunjung menggulir atau memilih menu Achievement |
| Alur utama | 1. Sistem menggulir ke section Achievement. 2. Sistem menampilkan kartu (foto, nama, tahun, lembaga, deskripsi). 3. Kartu bergeser dari kanan ke kiri otomatis. |
| Alur alternatif A | Pengunjung hover/sentuh: animasi berhenti, lanjut saat dilepas. |
| Alur alternatif B | Pengunjung mengaktifkan reduced motion: animasi otomatis nonaktif, track dapat digulir manual. |
| Pengecualian | Gambar gagal dimuat: placeholder tampil. |
| Pascakondisi | Pengunjung melihat seluruh pencapaian. |
| Kebutuhan terkait | FR-ACH-01–07 |

### UC-08: Mengunduh CV

| Item | Isi |
|---|---|
| Aktor | Pengunjung |
| Prasyarat | Section Contact terlihat |
| Pemicu | Klik tombol Download CV |
| Alur utama | 1. Pengunjung klik tombol. 2. Browser mengunduh `CV_NamaAnda.pdf`. |
| Pengecualian | Berkas tidak ditemukan: browser menampilkan error; pemilik wajib memastikan path benar saat rilis. |
| Pascakondisi | CV tersimpan di perangkat pengunjung. |
| Kebutuhan terkait | FR-CNT-03 |

### UC-09: Memperbarui Konten

| Item | Isi |
|---|---|
| Aktor | Pemilik |
| Prasyarat | Repositori tersedia di komputer pemilik |
| Alur utama | 1. Pemilik membuka `src/data/*.js`. 2. Mengubah/menambah data atau gambar. 3. Menjalankan `npm run dev` untuk memeriksa. 4. Commit dan push. |
| Pascakondisi | Perubahan siap dirilis (UC-10). |
| Kebutuhan terkait | FR-DATA-01, FR-DATA-02 |

---

## 3. Class Diagram: Model Data

```mermaid
classDiagram
  class Profile {
    +string name
    +string nim
    +boolean maskNim
    +string major
    +string headline
    +string description
    +string photo
  }
  class Education {
    +string level
    +string institution
    +int startYear
    +string endYear
  }
  class Activity {
    +string title
    +string role
    +string period
    +string description
  }
  class Skill {
    +string name
    +string category
    +int level
  }
  class Tool {
    +string name
    +string icon
  }
  class Achievement {
    +int id
    +string title
    +int year
    +string organization
    +string description
    +string image
  }
  class Contact {
    +string linkedin
    +string instagram
    +string email
    +string phone
    +string cvFile
  }

  Profile "1" --> "*" Education : memiliki
  Profile "1" --> "*" Activity : memiliki
  Profile "1" --> "*" Skill : menguasai
  Profile "1" --> "*" Tool : memakai
  Profile "1" --> "*" Achievement : meraih
  Profile "1" --> "1" Contact : dihubungi lewat
```

---

## 4. Class Diagram: Komponen React

```mermaid
classDiagram
  class App {
    +render()
  }
  class Navbar {
    +List~NavItem~ items
    +string activeId
    -boolean isOpen
    -boolean isScrolled
    +toggleMenu()
    +scrollToSection(id)
  }
  class Hero {
    +string name
    +string headline
  }
  class About {
    +Profile profile
  }
  class Skills {
    +List~Skill~ skills
    +List~Tool~ tools
  }
  class Achievement {
    +List~AchievementItem~ items
    -AchievementItem selected
    -boolean paused
    +pause()
    +resume()
    +select(item)
  }
  class AchievementCard {
    +AchievementItem item
    -boolean imgError
    +onClick()
  }
  class AchievementModal {
    +AchievementItem item
    +onClose()
  }
  class Contact {
    +ContactInfo contact
  }
  class Footer {
    +string name
  }
  class ParallaxLayer {
    +number speed
  }
  class Reveal {
    +number delay
  }
  class useActiveSection {
    +hook ids offset
    +returns activeId
  }

  App *-- Navbar
  App *-- Hero
  App *-- About
  App *-- Skills
  App *-- Achievement
  App *-- Contact
  App *-- Footer
  Achievement *-- AchievementCard
  Achievement o-- AchievementModal
  Hero o-- ParallaxLayer
  About o-- Reveal
  Skills o-- Reveal
  Achievement o-- Reveal
  Contact o-- Reveal
  App ..> useActiveSection : memakai
```

---

## 5. Sequence Diagram

### 5.1 Memuat Halaman

```mermaid
sequenceDiagram
  autonumber
  actor V as Pengunjung
  participant B as Browser
  participant H as Hosting/CDN
  participant A as React App
  participant D as src/data

  V->>B: Buka URL portofolio
  B->>H: GET index.html
  H-->>B: HTML + referensi bundle
  B->>H: GET JS, CSS, font
  H-->>B: Aset statis
  B->>A: Eksekusi dan mount App
  A->>D: Baca profile, skills, achievements
  D-->>A: Data konten
  A-->>B: Render Navbar, Hero, dan section lain
  B-->>V: Halaman tampil
  Note over B,A: Gambar achievement dimuat lazy saat mendekati viewport
```

### 5.2 Klik Menu, Smooth Scroll, dan Scroll Spy

```mermaid
sequenceDiagram
  autonumber
  actor V as Pengunjung
  participant N as Navbar
  participant W as Window
  participant S as useActiveSection

  V->>N: Klik menu "Achievement"
  N->>W: scrollTo(section, smooth, offset navbar)
  loop selama menggulir
    W-->>S: IntersectionObserver melaporkan section terlihat
    S-->>N: activeId diperbarui
    N-->>V: Menu aktif ter-highlight
  end
  alt layar kecil dan panel terbuka
    N->>N: Tutup panel hamburger
  end
```

### 5.3 Pause Marquee Saat Hover

```mermaid
sequenceDiagram
  autonumber
  actor V as Pengunjung
  participant M as Marquee Achievement
  participant C as CSS Animation

  V->>M: Pointer masuk (hover/touchstart)
  M->>C: animation-play-state = paused
  C-->>V: Kartu berhenti
  V->>M: Pointer keluar (mouseleave/touchend)
  M->>C: animation-play-state = running
  C-->>V: Kartu melanjutkan geseran kanan ke kiri
```

### 5.4 Membuka Detail Achievement

```mermaid
sequenceDiagram
  autonumber
  actor V as Pengunjung
  participant K as AchievementCard
  participant P as Achievement
  participant L as AchievementModal

  V->>K: Klik kartu
  K->>P: select(item)
  P->>P: paused = true
  P->>L: Render modal dengan item
  L-->>V: Foto besar dan deskripsi
  alt Tutup
    V->>L: Klik tombol tutup / latar / tekan Esc
    L->>P: onClose()
    P->>P: selected = null, paused = false
  end
```

### 5.5 Mengunduh CV

```mermaid
sequenceDiagram
  autonumber
  actor V as Pengunjung
  participant C as Contact
  participant B as Browser
  participant H as Hosting

  V->>C: Klik "Download CV"
  C->>B: Anchor href=/cv/CV_NamaAnda.pdf download
  B->>H: GET /cv/CV_NamaAnda.pdf
  H-->>B: Berkas PDF
  B-->>V: Berkas tersimpan
```

---

## 6. Activity Diagram

### 6.1 Perjalanan Pengunjung

```mermaid
flowchart TD
  S(("Mulai")) --> A["Buka website"]
  A --> B["Lihat Hero"]
  B --> C{"Pilih tindakan"}
  C -->|"Klik CTA Hubungi"| K["Menuju Contact"]
  C -->|"Klik CTA Achievement"| AC["Menuju Achievement"]
  C -->|"Scroll"| D["Baca About Me"]
  D --> E["Lihat What I Can Do"]
  E --> AC
  AC --> F["Lihat galeri bergeser"]
  F --> G{"Tertarik detail?"}
  G -->|"Ya"| H["Buka modal detail"]
  H --> I["Tutup modal"]
  I --> K
  G -->|"Tidak"| K
  K --> J{"Pilih kanal"}
  J -->|"CV"| J1["Unduh CV"]
  J -->|"LinkedIn / Instagram"| J2["Buka tab baru"]
  J -->|"Email / Telepon"| J3["Buka aplikasi terkait"]
  J1 --> Z(("Selesai"))
  J2 --> Z
  J3 --> Z
```

### 6.2 Logika Marquee

```mermaid
flowchart TD
  S(("Mulai")) --> A{"prefers-reduced-motion?"}
  A -->|"Ya"| B["Nonaktifkan animasi, aktifkan scroll horizontal manual"]
  A -->|"Tidak"| C["Jalankan animasi translateX 0 ke -50 persen, loop"]
  C --> D{"Pointer di atas marquee?"}
  D -->|"Ya"| E["Pause animasi"]
  E --> D
  D -->|"Tidak"| C
  B --> Z(("Selesai"))
```

---

## 7. State Diagram

### 7.1 Menu Navbar (Mobile)

```mermaid
stateDiagram-v2
  [*] --> Closed
  state "Menu tertutup" as Closed
  state "Menu terbuka" as Open
  Closed --> Open : klik hamburger
  Open --> Closed : klik hamburger
  Open --> Closed : pilih menu
  Open --> Closed : tekan Esc
  Open --> Closed : lebar layar mencapai 768 px
```

### 7.2 Gaya Navbar Saat Scroll

```mermaid
stateDiagram-v2
  [*] --> Top
  state "Transparan, scrollY 50 atau kurang" as Top
  state "Blur dan bayangan, scrollY di atas 50" as Scrolled
  Top --> Scrolled : scrollY melewati 50
  Scrolled --> Top : scrollY kembali ke 50 atau kurang
```

### 7.3 Marquee Achievement

```mermaid
stateDiagram-v2
  [*] --> Running
  state "Berjalan" as Running
  state "Dijeda (hover/sentuh)" as Paused
  state "Modal terbuka" as ModalOpen
  state "Manual (reduced motion)" as Manual
  Running --> Paused : pointer masuk
  Paused --> Running : pointer keluar
  Running --> ModalOpen : klik kartu
  Paused --> ModalOpen : klik kartu
  ModalOpen --> Running : tutup modal
  [*] --> Manual : reduced motion aktif
```

### 7.4 Pemuatan Gambar Kartu

```mermaid
stateDiagram-v2
  [*] --> Idle
  Idle --> Loading : mendekati viewport
  Loading --> Loaded : onLoad
  Loading --> Failed : onError
  Failed --> [*] : tampilkan placeholder
  Loaded --> [*]
```

---

## 8. Component Diagram

```mermaid
flowchart TB
  subgraph UI["Lapisan Tampilan"]
    NAV["Navbar"]
    HERO["Hero"]
    ABOUT["About"]
    SKILLS["Skills"]
    ACH["Achievement"]
    CARD["AchievementCard"]
    MODAL["AchievementModal"]
    CONTACT["Contact"]
    FOOT["Footer"]
  end
  subgraph FX["Lapisan Efek"]
    PAR["ParallaxLayer"]
    REV["Reveal"]
  end
  subgraph LOGIC["Hooks"]
    SPY["useActiveSection"]
    MQ["useMediaQuery"]
  end
  subgraph DATA["Data Statis"]
    PROF["profile.js"]
    SK["skills.js"]
    ACHD["achievements.js"]
    NAVD["navigation.js"]
  end
  subgraph LIB["Pustaka"]
    FM["framer-motion"]
    RI["react-icons"]
    TW["Tailwind CSS"]
  end

  NAV --> SPY
  NAV --> MQ
  NAV --> NAVD
  HERO --> PAR
  ABOUT --> REV
  SKILLS --> REV
  ACH --> REV
  CONTACT --> REV
  ACH --> CARD
  ACH --> MODAL
  ABOUT --> PROF
  HERO --> PROF
  SKILLS --> SK
  ACH --> ACHD
  CONTACT --> PROF
  FOOT --> PROF
  PAR --> FM
  REV --> FM
  MODAL --> FM
  SKILLS --> RI
  CONTACT --> RI
  UI --> TW
```

---

## 9. ER Diagram

```mermaid
erDiagram
  PROFILE ||--o{ EDUCATION : has
  PROFILE ||--o{ ACTIVITY : has
  PROFILE ||--o{ SKILL : masters
  PROFILE ||--o{ TOOL : uses
  PROFILE ||--o{ ACHIEVEMENT : earns
  PROFILE ||--|| CONTACT : reachable_via

  PROFILE {
    int id PK
    string name
    string nim
    string major
    string headline
    string description
    string photo
  }
  EDUCATION {
    int id PK
    string level
    string institution
    int startYear
    string endYear
  }
  ACTIVITY {
    int id PK
    string title
    string role
    string period
    string description
  }
  SKILL {
    int id PK
    string name
    string category
    int level
  }
  TOOL {
    int id PK
    string name
    string icon
  }
  ACHIEVEMENT {
    int id PK
    string title
    int year
    string organization
    string description
    string image
  }
  CONTACT {
    string linkedin
    string instagram
    string email
    string phone
    string cvFile
  }
```

> Catatan: pada MVP entitas ini hanya berupa objek JavaScript di `src/data/`, bukan tabel database.

---

## 10. Deployment Diagram

```mermaid
flowchart LR
  subgraph DEV["Komputer Pemilik"]
    IDE["VS Code + AI assistant"]
    GIT["Git lokal"]
  end
  subgraph GH["GitHub"]
    REPO["Repositori main"]
  end
  subgraph HOST["Vercel / Netlify"]
    BUILD["Build: npm run build"]
    CDN["CDN global + HTTPS"]
  end
  subgraph CLIENT["Perangkat Pengunjung"]
    BR["Browser"]
  end

  IDE --> GIT
  GIT -->|"git push"| REPO
  REPO -->|"webhook"| BUILD
  BUILD -->|"deploy dist"| CDN
  BR -->|"HTTPS GET"| CDN
```
