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
            title: "Best Online Loans in Sri Lanka – Fast Approval & Low Rates",
            subtitle: "Apply Online and Get Quick Loan Approval from Trusted Lenders in Sri Lanka",
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
            resetFilters: "Reset Filters",
            toggle: "Filters"
        },
        results: {
            title: "Top Loan Offers from Sri Lanka’s Trusted Banks & Lenders",
            subtitle: "Found {count} loan offer{plural} matching your criteria. See interest rates, repayment terms, and fees side-by-side.",
            noResults: "No loans match your criteria",
            noResultsDesc: "Try adjusting your filters to see more loan options."
        },
        stats: {
            loansFacilitated: "Loans facilitated",
            happyCustomers: "Happy customers",
            lowestApr: "Lowest APR",
            partnerBanks: "Partner banks"
        },
        loanCard: {
            selectForComparison: "Select for comparison",
            compareShort: "Compare",
            applyNow: "Apply Now",
            interestRate: "Interest Rate",
            loanTerm: "Loan Term",
            months: "months",
            processingTime: "Processing Time",
            days: "days",
            features: "Features",
            amountRange: "Amount Range",
            processingTime: "Processing Time",
            popular: "Popular",
            selected: "✓ Selected",
            aprAbbr: "APR",
            aprSuffix: "(APR)"
        },
            processingTimes: {
            "in minutes": "In minutes",
            "instant": "Instant",
            "few hours": "Few hours",
            "in 15 minutes": "In 15 minutes",
            "1-2 days": "1–2 business days",
            "2-3 days": "2–3 business days",
            "4-7 days": "4–7 days",
            "1-3 days": "1–3 days",
            "same day": "Same day",
            "1 business day": "1 business day"
            },
            loanFeatures: {
            "fully online": "Fully online",
            "fixed interest rate": "Fixed interest rate",
            "fast transfer": "Fast transfer",
            "no origination fee": "No origination fee",
            "flexible repayment": "Flexible repayment",
            "multiple offers": "Multiple offers",
            "quick online process": "Quick online process",
            "fast approval": "Fast approval",
            "online application": "Online application",
            "same day funding": "Same day funding",
            "flexible terms": "Flexible terms",
            "easy online signup": "Easy online signup",
            "24h cancellation option": "24h cancellation option",
            "apply in 5 minutes": "Apply in 5 minutes",
            "fast payout": "Fast payout",
            "multiple lender network": "Multiple lender network",
            "direct lender payment": "Direct lender payment",
            "quick online loan": "Quick online loan"
            },
            comparison: {
            title: "Loan Comparison",
            selected: "selected",
            loans: "loans",
            compare: "Compare",
            clearAll: "Clear All",
            remove: "Remove",
            limitAlert: "You can compare up to 3 loans at a time.",
            minToCompareAlert: "Please select at least 2 loans to compare."
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
            title: "Fastest Loans in Sri Lanka",
            subtitle: "Discover the best loans in Sri Lanka with offers from best lenders. Get quick approval and lower interest rates.",
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
            },
            r1: { 
              title: "Best rates in Sri Lanka", 
              text: "We compare offers from 10+ banks to ensure the lowest rate and the best cost." 
            },
            r2: { 
              title: "Instant approval", 
              text: "Fast pre-checks and decisions in minutes with our lenders." 
            },
            r3: { 
              title: "Secure & Trusted", 
              text: "Your application is encrypted and will never be shared or sold" 
            },
            r4: { 
              title: "Clear pricing", 
              text: "Clear terms, representative examples, and no hidden fees." 
            },
            r5: { 
              title: "Local lenders", 
              text: "Offers from Sri Lanka–based, licensed institutions for better eligibility." 
            },
            r6: { 
              title: "Smart matching", 
              text: "We rank loans by your amount, term, and target rate to save you time." 
            },
            s1: { 
              title: "Tell us your needs", 
              text: "Complete a 1–2 minute form — no impact to your credit score and get your loan." 
            },
            s2: { 
              title: "Compare offers", 
              text: "See interest, terms, and fees side-by-side from multiple lenders." 
            },
            s3: { 
              title: "Apply online", 
              text: "Finish with your chosen lender in minutes and get funds faster." 
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
            title: "ශ්‍රී ලංකාවේ හොඳම අන්තර්ජාල ණය – වේගවත් අනුමැතිය සහ අඩු පොලී",
            subtitle: "ශ්‍රී ලංකාවේ විශ්වාසනීය ණය සපයන්නන්ගෙන් මින්ට්ස් කිහිපයකින් ණය අයදුම් කර අනුමැතිය ලබාගන්න",
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
            resetFilters: "පෙරහන් නැවත සකස් කරන්න",
            toggle: "පෙරහන්"
        },
        results: {
            title: "පොලී අනුපාත, ගෙවීම් නියම සහ ගාස්තු එක් එක්ව සසඳන්න.",
            subtitle: "ඔබගේ නිර්නායකවලට ගැලපෙන ණය දීමනා {count}ක් සොයා ගන්නා ලදී. ශ්‍රී ලංකාවේ විශ්වාසනීය බැංකු සහ ණය සපයන්නන්ගෙන් ඉහළම ණය යෝජනා",
            noResults: "ඔබගේ නිර්නායකවලට ගැලපෙන ණය නොමැත",
            noResultsDesc: "වැඩි ණය විකල්ප බැලීමට ඔබගේ පෙරහන සකස් කිරීමට උත්සාහ කරන්න."
        },
        stats: {
            loansFacilitated: "සහාය කළ ණය",
            happyCustomers: "සතුටු ගනුදෙනුකරුවන්",
            lowestApr: "අවම APR",
            partnerBanks: "හවුල් බැංකු"
        },
        loanCard: {
            selectForComparison: "සංසන්දනය සඳහා තෝරන්න",
            compareShort: "සංසන්දනය",
            applyNow: "දැන් අයදුම් කරන්න",
            interestRate: "පොලී අනුපාතය",
            loanTerm: "ණය කාලය",
            months: "මාස",
            processingTime: "ක්‍රියාකරණ කාලය",
            days: "දින",
            features: "විශේෂාංග",
            amountRange: "මුදල් පරාසය",
            processingTime: "ක්‍රියාකරණ කාලය",
            popular: "ජනප්‍රිය",
            selected: "✓ තෝරාගත්",
            aprAbbr: "APR",
            aprSuffix: "(APR)"
       },
            processingTimes: {
            "in minutes": "මිනිත්තු කිහිපයේ",
            "instant": "ක්ෂණික",
            "few hours": "පැය කිහිපයකින්",
            "in 15 minutes": "මිනිත්තු 15කින්",
            "1-2 days": "දින 1–2",
            "2-3 days": "දින 2–3",
            "4-7 days": "දින 4–7",
            "1-3 days": "දින 1–3",
            "same day": "එම දිනේ",
            "1 business day": "ව්‍යාපාරික දින 1"
            },
            loanFeatures: {
            "fully online": "පූර්ණයෙන්ම අන்லයින්",
            "fixed interest rate": "නිරන්තර පොලී අනුපාතය",
            "fast transfer": "වේගවත් මුදල් මාරු",
            "no origination fee": "ප්‍රාරම්භ ගාස්තුවක් නැහැ",
            "flexible repayment": "චල්‍ය ගෙවීම්",
            "multiple offers": "බහුවිධ යෝජනා",
            "quick online process": "ඉක්මන් අන್ಲයින් ක්‍රියාවලිය",
            "fast approval": "ඉක්මන් අනුමැතිය",
            "online application": "අන್ಲයින් අයදුම්පත",
            "same day funding": "එම දිනේ මුදල්",
            "flexible terms": "අච්චුගමන් නියම",
            "easy online signup": "සුළු පියවරවලින් ලියාපදිංචි වන්න",
            "24h cancellation option": "පැය 24 රද්ද කිරීමේ විකල්පය",
            "apply in 5 minutes": "මිනිත්තු 5යින් අයදුම් කරන්න",
            "fast payout": "වේගවත් ගෙවීම්",
            "multiple lender network": "බහු ණය දායක ජාලයක්",
            "direct lender payment": "ණය දායකයා වෙත සෘජු ගෙවීම",
            "quick online loan": "ඉක්මන් අන്ലයින් ණය"
            },
            comparison: {
            title: "ණය සංසන්දනය",
            selected: "තෝරාගත්",
            loans: "ණය",
            compare: "සංසන්දනය",
            clearAll: "සියල්ල ඉවතලන්න",
            remove: "ඉවත් කරන්න",
            limitAlert: "ඔබට එක්වරක් ණය 3ක් දක්වා පමණක් සංසන්දනය කළ හැක.",
            minToCompareAlert: "කරුණාකර සංසන්දනය සඳහා අවම ණය 2ක් තෝරන්න."
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
            title: "ශ්‍රී ලංකාවේ වේගවත් ණය",
            subtitle: "ශ්‍රී ලංකාවේ විශ්වාසනීය බැංකු සහ ණය සපයන්නන්ගෙන් හොඳම ණය යෝජනා සොයා ගන්න. වේගවත් අනුමැතිය, අඩු පොලී අනුපාත සහ සම්පූර්ණව විවෘත නියමයන් ලබා ගන්න.",
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
            ,r1:{ title:"ශ්‍රී ලංකාවේ හොඳම අනුපාත", text:"අපි බැංකු 10+ ක යෝජනා සැසඳිමින් අවම අනුපාතය සහ හොඳම මුළු වියදම සනාථ කරමු." }
            ,r2:{ title:"කඩිනම් අනුමැතිය", text:"තෝරාගත් ණය දායකයන් සමඟ මිනිත්තු කිහිපයෙන්ම පෙර-පරීක්ෂා සහ තීරණ." }
            ,r3:{ title:"ආරක්ෂිත සහ විශ්වාසදායක", text:"ඔබගේ අයදුම සම්පූර්ණයෙන්ම සංකේතනය කර ඇත; කිසිවිටෙක බෙදා හෝ විකිණීමක් නොවේ." }
            ,r4:{ title:"පැහැදිලි මිලකරණය", text:"පැහැදිලි කොන්දේසි, නියෝජිත උදාහරණ සහ සඟවා ඇති ගාස්තු නොමැත." }
            ,r5:{ title:"දේශීය ණය දායකයන්", text:"ශ්‍රී ලංකාවෙන් බලපත්‍ර ලත් ආයතනවල යෝජනා — සුදුසුකම් ලැබීම සෙම." }
            ,r6:{ title:"ස්මාර්ට් ගැලපීම", text:"ඔබගේ මුදල, කාලය සහ ඉලක්ක අනුපාතය අනුව ණය පටිපාටියට ගෙන, ඔබගේ කාලය ඉතිරි කරයි." }
            ,s1:{ title:"ඔබේ අවශ්‍යතා කියන්න", text:"මිනිත්තු 1–2ක් ගන්නා කෙටි පෝරමයක් — ණය ශ්‍රේණිගත කිරීමට බලපෑමක් නැත." }
            ,s2:{ title:"යෝජනා සසඳන්න", text:"බැංකු කිහිපයේ පොලී, නියම සහ ගාස්තු එක් තැනින් සසඳන්න." }
            ,s3:{ title:"අන්තර්ජාලයෙන් අයදුම් කරන්න", text:"ඔබ තෝරාගත් ණය දායකයා සමඟ මිනිත්තු කිහිපයකින් සම්පූර්ණ කර ඉක්මනින් මුදල් ලබා ගන්න." }
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
    displayLoans(filteredLoans);
updateComparisonPanel();

// Если модалка сравнения открыта — перерисовать её карточки
const modal = document.getElementById('comparisonModal');
const comparisonCards = document.getElementById('comparisonCards');
if (modal && comparisonCards && modal.style.display === 'flex') {
    comparisonCards.innerHTML = selectedLoans.map(loan => createComparisonCard(loan)).join('');
}
    // Update interest rate display
    updateInterestRateValue();
    // Обновляем подписи кнопок при переходе через мобильный брейкпоинт
(function () {
  const mqCompact = window.matchMedia('(max-width: 480px)');
  const rerender = () => { if (Array.isArray(filteredLoans)) displayLoans(filteredLoans); };
  if (mqCompact.addEventListener) mqCompact.addEventListener('change', rerender);
  else if (mqCompact.addListener) mqCompact.addListener(rerender); // Safari fallback
})();
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
  // 1) Обновляем все элементы с data-key (статический текст)
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (key) el.textContent = t(key);
  });

  // 2) Заголовок страницы
  document.title = (currentLanguage === 'si')
    ? 'CreditlK - ඔබගේ අවශ්‍යතාවන්ට හොඳම ණය සොයාගන්න'
    : 'CreditlK - Find the Perfect Loan';

  // Reflect language on <html> and add helper class on <body>
  document.documentElement.setAttribute('lang', currentLanguage === 'si' ? 'si' : 'en');
  document.body.classList.toggle('lang-si', currentLanguage === 'si');

  // 3) Пересчёт сабтайтла с количеством результатов
  if (typeof updateResultsCount === 'function') {
    updateResultsCount();
  }

  // 4) Перестроить селект банков, но СХРАНИТЬ текущий выбор
  const bankSelect = document.getElementById('bankSelect');
  if (bankSelect) {
    const prevSelected = Array.from(bankSelect.selectedOptions).map(o => o.value);
    populateBankFilter();
    Array.from(bankSelect.options).forEach(opt => {
      if (prevSelected.includes(opt.value)) opt.selected = true;
    });
  }

  // 5) Перерисовать динамический контент (карточки и панель сравнения)
  if (typeof displayLoans === 'function') {
    displayLoans(Array.isArray(filteredLoans) ? filteredLoans : []);
  }
  if (typeof updateComparisonPanel === 'function') {
    updateComparisonPanel();
  }

  // 6) Если модалка сравнения открыта — перерисовать её карточки
  const modal = document.getElementById('comparisonModal');
  const cards = document.getElementById('comparisonCards');
  if (modal && cards && getComputedStyle(modal).display === 'flex') {
    cards.innerHTML = (selectedLoans || [])
      .map(loan => createComparisonCard(loan))
      .join('');
  }
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
    const s = processingTime.toLowerCase();

    if (s.includes('instant')) return 0;
    if (s.includes('in minutes') || s.includes('minutes')) return 0; // < 1 day
    if (s.includes('few hours') || s.includes('hours') || s.includes('in 15 minutes')) return 0; // < 1 day

    if (s.includes('same day')) return 0;
    if (s.includes('1 business day')) return 1;
    if (s.includes('1-2')) return 1.5;
    if (s.includes('2-3')) return 2.5;
    if (s.includes('4-7')) return 5.5;
    if (s.includes('1-3')) return 2;

    return 7; // default
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
    const bankSlug = loan.bankName.toLowerCase().replace(/[^a-z0-9_-]/g, '');
    return `
        <div class="loan-card ${isSelected ? 'selected' : ''}" data-loan-id="${loan.id}" data-bank="${bankSlug}">
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
                ${loan.isPopular ? `<span class="popular-badge">${t('loanCard.popular')}</span>` : ''}
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
                    <span class="detail-label">${t('loanCard.amountRange')}</span>
                    <span class="detail-value">${formatCurrency(loan.minAmount)} - ${formatCurrency(loan.maxAmount)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">${t('loanCard.processingTime')}</span>
                    <span class="detail-value">${translateProcessingTime(loan.processingTime)}</span>
                </div>
            </div>
            
            <div class="features">
                <h4>${t('loanCard.features')}</h4>
                <ul class="features-list">
                   ${loan.features.map(feature => `<li>${translateFeature(feature)}</li>`).join('')}
                </ul>
            </div>
            
            <div class="loan-actions">
                <button class="btn-apply js-credit-apply" data-bank="${bankSlug}" onclick="applyForLoan('${loan.id}')">${t('loanCard.applyNow')}</button>
                <button class="btn-select ${isSelected ? 'selected' : ''}" onclick="toggleLoanSelection('${loan.id}')">
                    ${getSelectButtonLabel(!!isSelected)}
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
// Helpers for translating dynamic fields inside loan cards
function translateProcessingTime(str) {
  if (!str) return '';
  const key = String(str).trim().toLowerCase();
  const map = (translations[currentLanguage] && translations[currentLanguage].processingTimes) || {};
  // fallback на EN
  return map[key] || (translations.en.processingTimes?.[key] || str);
}
function translateFeature(str) {
  if (!str) return '';
  const key = String(str).trim().toLowerCase();
  const map = (translations[currentLanguage] && translations[currentLanguage].loanFeatures) || {};
  return map[key] || (translations.en.loanFeatures?.[key] || str);
}
function getSelectButtonLabel(isSelected) {
  if (isSelected) return t('loanCard.selected');
  // На телефонах используем короткий вариант
  const mq = window.matchMedia('(max-width: 480px)');
  return mq.matches ? t('loanCard.compareShort') : t('loanCard.selectForComparison');
}
// Loan actions
// --- Postback link helpers: generate s1 and fetch GA4 cid as s2 ---
function getSessionClickId() {
  const KEY = 'cl_click_id';
  let cid = sessionStorage.getItem(KEY);
  if (!cid) {
    const t = Date.now().toString(36);
    const r = Math.floor(Math.random() * 1e8).toString(36);
    cid = 'clk_' + t + '_' + r; // e.g., clk_ma9u1s_w2f4g7
    sessionStorage.setItem(KEY, cid);
  }
  return cid;
}

function getGa4Cid(cb) {
  // Uses GA4 gtag API. If not available or fails, returns null.
  try {
    if (typeof gtag === 'function') {
      gtag('get', 'G-V5BJFQ8G10', 'client_id', function (cid) {
        cb(cid || null);
      });
      return;
    }
  } catch (e) {}
  cb(null);
}

function applyForLoan(loanId) {
    const loan = loanOffers.find(l => l.id === loanId);
    if (!loan) return;

    const base = bankApplicationUrls[loan.bankName];
    if (!base) return;

    const clickId = getSessionClickId(); // s1
    const bankSlug = loan.bankName.toLowerCase().replace(/[^a-z0-9_-]/g, ''); // s3 partner slug

    function openWithCid(ga4cid) {
        try {
            const url = new URL(base, location.origin);
            url.searchParams.set('s1', clickId);
            if (ga4cid) url.searchParams.set('s2', ga4cid); // s2 = GA4 client_id
            url.searchParams.set('s3', bankSlug); // s3 = partner/bank slug
            window.open(url.toString(), '_blank', 'noopener,noreferrer');
        } catch (e) {
            // Fallback: open the base URL if URL() fails
            window.open(base, '_blank', 'noopener,noreferrer');
        }
    }

    // Try to fetch GA4 client_id; if not available, proceed without s2
    getGa4Cid(function (cid) { openWithCid(cid); });
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
        alert(t('comparison.limitAlert'));
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
                <div class="selected-loan-rate">${loan.interestRate}% ${t('loanCard.aprAbbr')}</div>
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
        alert(t('comparison.minToCompareAlert'));
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
                ${loan.isPopular ? `<span class="popular-badge">${t('loanCard.popular')}</span>` : ''}
            </div>
            
            <div class="comparison-interest-rate">${loan.interestRate}%</div>
            <div class="comparison-interest-label">${t('loanCard.interestRate')} ${t('loanCard.aprSuffix')}</div>
            
            <div class="comparison-details">
                <div class="comparison-detail-row">
                    <span class="comparison-detail-label">${t('loanCard.amountRange')}</span>
                    <span class="comparison-detail-value">${formatCurrency(loan.minAmount)} - ${formatCurrency(loan.maxAmount)}</span>
                </div>
                <div class="comparison-detail-row">
                    <span class="comparison-detail-label">${t('loanCard.loanTerm')}</span>
                    <span class="comparison-detail-value">${loan.minTerm}-${loan.maxTerm} ${t('loanCard.months')}</span>
                </div>
                <div class="comparison-detail-row">
                    <span class="comparison-detail-label">${t('loanCard.processingTime')}</span>
                    <span class="comparison-detail-value">${translateProcessingTime(loan.processingTime)}</span>
                </div>
            </div>
            
            <div class="comparison-features">
                <h4>${t('loanCard.features')}:</h4>
                <ul class="comparison-features-list">
                    ${loan.features.map(feature => `<li>${translateFeature(feature)}</li>`).join('')}
                </ul>
            </div>
            
            <button class="comparison-apply-btn js-credit-apply" data-bank="${loan.bankName.toLowerCase().replace(/[^a-z0-9_-]/g, '')}" onclick="applyForLoan('${loan.id}')">${t('loanCard.applyNow')}</button>
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
/* Скрываем выбранные офферы для Google Ads трафика */
(function () {
  // Блокируемые офферы по значению атрибута data-bank (в нижнем регистре)
  const BLOCKED_FOR_GADS = new Set(['credify', 'soscredit', 'soso']);

  const TEST_FORCE_PAID = /(?:^|\?)\bforce_paid=1\b/i.test(location.search);
  const SHOW_ALL_OVERRIDE = /(?:^|\?)\bshow_all=1\b/i.test(location.search);

  function isGoogleAdsTraffic() {
    if (SHOW_ALL_OVERRIDE) return false;
    if (TEST_FORCE_PAID) return true;

    const qs = new URLSearchParams(location.search);
    const gclid  = qs.has('gclid');
    const gbraid = qs.has('gbraid');
    const wbraid = qs.has('wbraid');
    const utm_source = (qs.get('utm_source') || '').toLowerCase();
    const utm_medium = (qs.get('utm_medium') || '').toLowerCase();
    const isUtmPaid = utm_source.includes('google') && /(cpc|ppc|paid|sem|ads)/.test(utm_medium);

    return gclid || gbraid || wbraid || isUtmPaid;
  }

  function findOfferCard(el) {
    // подстрой при желании под свои классы карточек
    return el.closest('[data-offer], .offer-card, .bank-card, .credit-offer, .product-card, li, .card') || el;
  }

  function hideBlocked(scope = document) {
    scope.querySelectorAll('[data-bank]').forEach((el) => {
      const bank = (el.getAttribute('data-bank') || '').trim().toLowerCase();
      if (BLOCKED_FOR_GADS.has(bank)) {
        const card = findOfferCard(el);
        card.style.display = 'none';
        card.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (isGoogleAdsTraffic()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => hideBlocked());
    } else {
      hideBlocked();
    }
    // На случай динамической подгрузки
    new MutationObserver(() => hideBlocked()).observe(document.documentElement, { childList: true, subtree: true });
  }
})();