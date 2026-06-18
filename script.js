// ============================================
// LANGUAGE SYSTEM
// ============================================

let currentLanguage = localStorage.getItem('language') || 'en';

// Apply language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    initVersionSwitcher();
});

// Language switcher buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update contact form success message
    updateContactFormLanguage(lang);
}

function updateContactFormLanguage(lang) {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            const message = translations[lang]['contact.form.success'] ||
                          'Thank you for your message! We will contact you soon.';
            alert(message);
            contactForm.reset();
        };
    }
}

// Package details database
const packageDetails = {
    'no21': {
        title: 'BMW Sound System',
        subtitle: 'Package No.21 - CLASSE',
        image: 'packages/Audiomativ-No21-Classe_1920x1920.jpg',
        components: [
            'Gladen Aerospace 165 BMW - 2-way component speakers (front doors)',
            'Gladen Aerospace 130 BMW - Coaxial speakers (rear deck)',
            'Mosconi Gladen Pico 8|12 DSP - 8-channel digital amplifier with 12 presets',
            'BMW-specific Plug & Play wiring harness (no cutting required)',
            'High-quality OFC speaker cables',
            'Mounting hardware and installation accessories'
        ],
        features: [
            'Complete sound upgrade for BMW vehicles - from basic to premium audio',
            'Plug & Play installation - works with all factory BMW head units',
            'Retains all factory functions: steering wheel controls, iDrive, parking sensors',
            '8-channel DSP with time alignment, 31-band equalizer, and crossover control',
            'Compact Pico amplifier designed to fit under BMW seats',
            'German-engineered Gladen speakers with superior sound clarity',
            'Professional tuning profiles included for immediate premium sound',
            'No visible modifications - maintains factory aesthetics'
        ],
        specs: {
            'Amplifier Model': 'Mosconi Gladen Pico 8|12 DSP',
            'Power Output': '4 x 70W RMS @ 4Ω',
            'DSP Channels': '8 input / 12 output',
            'Front Speakers': 'Gladen Aerospace 165 BMW (6.5" component)',
            'Rear Speakers': 'Gladen Aerospace 130 BMW (5.25" coaxial)',
            'Frequency Response': '35Hz - 22kHz',
            'Sensitivity': '91dB @ 1W/1m',
            'Compatible BMW Models': '1/2/3/4/5/X Series (2005-2025)',
            'Installation Location': 'Under seat (amplifier)',
            'Warranty': '2 years manufacturer warranty'
        },
        installation: 'Complete Plug & Play system using BMW-specific connectors. No cutting or splicing of factory wiring. Professional installation recommended (3-4 hours). Includes DSP tuning and calibration. System integrates seamlessly with all BMW factory electronics including iDrive, navigation, and premium audio options.'
    },
    'no22': {
        title: 'BMW Sound System',
        subtitle: 'Package No.22 - CLASSE',
        image: 'packages/Audiomativ-No22-Classe_1920x1920.jpg',
        components: [
            'Gladen Aerospace 165 BMW component speakers',
            'Gladen RS 130 BMW rear speakers',
            'Mosconi Gladen DSP 6to8 amplifier',
            'BMW plug & play harness system',
            'Premium wiring kit'
        ],
        features: [
            'High-performance component speakers',
            'Advanced 6-to-8 channel DSP',
            'Time alignment and crossover control',
            'Factory steering wheel controls retained',
            'Audiophile-grade components',
            'Made in Germany quality'
        ],
        specs: {
            'Power Output': '8x65W RMS',
            'Signal-to-Noise': '>95dB',
            'Front Speakers': '165mm 2-way component',
            'Rear Speakers': '130mm coaxial',
            'DSP Processing': '32-bit float',
            'Vehicle Compatibility': 'BMW F-Series'
        },
        installation: 'Complete plug & play system. Professional tuning included. Estimated installation: 4-5 hours. Retains all factory functions including iDrive and BMW sound settings.'
    },
    'no23': {
        title: 'BMW Sound System',
        subtitle: 'Package No.23 - CLASSE',
        image: 'packages/Audiomativ-No23-Classe_1920x1920.jpg',
        components: [
            'Gladen Alpha 165 BMW speakers (front)',
            'Gladen Alpha 130 BMW speakers (rear)',
            'Mosconi AS 100.4 amplifier',
            'Mosconi DSP 4to6 processor',
            'BMW-specific connectors and cables'
        ],
        features: [
            'Premium Alpha series speakers',
            'Separate DSP and amplifier for flexibility',
            'Professional audio processing',
            'High current output capability',
            'Factory integration maintained',
            'Concert hall soundstage'
        ],
        specs: {
            'Amplifier Power': '4x100W @ 4Ω',
            'DSP Inputs': '4 channels',
            'DSP Outputs': '6 channels',
            'Speaker Sensitivity': '92dB',
            'Impedance': '4 Ohm',
            'Recommended For': 'BMW E/F Series'
        },
        installation: 'Professional installation required. Full system tuning and calibration included. Installation time: 5-6 hours. Compatible with factory premium audio systems.'
    },
    'no24': {
        title: 'BMW Sound System',
        subtitle: 'Package No.24 - CLASSE',
        image: 'packages/Audiomativ-No24-Classe_1920x1920.jpg',
        components: [
            'Gladen ONE 165 BMW component system',
            'Gladen ONE 130 BMW rear speakers',
            'Mosconi Gladen One 120.4 DSP amplifier',
            'Premium BMW harness',
            'High-end speaker cables'
        ],
        features: [
            'Gladen ONE series - flagship components',
            'Integrated DSP amplifier solution',
            '120W per channel power',
            'Studio-quality sound reproduction',
            'Plug & play BMW integration',
            'Reference-grade performance'
        ],
        specs: {
            'Power Output': '4x120W RMS @ 4Ω',
            'THD+N': '<0.01%',
            'Front System': 'ONE 165 2-way component',
            'Rear Speakers': 'ONE 130 coaxial',
            'DSP Features': '10-band EQ per channel',
            'Target Vehicles': 'BMW 3/4/5 Series'
        },
        installation: 'Premium installation service recommended. Includes acoustic measurement and professional tuning. Installation: 6-7 hours. Optimized for vehicles with or without factory amplifier.'
    },
    'no242': {
        title: 'BMW Sound System',
        subtitle: 'Package No.242 - CLASSE',
        image: 'packages/Audiomativ-No242-Classe_1920x1920.jpg',
        components: [
            'Gladen Aerospace 165 BMW-2 speakers',
            'Gladen Aerospace 100 BMW center speaker',
            'Mosconi Gladen Pico 8|12 DSP amplifier',
            'Complete BMW wiring harness',
            'Installation accessories kit'
        ],
        features: [
            '3-way front stage configuration',
            'Center channel for focused imaging',
            'Ultimate soundstage width and depth',
            '8-channel DSP for precise control',
            'Audiophile reference quality',
            'German precision engineering'
        ],
        specs: {
            'Amplifier Output': '8x70W RMS',
            'Speaker Config': '3-way front + rear',
            'Center Speaker': '100mm full-range',
            'DSP Channels': '8 independent channels',
            'Crossover Points': 'Fully adjustable',
            'BMW Models': '1/2/3/4/5 Series compatible'
        },
        installation: 'Expert installation required for 3-way setup. Custom tuning and time alignment included. Installation time: 7-8 hours. Delivers concert hall experience in your BMW.'
    },
    'no25': {
        title: 'BMW Sound System',
        subtitle: 'Package No.25 - CLASSE',
        image: 'packages/Audiomativ-No25-Classe_1920x1920.jpg',
        components: [
            'Gladen RS 165 BMW component speakers',
            'Gladen RS-X 130 BMW rear speakers',
            'Mosconi Gladen Zero 4 DSP amplifier',
            'BMW plug & play connector set',
            'OFC speaker wire kit'
        ],
        features: [
            'RS series - competition grade speakers',
            'Zero series amplifier - ultra-low distortion',
            'Reference-level transparency',
            'Massive soundstage and imaging',
            'Factory integration perfected',
            'Handcrafted in Germany'
        ],
        specs: {
            'Amp Power': '4x100W @ 2Ω',
            'Distortion': '<0.005% THD',
            'Speaker Power': '100W RMS per driver',
            'Frequency Range': '35Hz - 22kHz',
            'DSP Resolution': '48kHz / 24-bit',
            'Vehicle Type': 'BMW Premium Audio ready'
        },
        installation: 'Professional installation with acoustic calibration mandatory. Full DSP tuning session included. Installation: 6-8 hours. Recommended for audiophile BMW owners.'
    },
    'no26': {
        title: 'BMW Sound System',
        subtitle: 'Package No.26 - CLASSE',
        image: 'packages/Audiomativ-No26-Classe_1920x1920.jpg',
        components: [
            'Gladen Aerospace 165 BMW-3 speakers',
            'Gladen Aerospace 130 BMW-3 speakers',
            'Mosconi Gladen DSP 8to12 Pro',
            'BMW-specific harness (all models)',
            'Premium installation kit'
        ],
        features: [
            'Latest generation Aerospace series',
            'Professional-grade 8-to-12 DSP',
            '12 output channels for ultimate control',
            'Bluetooth and PC tuning capability',
            'Network streaming compatible',
            'Best-in-class BMW integration'
        ],
        specs: {
            'DSP Outputs': '12 channels',
            'Processing': '96kHz / 32-bit float',
            'Built-in EQ': '31-band per channel',
            'Time Alignment': '10ms per channel',
            'Streaming': 'Bluetooth aptX HD',
            'BMW Coverage': 'All models 2010-2025'
        },
        installation: 'Master installer required. Complete vehicle acoustic analysis and tuning. Installation: 8-10 hours. The ultimate BMW sound system upgrade.'
    },
    'pico': {
        title: 'BMW Compact System',
        subtitle: 'Gladen Pico Package',
        image: 'packages/audiomativ-style-gladen-bmw-paket-pico_1280x1280.jpg',
        components: [
            'Gladen Aerospace 165 BMW speakers (front pair)',
            'Gladen Aerospace 130 BMW speakers (rear pair)',
            'Mosconi Gladen Pico 8|12 DSP amplifier',
            'BMW plug & play wiring harness',
            'Under-seat mounting brackets'
        ],
        features: [
            'Ultra-compact under-seat installation',
            'No trunk space required',
            'Full 8-channel DSP processing',
            'Plug & play BMW integration',
            'Perfect for space-conscious owners',
            'Premium Gladen speakers included'
        ],
        specs: {
            'Amplifier Size': '195 x 132 x 48mm',
            'Power Output': '4x70W RMS',
            'Weight': '1.2kg',
            'Installation Location': 'Under driver/passenger seat',
            'DSP Channels': '8 channels',
            'BMW Models': 'Most 2005+ models'
        },
        installation: 'Simple plug & play installation. Amplifier mounts under seat in 30 minutes. Complete speaker installation: 3-4 hours. Perfect for BMW owners who want premium sound without visible modifications.'
    },
    'vag': {
        title: 'VW / Seat / Skoda Sound System',
        subtitle: 'Gladen SoundUP VAG Complete Package',
        image: 'packages/gladen-soundup-vag-4chccmzv1hxhttub_1280x1280.jpg',
        components: [
            'Mosconi Gladen Pico 4|10 DSP - 4-channel digital amplifier with subwoofer output',
            'Gladen Audio HG 200 Subwoofer - 200mm (8") high-performance bass driver',
            'Custom-fit sealed subwoofer enclosure for VAG vehicles',
            'Gladen Alpha 165 - 2-way component system (front doors)',
            'Gladen Alpha 130 - Coaxial speakers (rear deck)',
            'VAG-specific Plug & Play wiring harness (VW/Seat/Skoda)',
            'High-quality speaker and power cables',
            'Complete mounting and installation hardware'
        ],
        features: [
            'Complete sound transformation for Volkswagen, Seat, and Skoda vehicles',
            'Powerful 200mm subwoofer adds deep, controlled bass without losing trunk space',
            'Compact sealed enclosure designed specifically for VAG trunk layouts',
            '4-channel DSP amplifier with dedicated subwoofer channel and tuning',
            'Premium Gladen Alpha speakers replace all factory speakers',
            'Plug & Play installation using factory VW/Seat/Skoda connectors',
            'Factory radio and steering wheel controls fully retained',
            'Professional DSP tuning for optimal frequency response and imaging',
            'German engineering and build quality throughout'
        ],
        specs: {
            'Amplifier Model': 'Mosconi Gladen Pico 4|10 DSP',
            'Channel Power': '4 x 55W RMS @ 4Ω',
            'Subwoofer Channel': '1 x 200W RMS @ 4Ω',
            'Subwoofer Driver': 'Gladen HG 200 (200mm / 8")',
            'Subwoofer Power Handling': '200W RMS / 400W Peak',
            'Front Speakers': 'Gladen Alpha 165 (6.5" component)',
            'Rear Speakers': 'Gladen Alpha 130 (5.25" coaxial)',
            'Frequency Range': '28Hz - 22kHz (complete system)',
            'Enclosure Type': 'Sealed MDF - custom VAG fit',
            'DSP Features': 'Time alignment, EQ, crossovers, phase control',
            'Compatible Models': 'VW Golf VI/VII/VIII, Passat B7/B8, Tiguan, Touran / Seat Leon, Ibiza, Ateca / Skoda Octavia, Superb, Kodiaq (2010+)',
            'Installation Time': '5-6 hours professional',
            'Warranty': '2 years manufacturer warranty'
        },
        installation: 'Professional installation highly recommended for optimal results. System uses VAG-specific Plug & Play connectors - no cutting of factory wiring. Subwoofer enclosure mounts in trunk using factory mounting points. DSP tuning and system calibration included. Installation time: 5-6 hours. Maintains all factory functions including Bluetooth, navigation, and parking sensors.'
    },
    'steg': {
        title: 'STEG Acoustics Collection',
        subtitle: 'High-Quality Italian Audio',
        image: 'packages/steg-acoustics.jpg'
    },
    'sprinter': {
        title: 'Mercedes Sprinter 2018-2022',
        subtitle: 'Complete Audio System',
        image: 'packages/mercedes-sprinter.jpg'
    }
};

