/**
 * CreditLK Offers Page - Static Landing Page
 * Pure vanilla JS with i18n support and tracking hooks
 */

// Ensure GTM dataLayer exists
window.dataLayer = window.dataLayer || [];

// ===== TRACKING HELPERS (s1/s2/s3 + GA4 CID) =====
// Session click id (s1)
function getSessionClickId() {
  const KEY = 'cl_click_id';
  let cid = null;
  try { cid = sessionStorage.getItem(KEY); } catch(e) {}
  if (!cid) {
    cid = 'clk_' + Date.now().toString(36) + '_' + Math.floor(Math.random()*1e8).toString(36);
    try { sessionStorage.setItem(KEY, cid); } catch(e) {}
  }
  return cid;
}

// Read cookie by name
function getCookie(name) {
  try {
    return document.cookie.split(';').map(c => c.trim()).find(c => c.startsWith(name + '='))?.split('=')[1] || null;
  } catch(e) { return null; }
}

// Parse GA client id from _ga cookie (fallback)
function parseGaClientIdFrom_ga() {
  try {
    const raw = decodeURIComponent(getCookie('_ga') || '');
    // GA1.1.XXXXXXXXXX.YYYYYYYYYY -> take last two segments
    const p = raw.split('.');
    if (p.length >= 4) return p.slice(-2).join('.');
  } catch(e) {}
  return null;
}

// Try to get GA4 client_id (s2). If window.GA4_ID is defined, try gtag('get', ...); else fallback to _ga cookie.
function getGa4Cid(cb) {
  try {
    if (typeof gtag === 'function' && window.GA4_ID) {
      gtag('get', window.GA4_ID, 'client_id', function(cid) {
        cid = cid || parseGaClientIdFrom_ga();
        cb(cid || null);
      });
      return;
    }
  } catch(e) {}
  cb(parseGaClientIdFrom_ga());
}

// Build URL with appended params (preserve existing query)
function buildOutboundUrl(base, params) {
  try {
    const u = new URL(base, window.location.href);
    Object.keys(params || {}).forEach(k => {
      if (params[k] !== undefined && params[k] !== null && params[k] !== '') {
        u.searchParams.set(k, String(params[k]));
      }
    });
    return u.toString();
  } catch(e) {
    // If base is not a valid URL, just return as-is
    return base;
  }
}

// Push GTM event safely
function pushGtmEvent(obj) {
  try {
    window.dataLayer.push(obj);
  } catch(e) {
    console.warn('[GTM]', e, obj);
  }
}

// ===== TRANSLATIONS =====
const translations = {
  en: {
    page_title: "CreditLK - Compare Best Loan Offers in Sri Lanka",
    compare_now: "Compare now",
    hero_title: "Find Your Perfect Loan in Sri Lanka",
    hero_subtitle: "Compare rates, apply online, and get approved fast",
    trust_no_hidden_fees: "No hidden fees",
    trust_no_credit_impact: "No impact to credit score",
    trust_free_comparison: "100% free comparison",
    trust_licensed: "Licensed & regulated",
    no_results: "No loan offers available at the moment.",
    loans_selected: "loans selected",
    compare: "Compare",
    clear: "Clear",
    compare_loans: "Compare Loan Offers",
    popular: "POPULAR",
    apr_from: "APR from",
    first_loan: "First loan",
    amount: "Amount",
    age: "Age",
    tenure: "Tenure",
    processing: "Processing",
    days: "days",
    years: "years",
    apply_now: "Apply Now",
    add_to_compare: "Add to Compare",
    remove_from_compare: "Remove from Compare",
    lkr: "LKR"
  },
  si: {
    page_title: "CreditLK - ශ්‍රී ලංකාවේ හොඳම ණය දීමනා සංසන්දනය කරන්න",
    compare_now: "සංසන්දනය කරන්න",
    hero_title: "ඔබට සුදුසු ණය සොයාගන්න",
    hero_subtitle: "අනුපාත සංසන්දනය කර, අන්තර්ජාලයෙන් අයදුම් කර, වේගයෙන් අනුමත කර ගන්න",
    trust_no_hidden_fees: "සැඟවුණු ගාස්තු නැත",
    trust_no_credit_impact: "ණය ලකුණු බලපානය නැත",
    trust_free_comparison: "100% නොමිලේ සංසන්දනය",
    trust_licensed: "බලපත්‍ර ලත් සහ නියාමනය",
    no_results: "මේ මොහොතේ ණය දීමනා නොමැත.",
    loans_selected: "ණය තෝරාගෙන ඇත",
    compare: "සංසන්දනය කරන්න",
    clear: "මකන්න",
    compare_loans: "ණය දීමනා සංසන්දනය කරන්න",
    popular: "ජනප්‍රිය",
    apr_from: "වාර්ෂික අනුපාතය",
    first_loan: "පළමු ණය",
    amount: "ප්‍රමාණය",
    age: "වයස",
    tenure: "කාලය",
    processing: "ක්‍රියාත්මක කිරීම",
    days: "දින",
    years: "අවුරුදු",
    apply_now: "අයදුම් කරන්න",
    add_to_compare: "සංසන්දනයට එක් කරන්න",
    remove_from_compare: "සංසන්දනයෙන් ඉවත් කරන්න",
    lkr: "රු"
  }
};

