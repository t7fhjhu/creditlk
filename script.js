// Static loan data
const formatCurrency = (n) =>
  new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    currencyDisplay: 'narrowSymbol', // даёт "Rs"
    maximumFractionDigits: 0
  }).format(n);
const loanOffers = [
    {
        id: "1",
        bankName: "CashX",
        logo: "assets/logos/cashx.png",
        interestRate: 5,
        minAmount: 5000,
        maxAmount: 200000,
        minTerm: 62,
        maxTerm: 90,
        processingTime: "In minutes",
        rating: 4.5,
        features: ["fully online", "Fixed interest rate", "fast transfer"],
        isPopular: true
    },
    {
        id: "2",
        bankName: "Credify",
        logo: "assets/logos/credify.png",
        interestRate: 4,
        minAmount: 5000,
        maxAmount: 200000,
        minTerm: 90,
        maxTerm: 360,
        processingTime: "instant",
        rating: 4.2,
        features: ["No origination fee", "Flexible repayment", "multiple offers"]
    },
    {
        id: "3",
        bankName: "Fino",
        logo: "assets/logos/fino.png",
        interestRate: 7.25,
        minAmount: 3000,
        maxAmount: 150000,
        minTerm: 90,
        maxTerm: 180,
        processingTime: "In minutes",
        rating: 4.1,
        features: ["quick online process", "fast approval"]
    },
    {
        id: "4",
        bankName: "Loanme",
        logo: "assets/logos/loanme.png",
        interestRate: 6.95,
        minAmount: 8000,
        maxAmount: 80000,
        minTerm: 90,
        maxTerm: 180,
        processingTime: "In minutes",
        rating: 4.3,
        features: ["online application", "Same day funding"]
    },
    {
        id: "5",
        bankName: "Loanplus",
        logo: "assets/logos/loanplus.png",
        interestRate: 6.40,
        minAmount: 3000,
        maxAmount: 150000,
        minTerm: 62,
        maxTerm: 90,
        processingTime: "1-2 days",
        rating: 4.4,
        features: ["flexible terms", "easy online signup"],
        isPopular: true
    },
    {
        id: "6",
        bankName: "Monigo",
        logo: "assets/logos/monigo.png",
        interestRate: 7.99,
        minAmount: 2500,
        maxAmount: 35000,
        minTerm: 7,
        maxTerm: 30,
        processingTime: "In minutes",
        rating: 4.0,
        features: ["24h cancellation option", "fully online"]
    },
    {
        id: "7",
        bankName: "Oncredit",
        logo: "assets/logos/logo-oncredit-lk.png",
        interestRate: 6.99,
        minAmount: 2000,
        maxAmount: 120000,
        minTerm: 120,
        maxTerm: 180,
        processingTime: "Few hours",
        rating: 4.6,
        features: ["apply in 5 minutes", "fast payout"]
    },
    {
        id: "8",
        bankName: "Soscredit",
        logo: "assets/logos/sosocredit.png",
        interestRate: 5.99,
        minAmount: 5000,
        maxAmount: 200000,
        minTerm: 90,
        maxTerm: 360,
        processingTime: "in 15 minutes",
        rating: 4.5,
        features: ["multiple lender network", "direct lender payment"],
        isPopular: true
    },
  // {
  //      id: "9",
  //     bankName: "LightStream",
  //   interestRate: 5.73,
  // minAmount: 5000,
  //      maxAmount: 100000,
  //      minTerm: 24,
  //      maxTerm: 144,
  //      processingTime: "Same day",
  //      rating: 4.7,
  //      features: ["Rate Beat Program", "No fees", "Same day funding"]
//    },
    {
        id: "10",
        bankName: "Soso",
        logo: "assets/logos/soso.png",
        interestRate: 7.95,
        minAmount: 5000,
        maxAmount: 200000,
        minTerm: 90,
        maxTerm: 360,
        processingTime: "1-3 days",
        rating: 3.9,
        features: ["multiple lender network", "quick online loan"]
    }
];

