// Custom Scripts for Gracious Angeli Travel & Tours

// EmailJS Configuration - Now initialized in HTML file

// Travel Packages Data
const travelPackages = {
    asia: [
        // Taiwan
        {
            country: 'TAIWAN',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '29,999',
            image: 'https://images.unsplash.com/photo-1559083532-d3d1e7e1b8f8?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Temple Hopping', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Personal Expenses', 'Other Personal Expenses']
        },
        // Vietnam - Da Nang
        {
            country: 'DA NANG',
            location: 'ASIA - VIETNAM',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'https://images.unsplash.com/photo-1559221030-f9d8c17c6e0b?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Temple Hopping', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Vietnam - Ha Noi
        {
            country: 'HA NOI',
            location: 'ASIA - VIETNAM',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Vietnam - Sapa
        {
            country: 'SAPA',
            location: 'ASIA - VIETNAM',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'https://images.unsplash.com/photo-1568214379698-8d4b9e27c9a9?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Indonesia - Bali
        {
            country: 'BALI - FREE & EASY',
            location: 'ASIA - INDONESIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Tokyo
        {
            country: 'TOKYO',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Hokkaido
        {
            country: 'HOKKAIDO',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Kyoto
        {
            country: 'KYOTO',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Osaka
        {
            country: 'OSAKA',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'https://images.unsplash.com/photo-1590253230532-eabf8ac67f42?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Free & Easy
        {
            country: 'FREE & EASY',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Ocean Park
        {
            country: 'OCEAN PARK',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '126,999',
            image: 'https://images.unsplash.com/photo-1518403841153-86fd4a66cbe5?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Disneyland
        {
            country: 'DISNEYLAND',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Macau
        {
            country: 'MACAU',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'https://images.unsplash.com/photo-1555798765-7a7d4e8e6e1a?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // South Korea
        {
            country: 'SOUTH KOREA',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Temple Hopping', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Dubai
        {
            country: 'DUBAI',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Malaysia
        {
            country: 'MALAYSIA',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Thailand
        {
            country: 'THAILAND',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        }
    ],
    
    europe: [
        // Blue Line
        {
            country: 'SWITZERLAND, GERMANY, LIECHTENSTEIN, CZECH REPUBLIC, HUNGARY, SLOVAKIA, AUSTRIA',
            location: 'EUROPE - BLUE LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Blue + Red Line
        {
            country: 'CZECH REPUBLIC, SLOVAKIA, HUNGARY, AUSTRIA, LIECHTENSTEIN, SWITZERLAND, LUXEMBOURG, GERMANY, FRANCE, BELGIUM, NETHERLANDS',
            location: 'EUROPE - BLUE | RED LINE',
            duration: '17 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '180,840',
            image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Yellow Line - Portugal, Spain, Morocco
        {
            country: 'PORTUGAL, SPAIN, MOROCCO',
            location: 'EUROPE - YELLOW LINE',
            duration: '12 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '165,250',
            image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d03638?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Yellow Line - Spain, Portugal
        {
            country: 'SPAIN, PORTUGAL',
            location: 'EUROPE - YELLOW LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        }
    ],
    
    philippines: [
        // Dumaguete
        {
            country: 'DUMAGUETE',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'City Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Dumaguete & Siquijor
        {
            country: 'DUMAGUETE & SIQUIJOR',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '16,999',
            image: 'https://images.unsplash.com/photo-1519451241324-20b4bd2c235e?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Boracay
        {
            country: 'BORACAY',
            location: 'PHILIPPINES - AKLAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'City Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses']
        },
        // Cebu
        {
            country: 'CEBU',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '11,999',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Cebu City and Mountain Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Bohol
        {
            country: 'BOHOL',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'https://images.unsplash.com/photo-1568214379698-8d4b9e27c9a9?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Bohol Countryside Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Cebu & Bohol
        {
            country: 'CEBU & BOHOL',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'https://images.unsplash.com/photo-1519451241324-20b4bd2c235e?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Bohol Countryside Tour', 'Cebu City and Mountain Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Puerto Princesa
        {
            country: 'PUERTO PRINCESA',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '8,999',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Underground River', 'City Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // El Nido
        {
            country: 'EL NIDO',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '10,999',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Island Hopping Tour A', 'Island Hopping Tour D'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Coron
        {
            country: 'CORON',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'https://images.unsplash.com/photo-1518403841153-86fd4a66cbe5?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Coron Island Tour A', 'Town Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Puerto Princesa & El Nido
        {
            country: 'PUERTO PRINCESA & EL NIDO',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Underground River and City Tour', 'Island Hopping Tour A'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        }
    ]
};

// Package Carousel State
let currentPackageCategory = 'asia';
let currentPackageSlides = {
    asia: 0,
    europe: 0,
    philippines: 0
};

// Switch Package Category
function switchPackageCategory(category) {
    currentPackageCategory = category;
    
    // Update category buttons
    document.querySelectorAll('.package-category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Update category header
    updatePackageCategoryHeader(category);
    
    // Render packages for selected category
    renderPackages(category);
    
    // Reset slide position
    currentPackageSlides[category] = 0;
    
    // Use setTimeout to ensure DOM is updated before calculating positions
    setTimeout(() => {
        updatePackageSlider(category);
    }, 50);
}

// Update Package Category Header
function updatePackageCategoryHeader(category) {
    const headers = {
        asia: {
            icon: '🏮',
            title: 'DISCOVER THE TIMELESS BEAUTY OF ASIA',
            subtitle: 'Experience the vibrant cultures, stunning landscapes, and rich heritage of Asia'
        },
        europe: {
            icon: '🏰',
            title: 'EXPLORE THE WONDERS OF EUROPE',
            subtitle: 'Discover the rich history, stunning architecture, and diverse cultures of Europe'
        },
        philippines: {
            icon: '🏝️',
            title: 'DISCOVER THE BEAUTY OF THE PHILIPPINES',
            subtitle: 'Experience the pristine beaches, crystal-clear waters, and warm Filipino hospitality'
        }
    };
    
    const header = headers[category];
    document.getElementById('packageCategoryIcon').textContent = header.icon;
    document.getElementById('packageCategoryTitle').textContent = header.title;
    document.getElementById('packageCategorySubtitle').textContent = header.subtitle;
}

// Render Packages
function renderPackages(category) {
    const packages = travelPackages[category];
    const container = document.getElementById('packageCarousel');
    
    if (!container) {
        console.error('Package carousel container not found!');
        return;
    }
    
    console.log(`Rendering ${packages.length} packages for ${category}`);
    
    container.innerHTML = packages.map(pkg => `
        <div class="package-card bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl min-w-[300px] flex-shrink-0">
            <div class="relative">
                <img src="${pkg.image}" alt="${pkg.country}" class="w-full h-48 object-cover">
                <div class="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-bold text-indigo-600">${pkg.location}</div>
            </div>
            
            <div class="p-4">
                <h3 class="font-bold text-lg text-center text-gray-800 mb-2 border-b border-gray-200 pb-2">${pkg.country}</h3>
                <p class="text-sm text-center text-gray-600 mb-4">${pkg.duration} | ${pkg.minPax}</p>
                
                <div class="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div>
                        <h5 class="font-semibold text-green-600 mb-1">INCLUSION</h5>
                        <ul class="text-gray-600 space-y-0.5">
                            ${pkg.inclusions.slice(0, 5).map(item => `<li>• ${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h5 class="font-semibold text-red-600 mb-1">EXCLUSION</h5>
                        <ul class="text-gray-600 space-y-0.5">
                            ${pkg.exclusions.slice(0, 5).map(item => `<li>• ${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="text-center">
                    <div class="bg-gradient-to-r ${getCategoryColor(category)} text-white py-2 rounded-lg font-bold text-lg mb-3">
                        START AT ${pkg.price} /PAX
                    </div>
                    <button onclick="bookSpecificTour('${pkg.country}', '${pkg.price}')" 
                            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all font-semibold">
                        📞 Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Use requestAnimationFrame to ensure DOM is painted before calculating positions
    requestAnimationFrame(() => {
        updatePackageSlider(category);
    });
}

// Get Category Color
function getCategoryColor(category) {
    const colors = {
        asia: 'from-red-500 to-red-600',
        europe: 'from-blue-500 to-blue-600',
        philippines: 'from-green-500 to-green-600'
    };
    return colors[category] || 'from-indigo-500 to-indigo-600';
}

// Package Slider Navigation
function slidePackages(direction) {
    const category = currentPackageCategory;
    const packages = travelPackages[category];
    const container = document.getElementById('packageCarousel');
    
    if (!container) return;
    
    // Calculate visible cards dynamically
    const firstCard = container.querySelector('.package-card');
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth + 20;
    const containerWidth = container.parentElement.offsetWidth;
    const visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
    const maxSlides = Math.max(0, packages.length - visibleCards);
    
    if (direction === 'next') {
        currentPackageSlides[category] = Math.min(currentPackageSlides[category] + 1, maxSlides);
    } else {
        currentPackageSlides[category] = Math.max(currentPackageSlides[category] - 1, 0);
    }
    
    updatePackageSlider(category);
}

// Update Package Slider Position
function updatePackageSlider(category) {
    const container = document.getElementById('packageCarousel');
    if (!container) return;
    
    // Get actual card width from rendered elements
    const firstCard = container.querySelector('.package-card');
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth + 20; // Card width + gap
    const translateX = -currentPackageSlides[category] * cardWidth;
    
    container.style.transform = `translateX(${translateX}px)`;
    
    // Update navigation buttons with responsive calculation
    const packages = travelPackages[category];
    const containerWidth = container.parentElement.offsetWidth;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxSlides = Math.max(0, packages.length - visibleCards);
    
    const prevBtn = document.getElementById('packagePrevBtn');
    const nextBtn = document.getElementById('packageNextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.style.opacity = currentPackageSlides[category] === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentPackageSlides[category] === maxSlides ? '0.5' : '1';
        
        prevBtn.style.pointerEvents = currentPackageSlides[category] === 0 ? 'none' : 'auto';
        nextBtn.style.pointerEvents = currentPackageSlides[category] === maxSlides ? 'none' : 'auto';
    }
}

// Mobile Touch Support for Package Carousel
function addPackageCarouselTouchSupport() {
    const carousel = document.getElementById('packageCarousel');
    if (!carousel) return;
    
    let startX = 0;
    let endX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        startX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const swipeDistance = startX - endX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                slidePackages('next');
            } else {
                slidePackages('prev');
            }
        }
    }, { passive: true });
}

// Initialize Packages on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize packages if on services page with delay to ensure DOM is rendered
    setTimeout(() => {
        if (document.getElementById('packageCarousel')) {
            switchPackageCategory('asia');
            addPackageCarouselTouchSupport();
            
            // Add window resize listener to recalculate on window resize
            window.addEventListener('resize', function() {
                if (currentPackageCategory) {
                    updatePackageSlider(currentPackageCategory);
                }
            });
        }
    }, 100);
});

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // Change icon to X
        mobileMenuBtn.innerHTML = `
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
    } else {
        mobileMenu.classList.add('hidden');
        // Change icon back to hamburger
        mobileMenuBtn.innerHTML = `
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        `;
    }
}

// Initialize mobile menu and back to top
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Back to top functionality
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Commented out: Services slider is now a grid layout, not a slider
    // updateMainServicesSlider();
});

function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons (desktop and mobile)
    const tabButtons = document.querySelectorAll('.tab-button, .tab-button-mobile');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update back to top button visibility after tab switch
    setTimeout(() => {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            // All tabs now have the same structure, so use consistent behavior
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }, 100);
}



// Survey form handling
document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.querySelector('#surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = ['booking-ease', 'information-clarity', 'value-money'];
            let allFilled = true;
            
            requiredFields.forEach(field => {
                const fieldElement = document.querySelector(`input[name="${field}"]:checked`);
                if (!fieldElement) {
                    allFilled = false;
                }
            });
            
            if (!allFilled) {
                showMessage('⚠️ Please answer all required questions before submitting.', 'warning');
                return;
            }
            
            // Show loading state
            const submitButton = surveyForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.innerHTML = `<span class="loading-spinner mr-2"></span>Submitting...`;
            submitButton.disabled = true;
            
            // Collect survey data
            const surveyData = {
                booking_ease: document.querySelector('input[name="booking-ease"]:checked')?.value || 'Not answered',
                information_clarity: document.querySelector('input[name="information-clarity"]:checked')?.value || 'Not answered',
                value_money: document.querySelector('input[name="value-money"]:checked')?.value || 'Not answered',
                improvements: document.querySelector('textarea[name="improvements"]')?.value || 'No suggestions',
                experience: document.querySelector('select[name="experience"]')?.value || 'Not specified',
                timestamp: new Date().toLocaleString()
            };
            
            // Send survey via EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_SURVEY_TEMPLATE_ID', surveyData)
                .then(function(response) {
                    showNotification('✅ Thank you for your feedback! We appreciate your input and will use it to improve our services.', 'success');
                    surveyForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, function(error) {
                    console.error('Survey EmailJS error:', error);
                    showNotification('✅ Thank you for your feedback! We appreciate your input.', 'success'); // Show success anyway for better UX
                    surveyForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
        });
    }
});

// Contact form handling with EmailJS
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('❌ Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('❌ Please enter a valid email address.', 'error');
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.innerHTML = `<span class="loading-spinner mr-2"></span>Sending...`;
        submitButton.disabled = true;
        
        // Send email using EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };
        
        emailjs.send('service_l7tgzys', 'template_ld0fd4g', templateParams)
            .then(function(response) {
                console.log('EmailJS success:', response.status, response.text);
                showNotification('✅ Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, function(error) {
                console.error('EmailJS error details:', error);
                console.log('Service ID:', 'service_l7tgzys');
                console.log('Template ID:', 'template_ld0fd4g');
                console.log('Template Params:', templateParams);
                showNotification('❌ Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success/error messages with enhanced styling
function showNotification(message, type = 'info', duration = 5000) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full max-w-sm`;
    
    // Set notification style based on type
    const styles = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white', 
        warning: 'bg-yellow-500 text-white',
        info: 'bg-blue-500 text-white'
    };

    notification.className += ` ${styles[type] || styles.info}`;

    const icons = {
        success: '✅',
        error: '❌', 
        warning: '⚠️',
        info: 'ℹ️'
    };

    notification.innerHTML = `
        <div class="flex items-center">
            <span class="mr-2" style="font-size: 1.2em;">${icons[type] || icons.info}</span>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200 focus:outline-none">×</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
    });

    // Auto remove
    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, duration);
    }

    return notification;
}

// Service slider variables and functions (keeping for compatibility)
let mainServicesCurrentSlide = 0;

function slideMainServices(direction) {
    const slider = document.getElementById('servicesSlider');
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 24; // Include gap
    
    if (direction === 'next') {
        mainServicesCurrentSlide = (mainServicesCurrentSlide + 1) % cards.length;
    } else {
        mainServicesCurrentSlide = mainServicesCurrentSlide === 0 ? cards.length - 1 : mainServicesCurrentSlide - 1;
    }
    
    const translateX = -mainServicesCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateMainServicesSlider();
}

function goToMainServicesSlide(index) {
    mainServicesCurrentSlide = index;
    const slider = document.getElementById('servicesSlider');
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 24;
    
    const translateX = -mainServicesCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateMainServicesSlider();
}

function updateMainServicesSlider() {
    const indicators = document.querySelectorAll('.services-indicator');
    indicators.forEach((indicator, index) => {
        if (index === mainServicesCurrentSlide) {
            indicator.classList.add('bg-indigo-600');
            indicator.classList.remove('bg-gray-300');
        } else {
            indicator.classList.add('bg-gray-300');
            indicator.classList.remove('bg-indigo-600');
        }
    });
}

// Book tour function
function bookTour(packageName = '', price = '') {
    showTab('contact');
    
    setTimeout(() => {
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            // Pre-fill the message field
            const messageField = contactForm.querySelector('textarea[name="message"]');
            const subjectField = contactForm.querySelector('input[name="subject"]');
            
            if (messageField && packageName) {
                messageField.value = `I'm interested in booking the ${packageName} package${price ? ` (${price})` : ''}. Please provide more details and availability.`;
            }
            
            if (subjectField && packageName) {
                subjectField.value = `Booking Inquiry - ${packageName}`;
            }

            // Focus on the name field
            const nameField = contactForm.querySelector('input[name="name"]');
            if (nameField) {
                nameField.focus();
            }

            // Scroll to form
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            if (packageName) {
                showNotification(`Redirecting you to book ${packageName}...`, 'info', 3000);
            }
        }
    }, 100);
}

function bookSpecificTour(packageName, price) {
    bookTour(packageName, price);
}

// Europe tour slider
let europeCurrentSlide = 0;

// Mobile touch support for sliders
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e, sliderType) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture(sliderType);
}

function handleSwipeGesture(sliderType) {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const swipeDistance = touchStartX - touchEndX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe left - next slide
            if (sliderType === 'europe') {
                slideEurope('next');
            } else if (sliderType === 'services') {
                slideMainServices('next');
            }
        } else {
            // Swipe right - previous slide
            if (sliderType === 'europe') {
                slideEurope('prev');
            } else if (sliderType === 'services') {
                slideMainServices('prev');
            }
        }
    }
}

// Add touch event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add touch support to Europe slider
    const europeSlider = document.getElementById('europeSlider');
    if (europeSlider) {
        europeSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        europeSlider.addEventListener('touchend', (e) => handleTouchEnd(e, 'europe'), { passive: true });
    }
    
    // Add touch support to Services slider
    const servicesSlider = document.getElementById('servicesSlider');
    if (servicesSlider) {
        servicesSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        servicesSlider.addEventListener('touchend', (e) => handleTouchEnd(e, 'services'), { passive: true });
    }
});

function slideEurope(direction) {
    const slider = document.getElementById('europeSlider');
    const cards = slider.children;
    
    if (direction === 'next') {
        europeCurrentSlide = (europeCurrentSlide + 1) % cards.length;
    } else {
        europeCurrentSlide = europeCurrentSlide === 0 ? cards.length - 1 : europeCurrentSlide - 1;
    }
    
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    const translateX = -europeCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateEuropeSlider();
}

function goToEuropeSlide(index) {
    europeCurrentSlide = index;
    const slider = document.getElementById('europeSlider');
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 32;
    
    const translateX = -europeCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateEuropeSlider();
}

function updateEuropeSlider() {
    const indicators = document.querySelectorAll('.europe-indicator');
    indicators.forEach((indicator, index) => {
        if (index === europeCurrentSlide) {
            indicator.classList.add('bg-indigo-600');
            indicator.classList.remove('bg-gray-300');
        } else {
            indicator.classList.add('bg-gray-300');
            indicator.classList.remove('bg-indigo-600');
        }
    });
}

// Location data
const locations = {
    'main-office': {
        name: 'Main Office',
        address: 'Skyworld Commercial Center, Session Road, Baguio City 2600',
        phone: '(074) 123-4567',
        hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
        description: 'Central Baguio, near Session Road',
        coordinates: [16.4023, 120.5960]
    },
    'sm-city': {
        name: 'SM City Branch',
        address: 'Upper Basement (Opposite DFA), SM City, Baguio City 2600',
        phone: '(074) 123-4567',
        hours: 'Monday - Sunday: 10:00 AM - 9:00 PM',
        description: 'Inside SM City Mall, near DFA Office',
        coordinates: [16.4023, 120.5960]
    },
    'ymca': {
        name: 'YMCA Branch',
        address: 'Ground Floor, YMCA Bldg., Upper Session Road, Baguio City 2600',
        phone: '(074) 123-4567',
        hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
        description: 'Historic YMCA Building',
        coordinates: [16.4023, 120.5960]
    },
    'santiago': {
        name: 'Santiago Branch',
        address: 'Level 2 Robinsons Mall, Maharlika Highway, Santiago City, Isabela 3311',
        phone: '(074) 123-4567',
        hours: 'Monday - Sunday: 10:00 AM - 9:00 PM',
        description: 'Inside Robinsons Mall',
        manager: 'Corazon A. Balisong',
        coordinates: [16.6881, 121.5489]
    }
};

function showBaguioLocations() {
    const baguioLocations = [
        locations['main-office'],
        locations['sm-city'],
        locations['ymca']
    ];
    
    const modal = document.getElementById('mapModal');
    const title = document.getElementById('mapTitle');
    const content = document.getElementById('locationDetailsContent');
    
    title.textContent = 'Baguio City Locations';
    
    let locationHTML = `
        <div class="space-y-4">
            <h4 class="text-lg font-bold text-indigo-600 border-b border-indigo-200 pb-2">🏔️ Baguio City Branches</h4>
    `;
    
    baguioLocations.forEach((loc, index) => {
        const colors = ['indigo', 'blue', 'purple'];
        const color = colors[index];
        
        locationHTML += `
            <div class="bg-${color}-50 p-3 rounded-lg border-2 border-${color}-200">
                <h5 class="font-bold text-${color}-600 mb-1">${index === 0 ? '🏢' : '🏬'} ${loc.name}</h5>
                <p class="text-sm text-gray-700">${loc.address}</p>
                <div class="mt-2 text-xs text-${color}-600">📞 ${loc.phone}</div>
                <button onclick="openGoogleMaps('${loc.address}', ${loc.coordinates[0]}, ${loc.coordinates[1]})" 
                        class="mt-2 w-full bg-${color}-600 text-white py-1 px-2 rounded text-xs hover:bg-${color}-700 transition-all">
                    🧭 Navigate
                </button>
            </div>
        `;
    });
    
    locationHTML += `
            <div class="p-3 bg-gray-100 rounded-lg">
                <p class="text-gray-600 text-sm">🌡️ Cool mountain climate • 🚗 1,540m above sea level • 🌲 Summer capital of the Philippines</p>
            </div>
        </div>
    `;
    
    content.innerHTML = locationHTML;
    modal.classList.remove('hidden');
    
    // Initialize map
    setTimeout(() => {
        initializeBaguioMap(baguioLocations);
    }, 100);
}

function initializeBaguioMap(locations) {
    const map = L.map('map').setView([16.4023, 120.5960], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    locations.forEach((loc, index) => {
        const colors = ['#1e40af', '#3b82f6', '#8b5cf6'];
        
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                width: 30px; 
                height: 30px; 
                background-color: ${colors[index]}; 
                border: 2px solid white; 
                border-radius: 50%; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                color: white; 
                font-weight: bold; 
                font-size: 12px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">${index + 1}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        L.marker([loc.coordinates[0], loc.coordinates[1]], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
                <div style="padding: 10px; max-width: 250px;">
                    <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${loc.name}</h3>
                    <p style="margin: 5px 0; color: #374151;">${loc.address}</p>
                    <p style="margin: 5px 0; color: #374151;">📞 ${loc.phone}</p>
                </div>
            `);
    });
}

function showLocation(locationId) {
    const location = locations[locationId];
    if (!location) return;
    
    const modal = document.getElementById('mapModal');
    const title = document.getElementById('mapTitle');
    const content = document.getElementById('locationDetailsContent');
    
    title.textContent = location.name;
    
    const managerInfo = location.manager ? `
        <div class="flex items-start space-x-3">
            <div class="text-xl">👤</div>
            <div>
                <p class="font-semibold text-gray-800">Manager:</p>
                <p class="text-gray-600 text-sm">${location.manager}</p>
            </div>
        </div>
    ` : '';
    
    content.innerHTML = `
        <div class="space-y-4">
            <h4 class="text-lg font-bold text-indigo-600 border-b border-indigo-200 pb-2">📍 ${location.name}</h4>
            <div class="space-y-3">
                <div class="flex items-start space-x-3">
                    <div class="text-xl">📍</div>
                    <div>
                        <p class="font-semibold text-gray-800">Address:</p>
                        <p class="text-gray-600 text-sm">${location.address}</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div class="flex items-center space-x-2">
                        <span>📞</span>
                        <span class="text-gray-700">${location.phone}</span>
                    </div>
                    <div class="flex items-start space-x-2">
                        <span class="text-sm">🕒</span>
                        <div>
                            <p class="font-semibold text-gray-700 text-sm">Hours:</p>
                            <p class="text-gray-600 text-xs">${location.hours}</p>
                        </div>
                    </div>
                </div>
                
                ${managerInfo}
                
                <div class="p-2 bg-gray-50 rounded border border-gray-200">
                    <p class="text-xs text-gray-600">💡 ${location.description}</p>
                </div>
            </div>
            
            <div class="pt-4 border-t border-gray-200">
                <div class="space-y-2">
                    <button onclick="openGoogleMaps('${location.address}', ${location.coordinates[0]}, ${location.coordinates[1]})" 
                            class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                        <span class="text-lg">🧭</span>
                        <span>Navigate with Google Maps</span>
                    </button>
                    <button onclick="copyAddress('${location.address}')" 
                            class="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                        <span class="text-lg">📋</span>
                        <span>Copy Address</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Initialize single location map
    setTimeout(() => {
        initializeMap(location);
    }, 100);
}

function initializeMap(location) {
    const map = L.map('map').setView([location.coordinates[0], location.coordinates[1]], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker([location.coordinates[0], location.coordinates[1]])
        .addTo(map)
        .bindPopup(`
            <div style="padding: 10px; max-width: 250px;">
                <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${location.name}</h3>
                <p style="margin: 5px 0; color: #374151;">${location.address}</p>
                <p style="margin: 5px 0; color: #374151;">📞 ${location.phone}</p>
            </div>
        `);
}

function hideLocation() {
    const modal = document.getElementById('mapModal');
    modal.classList.add('hidden');
}

function openGoogleMaps(address, lat, lng) {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
}

function copyAddress(address) {
    navigator.clipboard.writeText(address).then(function() {
        showCopySuccess();
    }).catch(function(err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = address;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        showCopySuccess();
    });
}

function showCopySuccess() {
    showNotification('📋 Address copied to clipboard!', 'success', 3000);
}

// Modal close functionality
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    const mapModal = document.getElementById('mapModal');
    if (mapModal) {
        mapModal.addEventListener('click', function(e) {
            if (e.target === mapModal) {
                hideLocation();
            }
        });
    }

    // Handle contact form submission (simplified - no email sending)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (no actual email sending)
            setTimeout(() => {
                showMessage('✅ Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Show success/error messages
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message-notification');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-notification fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 max-w-md ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    messageDiv.innerHTML = `
        <div class="flex items-center space-x-3">
            <span class="text-xl">${type === 'success' ? '✅' : '❌'}</span>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200 ml-2">✕</button>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentElement) {
            messageDiv.remove();
        }
    }, 5000);
}