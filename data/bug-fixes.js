// TITAN Dashboard - Bug Fixes & Enhancements
// This file contains fixes for common issues in the static version

(function() {
  'use strict';
  
  // Fix 1: Ensure Chart.js data is properly formatted
  window.addEventListener('chart-data-ready', function(e) {
    const performance = e.detail.performance;
    
    // If there's a chart instance, update it
    if (window.performanceChart) {
      window.performanceChart.data.labels = performance.map(d => d.date);
      window.performanceChart.data.datasets[0].data = performance.map(d => d.throughput);
      window.performanceChart.data.datasets[1].data = performance.map(d => d.latency);
      window.performanceChart.update();
    }
  });
  
  // Fix 2: Handle map marker click events properly
  window.addEventListener('static-data-ready', function(e) {
    console.log('Map data ready event received');
    
    // Ensure markers are clickable
    if (window.map && window.sitesLayer) {
      window.sitesLayer.eachLayer(function(layer) {
        layer.on('click', function(ev) {
          console.log('Marker clicked:', ev.target.feature);
        });
      });
    }
  });
  
  // Fix 3: Handle filter changes
  document.addEventListener('DOMContentLoaded', function() {
    // Island filter
    const islandFilter = document.getElementById('filterIsland');
    if (islandFilter) {
      islandFilter.addEventListener('change', function() {
        console.log('Island filter changed:', this.value);
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      });
    }
    
    // Province filter
    const provinceFilter = document.getElementById('filterProvince');
    if (provinceFilter) {
      provinceFilter.addEventListener('change', function() {
        console.log('Province filter changed:', this.value);
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      });
    }
    
    // City filter
    const cityFilter = document.getElementById('filterCity');
    if (cityFilter) {
      cityFilter.addEventListener('change', function() {
        console.log('City filter changed:', this.value);
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      });
    }
    
    // District filter
    const districtFilter = document.getElementById('filterDistrict');
    if (districtFilter) {
      districtFilter.addEventListener('change', function() {
        console.log('District filter changed:', this.value);
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      });
    }
    
    // Reset button
    const resetBtn = document.getElementById('btnResetFilters');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        if (islandFilter) islandFilter.value = 'ALL';
        if (provinceFilter) provinceFilter.value = 'ALL';
        if (cityFilter) cityFilter.value = 'ALL';
        if (districtFilter) districtFilter.value = 'ALL';
        
        if (typeof window.applyFilters === 'function') {
          window.applyFilters();
        }
      });
    }
  });
  
  // Fix 4: Ensure stats update properly
  function updateDashboardStats() {
    if (typeof NETWORK_DATA === 'undefined') return;
    
    const stats = NETWORK_DATA.stats;
    
    // Update any stat elements with data-stat attribute
    document.querySelectorAll('[data-stat]').forEach(el => {
      const statKey = el.getAttribute('data-stat');
      
      if (statKey === 'total-sites' && stats.totalSites) {
        el.textContent = stats.totalSites;
      } else if (statKey === 'total-users' && stats.totalUsers) {
        el.textContent = stats.totalUsers.toLocaleString();
      } else if (statKey === 'avg-latency' && stats.avgLatency) {
        el.textContent = stats.avgLatency.toFixed(1) + ' ms';
      } else if (statKey === 'avg-jitter' && stats.avgJitter) {
        el.textContent = stats.avgJitter.toFixed(1) + ' ms';
      }
    });
  }
  
  // Fix 5: Handle site details panel - Enhanced version
  window.addEventListener('site-details-ready', function(e) {
    const sites = e.detail.sites;
    console.log('Site details ready:', sites.length, 'sites');
    
    // If there's a site list element, populate it
    const sitesList = document.getElementById('statsList');
    if (sitesList && sites.length > 0) {
      // Clear existing content (remove loading skeletons)
      sitesList.innerHTML = '';
      
      // Add summary card first
      const summaryCard = document.createElement('div');
      summaryCard.className = 'stat-item';
      summaryCard.style.background = 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))';
      summaryCard.innerHTML = `
        <div class="stat-header">
          <span class="stat-site" style="color: var(--neon-cyan);">📊 Ringkasan Seluruh Region</span>
        </div>
        <div class="stat-metrics">
          <div class="metric">
            <div class="metric-value">${NETWORK_DATA.stats.totalSites}</div>
            <div class="metric-label">Sites</div>
          </div>
          <div class="metric">
            <div class="metric-value">${(NETWORK_DATA.stats.totalUsers / 1000).toFixed(1)}K</div>
            <div class="metric-label">Users</div>
          </div>
          <div class="metric">
            <div class="metric-value">${NETWORK_DATA.stats.avgLatency.toFixed(1)}</div>
            <div class="metric-label">Avg Lat</div>
          </div>
          <div class="metric">
            <div class="metric-value">145.2</div>
            <div class="metric-label">Avg Speed</div>
          </div>
        </div>
      `;
      sitesList.appendChild(summaryCard);
      
      // Add individual sites
      sites.forEach(site => {
        const siteCard = createEnhancedSiteCard(site);
        sitesList.appendChild(siteCard);
      });
      
      // Also update reliability panel
      updateReliabilityPanel(sites);
    }
  });
  
  function createEnhancedSiteCard(site) {
    const card = document.createElement('div');
    card.className = 'stat-item';
    
    const statusClass = site.status.toLowerCase();
    const statusIcon = getStatusIcon(statusClass);
    const healthScore = calculateSiteHealth(site);
    
    card.innerHTML = `
      <div class="stat-header">
        <span class="stat-site">
          ${site.name.includes('STARLINK') ? '🛰️' : '📡'} ${site.name}
        </span>
        <span class="badge ${statusClass === 'excellent' ? 'badge-success' : statusClass === 'good' ? 'badge-warning' : 'badge-danger'}">
          <span class="status-dot ${healthScore >= 90 ? 'online' : healthScore >= 80 ? 'warning' : 'offline'}"></span>
          ${site.status}
        </span>
      </div>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin: 4px 0;">
        Jakarta, DKI Jakarta
      </div>
      <div class="stat-metrics">
        <div class="metric">
          <div class="metric-value">${site.users}</div>
          <div class="metric-label">Users</div>
        </div>
        <div class="metric">
          <div class="metric-value">${site.mbps.toFixed(1)}</div>
          <div class="metric-label">Mbps</div>
        </div>
        <div class="metric">
          <div class="metric-value">${site.ms}</div>
          <div class="metric-label">ms</div>
        </div>
        <div class="metric">
          <div class="metric-value">${site.jitter}</div>
          <div class="metric-label">Jitter</div>
        </div>
      </div>
    `;
    
    return card;
  }
  
  function calculateSiteHealth(site) {
    // Calculate health score based on latency, jitter, and throughput
    let score = 100;
    
    // Latency penalty (higher is worse)
    if (site.ms > 60) score -= 15;
    else if (site.ms > 50) score -= 10;
    else if (site.ms > 40) score -= 5;
    
    // Jitter penalty
    if (site.jitter > 20) score -= 10;
    else if (site.jitter > 15) score -= 5;
    
    // Throughput bonus (higher is better)
    if (site.mbps > 300) score += 5;
    else if (site.mbps < 100) score -= 10;
    
    return Math.max(0, Math.min(100, score));
  }
  
  function updateReliabilityPanel(sites) {
    const reliabilityGrid = document.getElementById('reliabilityGrid');
    if (!reliabilityGrid) return;
    
    reliabilityGrid.innerHTML = '';
    
    // Take top 6 sites by reliability
    const topSites = [...sites]
      .sort((a, b) => b.reliability - a.reliability)
      .slice(0, 6);
    
    topSites.forEach(site => {
      const item = document.createElement('div');
      item.className = 'reliability-item';
      
      const uptimeColor = site.reliability >= 95 ? 'var(--neon-green)' : 
                         site.reliability >= 90 ? 'var(--neon-yellow)' : 
                         site.reliability >= 85 ? 'var(--neon-orange)' : 'var(--neon-red)';
      
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 600; font-size: 0.85rem;">${site.name}</span>
          <span style="color: ${uptimeColor}; font-family: 'Orbitron', monospace; font-weight: 700; font-size: 0.9rem;">
            ${site.reliability.toFixed(2)}%
          </span>
        </div>
        <div class="uptime-bar">
          <div class="uptime-fill" style="width: ${site.reliability}%; background: ${uptimeColor};"></div>
        </div>
      `;
      reliabilityGrid.appendChild(item);
    });
  }
  
  function getStatusIcon(status) {
    const icons = {
      'excellent': '🟢',
      'good': '🟡',
      'fair': '🟠',
      'poor': '🔴',
      'critical': '⚠️'
    };
    return icons[status] || '⚪';
  }
  
  // Fix 6: Initialize everything when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(updateDashboardStats, 200);
    });
  } else {
    setTimeout(updateDashboardStats, 200);
  }
  
  console.log('✓ Bug fixes loaded');
  
})();
