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
  
  // Fix 5: Handle site details panel
  window.addEventListener('site-details-ready', function(e) {
    const sites = e.detail.sites;
    console.log('Site details ready:', sites.length, 'sites');
    
    // If there's a site list element, populate it
    const sitesList = document.getElementById('statsList');
    if (sitesList && sites.length > 0) {
      // Clear existing content
      sitesList.innerHTML = '';
      
      // Add sites
      sites.forEach(site => {
        const siteCard = createSiteCard(site);
        sitesList.appendChild(siteCard);
      });
    }
  });
  
  function createSiteCard(site) {
    const card = document.createElement('div');
    card.className = 'stat-card';
    
    const statusClass = site.status.toLowerCase();
    const statusIcon = getStatusIcon(statusClass);
    
    card.innerHTML = `
      <div class="stat-card-header">
        <div class="stat-site-name">${site.name}</div>
        <div class="stat-badge ${statusClass}">${statusIcon} ${site.status}</div>
      </div>
      <div class="stat-card-body">
        <div class="stat-row">
          <span>Reliability:</span>
          <span class="stat-value">${site.reliability}%</span>
        </div>
        <div class="stat-row">
          <span>Users:</span>
          <span class="stat-value">${site.users}</span>
        </div>
        <div class="stat-row">
          <span>Throughput:</span>
          <span class="stat-value">${site.mbps} Mbps</span>
        </div>
        <div class="stat-row">
          <span>Latency:</span>
          <span class="stat-value">${site.ms} ms</span>
        </div>
        <div class="stat-row">
          <span>Jitter:</span>
          <span class="stat-value">${site.jitter} ms</span>
        </div>
      </div>
    `;
    
    return card;
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
