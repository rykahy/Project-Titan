# TITAN Network Operations Center

Platform monitoring jaringan telekomunikasi terpadu untuk Indonesia. Monitoring Starlink & BTS real-time untuk coverage area Pulau Jawa dan Sumatera.

## 🚀 Static Version for GitHub Pages

This is the static version of TITAN Dashboard, converted to work without a backend database.

### Features

- ✅ Interactive HD Map with Leaflet.js
- ✅ Real-time network monitoring visualization
- ✅ Dual infrastructure monitoring (Starlink Satellites & BTS Towers)
- ✅ Coverage analysis across Java & Sumatra
- ✅ Performance metrics & charts
- ✅ Blankspot identification
- ✅ Fully responsive design

### Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Maps:** Leaflet.js with Heatmap plugin
- **Charts:** Chart.js
- **Data:** Static JSON/JavaScript data files
- **Styling:** Custom CSS with Glassmorphism & Neon effects

## 📁 Project Structure

```
titan-static/
├── index.html              # Landing page
├── dashboard.html          # Main dashboard
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   ├── theme.js        # Theme switcher
│   │   ├── ai-assistant.js # AI assistant functionality
│   │   └── helpers.js      # Helper functions
│   └── img/
│       └── titan.jpg       # Logo & favicon
└── data/
    ├── network-data.js     # Static network data
    └── dashboard-init.js   # Dashboard initialization
---

### Customizing Themes

The dashboard supports multiple themes. Edit `assets/css/styles.css` to customize:
- Color schemes (Cyber Blue, Purple, Green, Red)
- Background gradients
- Neon glow effects
- Card styling

## 📱 Features & Usage

### Landing Page (index.html)
- Hero section with animated statistics
- Feature showcase
- Infrastructure details
- Call-to-action button linking to dashboard

### Dashboard (dashboard.html)
- **Interactive Map**: Filter by Island → Province → City → District
- **Real-time Stats**: Network performance metrics
- **Performance Charts**: Historical data visualization
- **Site Monitoring**: Individual site status and metrics
- **AI Assistant**: Interactive help system (UI only in static version)
- **Theme Switcher**: Multiple color schemes

## 🎨 Key Features Converted to Static

### Original (PHP + MySQL)
- Dynamic data from database
- User authentication
- Real-time API calls
- Server-side processing

### Static Version
- Pre-generated data in JavaScript
- No authentication (direct access)
- Client-side data handling
- All processing in browser

## 🐛 Known Limitations

Since this is a static version:
- **No real-time updates**: Data is fixed in JavaScript files
- **No user accounts**: Authentication removed
- **No data persistence**: Changes won't be saved
- **No backend API**: All API calls intercepted and mocked

To add real-time capabilities, connect to a backend API service.

## 🔗 Links

- **Live Demo**: https://rykahy.github.io/Project-Titan/
- **Landing Page**: https://rykahy.github.io/Project-Titan/index.html
- **Dashboard**: https://rykahy.github.io/Project-Titan/dashboard.html

## 📊 Data Coverage

- **Provinces**: 15 (across Java & Sumatra)
- **Network Sites**: 453 total
  - Starlink Satellites: 113 sites
  - BTS Towers: 340 sites  
  - Blankspots: 18 areas
- **Coverage**: Java & Sumatra islands


### Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)


## 🤝 Credits

**Developer**: Riyooo (Riyo Haqiqi)  
**Institution**: Telkom University Jakarta  
**Program**: Telecommunications Engineering
**Project**: TITAN - Network Operations Center

---

© 2025 TITAN · Network Operations Center · Coverage: Java & Sumatra
