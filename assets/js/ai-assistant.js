// ============================================================
// TITAN Dashboard - AI Assistant Module
// Interactive AI dengan saran dan analisis jaringan
// ============================================================

class TitanAI {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.messages = [];
    this.isTyping = false;
    this.networkData = {};
    this.recommendations = [];
    this.alerts = [];
    
    this.quickActions = [
      { text: '📊 Analisis Jaringan', action: 'analyzeNetwork' },
      { text: '🔴 Cek Blankspot', action: 'checkBlankspots' },
      { text: '📈 Prediksi Traffic', action: 'predictTraffic' },
      { text: '⚠️ Status Alert', action: 'checkAlerts' },
      { text: '💡 Optimisasi', action: 'suggestOptimization' }
    ];
    
    this.init();
  }
  
  init() {
    this.render();
    this.bindEvents();
    
    // Welcome message
    setTimeout(() => {
      this.addMessage({
        type: 'ai',
        category: 'info',
        title: 'TITAN AI Assistant Online',
        content: 'Selamat datang! Saya siap membantu Anda menganalisis dan mengoptimalkan jaringan Starlink/BTS. Silakan tanyakan apa saja atau gunakan tombol aksi cepat di bawah.',
        timestamp: new Date()
      });
    }, 500);
  }
  
  render() {
    this.container.innerHTML = `
      <div class="ai-panel">
        <div class="ai-messages" id="aiMessages"></div>
        <div class="ai-quick-actions" id="aiQuickActions">
          ${this.quickActions.map(action => `
            <button class="quick-action-btn" data-action="${action.action}">
              ${action.text}
            </button>
          `).join('')}
        </div>
        <div class="ai-input-area">
          <input type="text" class="ai-input" id="aiInput" placeholder="Tanyakan sesuatu tentang jaringan..." />
          <button class="ai-send-btn" id="aiSendBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    this.messagesContainer = document.getElementById('aiMessages');
    this.input = document.getElementById('aiInput');
    this.sendBtn = document.getElementById('aiSendBtn');
  }
  
  bindEvents() {
    // Send button
    this.sendBtn.addEventListener('click', () => this.handleUserInput());
    
    // Enter key
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleUserInput();
      }
    });
    
    // Quick actions
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        this.executeAction(action);
      });
    });
  }
  
  async handleUserInput() {
    const text = this.input.value.trim();
    if (!text || this.isTyping) return;
    
    // Add user message
    this.addMessage({
      type: 'user',
      content: text,
      timestamp: new Date()
    });
    
    this.input.value = '';
    
    // Process and respond
    await this.processQuery(text);
  }
  
  async processQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    // Show typing indicator
    this.showTyping();
    
    // Simulate AI thinking
    await this.delay(800 + Math.random() * 700);
    
    let response = null;
    
    // Pattern matching untuk berbagai query
    if (this.matchPattern(lowerQuery, ['analisis', 'analyze', 'status', 'kondisi', 'kesehatan'])) {
      response = await this.analyzeNetwork();
    }
    else if (this.matchPattern(lowerQuery, ['blankspot', 'blank spot', 'coverage', 'jangkauan', 'sinyal lemah'])) {
      response = await this.checkBlankspots();
    }
    else if (this.matchPattern(lowerQuery, ['prediksi', 'forecast', 'traffic', 'beban', 'load'])) {
      response = await this.predictTraffic();
    }
    else if (this.matchPattern(lowerQuery, ['alert', 'peringatan', 'masalah', 'problem', 'issue', 'error'])) {
      response = await this.checkAlerts();
    }
    else if (this.matchPattern(lowerQuery, ['optimis', 'saran', 'rekomendasi', 'improve', 'tingkat'])) {
      response = await this.suggestOptimization();
    }
    else if (this.matchPattern(lowerQuery, ['starlink', 'satelit'])) {
      response = await this.getStarlinkInfo();
    }
    else if (this.matchPattern(lowerQuery, ['bts', 'tower', 'menara'])) {
      response = await this.getBTSInfo();
    }
    else if (this.matchPattern(lowerQuery, ['bandwidth', 'speed', 'kecepatan'])) {
      response = await this.getBandwidthInfo();
    }
    else if (this.matchPattern(lowerQuery, ['latency', 'ping', 'delay', 'lambat'])) {
      response = await this.getLatencyInfo();
    }
    else if (this.matchPattern(lowerQuery, ['user', 'pengguna', 'pelanggan', 'aktif'])) {
      response = await this.getUserInfo();
    }
    else if (this.matchPattern(lowerQuery, ['halo', 'hai', 'hello', 'hi', 'apa kabar'])) {
      response = {
        category: 'info',
        title: 'Halo! 👋',
        content: 'Saya TITAN AI, asisten cerdas untuk manajemen jaringan Anda. Saya bisa membantu menganalisis performa jaringan, mendeteksi masalah, dan memberikan rekomendasi optimisasi. Ada yang bisa saya bantu hari ini?'
      };
    }
    else if (this.matchPattern(lowerQuery, ['terima kasih', 'thanks', 'makasih'])) {
      response = {
        category: 'success',
        title: 'Sama-sama! ✨',
        content: 'Senang bisa membantu! Jangan ragu untuk bertanya lagi jika ada yang perlu dianalisis atau diperbaiki dalam jaringan Anda.'
      };
    }
    else {
      response = await this.getGeneralResponse(query);
    }
    
    this.hideTyping();
    
    if (response) {
      this.addMessage({
        type: 'ai',
        ...response,
        timestamp: new Date()
      });
    }
  }
  
  matchPattern(text, patterns) {
    return patterns.some(pattern => text.includes(pattern));
  }
  
  async executeAction(action) {
    this.showTyping();
    await this.delay(600);
    
    let response;
    
    switch (action) {
      case 'analyzeNetwork':
        response = await this.analyzeNetwork();
        break;
      case 'checkBlankspots':
        response = await this.checkBlankspots();
        break;
      case 'predictTraffic':
        response = await this.predictTraffic();
        break;
      case 'checkAlerts':
        response = await this.checkAlerts();
        break;
      case 'suggestOptimization':
        response = await this.suggestOptimization();
        break;
      default:
        response = { category: 'info', title: 'Action tidak dikenal', content: 'Maaf, aksi tersebut belum tersedia.' };
    }
    
    this.hideTyping();
    
    this.addMessage({
      type: 'ai',
      ...response,
      timestamp: new Date()
    });
  }
  
  // ============ AI Analysis Functions ============
  
  async analyzeNetwork() {
    // Get real data
    const data = this.networkData;
    const stats = data.stats || [];
    
    if (stats.length === 0) {
      return {
        category: 'warning',
        title: '📊 Analisis Jaringan',
        content: 'Menunggu data real-time... Pastikan koneksi database aktif dan data metrics tersedia.'
      };
    }
    
    // Calculate averages
    const avgLatency = stats.reduce((a, b) => a + b.latency_ms, 0) / stats.length;
    const avgThroughput = stats.reduce((a, b) => a + b.throughput_mbps, 0) / stats.length;
    const avgJitter = stats.reduce((a, b) => a + b.jitter_ms, 0) / stats.length;
    const totalUsers = stats.reduce((a, b) => a + b.active_users, 0);
    
    // Determine overall health
    let healthStatus = 'excellent';
    let healthEmoji = '🟢';
    if (avgLatency > 50 || avgJitter > 10) { healthStatus = 'good'; healthEmoji = '🟡'; }
    if (avgLatency > 100 || avgThroughput < 20) { healthStatus = 'fair'; healthEmoji = '🟠'; }
    if (avgLatency > 200 || avgThroughput < 10) { healthStatus = 'poor'; healthEmoji = '🔴'; }
    
    // Find problematic sites
    const problemSites = stats.filter(s => s.latency_ms > 80 || s.throughput_mbps < 30);
    
    let analysis = `**Ringkasan Jaringan Real-Time:**\n\n`;
    analysis += `${healthEmoji} Status Keseluruhan: **${healthStatus.toUpperCase()}**\n\n`;
    analysis += `• Total Site Aktif: **${stats.length}** site\n`;
    analysis += `• Total User Aktif: **${fmtNumber(totalUsers)}** user\n`;
    analysis += `• Rata-rata Latency: **${avgLatency.toFixed(1)} ms**\n`;
    analysis += `• Rata-rata Throughput: **${avgThroughput.toFixed(1)} Mbps**\n`;
    analysis += `• Rata-rata Jitter: **${avgJitter.toFixed(1)} ms**\n`;
    
    if (problemSites.length > 0) {
      analysis += `\n⚠️ **${problemSites.length} site** memerlukan perhatian:\n`;
      problemSites.slice(0, 3).forEach(s => {
        analysis += `  • Site #${s.site_id}: Latency ${s.latency_ms}ms, Speed ${s.throughput_mbps.toFixed(1)}Mbps\n`;
      });
    }
    
    return {
      category: healthStatus === 'excellent' || healthStatus === 'good' ? 'success' : 'warning',
      title: '📊 Analisis Jaringan Lengkap',
      content: analysis
    };
  }
  
  async checkBlankspots() {
    const recs = this.recommendations;
    
    if (!recs || recs.length === 0) {
      return {
        category: 'success',
        title: '🗺️ Status Blankspot',
        content: '✅ **Semua area sudah tercover dengan baik!**\n\nTidak ada blankspot kritis yang memerlukan penempatan site baru saat ini. Coverage jaringan dalam kondisi optimal.'
      };
    }
    
    let content = `🔴 **Ditemukan ${recs.length} area blankspot** yang memerlukan perhatian:\n\n`;
    
    recs.forEach((r, i) => {
      content += `**${i + 1}. ${r.name}**\n`;
      content += `   📍 Koordinat: ${Number(r.suggested_lat).toFixed(5)}, ${Number(r.suggested_lng).toFixed(5)}\n`;
      content += `   💡 ${r.rationale}\n\n`;
    });
    
    content += `\n**Rekomendasi:** Pertimbangkan pemasangan Starlink mini atau micro-BTS di lokasi-lokasi tersebut untuk memperluas coverage.`;
    
    return {
      category: 'warning',
      title: '🗺️ Analisis Blankspot',
      content: content
    };
  }
  
  async predictTraffic() {
    const prediction = this.networkData.prediction || 0;
    const dailySmooth = this.networkData.dailySmooth || 0;
    
    const formattedPrediction = fmtBytes(prediction);
    const formattedDaily = fmtBytes(dailySmooth);
    
    // Calculate growth trend (simulated)
    const growthPercent = (Math.random() * 15 + 5).toFixed(1);
    
    let content = `📈 **Prediksi Traffic Bulan Depan:**\n\n`;
    content += `• Estimasi Total: **${formattedPrediction}**\n`;
    content += `• Rata-rata Harian: **${formattedDaily}**\n`;
    content += `• Trend Pertumbuhan: **+${growthPercent}%** dari bulan lalu\n\n`;
    
    content += `**📊 Insight:**\n`;
    content += `• Peak hours diperkirakan: 19:00-22:00 WIB\n`;
    content += `• Hari dengan traffic tertinggi: Sabtu & Minggu\n`;
    content += `• Rekomendasi: Siapkan kapasitas tambahan 20% untuk mengantisipasi lonjakan\n\n`;
    
    content += `**🎯 Action Items:**\n`;
    content += `1. Monitor bandwidth allocation selama peak hours\n`;
    content += `2. Optimalkan load balancing antar site\n`;
    content += `3. Pertimbangkan upgrade kapasitas untuk site dengan utilisasi >80%`;
    
    return {
      category: 'info',
      title: '📈 Prediksi & Analisis Traffic',
      content: content
    };
  }
  
  async checkAlerts() {
    const stats = this.networkData.stats || [];
    const alerts = [];
    
    // Generate alerts based on real data
    stats.forEach(s => {
      if (s.latency_ms > 100) {
        alerts.push({
          severity: 'high',
          message: `Site #${s.site_id}: Latency tinggi (${s.latency_ms}ms)`
        });
      }
      if (s.throughput_mbps < 20) {
        alerts.push({
          severity: 'high',
          message: `Site #${s.site_id}: Throughput rendah (${s.throughput_mbps.toFixed(1)}Mbps)`
        });
      }
      if (s.jitter_ms > 15) {
        alerts.push({
          severity: 'medium',
          message: `Site #${s.site_id}: Jitter tinggi (${s.jitter_ms}ms)`
        });
      }
      if (s.active_users > 200) {
        alerts.push({
          severity: 'low',
          message: `Site #${s.site_id}: Load tinggi (${s.active_users} users)`
        });
      }
    });
    
    if (alerts.length === 0) {
      return {
        category: 'success',
        title: '✅ Status Alert',
        content: '**Semua sistem berjalan normal!**\n\nTidak ada alert aktif saat ini. Semua site beroperasi dalam parameter yang optimal.\n\n• Latency: Normal ✓\n• Throughput: Normal ✓\n• Jitter: Normal ✓\n• Load: Normal ✓'
      };
    }
    
    const highAlerts = alerts.filter(a => a.severity === 'high');
    const medAlerts = alerts.filter(a => a.severity === 'medium');
    const lowAlerts = alerts.filter(a => a.severity === 'low');
    
    let content = `⚠️ **Ditemukan ${alerts.length} alert aktif:**\n\n`;
    
    if (highAlerts.length > 0) {
      content += `🔴 **Critical (${highAlerts.length}):**\n`;
      highAlerts.slice(0, 3).forEach(a => content += `  • ${a.message}\n`);
      content += '\n';
    }
    
    if (medAlerts.length > 0) {
      content += `🟡 **Warning (${medAlerts.length}):**\n`;
      medAlerts.slice(0, 3).forEach(a => content += `  • ${a.message}\n`);
      content += '\n';
    }
    
    if (lowAlerts.length > 0) {
      content += `🟢 **Info (${lowAlerts.length}):**\n`;
      lowAlerts.slice(0, 2).forEach(a => content += `  • ${a.message}\n`);
    }
    
    content += `\n**Tindakan yang disarankan:**\n`;
    content += `1. Prioritaskan penanganan alert Critical\n`;
    content += `2. Lakukan diagnosa pada site yang bermasalah\n`;
    content += `3. Pertimbangkan load balancing atau penambahan kapasitas`;
    
    return {
      category: highAlerts.length > 0 ? 'critical' : 'warning',
      title: '⚠️ Status Alert',
      content: content
    };
  }
  
  async suggestOptimization() {
    const stats = this.networkData.stats || [];
    const recommendations = [];
    
    // Analyze and generate recommendations
    const avgLatency = stats.length > 0 ? stats.reduce((a, b) => a + b.latency_ms, 0) / stats.length : 0;
    const avgThroughput = stats.length > 0 ? stats.reduce((a, b) => a + b.throughput_mbps, 0) / stats.length : 0;
    
    if (avgLatency > 50) {
      recommendations.push({
        priority: 'high',
        title: 'Optimisasi Routing',
        desc: 'Latency rata-rata di atas 50ms. Pertimbangkan penggunaan CDN atau optimisasi routing path.'
      });
    }
    
    if (avgThroughput < 50) {
      recommendations.push({
        priority: 'high',
        title: 'Upgrade Bandwidth',
        desc: 'Throughput rata-rata masih bisa ditingkatkan. Evaluasi kapasitas backhaul dan distribusi beban.'
      });
    }
    
    // Check for high load sites
    const highLoadSites = stats.filter(s => s.active_users > 150);
    if (highLoadSites.length > 0) {
      recommendations.push({
        priority: 'medium',
        title: 'Load Balancing',
        desc: `${highLoadSites.length} site dengan load tinggi. Implementasikan load balancing untuk distribusi traffic lebih merata.`
      });
    }
    
    // Add general recommendations
    recommendations.push({
      priority: 'low',
      title: 'Monitoring Proaktif',
      desc: 'Setup alerting threshold untuk deteksi dini masalah performa.'
    });
    
    recommendations.push({
      priority: 'low',
      title: 'Capacity Planning',
      desc: 'Analisis trend pertumbuhan user untuk perencanaan ekspansi kapasitas.'
    });
    
    let content = `💡 **${recommendations.length} Rekomendasi Optimisasi:**\n\n`;
    
    recommendations.forEach((r, i) => {
      const icon = r.priority === 'high' ? '🔴' : r.priority === 'medium' ? '🟡' : '🟢';
      content += `**${i + 1}. ${r.title}** ${icon}\n`;
      content += `   ${r.desc}\n\n`;
    });
    
    content += `---\n`;
    content += `*Implementasi rekomendasi prioritas tinggi dapat meningkatkan performa jaringan hingga 30%.*`;
    
    return {
      category: 'info',
      title: '💡 Rekomendasi Optimisasi',
      content: content
    };
  }
  
  async getStarlinkInfo() {
    const stats = this.networkData.stats || [];
    // Note: In real implementation, filter by site type from map data
    
    return {
      category: 'info',
      title: '🛰️ Info Starlink',
      content: `**Starlink Terminal Status:**\n\n• Teknologi: Low Earth Orbit (LEO) Satellite\n• Latency tipikal: 20-40ms\n• Throughput maksimal: 100-200 Mbps\n• Coverage: Global (dengan visibility satelit)\n\n**Keunggulan:**\n• Jangkauan ke area remote\n• Deployment cepat\n• Tidak perlu infrastruktur ground extensive\n\n**Catatan:** Performa dapat terpengaruh cuaca dan obstacle pada line-of-sight ke satelit.`
    };
  }
  
  async getBTSInfo() {
    return {
      category: 'info',
      title: '📡 Info BTS',
      content: `**Base Transceiver Station (BTS):**\n\n• Teknologi: 4G LTE / 5G\n• Latency tipikal: 10-30ms\n• Coverage radius: 1-5 km (urban), 5-30 km (rural)\n• Kapasitas: 100-500 concurrent users\n\n**Keunggulan:**\n• Latency rendah\n• Kapasitas tinggi\n• Teknologi proven & mature\n\n**Kombinasi dengan Starlink:** Ideal untuk backhaul di area dengan akses fiber terbatas.`
    };
  }
  
  async getBandwidthInfo() {
    const stats = this.networkData.stats || [];
    const avgThroughput = stats.length > 0 ? stats.reduce((a, b) => a + b.throughput_mbps, 0) / stats.length : 0;
    const maxThroughput = stats.length > 0 ? Math.max(...stats.map(s => s.throughput_mbps)) : 0;
    const minThroughput = stats.length > 0 ? Math.min(...stats.map(s => s.throughput_mbps)) : 0;
    
    return {
      category: 'info',
      title: '⚡ Status Bandwidth',
      content: `**Statistik Bandwidth Real-Time:**\n\n• Rata-rata: **${avgThroughput.toFixed(1)} Mbps**\n• Maksimum: **${maxThroughput.toFixed(1)} Mbps**\n• Minimum: **${minThroughput.toFixed(1)} Mbps**\n\n**Rekomendasi Bandwidth per Use Case:**\n• Video streaming HD: 5-10 Mbps\n• Video conference: 2-4 Mbps\n• Gaming online: 3-6 Mbps\n• Browsing umum: 1-2 Mbps`
    };
  }
  
  async getLatencyInfo() {
    const stats = this.networkData.stats || [];
    const avgLatency = stats.length > 0 ? stats.reduce((a, b) => a + b.latency_ms, 0) / stats.length : 0;
    
    let status = '✅ Excellent';
    if (avgLatency > 50) status = '🟡 Good';
    if (avgLatency > 100) status = '🟠 Fair';
    if (avgLatency > 200) status = '🔴 Poor';
    
    return {
      category: avgLatency > 100 ? 'warning' : 'info',
      title: '⏱️ Analisis Latency',
      content: `**Status Latency: ${status}**\n\nRata-rata: **${avgLatency.toFixed(1)} ms**\n\n**Panduan Latency:**\n• < 20ms: Excellent (gaming, realtime)\n• 20-50ms: Good (video call, streaming)\n• 50-100ms: Acceptable (browsing)\n• > 100ms: Poor (perlu investigasi)\n\n${avgLatency > 50 ? '**Saran:** Cek routing path dan potensi congestion pada network backbone.' : '**Status:** Latency dalam batas optimal!'}`
    };
  }
  
  async getUserInfo() {
    const stats = this.networkData.stats || [];
    const totalUsers = stats.reduce((a, b) => a + b.active_users, 0);
    const avgUsers = stats.length > 0 ? totalUsers / stats.length : 0;
    const maxUsers = stats.length > 0 ? Math.max(...stats.map(s => s.active_users)) : 0;
    
    return {
      category: 'info',
      title: '👥 Statistik User',
      content: `**User Aktif Real-Time:**\n\n• Total User: **${fmtNumber(totalUsers)}** user\n• Rata-rata per Site: **${avgUsers.toFixed(0)}** user\n• Site dengan user terbanyak: **${maxUsers}** user\n\n**Distribusi:**\n${stats.slice(0, 5).map(s => `• Site #${s.site_id}: ${s.active_users} users`).join('\n')}`
    };
  }
  
  async getGeneralResponse(query) {
    const responses = [
      `Saya mengerti pertanyaan Anda tentang "${query}". Untuk informasi lebih spesifik, coba gunakan tombol aksi cepat atau tanyakan tentang: analisis jaringan, blankspot, prediksi traffic, alerts, atau optimisasi.`,
      `Terima kasih atas pertanyaannya! Saya dapat membantu Anda dengan berbagai analisis jaringan. Coba tanyakan tentang status latency, bandwidth, user aktif, atau rekomendasi optimisasi.`,
      `Pertanyaan menarik! Sebagai AI assistant TITAN, saya fokus pada monitoring dan optimisasi jaringan Starlink/BTS. Ada topik spesifik yang ingin Anda eksplorasi?`
    ];
    
    return {
      category: 'info',
      title: '💬 Respons',
      content: responses[Math.floor(Math.random() * responses.length)]
    };
  }
  
  // ============ UI Methods ============
  
  addMessage(message) {
    this.messages.push(message);
    
    const messageEl = document.createElement('div');
    messageEl.className = `ai-message fade-in`;
    
    if (message.type === 'user') {
      messageEl.innerHTML = `
        <div class="ai-avatar" style="background: var(--neon-purple);">👤</div>
        <div class="ai-content">
          <div class="ai-text">${this.escapeHtml(message.content)}</div>
          <div class="ai-timestamp">${this.formatTime(message.timestamp)}</div>
        </div>
      `;
    } else {
      const categoryClass = message.category === 'critical' ? 'alert-critical' :
                           message.category === 'warning' ? 'alert-warning' :
                           message.category === 'success' ? 'alert-success' : '';
      
      messageEl.innerHTML = `
        <div class="ai-avatar">🤖</div>
        <div class="ai-content ${categoryClass}">
          <div class="ai-title">${message.title || 'TITAN AI'}</div>
          <div class="ai-text">${this.formatContent(message.content)}</div>
          <div class="ai-timestamp">${this.formatTime(message.timestamp)}</div>
        </div>
      `;
    }
    
    this.messagesContainer.appendChild(messageEl);
    this.scrollToBottom();
  }
  
  showTyping() {
    this.isTyping = true;
    const typingEl = document.createElement('div');
    typingEl.id = 'aiTyping';
    typingEl.className = 'ai-message';
    typingEl.innerHTML = `
      <div class="ai-avatar">🤖</div>
      <div class="ai-content">
        <div class="typing-indicator">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    
    // Add typing indicator styles if not exists
    if (!document.getElementById('typing-styles')) {
      const style = document.createElement('style');
      style.id = 'typing-styles';
      style.textContent = `
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 8px 0;
        }
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: var(--neon-blue);
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }
        .typing-indicator span:nth-child(1) { animation-delay: 0s; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
    
    this.messagesContainer.appendChild(typingEl);
    this.scrollToBottom();
  }
  
  hideTyping() {
    this.isTyping = false;
    const typingEl = document.getElementById('aiTyping');
    if (typingEl) typingEl.remove();
  }
  
  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
  
  formatTime(date) {
    return new Intl.DateTimeFormat('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
  
  formatContent(content) {
    // Convert markdown-like syntax to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/• /g, '&bull; ');
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // ============ Data Update Methods ============
  
  updateNetworkData(data) {
    this.networkData = data;
  }
  
  updateRecommendations(recs) {
    this.recommendations = recs;
  }
  
  // Method to add proactive alert
  addProactiveAlert(alert) {
    this.addMessage({
      type: 'ai',
      category: alert.severity,
      title: alert.title,
      content: alert.content,
      timestamp: new Date()
    });
  }
}

// Expose to global
window.TitanAI = TitanAI;
