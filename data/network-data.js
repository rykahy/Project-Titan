// TITAN Dashboard - Static Network Data
// Coverage: Pulau Jawa & Sumatera

const NETWORK_DATA = {
  stats: {
    totalSites: 453,
    totalUsers: 84203,
    avgLatency: 66.8,
    avgJitter: 87.1
  },
  
  sites: [
    // Starlink Sites
    { id: 1, name: 'Starlink - Banda Aceh', type: 'starlink', lat: 5.5483, lng: 95.3238, status: 'excellent', users: 1245, latency: 28, jitter: 12 },
    { id: 2, name: 'Starlink - Medan', type: 'starlink', lat: 3.5952, lng: 98.6722, status: 'excellent', users: 2183, latency: 32, jitter: 15 },
    { id: 3, name: 'Starlink - Padang', type: 'starlink', lat: -0.9471, lng: 100.4172, status: 'good', users: 1567, latency: 35, jitter: 18 },
    { id: 4, name: 'Starlink - Pekanbaru', type: 'starlink', lat: 0.5071, lng: 101.4478, status: 'excellent', users: 1892, latency: 29, jitter: 13 },
    { id: 5, name: 'Starlink - Jambi', type: 'starlink', lat: -1.6101, lng: 103.6131, status: 'good', users: 1423, latency: 38, jitter: 21 },
    { id: 6, name: 'Starlink - Palembang', type: 'starlink', lat: -2.9761, lng: 104.7754, status: 'excellent', users: 2456, latency: 31, jitter: 14 },
    { id: 7, name: 'Starlink - Bengkulu', type: 'starlink', lat: -3.8004, lng: 102.2655, status: 'good', users: 987, latency: 42, jitter: 24 },
    { id: 8, name: 'Starlink - Lampung', type: 'starlink', lat: -5.4500, lng: 105.2667, status: 'excellent', users: 1876, latency: 33, jitter: 16 },
    { id: 9, name: 'Starlink - Jakarta', type: 'starlink', lat: -6.2088, lng: 106.8456, status: 'excellent', users: 4523, latency: 26, jitter: 11 },
    { id: 10, name: 'Starlink - Bogor', type: 'starlink', lat: -6.5950, lng: 106.8167, status: 'excellent', users: 2134, latency: 30, jitter: 14 },
    { id: 11, name: 'Starlink - Depok', type: 'starlink', lat: -6.4025, lng: 106.7942, status: 'good', users: 1789, latency: 34, jitter: 17 },
    { id: 12, name: 'Starlink - Tangerang', type: 'starlink', lat: -6.1783, lng: 106.6319, status: 'excellent', users: 2567, latency: 28, jitter: 13 },
    { id: 13, name: 'Starlink - Bekasi', type: 'starlink', lat: -6.2349, lng: 107.0011, status: 'good', users: 2345, latency: 36, jitter: 19 },
    { id: 14, name: 'Starlink - Bandung', type: 'starlink', lat: -6.9175, lng: 107.6191, status: 'excellent', users: 3421, latency: 27, jitter: 12 },
    { id: 15, name: 'Starlink - Cirebon', type: 'starlink', lat: -6.7063, lng: 108.5571, status: 'good', users: 1654, latency: 39, jitter: 22 },
    { id: 16, name: 'Starlink - Semarang', type: 'starlink', lat: -6.9667, lng: 110.4167, status: 'excellent', users: 2876, latency: 29, jitter: 13 },
    { id: 17, name: 'Starlink - Solo', type: 'starlink', lat: -7.5705, lng: 110.8285, status: 'excellent', users: 2234, latency: 31, jitter: 15 },
    { id: 18, name: 'Starlink - Yogyakarta', type: 'starlink', lat: -7.7956, lng: 110.3695, status: 'excellent', users: 2567, latency: 28, jitter: 12 },
    { id: 19, name: 'Starlink - Magelang', type: 'starlink', lat: -7.4797, lng: 110.2178, status: 'good', users: 1234, latency: 37, jitter: 20 },
    { id: 20, name: 'Starlink - Surabaya', type: 'starlink', lat: -7.2575, lng: 112.7521, status: 'excellent', users: 4123, latency: 26, jitter: 11 },
    { id: 21, name: 'Starlink - Malang', type: 'starlink', lat: -7.9797, lng: 112.6304, status: 'excellent', users: 2345, latency: 30, jitter: 14 },
    { id: 22, name: 'Starlink - Banyuwangi', type: 'starlink', lat: -8.2192, lng: 114.3691, status: 'good', users: 1567, latency: 40, jitter: 23 },
    { id: 23, name: 'Starlink - Jember', type: 'starlink', lat: -8.1667, lng: 113.7000, status: 'good', users: 1432, latency: 38, jitter: 21 },
    
    // BTS Sites (selection across Java & Sumatra)
    { id: 101, name: 'BTS - Meuraxa', type: 'bts', lat: 5.5650, lng: 95.2900, status: 'excellent', users: 456, latency: 45, jitter: 28 },
    { id: 102, name: 'BTS - Banda Raya', type: 'bts', lat: 5.5300, lng: 95.3400, status: 'good', users: 389, latency: 52, jitter: 34 },
    { id: 103, name: 'BTS - Medan Kota', type: 'bts', lat: 3.5900, lng: 98.6800, status: 'excellent', users: 678, latency: 48, jitter: 31 },
    { id: 104, name: 'BTS - Medan Baru', type: 'bts', lat: 3.5700, lng: 98.6600, status: 'good', users: 543, latency: 55, jitter: 36 },
    { id: 105, name: 'BTS - Medan Polonia', type: 'bts', lat: 3.5600, lng: 98.6700, status: 'excellent', users: 612, latency: 47, jitter: 29 },
    { id: 106, name: 'BTS - Padang Barat', type: 'bts', lat: -0.9500, lng: 100.3500, status: 'good', users: 434, latency: 58, jitter: 38 },
    { id: 107, name: 'BTS - Kuranji', type: 'bts', lat: -0.9000, lng: 100.3900, status: 'excellent', users: 567, latency: 46, jitter: 30 },
    { id: 108, name: 'BTS - Pekanbaru Kota', type: 'bts', lat: 0.5100, lng: 101.4500, status: 'good', users: 489, latency: 54, jitter: 35 },
    { id: 109, name: 'BTS - Sukajadi', type: 'bts', lat: 0.5200, lng: 101.4400, status: 'excellent', users: 623, latency: 49, jitter: 32 },
    { id: 110, name: 'BTS - Telanaipura', type: 'bts', lat: -1.5900, lng: 103.6000, status: 'good', users: 412, latency: 56, jitter: 37 },
    { id: 111, name: 'BTS - Jambi Timur', type: 'bts', lat: -1.6100, lng: 103.6400, status: 'excellent', users: 534, latency: 50, jitter: 33 },
    { id: 112, name: 'BTS - Ilir Barat I', type: 'bts', lat: -2.9800, lng: 104.7300, status: 'excellent', users: 712, latency: 44, jitter: 27 },
    { id: 113, name: 'BTS - Ilir Timur I', type: 'bts', lat: -2.9600, lng: 104.7600, status: 'good', users: 589, latency: 53, jitter: 35 },
    { id: 114, name: 'BTS - Sukarami', type: 'bts', lat: -2.9300, lng: 104.7200, status: 'excellent', users: 645, latency: 47, jitter: 29 },
    { id: 115, name: 'BTS - Teluk Segara', type: 'bts', lat: -3.7900, lng: 102.2500, status: 'good', users: 378, latency: 59, jitter: 39 },
    { id: 116, name: 'BTS - Gading Cempaka', type: 'bts', lat: -3.8050, lng: 102.2400, status: 'excellent', users: 456, latency: 51, jitter: 34 },
    { id: 117, name: 'BTS - Bandar Lampung', type: 'bts', lat: -5.4500, lng: 105.2700, status: 'excellent', users: 689, latency: 45, jitter: 28 },
    { id: 118, name: 'BTS - Tanjung Karang', type: 'bts', lat: -5.4300, lng: 105.2500, status: 'good', users: 567, latency: 54, jitter: 36 },
    
    // Jakarta BTS (Dense coverage)
    { id: 201, name: 'BTS - Jakarta Pusat', type: 'bts', lat: -6.1862, lng: 106.8342, status: 'excellent', users: 892, latency: 42, jitter: 25 },
    { id: 202, name: 'BTS - Jakarta Selatan', type: 'bts', lat: -6.2608, lng: 106.8142, status: 'excellent', users: 956, latency: 43, jitter: 26 },
    { id: 203, name: 'BTS - Jakarta Barat', type: 'bts', lat: -6.1668, lng: 106.7598, status: 'good', users: 734, latency: 52, jitter: 34 },
    { id: 204, name: 'BTS - Jakarta Timur', type: 'bts', lat: -6.2250, lng: 106.9004, status: 'excellent', users: 823, latency: 44, jitter: 27 },
    { id: 205, name: 'BTS - Jakarta Utara', type: 'bts', lat: -6.1385, lng: 106.8631, status: 'good', users: 678, latency: 51, jitter: 33 },
    { id: 206, name: 'BTS - Menteng', type: 'bts', lat: -6.1944, lng: 106.8294, status: 'excellent', users: 912, latency: 41, jitter: 24 },
    { id: 207, name: 'BTS - Kebayoran', type: 'bts', lat: -6.2424, lng: 106.7831, status: 'excellent', users: 845, latency: 43, jitter: 26 },
    { id: 208, name: 'BTS - Cengkareng', type: 'bts', lat: -6.1367, lng: 106.7378, status: 'good', users: 689, latency: 53, jitter: 35 },
    
    // Bogor, Depok, Tangerang, Bekasi
    { id: 220, name: 'BTS - Bogor Tengah', type: 'bts', lat: -6.5944, lng: 106.7892, status: 'excellent', users: 723, latency: 46, jitter: 29 },
    { id: 221, name: 'BTS - Bogor Barat', type: 'bts', lat: -6.6050, lng: 106.7650, status: 'good', users: 612, latency: 54, jitter: 36 },
    { id: 222, name: 'BTS - Depok', type: 'bts', lat: -6.4050, lng: 106.8189, status: 'excellent', users: 678, latency: 48, jitter: 31 },
    { id: 223, name: 'BTS - Margonda', type: 'bts', lat: -6.3758, lng: 106.8295, status: 'good', users: 589, latency: 52, jitter: 34 },
    { id: 224, name: 'BTS - Tangerang Kota', type: 'bts', lat: -6.1783, lng: 106.6400, status: 'excellent', users: 734, latency: 45, jitter: 28 },
    { id: 225, name: 'BTS - Ciledug', type: 'bts', lat: -6.2425, lng: 106.7133, status: 'good', users: 645, latency: 51, jitter: 33 },
    { id: 226, name: 'BTS - Bekasi Kota', type: 'bts', lat: -6.2383, lng: 107.0011, status: 'excellent', users: 789, latency: 47, jitter: 30 },
    { id: 227, name: 'BTS - Bekasi Timur', type: 'bts', lat: -6.2500, lng: 107.0250, status: 'good', users: 656, latency: 53, jitter: 35 },
    
    // Bandung
    { id: 240, name: 'BTS - Bandung Wetan', type: 'bts', lat: -6.9175, lng: 107.6191, status: 'excellent', users: 856, latency: 43, jitter: 26 },
    { id: 241, name: 'BTS - Cicendo', type: 'bts', lat: -6.9147, lng: 107.5942, status: 'excellent', users: 912, latency: 42, jitter: 25 },
    { id: 242, name: 'BTS - Coblong', type: 'bts', lat: -6.8722, lng: 107.6094, status: 'good', users: 734, latency: 51, jitter: 33 },
    { id: 243, name: 'BTS - Bandung Kulon', type: 'bts', lat: -6.9200, lng: 107.5750, status: 'excellent', users: 789, latency: 45, jitter: 28 },
    { id: 244, name: 'BTS - Cirebon Utara', type: 'bts', lat: -6.7000, lng: 108.5500, status: 'good', users: 567, latency: 55, jitter: 36 },
    { id: 245, name: 'BTS - Cirebon Selatan', type: 'bts', lat: -6.7200, lng: 108.5600, status: 'excellent', users: 623, latency: 49, jitter: 32 },
    
    // Semarang
    { id: 260, name: 'BTS - Semarang Tengah', type: 'bts', lat: -6.9833, lng: 110.4083, status: 'excellent', users: 823, latency: 44, jitter: 27 },
    { id: 261, name: 'BTS - Semarang Utara', type: 'bts', lat: -6.9500, lng: 110.4300, status: 'excellent', users: 878, latency: 43, jitter: 26 },
    { id: 262, name: 'BTS - Semarang Selatan', type: 'bts', lat: -7.0100, lng: 110.4200, status: 'good', users: 712, latency: 52, jitter: 34 },
    { id: 263, name: 'BTS - Banyumanik', type: 'bts', lat: -7.0550, lng: 110.4392, status: 'excellent', users: 756, latency: 46, jitter: 29 },
    
    // Solo & Yogyakarta
    { id: 270, name: 'BTS - Solo Baru', type: 'bts', lat: -7.5705, lng: 110.8285, status: 'excellent', users: 789, latency: 45, jitter: 28 },
    { id: 271, name: 'BTS - Jebres', type: 'bts', lat: -7.5592, lng: 110.8417, status: 'good', users: 678, latency: 53, jitter: 35 },
    { id: 272, name: 'BTS - Laweyan', type: 'bts', lat: -7.5656, lng: 110.7847, status: 'excellent', users: 734, latency: 47, jitter: 30 },
    { id: 273, name: 'BTS - Yogyakarta', type: 'bts', lat: -7.7956, lng: 110.3695, status: 'excellent', users: 845, latency: 44, jitter: 27 },
    { id: 274, name: 'BTS - Gondokusuman', type: 'bts', lat: -7.7828, lng: 110.3789, status: 'excellent', users: 812, latency: 45, jitter: 28 },
    { id: 275, name: 'BTS - Umbulharjo', type: 'bts', lat: -7.8128, lng: 110.4028, status: 'good', users: 689, latency: 52, jitter: 34 },
    
    // Surabaya
    { id: 290, name: 'BTS - Surabaya Pusat', type: 'bts', lat: -7.2575, lng: 112.7521, status: 'excellent', users: 923, latency: 42, jitter: 25 },
    { id: 291, name: 'BTS - Gubeng', type: 'bts', lat: -7.2656, lng: 112.7519, status: 'excellent', users: 878, latency: 43, jitter: 26 },
    { id: 292, name: 'BTS - Wonokromo', type: 'bts', lat: -7.2903, lng: 112.7378, status: 'good', users: 756, latency: 51, jitter: 33 },
    { id: 293, name: 'BTS - Rungkut', type: 'bts', lat: -7.3167, lng: 112.7667, status: 'excellent', users: 812, latency: 46, jitter: 29 },
    { id: 294, name: 'BTS - Kenjeran', type: 'bts', lat: -7.2403, lng: 112.7897, status: 'good', users: 689, latency: 53, jitter: 35 },
    
    // Malang
    { id: 300, name: 'BTS - Malang Kota', type: 'bts', lat: -7.9797, lng: 112.6304, status: 'excellent', users: 789, latency: 45, jitter: 28 },
    { id: 301, name: 'BTS - Lowokwaru', type: 'bts', lat: -7.9444, lng: 112.6147, status: 'excellent', users: 734, latency: 47, jitter: 30 },
    { id: 302, name: 'BTS - Klojen', type: 'bts', lat: -7.9828, lng: 112.6333, status: 'good', users: 678, latency: 52, jitter: 34 },
    { id: 303, name: 'BTS - Blimbing', type: 'bts', lat: -7.9333, lng: 112.6500, status: 'excellent', users: 712, latency: 48, jitter: 31 },
    
    // East Java
    { id: 310, name: 'BTS - Banyuwangi', type: 'bts', lat: -8.2192, lng: 114.3691, status: 'good', users: 623, latency: 56, jitter: 37 },
    { id: 311, name: 'BTS - Jember', type: 'bts', lat: -8.1667, lng: 113.7000, status: 'good', users: 589, latency: 55, jitter: 36 },
    { id: 312, name: 'BTS - Probolinggo', type: 'bts', lat: -7.7542, lng: 113.2161, status: 'excellent', users: 656, latency: 50, jitter: 32 },
    
    // Blankspots (Coverage gaps)
    { id: 401, name: 'Blankspot - Aceh Tengah', type: 'blankspot', lat: 4.6252, lng: 96.8372, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 402, name: 'Blankspot - Nias', type: 'blankspot', lat: 1.0833, lng: 97.6333, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 403, name: 'Blankspot - Mentawai', type: 'blankspot', lat: -2.0667, lng: 99.6500, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 404, name: 'Blankspot - Kerinci', type: 'blankspot', lat: -1.9500, lng: 101.2500, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 405, name: 'Blankspot - Sukabumi Pedalaman', type: 'blankspot', lat: -7.0833, lng: 106.6833, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 406, name: 'Blankspot - Cianjur Selatan', type: 'blankspot', lat: -7.1500, lng: 107.0500, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 407, name: 'Blankspot - Garut Pedalaman', type: 'blankspot', lat: -7.3500, lng: 107.7500, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 408, name: 'Blankspot - Tasikmalaya', type: 'blankspot', lat: -7.4667, lng: 108.1667, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 409, name: 'Blankspot - Cilacap', type: 'blankspot', lat: -7.7264, lng: 109.0154, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 410, name: 'Blankspot - Purworejo', type: 'blankspot', lat: -7.7167, lng: 110.0083, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 411, name: 'Blankspot - Wonogiri', type: 'blankspot', lat: -7.8167, lng: 110.9167, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 412, name: 'Blankspot - Pacitan', type: 'blankspot', lat: -8.2000, lng: 111.0917, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 413, name: 'Blankspot - Ponorogo', type: 'blankspot', lat: -7.8667, lng: 111.4667, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 414, name: 'Blankspot - Trenggalek', type: 'blankspot', lat: -8.0500, lng: 111.7000, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 415, name: 'Blankspot - Tulungagung', type: 'blankspot', lat: -8.0667, lng: 111.9000, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 416, name: 'Blankspot - Blitar Selatan', type: 'blankspot', lat: -8.1500, lng: 112.1500, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 417, name: 'Blankspot - Bondowoso', type: 'blankspot', lat: -7.9167, lng: 113.8167, status: 'critical', users: 0, latency: 0, jitter: 0 },
    { id: 418, name: 'Blankspot - Situbondo', type: 'blankspot', lat: -7.7064, lng: 113.9972, status: 'critical', users: 0, latency: 0, jitter: 0 },
  ],
  
  // Performance data for charts (last 14 days)
  performance: [
    { date: '04 Jan', throughput: 82, latency: 38, users: 76 },
    { date: '05 Jan', throughput: 78, latency: 35, users: 78 },
    { date: '06 Jan', throughput: 84, latency: 42, users: 75 },
    { date: '07 Jan', throughput: 88, latency: 28, users: 80 },
    { date: '08 Jan', throughput: 82, latency: 32, users: 78 },
    { date: '09 Jan', throughput: 86, latency: 36, users: 82 },
    { date: '10 Jan', throughput: 90, latency: 25, users: 85 },
    { date: '11 Jan', throughput: 85, latency: 30, users: 82 },
    { date: '12 Jan', throughput: 88, latency: 34, users: 84 },
    { date: '13 Jan', throughput: 80, latency: 38, users: 80 },
    { date: '14 Jan', throughput: 84, latency: 32, users: 82 },
    { date: '15 Jan', throughput: 87, latency: 29, users: 85 },
    { date: '16 Jan', throughput: 85, latency: 35, users: 83 },
    { date: '17 Jan', throughput: 89, latency: 28, users: 86 }
  ],
  
  // Site details for monitoring panel
  siteDetails: [
    {
      name: 'BTS - Meuraxa',
      status: 'EXCELLENT',
      reliability: 92.1,
      users: 73,
      mbps: 169.4,
      ms: 55,
      jitter: 17
    },
    {
      name: 'BTS - Jaya Baru',
      status: 'EXCELLENT',
      reliability: 86.94,
      users: 45,
      mbps: 73.0,
      ms: 57,
      jitter: 4
    },
    {
      name: 'STARLINK - Baiturrahman',
      status: 'EXCELLENT',
      reliability: 96.25,
      users: 97,
      mbps: 287.6,
      ms: 28,
      jitter: 8
    },
    {
      name: 'BTS - Kuta Alam',
      status: 'POOR',
      reliability: 94.88,
      users: 56,
      mbps: 154.2,
      ms: 62,
      jitter: 19
    }
  ]
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NETWORK_DATA;
}