// Current language
let currentLang = 'en';

// Translation function
function t(key) {
  return translations[currentLang][key] || key;
}

// Update all i18n elements
function updateI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'TITLE') {
      el.textContent = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  
  // Re-render loans to update card text
  if (window.OffersPage) {
    window.OffersPage.renderLoans(window.LOANS);
  }
}

// ===== LOAN DATA =====
// Baked-in loan offers (10 Sri Lankan banks)
window.LOANS = window.LOANS || [
  {
    id: "cashx",
    name: "CashX",
    logo: "assets/logos/cashx.png",
    apr: 5.0,
    firstLoan: "LKR 200000",
    minAmount: 5000,
    maxAmount: 200000,
    ageMin: 21,
    ageMax: 60,
    termMin: 60,
    termMax: 90,
    processing: "In minutes",
    rating: 4.5,
    features: ["Fully online", "Fixed interest rate"],
    url: "https://go.goodaff.eu/cashx.lk/vvts4btpmh",
    popular: true
  },
  {
    id: "loanplus",
    name: "LoanPlus",
    logo: "assets/logos/loanplus.png",
    apr: 3.4,
    firstLoan: "LKR 249000",
    minAmount: 10000,
    maxAmount: 500000,
    ageMin: 18,
    ageMax: 65,
    termMin: 90,
    termMax: 365,
    processing: "Same day",
    rating: 4.7,
    features: ["No collateral", "Flexible repayment", "24/7 support"],
    url: "https://go.goodaff.eu/loanplus.lk/vvts4btpmh",
    popular: true
  },
  {
    id: "monigo",
    name: "Monigo",
    logo: "assets/logos/monigo.png",
    apr: 5,
    firstLoan: "LKR 20000",
    minAmount: 3000,
    maxAmount: 150000,
    ageMin: 20,
    ageMax: 58,
    termMin: 60,
    termMax: 180,
    processing: "Within 1 hour",
    rating: 4.3,
    features: ["Quick online review", "No hidden fees", "Easy application"],
    url: "https://go.goodaff.eu/monigo.lk/vvts4btpmh",
    popular: false
  },
  {
    id: "fino",
    name: "Fino",
    logo: "assets/logos/fino.png",
    apr: "For first loan 0",
    firstLoan: "LKR 20000",
    minAmount: 3000,
    maxAmount: 150000,
    ageMin: 20,
    ageMax: 60,
    termMin: 90,
    termMax: 180,
    processing: "10 minutes",
    rating: 4.1,
    features: ["Mobile app"],
    url: "https://go.goodaff.eu/fino.lk/vvts4btpmh",
    popular: true
  },
  {
    id: "oncredit",
    name: "Oncredit",
    logo: "assets/logos/logo-oncredit-lk.png",
    apr: "For first loan 0",
    firstLoan: "LKR 50000",
    minAmount: 2000,
    maxAmount: 120000,
    ageMin: 20,
    ageMax: 55,
    termMin: 120,
    termMax: 180,
    processing: "15 minutes",
    rating: 4.6,
    features: ["Low interest", "Long tenure"],
    url: "https://go.goodaff.eu/oncredit.lk/vvts4btpmh",
    popular: true
  },
  {
    id: "loanme",
    name: "Loanme",
    logo: "assets/logos/loanme.png",
    apr: 3,
    firstLoan: "LKR 18000",
    minAmount: 8000,
    maxAmount: 80000,
    ageMin: 20,
    ageMax: 65,
    termMin: 90,
    termMax: 180,
    processing: "15 minutes",
    rating: 4.3,
    features: [ "No credit check"],
    url: "https://go.goodaff.eu/loanme.lk/vvts4btpmh",
    popular: false
  },
  
];