// Bank application URLs
const bankApplicationUrls = {
    "CashX": "https://go.goodaff.eu/cashx.lk/vvts4btpmh",
    "Credify": "https://go.goodaff.eu/credify.lk/vvts4btpmh",
    "Fino": "https://go.goodaff.eu/fino.lk/vvts4btpmh",
    "Loanme": "https://go.goodaff.eu/loanme.lk/vvts4btpmh",
    "Loanplus": "https://go.goodaff.eu/loanplus.lk/vvts4btpmh",
    "Monigo": "https://go.goodaff.eu/monigo.lk/vvts4btpmh",
    "Oncredit": "https://go.goodaff.eu/oncredit.lk/vvts4btpmh",
    "Soscredit": "https://go.goodaff.eu/soscredit.lk/vvts4btpmh",
    "Soso": "https://go.goodaff.eu/soso.lk/vvts4btpmh",
 // "Prosper": "https://www.prosper.com/personal-loans/"
};

// Translation data
const translations = {
    en: {
        header: {
            home: "Home",
            loanOffers: "Loan Offers",
            calculator: "Calculator",
            whyChooseUs: "Why Choose Us",
            security: "Security",
            getStarted: "Get Started",
            language: "සිංහල"
        },
        hero: {
            title: "Find the Perfect Loan for Your Needs",
            subtitle: "Compare loan offers from trusted financial institutions and get the best rates available in the market.",
            compareLoans: "Compare Loans Now",
            disclaimer: "No impact to your credit score • 100% free to use"
        },
        filters: {
            title: "Filter Loans",
            loanAmount: "Loan Amount",
            from: "From",
            to: "To",
            maxInterestRate: "Max Interest Rate",
            loanTerm: "Loan Term (Months)",
            selectBanks: "Select Banks",
            allBanks: "All Banks",
            processingTime: "Processing Time",
            any: "Any",
            days1_3: "1-3 Days",
            days4_7: "4-7 Days",
            days8_14: "8-14 Days",
            days15plus: "15+ Days",
            applyFilters: "Apply Filters",
            resetFilters: "Reset Filters"
        },
        results: {
            title: "Compare Loan Offers",
            subtitle: "Found {count} loan offer{plural} matching your criteria. Compare rates, terms, and features to find the perfect loan for your needs.",
            noResults: "No loans match your criteria",
            noResultsDesc: "Try adjusting your filters to see more loan options."
        },
        loanCard: {
            selectForComparison: "Select for comparison",
            applyNow: "Apply Now",
            interestRate: "Interest Rate",
            loanTerm: "Loan Term",
            months: "months",
            processingTime: "Processing Time",
            days: "days",
            features: "Features"
        },
        comparison: {
            title: "Loan Comparison",
            selected: "selected",
            loans: "loans",
            compare: "Compare",
            clearAll: "Clear All",
            remove: "Remove"
        },
        footer: {
            description: "CreditlK helps you find and compare the best loan offers from trusted financial institutions. Make informed decisions about your financial future.",
            quickLinks: "Quick Links",
            home: "Home",
            loanOffers: "Loan Offers",
            calculator: "Loan Calculator",
            aboutUs: "About Us",
            support: "Support",
            helpCenter: "Help Center",
            contactUs: "Contact Us",
            faq: "FAQ",
            legal: "Legal",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            disclaimer: "Disclaimer",
            allRightsReserved: "All rights reserved."
        }
        ,benefits: {
            best: {
              title: "Best Rates",
              text:  "Compare offers from 10+ top banks"
            },
            fast: {
              title: "Fast Approval",
              text:  "Get approved in as little as the same day"
            },
            safe: {
              title: "Secure & Safe",
              text:  "Bank-level 256-bit SSL encryption"
            }
        }
        ,trust: {
            noFees:   "No hidden fees",
            noImpact: "No impact to credit score",
            free:     "100% free comparison",
            licensed: "Licensed & regulated"
        }
        ,features: {
            title: "Why choose CreditLK?",
            subtitle: "Compare transparent offers from trusted lenders and get approved faster.",
            items: {
              bestRate: {
                title: "Best rate match",
                text: "We compare 10+ lenders and highlight the total cost (APR & fees)."
              },
              fast: {
                title: "Fast approvals",
                text: "Instant pre-checks and decisions in minutes with select partners."
              },
              transparent: {
                title: "Transparent pricing",
                text: "Clear terms and representative examples — no hidden fees."
              },
              secure: {
                title: "Secure & regulated",
                text: "Bank-level 256-bit SSL; licensed institutions only."
              }
            },
            trust: {
              noFees: "No hidden fees",
              noScoreImpact: "No credit score impact for comparing",
              freeToUse: "100% free to use"
            },
            cta: {
              title: "Find your best offer today",
              text: "Compare personalized loan offers with transparent terms.",
              btn: "Compare Loans Now"
            }
        }
    },
    si: {
        header: {
            home: "මුල් පිටුව",
            loanOffers: "ණය දීමනා",
            calculator: "ගණකය",
            whyChooseUs: "ඇයි අපව තෝරන්නේ",
            security: "ආරක්ෂාව",
            getStarted: "ආරම්භ කරන්න",
            language: "English"
        },
        hero: {
            title: "ඔබගේ අවශ්‍යතාවන්ට හොඳම ණය සොයාගන්න",
            subtitle: "විශ්වාසනීය මූල්‍ය ආයතනවල ණය දීමනා සැසඳීමෙන් වෙළඳපොලේ ඇති හොඳම අනුපාත ලබාගන්න.",
            compareLoans: "ණය සැසඳීම",
            disclaimer: "ඔබගේ ණය ශ්‍රේණිගත කිරීමට බලපෑමක් නැත • 100% නොමිලේ භාවිතයට"
        },
        filters: {
            title: "ණය පෙරහන",
            loanAmount: "ණය මුදල",
            from: "සිට",
            to: "දක්වා",
            maxInterestRate: "උපරිම පොලී අනුපාතය",
            loanTerm: "ණය කාලය (මාස)",
            selectBanks: "බැංකු තෝරන්න",
            allBanks: "සියලු බැංකු",
            processingTime: "ක්‍රියාකරණ කාලය",
            any: "ඕනෑම",
            days1_3: "දින 1-3",
            days4_7: "දින 4-7",
            days8_14: "දින 8-14",
            days15plus: "දින 15+",
            applyFilters: "පෙරහන් යොදන්න",
            resetFilters: "පෙරහන් නැවත සකස් කරන්න"
        },
        results: {
            title: "ණය දීමනා සංසන්දනය කරන්න",
            subtitle: "ඔබගේ නිර්නායකවලට ගැලපෙන ණය දීමනා {count}ක් සොයා ගන්නා ලදී. ඔබගේ අවශ්‍යතාවලට හොඳම ණය සොයා ගැනීම සඳහා අනුපාත, කාල සීමා සහ විශේෂාංග සංසන්දනය කරන්න.",
            noResults: "ඔබගේ නිර්නායකවලට ගැලපෙන ණය නොමැත",
            noResultsDesc: "වැඩි ණය විකල්ප බැලීමට ඔබගේ පෙරහන සකස් කිරීමට උත්සාහ කරන්න."
        },
        loanCard: {
            selectForComparison: "සංසන්දනය සඳහා තෝරන්න",
            applyNow: "දැන් අයදුම් කරන්න",
            interestRate: "පොලී අනුපාතය",
            loanTerm: "ණය කාලය",
            months: "මාස",
            processingTime: "ක්‍රියාකරණ කාලය",
            days: "දින",
            features: "විශේෂාංග"
        },
        comparison: {
            title: "ණය සංසන්දනය",
            selected: "තෝරාගත්",
            loans: "ණය",
            compare: "සංසන්දනය",
            clearAll: "සියල්ල ඉවතලන්න",
            remove: "ඉවත් කරන්න"
        },
        footer: {
            description: "CreditlK ඔබට විශ්වාසනීය මූල්‍ය ආයතනවල හොඳම ණය දීමනා සොයා ගැනීමට සහ සැසඳීමට උපකාර කරයි. ඔබගේ මූල්‍ය අනාගතය ගැන දැනුවත් තීරණ ගන්න.",
            quickLinks: "ඉක්මන් සබැඳි",
            home: "මුල් පිටුව",
            loanOffers: "ණය දීමනා",
            calculator: "ණය ගණකය",
            aboutUs: "අප ගැන",
            support: "සහාය",
            helpCenter: "උපකාර මධ්‍යස්ථානය",
            contactUs: "අප සම්බන්ධ කරගන්න",
            faq: "නිතර අසන ප්‍රශ්න",
            legal: "නීතිමය",
            privacyPolicy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
            termsOfService: "සේවා නියමයන්",
            disclaimer: "වියාචනය",
            allRightsReserved: "සියලුම හිමිකම් ඇවිරිණි."
        }
        ,benefits: {
            best: {
              title: "හොඳම පොලී අනුපාත",
              text:  "ප්‍රධාන බැංකු 10කට වැඩි යෝජනා සසඳන්න"
            },
            fast: {
              title: "ක්ෂණික අනුමැතිය",
              text:  "එම දිනේම අනුමත විය හැක"
            },
            safe: {
              title: "ආරක්ෂිත සහ විශ්වාසදායි",
              text:  "බැංකු මට්ටමේ 256-bit SSL සංකේතනය"
            }
        }
        ,trust: {
            noFees:   "සඟවා ඇති ගාස්තු නැහැ",
            noImpact: "ණය ශ්‍රේණිගත කිරීමට බලපෑමක් නොමැත",
            free:     "100% නොමිලේ සංසන්දනය",
            licensed: "බලපත්‍ර සහ නියාමිත"
        }
        ,features: {
            title: "ඇයි CreditLK තෝරන්නේ?",
            subtitle: "පැහැදිලි අනුපාත, වේගවත් අනුමත කිරීම් සහ විශ්වාසනීය ණය සසඳීම් — එකතැනක.",
            items: {
              bestRate: {
                title: "හොඳම අනුපාත ගැලපීම",
                text: "බැංකු 10+ කින් ලැබෙන යෝජනා සසඳා මුළු වියදම (APR & ගාස්තු) පෙන්වමු."
              },
              fast: {
                title: "ඉක්මන් අනුමත කිරීම්",
                text: "තෝරාගත් හවුල්කරුවන් සමඟ මිනිත්තු කිහිපයෙන් පෙර-පරීක්ෂා සහ තීරණ."
              },
              transparent: {
                title: "පැහැදිලි ගාස්තු",
                text: "පැහැදිලි නියම සහ නියෝජිත උදාහරණ — සඟවා ඇති ගාස්තු නැහැ."
              },
              secure: {
                title: "ආරක්ෂිත & නියාමිත",
                text: "බැංකු මට්ටමේ 256-bit SSL; බලපත්‍රලාභී ආයතන පමණි."
              }
            },
            trust: {
              noFees: "සඟවා ඇති ගාස්තු නැහැ",
              noScoreImpact: "සංසන්දනය කිරීමෙන් ක්‍රෙඩිට් ලකුණු බලපාන්නේ නැහැ",
              freeToUse: "100% නොමිලේ භාවිතා කරන්න"
            },
            cta: {
              title: "ඔබට හොඳම යෝජනාව අදම සොයන්න",
              text: "පැහැදිලි නියම සමඟ පිරිවිතරයට ගැලපෙන ණය යෝජනා සැසඳන්න.",
              btn: "Loans සැසඳන්න"
            }
        }
    }
};