// Modal elements
const modal = document.getElementById('packageModal');
const modalClose = document.querySelector('.modal-close');
const detailButtons = document.querySelectorAll('.details-btn');

// Open modal with package details
detailButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const packageCard = button.closest('.package-card');
        const packageId = packageCard.getAttribute('data-package-id');

        // Get translated package data
        const pkgTranslated = packageTranslations[currentLanguage] && packageTranslations[currentLanguage][packageId]
                              ? packageTranslations[currentLanguage][packageId]
                              : packageTranslations['en'][packageId];

        // Get base package data (for image)
        const pkg = packageDetails[packageId];

        if (pkgTranslated && pkg) {
            // Populate modal
            document.getElementById('modalImage').src = pkg.image;
            document.getElementById('modalTitle').textContent = pkgTranslated.title;
            document.getElementById('modalSubtitle').textContent = pkgTranslated.subtitle;

            // Components list
            const componentsList = document.getElementById('modalComponents');
            componentsList.innerHTML = pkgTranslated.components.map(item => `<li>${item}</li>`).join('');

            // Features list
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = pkgTranslated.features.map(item => `<li>${item}</li>`).join('');

            // Specifications
            const specsGrid = document.getElementById('modalSpecs');
            specsGrid.innerHTML = Object.entries(pkgTranslated.specs)
                .map(([key, value]) => `
                    <div class="spec-item">
                        <strong>${key}</strong>
                        <span>${value}</span>
                    </div>
                `).join('');

            // Installation info
            document.getElementById('modalInstallation').textContent = pkgTranslated.installation;

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Brand filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const packageCards = document.querySelectorAll('.package-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-brand');

        packageCards.forEach(card => {
            const cardBrand = card.getAttribute('data-brand');

            if (filterValue === 'all' || cardBrand === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form - handled by updateContactFormLanguage() in language system

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--primary-color)';
    }
});

