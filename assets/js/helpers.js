// ============================================================
// TITAN Dashboard - Helper Utilities
// ============================================================

// Fetch wrapper with error handling
async function jget(url, options = {}) {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    throw error;
  }
}

// Format bytes to human readable
function fmtBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Format number with thousand separators
function fmtNumber(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

// Format latency with color indicator
function fmtLatency(ms) {
  let color = 'var(--neon-green)';
  if (ms > 50) color = 'var(--neon-yellow)';
  if (ms > 100) color = 'var(--neon-red)';
  return `<span style="color: ${color}">${ms} ms</span>`;
}

// Format throughput
function fmtThroughput(mbps) {
  let color = 'var(--neon-green)';
  if (mbps < 50) color = 'var(--neon-yellow)';
  if (mbps < 20) color = 'var(--neon-red)';
  return `<span style="color: ${color}">${mbps.toFixed(1)} Mbps</span>`;
}

// Calculate health score
function calculateHealthScore(latency, jitter, throughput) {
  let score = 100;
  
  // Latency impact (lower is better)
  if (latency > 20) score -= Math.min(30, (latency - 20) * 0.5);
  if (latency > 100) score -= 20;
  
  // Jitter impact (lower is better)
  if (jitter > 5) score -= Math.min(20, (jitter - 5) * 2);
  
  // Throughput bonus (higher is better)
  score += Math.min(20, throughput / 5);
  
  return Math.max(0, Math.min(100, Math.round(score)));
}

// Get health status
function getHealthStatus(score) {
  if (score >= 80) return { label: 'Excellent', class: 'badge-success', icon: '✓' };
  if (score >= 60) return { label: 'Good', class: 'badge-info', icon: '●' };
  if (score >= 40) return { label: 'Fair', class: 'badge-warning', icon: '!' };
  return { label: 'Poor', class: 'badge-danger', icon: '✗' };
}

// Create health badge HTML
function createHealthBadge(latency, jitter, throughput) {
  const score = calculateHealthScore(latency, jitter, throughput);
  const status = getHealthStatus(score);
  return `<span class="badge ${status.class}">
    <span class="status-dot ${score >= 60 ? 'online' : score >= 40 ? 'warning' : 'offline'}"></span>
    ${status.label} (${score}%)
  </span>`;
}

// Time ago formatter
function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffMs = now - past;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  
  if (diffSec < 60) return 'Baru saja';
  if (diffMin < 60) return `${diffMin} menit lalu`;
  if (diffHour < 24) return `${diffHour} jam lalu`;
  return `${diffDay} hari lalu`;
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Animate number counter
function animateNumber(element, start, end, duration = 1000) {
  const startTime = performance.now();
  const diff = end - start;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = start + (diff * easeOutQuart);
    
    element.textContent = Math.round(current);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Show toast notification
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
    <span class="toast-message">${message}</span>
  `;
  
  // Add styles if not exists
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 12px 20px;
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease ${duration - 300}ms forwards;
        z-index: 9999;
        backdrop-filter: blur(10px);
      }
      .toast-success { border-color: var(--neon-green); }
      .toast-error { border-color: var(--neon-red); }
      .toast-warning { border-color: var(--neon-yellow); }
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fadeOut {
        to { opacity: 0; transform: translateX(50px); }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// Copy to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard!', 'success');
  } catch (err) {
    showToast('Failed to copy', 'error');
  }
}

// Generate unique ID
function generateId() {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

// Local storage helpers
const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }
};

// Expose to global scope
window.jget = jget;
window.fmtBytes = fmtBytes;
window.fmtNumber = fmtNumber;
window.fmtLatency = fmtLatency;
window.fmtThroughput = fmtThroughput;
window.calculateHealthScore = calculateHealthScore;
window.getHealthStatus = getHealthStatus;
window.createHealthBadge = createHealthBadge;
window.timeAgo = timeAgo;
window.debounce = debounce;
window.throttle = throttle;
window.animateNumber = animateNumber;
window.showToast = showToast;
window.copyToClipboard = copyToClipboard;
window.generateId = generateId;
window.storage = storage;
