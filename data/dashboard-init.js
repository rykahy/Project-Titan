// TITAN Dashboard - Static Data Initialization
// This script replaces API calls with static data

(function() {
  'use strict';
  
  // Wait for DOM and network data to be loaded
  if (typeof NETWORK_DATA === 'undefined') {
    console.error('NETWORK_DATA not loaded!');
    return;
  }
  
  console.log('Initializing TITAN Dashboard with static data...');
  
  // Mock jget function for API calls
  window.jget = async function(url) {
    console.log('jget called:', url);
    
    // Parse URL to determine what data to return
    if (url.includes('action=hierarchy')) {
      return {
        islands: ['JAWA', 'SUMATERA'],
        provinces: {
          'JAWA': ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Banten', 'DI Yogyakarta'],
          'SUMATERA': ['Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan', 'Bengkulu', 'Lampung', 'Kepulauan Bangka Belitung']
        },
        cities: extractCities(NETWORK_DATA.sites),
        districts: extractDistricts(NETWORK_DATA.sites)
      };
    }
    
    if (url.includes('action=districts')) {
      return {
        districts: extractDistricts(NETWORK_DATA.sites)
      };
    }
    
    // Stats/monitoring data
    if (url.includes('limit=15')) {
      const activeSites = NETWORK_DATA.sites.filter(s => s.type !== 'blankspot');
      
      return {
        summary: {
          total_sites: activeSites.length,
          total_users: NETWORK_DATA.stats.totalUsers,
          avg_latency_ms: NETWORK_DATA.stats.avgLatency.toFixed(1) + ' ms',
          avg_throughput_mbps: '145.2 Mbps'
        },
        latest: NETWORK_DATA.siteDetails.map((site, idx) => ({
          site_id: idx + 1,
          site_name: site.name,
          site_type: site.name.includes('STARLINK') ? 'STARLINK' : 'BTS',
          district_name: 'Jakarta',
          city_name: 'DKI Jakarta',
          active_users: site.users,
          throughput_mbps: site.mbps,
          latency_ms: site.ms,
          jitter_ms: site.jitter,
          reliability: site.reliability
        })),
        reliability: NETWORK_DATA.siteDetails.reduce((acc, site, idx) => {
          acc[idx + 1] = {
            site_name: site.name,
            uptime_pct: site.reliability
          };
          return acc;
        }, {}),
        alerts: []
      };
    }
    
    // Chart data
    if (url.includes('days=')) {
      return {
        performance: {
          timestamps: NETWORK_DATA.performance.map((d, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (NETWORK_DATA.performance.length - i));
            return date.toISOString();
          }),
          throughput: NETWORK_DATA.performance.map(d => d.throughput),
          latency: NETWORK_DATA.performance.map(d => d.latency),
          users: NETWORK_DATA.performance.map(d => d.users)
        }
      };
    }
    
    // Default map data
    return {
      sites: {
        type: 'FeatureCollection',
        features: NETWORK_DATA.sites.map(site => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [site.lng, site.lat]
          },
          properties: {
            id: site.id,
            name: site.name,
            type: site.type,
            status: site.status,
            users: site.users,
            latency: site.latency,
            jitter: site.jitter
          }
        }))
      },
      blankspots: {
        type: 'FeatureCollection',
        features: NETWORK_DATA.sites
          .filter(s => s.type === 'blankspot')
          .map(site => ({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [site.lng, site.lat]
            },
            properties: {
              name: site.name
            }
          }))
      },
      summary: {
        starlink_count: NETWORK_DATA.sites.filter(s => s.type === 'starlink').length,
        bts_count: NETWORK_DATA.sites.filter(s => s.type === 'bts').length,
        blankspot_count: NETWORK_DATA.sites.filter(s => s.type === 'blankspot').length,
        total_sites: NETWORK_DATA.sites.filter(s => s.type !== 'blankspot').length,
        total_users: NETWORK_DATA.stats.totalUsers,
        avg_latency_ms: NETWORK_DATA.stats.avgLatency.toFixed(1) + ' ms',
        avg_throughput_mbps: '145.2 Mbps'
      },
      latest: NETWORK_DATA.siteDetails.map((site, idx) => ({
        site_id: idx + 1,
        site_name: site.name,
        site_type: site.name.includes('STARLINK') ? 'STARLINK' : 'BTS',
        district_name: 'Jakarta',
        city_name: 'DKI Jakarta',
        active_users: site.users,
        throughput_mbps: site.mbps,
        latency_ms: site.ms,
        jitter_ms: site.jitter,
        reliability: site.reliability
      })),
      reliability: NETWORK_DATA.siteDetails.reduce((acc, site, idx) => {
        acc[idx + 1] = {
          site_name: site.name,
          uptime_pct: site.reliability
        };
        return acc;
      }, {}),
      site_metrics: {}
    };
  };
  
  function extractCities(sites) {
    const cities = {};
    sites.forEach(site => {
      const parts = site.name.split(' - ');
      if (parts.length > 1) {
        const city = parts[1].trim();
        if (!cities[city]) cities[city] = true;
      }
    });
    return Object.keys(cities);
  }
  
  function extractDistricts(sites) {
    const districts = [];
    sites.forEach(site => {
      const parts = site.name.split(' - ');
      if (parts.length > 1) {
        districts.push(parts[1].trim());
      }
    });
    return [...new Set(districts)];
  }

  
  // Update statistics on page
  function updateStats() {
    const stats = NETWORK_DATA.stats;
    
    // Update stat cards if they exist
    const totalSitesEl = document.querySelector('[data-stat="total-sites"]');
    if (totalSitesEl) totalSitesEl.textContent = stats.totalSites;
    
    const totalUsersEl = document.querySelector('[data-stat="total-users"]');
    if (totalUsersEl) totalUsersEl.textContent = stats.totalUsers.toLocaleString();
    
    const avgLatencyEl = document.querySelector('[data-stat="avg-latency"]');
    if (avgLatencyEl) avgLatencyEl.textContent = stats.avgLatency.toFixed(1);
    
    const avgJitterEl = document.querySelector('[data-stat="avg-jitter"]');
    if (avgJitterEl) avgJitterEl.textContent = stats.avgJitter.toFixed(1);
  }
  
  // Initialize map with static data
  function initializeMap() {
    console.log('Map data ready:', NETWORK_DATA.sites.length, 'sites');
    
    // Dispatch custom event to notify map is ready
    window.dispatchEvent(new CustomEvent('static-data-ready', {
      detail: { sites: NETWORK_DATA.sites }
    }));
  }
  
  // Initialize performance charts
  function initializeCharts() {
    console.log('Chart data ready:', NETWORK_DATA.performance.length, 'data points');
    
    // Dispatch custom event for charts
    window.dispatchEvent(new CustomEvent('chart-data-ready', {
      detail: { performance: NETWORK_DATA.performance }
    }));
  }
  
  // Initialize site details
  function initializeSiteDetails() {
    console.log('Site details ready:', NETWORK_DATA.siteDetails.length, 'sites');
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('site-details-ready', {
      detail: { sites: NETWORK_DATA.siteDetails }
    }));
  }
  
  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(() => {
        updateStats();
        initializeMap();
        initializeCharts();
        initializeSiteDetails();
        console.log('✓ TITAN Dashboard initialized with static data');
      }, 100);
    });
  } else {
    setTimeout(() => {
      updateStats();
      initializeMap();
      initializeCharts();
      initializeSiteDetails();
      console.log('✓ TITAN Dashboard initialized with static data');
    }, 100);
  }
  
  // Also trigger on window load for extra safety
  window.addEventListener('load', function() {
    // Double-check that site details are rendered
    setTimeout(() => {
      const statsList = document.getElementById('statsList');
      if (statsList && statsList.children.length <= 3) {
        // If still showing skeleton loaders, force render
        console.log('Force rendering site details...');
        initializeSiteDetails();
      }
    }, 500);
  });
  
})();