// Global state
let currentLanguage = 'en';
let filteredLoans = [...loanOffers];
let selectedLoans = [];
let isMobileMenuOpen = false;

// Initialize the application
function init() {
    // Check URL for language
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang === 'si') {
        currentLanguage = 'si';
    }

    // Update page language
    document.documentElement.lang = currentLanguage;
    updateLanguage();
    
    // Initialize filters
    populateBankFilter();
    setupEventListeners();
    initFiltersDrawer();
    
    // Display loans
    displayLoans(filteredLoans);
    updateResultsCount();
    
    // Update interest rate display
    updateInterestRateValue();
}

// Translation functions
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            // Fallback to English
            value = translations['en'];
            for (const fallbackKey of keys) {
                if (value && typeof value === 'object' && fallbackKey in value) {
                    value = value[fallbackKey];
                } else {
                    return key;
                }
            }
            break;
        }
    }
    
    return typeof value === 'string' ? value : key;
}

function formatString(template, values) {
    return template.replace(/\{(\w+)\}/g, (match, key) => {
        return values[key]?.toString() || match;
    });
}

function updateLanguage() {
    // Update all elements with data-key attributes
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = t(key);
    });
    
    // Update page title
    document.title = currentLanguage === 'si' 
        ? 'CreditlK - ඔබගේ අවශ්‍යතාවන්ට හොඳම ණය සොයාගන්න'
        : 'CreditlK - Find the Perfect Loan';
        
    // Update results count
    updateResultsCount();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'si' : 'en';
    
    // Update URL
    const url = new URL(window.location);
    if (currentLanguage === 'si') {
        url.searchParams.set('lang', 'si');
    } else {
        url.searchParams.delete('lang');
    }
    window.history.pushState({}, '', url);
    
    document.documentElement.lang = currentLanguage;
    updateLanguage();
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update URL
    const url = new URL(window.location);
    if (currentLanguage === 'si') {
        url.searchParams.set('lang', 'si');
    } else {
        url.searchParams.delete('lang');
    }
    window.history.pushState({}, '', url);
    
    document.documentElement.lang = currentLanguage;
    updateLanguage();
}

