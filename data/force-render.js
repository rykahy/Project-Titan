// TITAN Dashboard - Force Render on Load
// This script ensures all dashboard elements render correctly, especially after GitHub Pages deployment

(function() {
  'use strict';
  
  console.log('🔧 Force render script loaded');
  
  // Wait for everything to be fully loaded
  window.addEventListener('load', function() {
    setTimeout(function() {
      console.log('🔄 Running force render checks...');
      
      // Check and fix Monitoring Real-Time section
      checkMonitoringSection();
      
      // Check and fix Reliability & Uptime section
      checkReliabilitySection();
      
      // Check and fix Map counters
      checkMapCounters();
      
      // Check and fix Charts
      checkCharts();
      
      console.log('✅ Force render complete');
    }, 1000);
  });
  
  function checkMonitoringSection() {
    const statsList = document.getElementById('statsList');
    if (!statsList) {
      console.warn('statsList element not found');
      return;
    }
    
    // Check if still showing skeletons or empty
    const skeletons = statsList.querySelectorAll('.skeleton');
    if (skeletons.length > 0 || statsList.children.length === 0) {
      console.log('⚠️ Monitoring section needs rendering');
      
      if (typeof NETWORK_DATA !== 'undefined' && NETWORK_DATA.siteDetails) {
        renderMonitoringSection(statsList, NETWORK_DATA.siteDetails);
      }
    } else {
      console.log('✓ Monitoring section OK');
    }
  }
  
  function renderMonitoringSection(container, sites) {
    container.innerHTML = '';
    
    // Summary card
    const summaryCard = document.createElement('div');
    summaryCard.className = 'stat-item';
    summaryCard.style.background = 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(168,85,247,0.1))';
    summaryCard.innerHTML = `
      <div class="stat-header">
        <span class="stat-site" style="color: var(--neon-cyan);">📊 Ringkasan Seluruh Region</span>
      </div>
      <div class="stat-metrics">
        <div class="metric">
          <div class="metric-value">453</div>
          <div class="metric-label">Sites</div>
        </div>
        <div class="metric">
          <div class="metric-value">84.2K</div>
          <div class="metric-label">Users</div>
        </div>
        <div class="metric">
          <div class="metric-value">66.8</div>
          <div class="metric-label">Avg Lat</div>
        </div>
        <div class="metric">
          <div class="metric-value">87.1</div>
          <div class="metric-label">Avg Jitter</div>
        </div>
      </div>
    `;
    container.appendChild(summaryCard);
    
    // Individual site cards
    sites.slice(0, 8).forEach(site => {
      const card = document.createElement('div');
      card.className = 'stat-item';
      
      const isExcellent = site.status === 'EXCELLENT';
      const badgeClass = isExcellent ? 'badge-success' : 'badge-warning';
      const dotClass = isExcellent ? 'online' : 'warning';
      
      card.innerHTML = `
        <div class="stat-header">
          <span class="stat-site">
            ${site.name.includes('STARLINK') ? '🛰️' : '📡'} ${site.name}
          </span>
          <span class="badge ${badgeClass}">
            <span class="status-dot ${dotClass}"></span>
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
      container.appendChild(card);
    });
    
    console.log('✅ Rendered monitoring section with', sites.length, 'sites');
  }
  
  function checkReliabilitySection() {
    const reliabilityGrid = document.getElementById('reliabilityGrid');
    if (!reliabilityGrid) {
      console.warn('reliabilityGrid element not found');
      return;
    }
    
    const skeletons = reliabilityGrid.querySelectorAll('.skeleton');
    if (skeletons.length > 0 || reliabilityGrid.children.length === 0) {
      console.log('⚠️ Reliability section needs rendering');
      
      if (typeof NETWORK_DATA !== 'undefined' && NETWORK_DATA.siteDetails) {
        renderReliabilitySection(reliabilityGrid, NETWORK_DATA.siteDetails);
      }
    } else {
      console.log('✓ Reliability section OK');
    }
  }
  
  function renderReliabilitySection(container, sites) {
    container.innerHTML = '';
    
    // Sort by reliability and take top 6
    const topSites = [...sites]
      .sort((a, b) => b.reliability - a.reliability)
      .slice(0, 6);
    
    topSites.forEach(site => {
      const item = document.createElement('div');
      item.className = 'reliability-item';
      
      const uptimeColor = site.reliability >= 95 ? 'var(--neon-green)' : 
                         site.reliability >= 90 ? 'var(--neon-yellow)' : 
                         'var(--neon-orange)';
      
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
      container.appendChild(item);
    });
    
    console.log('✅ Rendered reliability section with', topSites.length, 'sites');
  }
  
  function checkMapCounters() {
    const countStarlink = document.getElementById('countStarlink');
    const countBTS = document.getElementById('countBTS');
    const countBlankspot = document.getElementById('countBlankspot');
    const countTotal = document.getElementById('countTotal');
    
    if (!countStarlink || countStarlink.textContent === '0') {
      console.log('⚠️ Map counters need updating');
      
      if (typeof NETWORK_DATA !== 'undefined' && NETWORK_DATA.sites) {
        const starlink = NETWORK_DATA.sites.filter(s => s.type === 'starlink').length;
        const bts = NETWORK_DATA.sites.filter(s => s.type === 'bts').length;
        const blankspot = NETWORK_DATA.sites.filter(s => s.type === 'blankspot').length;
        const total = starlink + bts;
        
        if (countStarlink) countStarlink.textContent = starlink;
        if (countBTS) countBTS.textContent = bts;
        if (countBlankspot) countBlankspot.textContent = blankspot;
        if (countTotal) countTotal.textContent = total;
        
        console.log('✅ Updated map counters:', {starlink, bts, blankspot, total});
      }
    } else {
      console.log('✓ Map counters OK');
    }
  }
  
  function checkCharts() {
    const chartCanvas = document.getElementById('mainChart');
    if (!chartCanvas) {
      console.warn('mainChart element not found');
      return;
    }
    
    // Charts will be handled by Chart.js initialization
    // Just log status
    if (window.mainChart) {
      console.log('✓ Chart already initialized');
    } else {
      console.log('⏳ Chart waiting for initialization');
    }
  }
  
})();