// ===== NAMESPACED OFFERS PAGE LOGIC =====
window.OffersPage = (function() {
  const MAX_COMPARE = 3;
  const MIN_COMPARE = 2;
  let selectedLoans = [];

  /**
   * Format amount with comma separators
   */
  function formatAmount(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /**
   * Render loan cards
   */
  function renderLoans(loans) {
    const container = document.getElementById('offersList');
    const noResults = document.getElementById('noResults');
    
    if (!loans || loans.length === 0) {
      container.innerHTML = '';
      noResults.style.display = 'block';
      return;
    }
    
    noResults.style.display = 'none';
    container.innerHTML = loans.map((loan, index) => `
      <article class="loan-card" data-loan-id="${loan.id}" data-bank="${loan.id}">
        ${loan.popular ? `<span class="popular-badge">${t('popular')}</span>` : ''}
        
        <div class="card-header">
          <img
            src="${loan.logo}"
            alt="${loan.name} logo"
            class="bank-logo"
            width="120" height="48"
            decoding="async"
            loading="${index > 3 ? 'lazy' : 'eager'}"
            fetchpriority="${index === 0 ? 'high' : 'auto'}"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%2248%22%3E%3Crect fill=%22%23eee%22 width=%22120%22 height=%2248%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2212%22 fill=%22%23999%22%3E${loan.name}%3C/text%3E%3C/svg%3E'">
          <div>
            <h3 class="bank-name">${loan.name}</h3>
            <div class="rating">
              ${'★'.repeat(Math.floor(loan.rating))}${'☆'.repeat(5 - Math.floor(loan.rating))}
              <span>${loan.rating}</span>
            </div>
          </div>
        </div>
        
        <div class="apr-display">
          <span class="apr-value">${loan.apr}%</span>
          <span class="apr-label">${t('apr_from')}</span>
        </div>
        
        <div class="loan-details">
          <div class="detail-row">
            <span class="detail-label">${t('amount')}:</span>
            <span>${t('lkr')} ${formatAmount(loan.minAmount)} - ${formatAmount(loan.maxAmount)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">${t('tenure')}:</span>
            <span>${loan.termMin}-${loan.termMax} ${t('days')}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">${t('processing')}:</span>
            <span>${loan.processing}</span>
          </div>
        </div>
        
        <ul class="features-list">
          ${loan.features.slice(0, 2).map(f => `<li>${f}</li>`).join('')}
        </ul>
        
        <div class="card-actions">
          <button class="js-credit-apply"
                  data-action="apply"
                  data-id="${loan.id}"
                  data-bank="${loan.id}"
                  data-url="${loan.url}"
                  data-rate="${loan.apr}"
                  data-position="${index}">
            ${t('apply_now')}
          </button>
          <button class="btn-compare-add" data-action="compare-toggle" data-loan-id="${loan.id}">
            ${selectedLoans.includes(loan.id) ? t('remove_from_compare') : t('add_to_compare')}
          </button>
        </div>
      </article>
    `).join('');
    // remove skeleton placeholders once content is rendered
    if (container.classList.contains('skeleton-grid')) {
      container.classList.remove('skeleton-grid');
    }
    // Attach event listeners
    attachApplyListeners();
    attachCompareListeners();
  }

  /**
   * Attach click listeners to Apply buttons
   */
  function attachApplyListeners() {
    document.querySelectorAll('.js-credit-apply').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const bankId  = this.dataset.bank || this.dataset.id || '';
        const meta = {
          url: this.dataset.url || '',
          position: this.dataset.position || '',
          rate: this.dataset.rate || ''
        };
        // Push GTM event for click
        pushGtmEvent({
          event: 'application_click',
          loan_id: bankId,
          bank_name: bankId,
          apr: meta.rate,
          position: meta.position
        });
        applyForLoan(bankId, meta);
      });
    });
  }

  /**
   * Attach click listeners to Compare buttons
   */
  function attachCompareListeners() {
    document.querySelectorAll('.btn-compare-add').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const loanId = this.getAttribute('data-loan-id');
        const before = selectedLoans.includes(loanId);
        toggleCompareSelection(loanId);
        const after = selectedLoans.includes(loanId);
        pushGtmEvent({
          event: after ? 'compare_add' : 'compare_remove',
          loan_id: loanId
        });
      });
    });
  }

  /**
   * Toggle loan selection for comparison
   */
  function toggleCompareSelection(loanId) {
    const index = selectedLoans.indexOf(loanId);
    
    if (index > -1) {
      selectedLoans.splice(index, 1);
      console.log('[Compare] Removed:', loanId);
    } else {
      if (selectedLoans.length >= MAX_COMPARE) {
        alert(`You can compare up to ${MAX_COMPARE} loans at a time.`);
        return;
      }
      selectedLoans.push(loanId);
      console.log('[Compare] Added:', loanId);
    }
    
    updateCompareUI();
  }

  /**
   * Update comparison UI
   */
  function updateCompareUI() {
    const compareBar = document.getElementById('compareBar');
    const compareCount = document.getElementById('compareCount');
    const compareList = document.getElementById('compareList');
    const compareOpenBtn = document.getElementById('compareOpenBtn');
    
    compareCount.textContent = selectedLoans.length;
    
    if (selectedLoans.length > 0) {
      compareBar.style.display = 'block';
    } else {
      compareBar.style.display = 'none';
    }
    
    compareOpenBtn.disabled = selectedLoans.length < MIN_COMPARE;
    
    const selectedLoanData = window.LOANS.filter(l => selectedLoans.includes(l.id));
    compareList.innerHTML = selectedLoanData.map(loan => 
      `<span class="compare-chip">${loan.name}</span>`
    ).join('');
    
    document.querySelectorAll('.loan-card').forEach(card => {
      const loanId = card.getAttribute('data-loan-id');
      if (selectedLoans.includes(loanId)) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
    
    document.querySelectorAll('.btn-compare-add').forEach(btn => {
      const loanId = btn.getAttribute('data-loan-id');
      if (selectedLoans.includes(loanId)) {
        btn.textContent = t('remove_from_compare');
      } else {
        btn.textContent = t('add_to_compare');
      }
    });
  }

  /**
   * Open comparison modal
   */
  function openCompareModal() {
    if (selectedLoans.length < MIN_COMPARE) {
      alert(`Please select at least ${MIN_COMPARE} loans to compare.`);
      return;
    }
    
    const modal = document.getElementById('compareModal');
    const compareCards = document.getElementById('compareCards');
    
    const selectedLoanData = window.LOANS.filter(l => selectedLoans.includes(l.id));
    compareCards.innerHTML = selectedLoanData.map(loan => `
      <article class="loan-card" data-loan-id="${loan.id}">
        <div class="card-header">
          <img
            src="${loan.logo}"
            alt="${loan.name} logo"
            class="bank-logo"
            width="120" height="48"
            decoding="async"
            loading="eager"
            fetchpriority="auto"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%2248%22%3E%3Crect fill=%22%23eee%22 width=%22120%22 height=%2248%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2212%22 fill=%22%23999%22%3E${loan.name}%3C/text%3E%3C/svg%3E'">
          <div>
            <h3 class="bank-name">${loan.name}</h3>
            <div class="rating">
              ${'★'.repeat(Math.floor(loan.rating))}${'☆'.repeat(5 - Math.floor(loan.rating))}
              <span>${loan.rating}</span>
            </div>
          </div>
        </div>
        
        <div class="apr-display">
          <span class="apr-value">${loan.apr}%</span>
          <span class="apr-label">${t('apr_from')}</span>
        </div>
        
        <div class="loan-details">
          <div class="detail-row">
            <span class="detail-label">${t('first_loan')}:</span>
            <span>${loan.firstLoan}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">${t('amount')}:</span>
            <span>${t('lkr')} ${formatAmount(loan.minAmount)} - ${formatAmount(loan.maxAmount)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">${t('age')}:</span>
            <span>${loan.ageMin}-${loan.ageMax} ${t('years')}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">${t('tenure')}:</span>
            <span>${loan.termMin}-${loan.termMax} ${t('days')}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">${t('processing')}:</span>
            <span>${loan.processing}</span>
          </div>
        </div>
        
        <ul class="features-list">
          ${loan.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        
        <div class="card-actions">
          <button class="js-credit-apply"
                  data-action="apply"
                  data-id="${loan.id}"
                  data-bank="${loan.id}"
                  data-url="${loan.url}"
                  data-rate="${loan.apr}"
                  data-position="modal">
            ${t('apply_now')}
          </button>
        </div>
      </article>
    `).join('');
    
    attachApplyListeners();
    modal.style.display = 'block';
    pushGtmEvent({ event: 'compare_open', selected_count: selectedLoans.length });
    const closeBtn = document.getElementById('compareCloseBtn');
    closeBtn.focus();
    
    console.log('[Compare] Modal opened with', selectedLoans.length, 'loans');
  }

  /**
   * Close comparison modal
   */
  function closeCompareModal() {
    const modal = document.getElementById('compareModal');
    modal.style.display = 'none';
  }

  /**
   * Clear all selections
   */
  function clearCompare() {
    pushGtmEvent({ event: 'compare_clear', cleared_count: selectedLoans.length });
    selectedLoans = [];
    updateCompareUI();
  }

  /**
   * Initialize the page
   */
  function init() {
    // Check for language parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
      currentLang = langParam;
      document.documentElement.lang = currentLang;
      document.getElementById('langToggle').value = currentLang;
    }
    
    // Update i18n
    updateI18n();
    
    // Load and render loans
    renderLoans(window.LOANS);
    
    // Language toggle
    document.getElementById('langToggle').addEventListener('change', function(e) {
      currentLang = e.target.value;
      document.documentElement.lang = currentLang;
      
      // Update URL
      const url = new URL(window.location);
      url.searchParams.set('lang', currentLang);
      window.history.replaceState({}, '', url);
      
      updateI18n();
    });
    
    // Header compare button
    document.getElementById('headerCompareBtn').addEventListener('click', function() {
      pushGtmEvent({ event: 'header_compare_click', selected_count: selectedLoans.length });
      if (selectedLoans.length >= MIN_COMPARE) {
        openCompareModal();
      } else {
        // Scroll to offers
        document.getElementById('offersList').scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Compare Bar event listeners
    const compareOpenBtn = document.getElementById('compareOpenBtn');
    const compareClearBtn = document.getElementById('compareClearBtn');
    const compareCloseBtn = document.getElementById('compareCloseBtn');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    compareOpenBtn.addEventListener('click', openCompareModal);
    compareOpenBtn.addEventListener('click', function(){ pushGtmEvent({ event: 'compare_open_click' }); });
    compareClearBtn.addEventListener('click', clearCompare);
    compareCloseBtn.addEventListener('click', closeCompareModal);
    modalOverlay.addEventListener('click', closeCompareModal);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('compareModal');
      if (modal.style.display === 'block' && e.key === 'Escape') {
        closeCompareModal();
      }
    });
    
    // Focus trap for modal
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('compareModal');
      if (modal.style.display === 'block' && e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  // Public API
  return {
    init,
    renderLoans,
    toggleCompareSelection,
    openCompareModal,
    closeCompareModal,
    clearCompare
  };
})();

// ===== GLOBAL FUNCTIONS =====

/**
 * Apply for a loan (called from button clicks)
 * Exposes global API for tracking integration
 */
function applyForLoan(bankId, meta = {}) {
  const loan = window.LOANS.find(l => l.id === bankId);
  if (!loan) {
    console.error('[Apply] Loan not found:', bankId);
    return;
  }
  const baseUrl = meta.url || loan.url || '';
  const bank = loan.id;

  // Anti double-click guard (600ms)
  if (!applyForLoan._t) applyForLoan._t = 0;
  const now = Date.now();
  if (now - applyForLoan._t < 600) {
    console.warn('[Apply] Ignored double-click');
    return;
  }
  applyForLoan._t = now;

  const s1 = getSessionClickId();
  getGa4Cid(function(s2) {
    const s3 = bank;
    const finalUrl = buildOutboundUrl(baseUrl, { s1, s2, s3 });

    // Push an additional GTM event with resolved params (useful for debugging in Preview)
    pushGtmEvent({
      event: 'application_outbound',
      loan_id: bankId,
      bank_name: loan.name,
      apr: meta.rate || loan.apr,
      position: meta.position || '',
      s1, s2, s3
    });

    // Open partner URL
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  });
}

/**
 * Toggle compare (exposed globally for external integration)
 */
function toggleCompare(loanId) {
  if (window.OffersPage) {
    window.OffersPage.toggleCompareSelection(loanId);
  }
}

// ===== INITIALIZATION =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    window.OffersPage.init();
  });
} else {
  window.OffersPage.init();
}