// Event listeners
function setupEventListeners() {
    // Interest rate slider
    const interestRateSlider = document.getElementById('maxInterestRate');
    interestRateSlider.addEventListener('input', updateInterestRateValue);
    
    // Filter inputs
    const filterInputs = [
        'minAmount', 'maxAmount', 'maxInterestRate', 
        'minTerm', 'maxTerm', 'bankSelect', 'processingTime'
    ];
    
    filterInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', applyFilters);
        }
    });
}

// --- Filters drawer (mobile) ---
let filtersDrawer = {
    sidebar: null,
    backdrop: null,
    openBtn: null,
    closeBtn: null
};
let lastFocusBeforeFilters = null;

function initFiltersDrawer() {
    filtersDrawer.sidebar = document.getElementById('filtersSidebar');
    filtersDrawer.backdrop = document.getElementById('filtersBackdrop');

    // Support multiple possible selectors to be robust to markup
    filtersDrawer.openBtn =
        document.getElementById('filtersToggleBtn') ||
        document.querySelector('#filtersToggle .btn-filter') ||
        document.getElementById('openFiltersBtn') ||
        document.querySelector('.btn-filters-toggle');

    filtersDrawer.closeBtn =
        document.getElementById('closeFiltersBtn') ||
        document.querySelector('.btn-close-filters') ||
        (filtersDrawer.sidebar && filtersDrawer.sidebar.querySelector('[data-close="filters"]'));

    // Wire up events if elements exist
    if (filtersDrawer.openBtn && filtersDrawer.sidebar) {
        filtersDrawer.openBtn.addEventListener('click', openFilters);
    }
    if (filtersDrawer.closeBtn) {
        filtersDrawer.closeBtn.addEventListener('click', closeFilters);
    }
    if (filtersDrawer.backdrop) {
        filtersDrawer.backdrop.addEventListener('click', closeFilters);
    }

    // Keyboard handlers (Esc to close, focus trap)
    document.addEventListener('keydown', onFiltersKeydown);

    // Auto-close when switching to desktop layout
    const mq = window.matchMedia('(min-width: 1024px)');
    if (mq.addEventListener) {
        mq.addEventListener('change', (e) => { if (e.matches) closeFilters(); });
    } else if (mq.addListener) {
        mq.addListener((e) => { if (e.matches) closeFilters(); });
    }
}

