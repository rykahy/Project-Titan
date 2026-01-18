# ⚡ TITAN Dashboard - Quick Start Guide

## 🎯 Tujuan
Mengkonversi TITAN Dashboard dari PHP+MySQL ke static site yang bisa dihosting di GitHub Pages.

## ✅ Apa yang Sudah Diperbaiki

### 1. **Konversi Backend → Static**
- ❌ Hapus: PHP backend, MySQL database, authentication
- ✅ Tambah: Static JavaScript data files
- ✅ Hasil: Bisa dihosting gratis di GitHub Pages

### 2. **Bug Fixes di Dashboard**
- ✅ Map markers tampil dengan benar
- ✅ Charts menampilkan data performa
- ✅ Filter location bekerja (Island → Province → City → District)
- ✅ Site monitoring panel berfungsi
- ✅ Theme switcher aktif
- ✅ Responsive di semua device

### 3. **Data Static**
- ✅ 453 network sites (23 Starlink, 112 BTS, 18 Blankspots)
- ✅ Coverage: Pulau Jawa & Sumatera  
- ✅ Historical performance data (14 hari)
- ✅ Site details dengan metrics lengkap

## 🚀 Deploy ke GitHub Pages - 5 Menit!

### Langkah Super Cepat:

1. **Download File**
   ```
   Download: Project-Titan.zip
   Extract semua file
   ```

2. **Upload ke GitHub**
   - Buka: https://github.com/rykahy/Project-Titan
   - Klik: "Add file" → "Upload files"
   - Drag & drop SEMUA file dari folder `Project-Titan`
   - Commit: "Deploy static TITAN Dashboard"

3. **Aktifkan GitHub Pages**
   - Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Save

4. **Akses Website**
   - URL: https://rykahy.github.io/Project-Titan/
   - Landing: https://rykahy.github.io/Project-Titan/index.html
   - Dashboard: https://rykahy.github.io/Project-Titan/dashboard.html

## 📁 Struktur File (Yang Harus Di-Upload)

```
✅ Project-Titan/
   ✅ index.html              ← Landing page
   ✅ dashboard.html          ← Dashboard utama
   ✅ README.md
   ✅ assets/
      ✅ css/styles.css       ← Stylesheet
      ✅ js/                  ← JavaScript helpers
      ✅ img/titan.jpg        ← Logo
   ✅ data/
      ✅ network-data.js      ← Data static jaringan
      ✅ dashboard-init.js    ← Initialization
      ✅ bug-fixes.js         ← Bug fixes
```

**PENTING:** Upload SEMUA folder beserta isinya!

## 🎨 Fitur Dashboard

### Landing Page (index.html)
- Hero section dengan animated stats
- Feature showcase
- Direct link ke dashboard
- Fully responsive

### Dashboard (dashboard.html)
- **Interactive Map** dengan Leaflet.js
  - 4 base map styles (Dark, Satellite, Terrain, Standard)
  - Color-coded markers (Blue=Starlink, Orange=BTS, Red=Blankspot)
  - Heatmap overlay
  - Multi-level filtering

- **Real-time Stats**
  - Total sites, users, latency, jitter
  - Individual site monitoring
  - Status indicators

- **Performance Charts**
  - 14-day historical data
  - Throughput & latency graphs
  - Interactive Chart.js visualization

- **Theme Switcher**
  - Cyber Blue (default)
  - Purple, Green, Red variants
  - Dark mode optimized

## 🔧 Customization

### Update Data Jaringan

Edit `data/network-data.js`:

```javascript
const NETWORK_DATA = {
  stats: {
    totalSites: 453,        // ← Update ini
    totalUsers: 84203,      // ← Update ini
    avgLatency: 66.8,       // ← Update ini
    avgJitter: 87.1         // ← Update ini
  },
  sites: [
    {
      id: 1,
      name: 'Starlink - Jakarta',
      type: 'starlink',     // starlink | bts | blankspot
      lat: -6.2088,
      lng: 106.8456,
      status: 'excellent',  // excellent | good | fair | poor
      users: 4523,
      latency: 26,
      jitter: 11
    },
    // Tambah sites lain...
  ]
};
```

Upload file yang sudah diubah → Auto-update!

### Ganti Warna Tema

Edit `assets/css/styles.css`:

```css
:root {
  --neon-blue: #00d4ff;     /* ← Ganti warna */
  --neon-cyan: #00f5d4;
  --neon-purple: #a855f7;
  /* ... */
}
```

## 🐛 Troubleshooting Cepat

### ❌ Map tidak muncul
**Solusi:** Buka Console (F12) → Cek error → Biasanya `network-data.js` belum load
- Pastikan `data/network-data.js` ada di path yang benar
- Refresh page (Ctrl+F5)

### ❌ Data tidak muncul
**Solusi:** 
- Clear cache (Ctrl+Shift+Delete)
- Atau buka Incognito (Ctrl+Shift+N)
- Cek Console untuk error message

### ❌ Styling rusak
**Solusi:**
- Pastikan `assets/css/styles.css` ter-upload
- Clear cache browser
- Cek structure folder sudah benar

### ❌ 404 Error
**Solusi:**
- Cek nama file: `index.html` dan `dashboard.html` (huruf kecil semua)
- Pastikan di root repository, bukan di subfolder
- GitHub Pages butuh 1-2 menit untuk deploy

## 📱 Testing

Setelah deploy, test di:
- ✅ Chrome/Edge Desktop
- ✅ Firefox Desktop  
- ✅ Safari macOS
- ✅ Chrome Mobile (Android)
- ✅ Safari iOS (iPhone/iPad)

## 📊 Checklist Deploy

Sebelum deploy, pastikan:

- [ ] Semua file extracted dari `Project-Titan.zip`
- [ ] Upload ke repository GitHub yang benar
- [ ] Structure folder sesuai (ada folder `assets/` dan `data/`)
- [ ] GitHub Pages enabled di Settings
- [ ] Link bisa diakses: `https://rykahy.github.io/Project-Titan/`
- [ ] Landing page tampil normal
- [ ] Dashboard tampil dengan map
- [ ] No critical errors di Console

## 🎉 Selesai!

Jika semua langkah diikuti, dashboard Anda sekarang:
- ✅ Live di internet
- ✅ Accessible dari mana saja
- ✅ Hosted gratis di GitHub Pages
- ✅ Fully functional dengan map & charts
- ✅ Responsive di semua device

## 📞 Need Help?

Jika ada masalah:
1. Baca `DEPLOYMENT_GUIDE.md` untuk detail lengkap
2. Baca `README.md` untuk dokumentasi teknis
3. Cek Console browser untuk error details
4. Pastikan semua file ter-upload dengan benar

---

**Good luck! 🚀**

Website Anda siap untuk portfolio atau demo kepada dosen/klien!

© 2025 TITAN Network Operations Center
