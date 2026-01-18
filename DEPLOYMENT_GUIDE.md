# TITAN Dashboard - Panduan Deploy ke GitHub Pages

## 📋 Langkah-langkah Deployment

### Opsi 1: Upload Manual via GitHub Web

1. **Buka repository GitHub Anda:**
   - Pergi ke https://github.com/rykahy/Project-Titan

2. **Upload semua file:**
   - Klik tombol "Add file" → "Upload files"
   - Drag & drop SEMUA file dan folder dari `Project-Titan` ke GitHub:
     ```
     ✓ index.html
     ✓ dashboard.html  
     ✓ README.md
     ✓ folder assets/ (lengkap dengan isinya)
     ✓ folder data/ (lengkap dengan isinya)
     ```
   
3. **Commit perubahan:**
   - Scroll ke bawah
   - Tulis commit message: "Deploy TITAN Dashboard static version"
   - Klik "Commit changes"

4. **Aktifkan GitHub Pages:**
   - Buka Settings repository
   - Scroll ke bagian "Pages" (di sidebar kiri)
   - Di "Source", pilih branch "main"
   - Folder pilih "/ (root)"
   - Klik "Save"

5. **Tunggu deployment:**
   - GitHub akan proses selama 1-2 menit
   - Refresh halaman Settings → Pages
   - Akan muncul link: `https://rykahy.github.io/Project-Titan/`

### Opsi 2: Via Git Command Line (Lebih Cepat)

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/rykahy/Project-Titan.git
cd Project-Titan

# 2. Copy semua file dari folder Project-Titan ke repository
# Pastikan Anda ada di dalam folder repository
cp -r /path/to/Project-Titan/* .

# 3. Add semua file
git add .

# 4. Commit
git commit -m "Deploy TITAN Dashboard - static version for GitHub Pages"

# 5. Push ke GitHub
git push origin main

# 6. Aktifkan GitHub Pages via Settings (lihat Opsi 1 step 4-5)
```

### Opsi 3: Via GitHub Desktop (Paling Mudah)

1. Install GitHub Desktop: https://desktop.github.com/
2. Clone repository `rykahy/Project-Titan`
3. Copy semua file dari `Project-Titan` ke folder repository lokal
4. Di GitHub Desktop, akan terlihat semua perubahan
5. Tulis commit message dan klik "Commit to main"
6. Klik "Push origin" untuk upload
7. Aktifkan GitHub Pages via web (Opsi 1 step 4-5)

## 🔍 Verifikasi Deployment

Setelah deployment selesai, cek:

1. **Landing Page:**  
   https://rykahy.github.io/Project-Titan/index.html

2. **Dashboard:**  
   https://rykahy.github.io/Project-Titan/dashboard.html

3. **Cek Console Browser:**
   - Tekan F12 untuk buka Developer Tools
   - Tab "Console" seharusnya menampilkan:
     ```
     Loaded static network data: {stats: {...}, sites: Array(453), ...}
     Initializing TITAN Dashboard with static data...
     ✓ TITAN Dashboard initialized with static data
     ```

## 🐛 Troubleshooting

### Masalah: File tidak muncul / 404 Error

**Solusi:**
- Pastikan nama file PERSIS: `index.html` dan `dashboard.html` (huruf kecil semua)
- Cek struktur folder:
  ```
  Project-Titan/
  ├── index.html
  ├── dashboard.html
  ├── assets/
  │   ├── css/
  │   ├── js/
  │   └── img/
  └── data/
  ```

### Masalah: Map tidak muncul

**Solusi:**
- Buka Console (F12)
- Lihat error message
- Biasanya karena `data/network-data.js` belum terload
- Pastikan file ada di path yang benar

### Masalah: Styling rusak

**Solusi:**
- Clear cache browser (Ctrl+Shift+Delete)
- Atau buka Incognito Mode (Ctrl+Shift+N)
- Cek apakah `assets/css/styles.css` ter-upload

### Masalah: Data tidak muncul di dashboard

**Solusi:**
- Cek Console untuk error
- Pastikan `data/network-data.js` dan `data/dashboard-init.js` ter-upload
- Refresh halaman beberapa kali

## 📱 Testing di Berbagai Device

Setelah deploy, test di:
- ✅ Desktop (Chrome, Firefox, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablet

## 🔄 Update Data di Kemudian Hari

Untuk update data jaringan:

1. Edit file `data/network-data.js`
2. Ubah data di:
   - `stats`: statistik keseluruhan
   - `sites`: lokasi site (Starlink, BTS, Blankspot)
   - `performance`: data grafik performa
   - `siteDetails`: detail monitoring per-site
3. Upload file yang sudah diubah ke GitHub
4. GitHub Pages akan auto-update dalam 1-2 menit

## 🎨 Kustomisasi Tampilan

### Ganti Warna Tema:

Edit `assets/css/styles.css`, bagian `:root`:

```css
:root {
  --neon-blue: #00d4ff;      /* Ganti dengan warna pilihan */
  --neon-cyan: #00f5d4;
  --neon-purple: #a855f7;
  /* dst... */
}
```

### Ganti Logo:

Replace file `assets/img/titan.jpg` dengan logo Anda

## 📞 Support

Jika ada masalah:
1. Cek Console browser untuk error detail
2. Pastikan semua file ter-upload dengan struktur yang benar
3. Clear cache dan test di Incognito

## ✅ Checklist Deploy

- [ ] Semua file di folder `Project-Titan/` sudah di-upload
- [ ] Struktur folder sesuai (assets/, data/)
- [ ] GitHub Pages sudah diaktifkan di Settings
- [ ] Link `https://rykahy.github.io/Project-Titan/` sudah bisa diakses
- [ ] Landing page (index.html) tampil dengan benar
- [ ] Dashboard (dashboard.html) tampil dengan data
- [ ] Map menampilkan markers
- [ ] Chart menampilkan grafik performa
- [ ] Console tidak ada error kritikal

---

**Good luck dengan deployment! 🚀**

Jika semua berjalan lancar, dashboard Anda akan live di internet dan bisa diakses dari mana saja!