function openFilters() {
  if (!filtersDrawer.sidebar) return;

  // Работать как выезжающий дравер только на мобильных/планшетах
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;
  if (!isMobile) {
    // На десктопе ничего не делаем (панель и так слева статично),
    // и гарантированно убираем возможные следы
    document.body.classList.remove('no-scroll');
    if (filtersDrawer.backdrop) filtersDrawer.backdrop.classList.remove('show');
    return;
  }

  lastFocusBeforeFilters = document.activeElement;

  filtersDrawer.sidebar.classList.add('open');
  if (filtersDrawer.backdrop) filtersDrawer.backdrop.classList.add('show');

  // a11y
  filtersDrawer.sidebar.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');

  // reflect expanded state on the toggle button/container
  (function(){
    const toggle = document.getElementById('filtersToggleBtn') || document.querySelector('#filtersToggle .btn-filter');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    const toggleContainer = document.getElementById('filtersToggle');
    if (toggleContainer) toggleContainer.setAttribute('aria-expanded', 'true');
  })();

  // focus first focusable control
  const firstFocusable =
    filtersDrawer.sidebar.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  (firstFocusable || filtersDrawer.sidebar).focus();
}

function closeFilters() {
  if (!filtersDrawer.sidebar) return;

  filtersDrawer.sidebar.classList.remove('open');
  if (filtersDrawer.backdrop) filtersDrawer.backdrop.classList.remove('show');

  // a11y
  filtersDrawer.sidebar.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');

  // reflect collapsed state on the toggle button/container
  (function(){
    const toggle = document.getElementById('filtersToggleBtn') || document.querySelector('#filtersToggle .btn-filter');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    const toggleContainer = document.getElementById('filtersToggle');
    if (toggleContainer) toggleContainer.setAttribute('aria-expanded', 'false');
  })();

  // restore focus
  if (lastFocusBeforeFilters) {
    try { lastFocusBeforeFilters.focus(); } catch (e) {}
  }
}

