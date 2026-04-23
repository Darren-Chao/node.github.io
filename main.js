// main.js
import { getUser, updateAuthUI } from './auth.js'

console.log('NODE Landing Page Initialized');

// Initialize Auth UI immediately (logged out state)
updateAuthUI(null);

// Check current user status
getUser().then(user => {
  if (user) updateAuthUI(user);
}).catch(err => {
  console.error('Auth check failed:', err);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const body = document.body;

// Create mobile menu overlay if it doesn't exist
let mobileMenu = document.querySelector('.nav-links-mobile');
if (!mobileMenu) {
  mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-links-mobile';
  
  mobileMenu.innerHTML = `
    <div class="mobile-menu-header">
      <a href="shop.html" class="mobile-shop-link">Shop</a>
      <div class="mobile-header-right">
        <button class="mobile-search-trigger" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <a href="#" class="mobile-signin-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Sign In
        </a>
      </div>
    </div>
    <div class="mobile-divider"></div>
    <div class="mobile-secondary-links">
      <a href="educators.html">For <b>Education</b></a>
      <a href="makers.html">For <b>Makers</b></a>
    </div>
    <div class="mobile-divider"></div>
    <div class="mobile-category-links">
      <div class="mobile-category">
        <h3>Products</h3>
        <ul>
          <li><a href="kit1-info.html">NODE Kit 1</a></li>
          <li><a href="sensor-kit-info.html">Sensor Expansion Kit</a></li>
        </ul>
      </div>
      <div class="mobile-category">
        <h3>Community</h3>
        <ul>
          <li><a href="project-hub.html">Project Hub</a></li>
          <li><a href="forum.html">Forum</a></li>
          <li><a href="github-mock.html">GitHub</a></li>
        </ul>
      </div>
      <div class="mobile-category">
        <h3>Documentation</h3>
        <ul>
          <li><a href="hardware-docs.html">Hardware Docs</a></li>
          <li><a href="software-docs.html">Software Docs</a></li>
          <li><a href="guides.html">Guides</a></li>
        </ul>
      </div>
    </div>
  `;
  
  document.body.appendChild(mobileMenu);

  // Bind mobile search trigger
  mobileMenu.querySelector('.mobile-search-trigger').addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('active');
    body.classList.remove('mobile-menu-active');
    // We need to wait for search logic to be initialized or use the same function
    if (typeof openSearch === 'function') {
        openSearch();
    } else {
        // Fallback: trigger click on any desktop search button to fire the listener
        document.querySelector('.search-btn').click();
    }
  });
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('mobile-menu-active');
    
    // Animate hamburger to X
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.classList.remove('mobile-menu-active');
    // Reset hamburger
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Dropdown click for mobile (if needed)
document.querySelectorAll('.dropdown > a').forEach(dropdownTitle => {
  dropdownTitle.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      const menu = dropdownTitle.nextElementSibling;
      menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
      menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
      menu.style.position = 'relative';
      menu.style.transform = 'none';
    }
  });
});

// Simple scroll animation observer
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .hero-content, .ecosystem-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
  observer.observe(el);
});

// Add animation class
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
// Hero Scroll Animation
let ticking = false;
function updateHero() {
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  const heroOverlay = document.querySelector('.hero-overlay');
  if (!hero || !heroContent || !heroOverlay) return;

  const scrolled = window.pageYOffset;
  const heroHeight = hero.offsetHeight;
  
  if (scrolled <= heroHeight) {
    const progress = scrolled / heroHeight;
    
    // Zoom out (scale from 1 down to 0.85)
    const scale = 1 - (progress * 0.15);
    // Blue Tint (opacity from 0 up to 0.6)
    const overlayOpacity = progress * 0.6;
    // Blur (from 0 up to 10px)
    const blur = progress * 10;
    // Fade (opacity from 1 down to 0)
    const opacity = 1 - (progress * 1.3);
    
    heroOverlay.style.opacity = overlayOpacity;
    hero.style.filter = `blur(${blur}px)`;
    heroContent.style.transform = `scale(${scale})`;
    heroContent.style.opacity = Math.max(0, opacity);
  }
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHero);
    ticking = true;
  }
});

/** Search Implementation **/
(function() {
  // 1. Inject Search Overlay HTML
  const searchOverlayHTML = `
    <div class="search-overlay">
      <div class="search-modal">
        <div class="search-header">
          <div class="search-input-container">
            <input type="text" id="site-search-input" placeholder="Search on NODE" autocomplete="off">
            <button class="close-search" aria-label="Close Search">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <div class="search-results-container">
          <div id="search-results-list" class="search-results-inner"></div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', searchOverlayHTML);

  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.getElementById('site-search-input');
  const closeSearchBtn = document.querySelector('.close-search');
  const resultsList = document.getElementById('search-results-list');
  let searchIndex = [];

  // Load Search Index
  fetch('./search-index.json')
    .then(response => response.json())
    .then(data => { searchIndex = data; })
    .catch(err => console.error('Could not load search index:', err));

  // Toggle Search
  function openSearch() {
    searchOverlay.classList.add('active');
    body.classList.add('mobile-menu-active');
    setTimeout(() => searchInput.focus(), 300);
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
    body.classList.remove('mobile-menu-active');
    searchInput.value = '';
    resultsList.innerHTML = '';
  }

  // Bind Search Buttons
  document.addEventListener('click', (e) => {
    if (e.target.closest('.search-btn') || e.target.closest('[aria-label="Search"]')) {
      e.preventDefault();
      openSearch();
    }
  });

  closeSearchBtn.addEventListener('click', closeSearch);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Search Logic
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      resultsList.innerHTML = '';
      return;
    }

    const results = searchIndex.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query)
    );

    displayResults(results, query);
  });

  function displayResults(results, query) {
    if (results.length === 0) {
      resultsList.innerHTML = `
        <div class="no-results" style="text-align: left;">
          <p style="font-size: 1.5rem; color: var(--text-dark); margin-bottom: 32px;">no results found for "<b>${query}</b>"</p>
          <div class="search-tips">
            <p style="font-weight: 700; margin-bottom: 12px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Search Tips</p>
            <ul style="list-style: disc; margin-left: 20px; color: var(--text-muted); font-size: 0.95rem;">
              <li>Make sure all words are spelled correctly.</li>
              <li>Try using different keywords.</li>
            </ul>
          </div>
          <p style="margin-top: 40px;">
            <a href="https://www.google.com/search?q=${encodeURIComponent(query + ' site:' + window.location.hostname)}" target="_blank" style="font-size: 0.8rem; color: #BBB; text-decoration: none;">see results for "${query}" on google</a>
          </p>
        </div>
      `;
      return;
    }

    const html = results.map(item => {
      const snippet = getSnippet(item.content, query);
      return `
        <a href="${item.url}" class="search-result-item">
          <h3>${item.title}</h3>
          <p class="search-result-snippet">${snippet}</p>
        </a>
      `;
    }).join('');

    resultsList.innerHTML = html;
  }

  function getSnippet(content, query) {
    const index = content.toLowerCase().indexOf(query);
    if (index === -1) return content.substring(0, 150) + '...';

    const start = Math.max(0, index - 60);
    const end = Math.min(content.length, index + query.length + 100);
    let snippet = content.substring(start, end);
    
    // Highlight query
    const regex = new RegExp(`(${query})`, 'gi');
    snippet = snippet.replace(regex, '<b>$1</b>');

    return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '');
  }
})();
