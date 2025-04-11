# 🪙 CryptoZone - Web Informasi dan Edukasi Kripto

CryptoZone adalah platform web interaktif yang menyediakan:
- Berita terkini seputar cryptocurrency 📢
- Ranking harga kripto real-time 💹
- Grafik harga 7 hari terakhir per koin 📈
- Informasi tim developer 👨‍💻

Dibangun menggunakan Next.js (App Router) dengan styling modern via Tailwind CSS dan grafik interaktif dari Chart.js.

---

## 🚀 Fitur Utama

- 🔍 **Cari & Filter Koin** berdasarkan nama
- 📊 **Klik baris koin** untuk tampilkan grafik harga 7 hari terakhir
- 📰 **Berita crypto** real-time dari NewsAPI
- 🏆 **Ranking top 10** harga kripto dari CoinGecko API
- 👥 **Profil Tim Developer** lengkap dengan sosial media

---

## 📦 Tech Stack

- **Next.js** App Router
- **Tailwind CSS** – styling responsif
- **CoinGecko API** – data harga koin & grafik
- **NewsAPI** – data berita cryptocurrency
- **Chart.js + react-chartjs-2** – grafik harga kripto
- **React Icons** – ikon sosial media & indikator harga

---

## ⚙️ Instalasi

```bash
# 1. Clone repo
https://github.com/namamu/cryptozone.git

# 2. Install dependencies
npm install

# 3. Tambahkan file .env.local
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key_here

# 4. Jalankan server lokal
npm run dev
```

---

## 🌐 Struktur Halaman

- `/` - Landing page (hero + CTA)
- `/about` - Tentang cryptocurrency
- `/servis` - Ranking harga, grafik & berita
- `/contact` - Profil tim pengembang

---

## 📈 API yang Digunakan

- [CoinGecko API](https://www.coingecko.com/en/api/documentation)
  - Endpoint harga: `/coins/markets`
  - Endpoint grafik: `/coins/{id}/market_chart`

- [NewsAPI](https://newsapi.org/)
  - Endpoint berita: `/v2/everything?q=cryptocurrency`

---

## 🧑‍💻 Kontributor

- Fadhlrahman Fitra Arsil – UI/UX & Frontend
- Rama Pradana Wijaya – Backend & API

---

## 📜 Lisensi

Proyek ini dikembangkan untuk keperluan edukasi dan pengembangan portofolio pribadi.

---

Terima kasih sudah menggunakan CryptoZone! 🚀

> Jika kamu suka project ini, jangan lupa kasih ⭐ atau fork 🙌




Jangan lupa untuk Install
1. npm install react-icons
2. npm install chart.js react-chartjs-2
3. npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
4. npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