// Safety: при переходе на широкие экраны гарантированно закрываем дравер и снимаем блокировку скролла
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1025px)').matches) {
    if (filtersDrawer.sidebar) filtersDrawer.sidebar.classList.remove('open');
    if (filtersDrawer.backdrop) filtersDrawer.backdrop.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});

function onFiltersKeydown(e) {
    const isOpen = filtersDrawer.sidebar && filtersDrawer.sidebar.classList.contains('open');
    if (!isOpen) return;

    if (e.key === 'Escape') {
        closeFilters();
    } else if (e.key === 'Tab') {
        // trap focus inside the drawer
        const nodes = filtersDrawer.sidebar.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusables = Array.from(nodes).filter(el => !el.disabled && el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            last.focus();
            e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
            first.focus();
            e.preventDefault();
        }
    }
}

function updateInterestRateValue() {
    const slider = document.getElementById('maxInterestRate');
    const valueDisplay = document.getElementById('interestRateValue');
    valueDisplay.textContent = slider.value + '%';
}

// Mobile menu
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const mobileNav = document.getElementById('mobileNav');
    const menuButton = document.querySelector('.btn-mobile-menu .menu-icon');
    
    if (isMobileMenuOpen) {
        mobileNav.classList.add('show');
        menuButton.textContent = '✕';
    } else {
        mobileNav.classList.remove('show');
        menuButton.textContent = '☰';
    }
}

// Navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Filter functions
function populateBankFilter() {
    const bankSelect = document.getElementById('bankSelect');
    const banks = [...new Set(loanOffers.map(loan => loan.bankName))].sort();
    
    // Clear existing options except "All Banks"
    bankSelect.innerHTML = `<option value="" data-key="filters.allBanks">${t('filters.allBanks')}</option>`;
    
    banks.forEach(bank => {
        const option = document.createElement('option');
        option.value = bank;
        option.textContent = bank;
        bankSelect.appendChild(option);
    });
}

function applyFilters() {
    const filters = {
        minAmount: parseInt(document.getElementById('minAmount').value) || 0,
        maxAmount: parseInt(document.getElementById('maxAmount').value) || Infinity,
        maxInterestRate: parseFloat(document.getElementById('maxInterestRate').value) || Infinity,
        minTerm: parseInt(document.getElementById('minTerm').value) || 0,
        maxTerm: parseInt(document.getElementById('maxTerm').value) || Infinity,
        selectedBanks: Array.from(document.getElementById('bankSelect').selectedOptions)
            .map(option => option.value)
            .filter(value => value),
        processingTime: document.getElementById('processingTime').value
    };

    filteredLoans = loanOffers.filter(loan => {
        // Amount range
        if (loan.minAmount > filters.maxAmount || loan.maxAmount < filters.minAmount) {
            return false;
        }
        
        // Interest rate
        if (loan.interestRate > filters.maxInterestRate) {
            return false;
        }
        
        // Term range
        if (loan.minTerm > filters.maxTerm || loan.maxTerm < filters.minTerm) {
            return false;
        }
        
        // Bank selection
        if (filters.selectedBanks.length > 0 && !filters.selectedBanks.includes(loan.bankName)) {
            return false;
        }
        
        // Processing time
        if (filters.processingTime !== 'any') {
            const processingDays = getProcessingDays(loan.processingTime);
            const filterRange = getProcessingRange(filters.processingTime);
            
            if (!isInRange(processingDays, filterRange)) {
                return false;
            }
        }
        
        return true;
    });

    displayLoans(filteredLoans);
    updateResultsCount();
}

