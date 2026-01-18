// ============================================================
// TITAN Dashboard - Theme Manager
// ============================================================

(function() {
  const THEME_KEY = 'titan_theme';
  const VALID_THEMES = ['theme-blue', 'theme-pink', 'theme-obsidian', 'theme-emerald'];

  function applyTheme(themeName) {
    const theme = VALID_THEMES.includes(themeName) ? themeName : 'theme-blue';
    
    // Remove all theme classes
    document.body.classList.remove(...VALID_THEMES);
    
    // Add new theme
    document.body.classList.add(theme);
    
    // Save to localStorage
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      console.warn('Could not save theme preference');
    }
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || 'theme-blue';
    } catch (e) {
      return 'theme-blue';
    }
  }

  function initThemeSelect(selectId = 'themeSelect') {
    const select = document.getElementById(selectId);
    const savedTheme = getSavedTheme();
    
    // Apply saved theme immediately
    applyTheme(savedTheme);
    
    if (!select) return;
    
    // Set select value
    select.value = savedTheme;
    
    // Add change listener
    select.addEventListener('change', (e) => {
      applyTheme(e.target.value);
    });
  }

  // Apply theme on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
  });

  // Expose to global scope
  window.applyTheme = applyTheme;
  window.initThemeSelect = initThemeSelect;
  window.getSavedTheme = getSavedTheme;
})();