// Entrance animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

packageCards.forEach(card => observer.observe(card));

// ============================================
// VERSION SWITCHER (Mobile/Desktop)
// ============================================

function initVersionSwitcher() {
    const versionBtn = document.getElementById('versionToggle');
    const isDesktopMode = localStorage.getItem('viewMode') === 'desktop';

    // Apply saved preference
    if (isDesktopMode) {
        document.body.classList.add('desktop-mode');
        updateVersionButton(true);
    }

    // Toggle version on button click
    versionBtn.addEventListener('click', () => {
        const isCurrentlyDesktop = document.body.classList.contains('desktop-mode');

        if (isCurrentlyDesktop) {
            // Switch to mobile
            document.body.classList.remove('desktop-mode');
            localStorage.setItem('viewMode', 'mobile');
            updateVersionButton(false);
            // Reset zoom
            document.querySelector('meta[name="viewport"]').setAttribute('content',
                'width=device-width, initial-scale=1.0');
        } else {
            // Switch to desktop
            document.body.classList.add('desktop-mode');
            localStorage.setItem('viewMode', 'desktop');
            updateVersionButton(true);
            // Allow zoom out for desktop view on mobile
            document.querySelector('meta[name="viewport"]').setAttribute('content',
                'width=1200, user-scalable=yes');
        }
    });
}

function updateVersionButton(isDesktop) {
    const btn = document.getElementById('versionToggle');
    const key = isDesktop ? 'version.mobile' : 'version.desktop';

    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        btn.textContent = translations[currentLanguage][key];
    }
}