function resetFilters() {
    document.getElementById('minAmount').value = 1000;
    document.getElementById('maxAmount').value = 100000;
    document.getElementById('maxInterestRate').value = 15;
    document.getElementById('minTerm').value = 12;
    document.getElementById('maxTerm').value = 84;
    document.getElementById('bankSelect').selectedIndex = 0;
    document.getElementById('processingTime').value = 'any';
    
    updateInterestRateValue();
    filteredLoans = [...loanOffers];
    displayLoans(filteredLoans);
    updateResultsCount();
}

function getProcessingDays(processingTime) {
    const timeStr = processingTime.toLowerCase();
    
    if (timeStr.includes('same day')) return 0;
    if (timeStr.includes('1 business day')) return 1;
    if (timeStr.includes('1-2')) return 1.5;
    if (timeStr.includes('2-3')) return 2.5;
    if (timeStr.includes('4-7')) return 5.5;
    if (timeStr.includes('1-3')) return 2;
    
    return 7; // Default to 7 days
}

function getProcessingRange(filterTime) {
    switch (filterTime) {
        case '1-3': return { min: 1, max: 3 };
        case '4-7': return { min: 4, max: 7 };
        case '8-14': return { min: 8, max: 14 };
        case '15+': return { min: 15, max: Infinity };
        default: return { min: 0, max: Infinity };
    }
}

function isInRange(value, range) {
    return value >= range.min && value <= range.max;
}

// Display functions
function displayLoans(loans) {
    const loansList = document.getElementById('loansList');
    const noResults = document.getElementById('noResults');
    
    if (loans.length === 0) {
        loansList.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    loansList.style.display = 'grid';
    noResults.style.display = 'none';
    
    loansList.innerHTML = loans.map(loan => createLoanCard(loan)).join('');
}

function createLoanCard(loan) {
    const isSelected = selectedLoans.find(selected => selected.id === loan.id);
    
    return `
        <div class="loan-card ${isSelected ? 'selected' : ''}" data-loan-id="${loan.id}">
            <div class="loan-header">
                <div>
                    <h3 class="bank-name">${loan.bankName}</h3>
                         <div class="star-rating">
                             <div class="stars">
                                ${generateStarRating(loan.rating)}
                              </div>
                          <span class="rating-text">(${loan.rating})</span>
                        </div>
                    ${loan.logo ? `<img src="${loan.logo}" alt="${loan.bankName} logo" class="bank-logo">` : ""}
                </div>
                ${loan.isPopular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            
            <div class="loan-details">
                <div class="detail-row">
                    <span class="detail-label">${t('loanCard.interestRate')}</span>
                    <span class="detail-value interest-rate">${loan.interestRate}%</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">${t('loanCard.loanTerm')}</span>
                    <span class="detail-value">${loan.minTerm}-${loan.maxTerm} ${t('loanCard.months')}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Amount Range</span>
                    <span class="detail-value">${formatCurrency(loan.minAmount)} - ${formatCurrency(loan.maxAmount)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">${t('loanCard.processingTime')}</span>
                    <span class="detail-value">${loan.processingTime}</span>
                </div>
            </div>
            
            <div class="features">
                <h4>${t('loanCard.features')}</h4>
                <ul class="features-list">
                    ${loan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="loan-actions">
                <button class="btn-apply" onclick="applyForLoan('${loan.id}')">${t('loanCard.applyNow')}</button>
                <button class="btn-select ${isSelected ? 'selected' : ''}" onclick="toggleLoanSelection('${loan.id}')">
                    ${isSelected ? '✓ Selected' : t('loanCard.selectForComparison')}
                </button>
            </div>
        </div>
    `;
}

function updateResultsCount() {
    const subtitle = document.getElementById('resultsSubtitle');
    const count = filteredLoans.length;
    const plural = count !== 1 ? 's' : '';
    
    const template = t('results.subtitle');
    subtitle.textContent = formatString(template, { count: count.toString(), plural });
}

// Loan actions
function applyForLoan(loanId) {
    const loan = loanOffers.find(l => l.id === loanId);
    if (loan && bankApplicationUrls[loan.bankName]) {
        window.open(bankApplicationUrls[loan.bankName], '_blank', 'noopener,noreferrer');
    }
}

function toggleLoanSelection(loanId) {
    const loan = loanOffers.find(l => l.id === loanId);
    if (!loan) return;
    
    const existingIndex = selectedLoans.findIndex(selected => selected.id === loanId);
    
    if (existingIndex >= 0) {
        selectedLoans.splice(existingIndex, 1);
    } else if (selectedLoans.length < 3) {
        selectedLoans.push(loan);
    } else {
        alert('You can compare up to 3 loans at a time.');
        return;
    }
    
    updateComparisonPanel();
    displayLoans(filteredLoans); // Re-render to update button states
}

function updateComparisonPanel() {
    const panel = document.getElementById('comparisonPanel');
    const selectedCount = document.getElementById('selectedCount');
    const selectedLoansList = document.getElementById('selectedLoansList');
    
    selectedCount.textContent = selectedLoans.length;
    
    if (selectedLoans.length === 0) {
        panel.style.display = 'none';
        return;
    }
    
    panel.style.display = 'block';
    
    selectedLoansList.innerHTML = selectedLoans.map(loan => `
        <div class="selected-loan-item">
            <div class="selected-loan-info">
                <div class="selected-loan-bank">${loan.bankName}</div>
                <div class="selected-loan-rate">${loan.interestRate}% APR</div>
            </div>
            <button class="btn-remove" onclick="removeLoanFromComparison('${loan.id}')" title="${t('comparison.remove')}">✕</button>
        </div>
    `).join('');
}

function removeLoanFromComparison(loanId) {
    selectedLoans = selectedLoans.filter(loan => loan.id !== loanId);
    updateComparisonPanel();
    displayLoans(filteredLoans); // Re-render to update button states
}

function clearAllComparisons() {
    selectedLoans = [];
    updateComparisonPanel();
    displayLoans(filteredLoans); // Re-render to update button states
}

function viewComparison() {
    if (selectedLoans.length < 2) {
        alert('Please select at least 2 loans to compare.');
        return;
    }
    
    // Show comparison modal
    const modal = document.getElementById('comparisonModal');
    const comparisonCards = document.getElementById('comparisonCards');
    
    if (!modal || !comparisonCards) {
        console.error('Modal or comparisonCards element not found');
        return;
    }
    
    // Generate comparison cards
    comparisonCards.innerHTML = selectedLoans.map(loan => createComparisonCard(loan)).join('');
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Set focus to modal for keyboard navigation
    modal.focus();
}

function createComparisonCard(loan) {
    return `
        <div class="comparison-card">
            <div class="comparison-card-header">
                <div>
                    <h3 class="comparison-bank-name">${loan.bankName}</h3>
                    <div class="star-rating">
                        <div class="stars">
                            ${generateStarRating(loan.rating)}
                        </div>
                        <span class="rating-text">(${loan.rating})</span>
                    </div>
                </div>
                ${loan.isPopular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            
            <div class="comparison-interest-rate">${loan.interestRate}%</div>
            <div class="comparison-interest-label">${t('loanCard.interestRate')} (APR)</div>
            
            <div class="comparison-details">
                <div class="comparison-detail-row">
                    <span class="comparison-detail-label">Amount Range</span>
                    <span class="comparison-detail-value">${formatCurrency(loan.minAmount)} - ${formatCurrency(loan.maxAmount)}</span>
                </div>
                <div class="comparison-detail-row">
                    <span class="comparison-detail-label">${t('loanCard.loanTerm')}</span>
                    <span class="comparison-detail-value">${loan.minTerm}-${loan.maxTerm} ${t('loanCard.months')}</span>
                </div>
                <div class="comparison-detail-row">
                    <span class="comparison-detail-label">${t('loanCard.processingTime')}</span>
                    <span class="comparison-detail-value">${loan.processingTime}</span>
                </div>
            </div>
            
            <div class="comparison-features">
                <h4>${t('loanCard.features')}:</h4>
                <ul class="comparison-features-list">
                    ${loan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <button class="comparison-apply-btn" onclick="applyForLoan('${loan.id}')">${t('loanCard.applyNow')}</button>
        </div>
    `;
}

function closeComparisonModal(event) {
    if (event && event.target !== event.currentTarget) {
        return; // Only close if clicking the overlay, not the modal content
    }
    
    const modal = document.getElementById('comparisonModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<svg class="star filled" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<svg class="star filled" viewBox="0 0 24 24" fill="currentColor"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)"/></svg>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<svg class="star empty" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
    
    return stars;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('comparisonModal');
        if (modal && modal.style.display === 'flex') {
            closeComparisonModal();
        }
    }
});