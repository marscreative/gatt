// Custom Scripts for Gracious Angeli Travel & Tours

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
    
    // Services are now displayed in a grid layout - no slider needed
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

// Package button functionality
function handlePackageClick(packageType) {
    // Switch to contact tab
    showTab('contact');
    
    // Set the subject based on package type
    const subjectField = document.getElementById('subject');
    if (subjectField) {
        switch(packageType) {
            case 'australia':
                subjectField.value = 'Study Abroad Inquiry - Australia Programs';
                break;
            case 'canada':
                subjectField.value = 'Study Abroad Inquiry - Canada Programs';
                break;
            case 'philippines':
                subjectField.value = 'Philippines Travel Package Inquiry';
                break;
            case 'domestic':
                showTab('services');
                return; // Don't populate subject, just redirect to services
                break;
            default:
                subjectField.value = 'Travel Package Inquiry';
        }
    }
    
    // Scroll to contact form
    setTimeout(() => {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
}

// Survey form submission with enhanced feedback
const surveyForm = document.getElementById('surveyForm');
if (surveyForm) {
    surveyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data for validation
        const bookingEase = this.querySelector('input[name="booking-ease"]:checked');
        const informationClarity = this.querySelector('input[name="information-clarity"]:checked');
        const valueMoney = this.querySelector('input[name="value-money"]:checked');
        
        // Basic validation
        if (!bookingEase || !informationClarity || !valueMoney) {
            showNotification('Please answer all required questions.', 'warning');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-spinner mr-2"></span>Submitting...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Thank you for your feedback! We appreciate your input and will use it to improve our services.', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Contact form submission with validation
const contactForm = document.querySelector('form');
if (contactForm && contactForm.id !== 'surveyForm') {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set notification style based on type
    switch(type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white';
            break;
        default:
            notification.className += ' bg-blue-500 text-white';
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="mr-2">${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}</span>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Main Services Slider functionality
let mainServicesCurrentSlide = 0;
const mainServicesTotalSlides = 2;

function slideMainServices(direction) {
    mainServicesCurrentSlide += direction;
    if (mainServicesCurrentSlide >= mainServicesTotalSlides) {
        mainServicesCurrentSlide = 0;
    } else if (mainServicesCurrentSlide < 0) {
        mainServicesCurrentSlide = mainServicesTotalSlides - 1;
    }
    updateMainServicesSlider();
}

function goToMainServicesSlide(slideIndex) {
    mainServicesCurrentSlide = slideIndex;
    updateMainServicesSlider();
}

function updateMainServicesSlider() {
    const slider = document.getElementById('mainServicesSlider');
    if (slider) {
        const translateX = -mainServicesCurrentSlide * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }
    // Update indicators
    const indicators = document.querySelectorAll('.main-services-indicator');
    indicators.forEach((indicator, index) => {
        if (index === mainServicesCurrentSlide) {
            indicator.classList.remove('bg-gray-300');
            indicator.classList.add('bg-indigo-600');
        } else {
            indicator.classList.remove('bg-indigo-600');
            indicator.classList.add('bg-gray-300');
        }
    });
}

// Book Tour function with enhanced functionality
function bookTour(packageName = '', price = '') {
    showTab('contact');
    
    // Scroll to the contact form
    setTimeout(() => {
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Pre-fill the message field with package information if provided
            const messageField = contactForm.querySelector('textarea');
            if (messageField && packageName) {
                messageField.value = `I'm interested in booking the ${packageName} package${price ? ` (${price})` : ''}. Please provide more details and availability.`;
            }
            
            // Focus on the name field
            const nameField = contactForm.querySelector('input[type="text"]');
            if (nameField) {
                nameField.focus();
            }
            
            // Show notification
            if (packageName) {
                showNotification(`Redirecting you to book ${packageName}...`, 'info');
            }
        }
    }, 100);
}

// Enhanced book tour function for specific packages
function bookSpecificTour(packageName, price) {
    bookTour(packageName, price);
}

// Services Grid - All services displayed in a beautiful grid layout
// No slider functionality needed - all services are visible at once

// Europe Tours Slider functionality
let europeCurrentSlide = 0;
const europeTotalSlides = 2;

function slideEurope(direction) {
    europeCurrentSlide += direction;
    if (europeCurrentSlide >= europeTotalSlides) {
        europeCurrentSlide = 0;
    } else if (europeCurrentSlide < 0) {
        europeCurrentSlide = europeTotalSlides - 1;
    }
    updateEuropeSlider();
}

function goToEuropeSlide(slideIndex) {
    europeCurrentSlide = slideIndex;
    updateEuropeSlider();
}

function updateEuropeSlider() {
    const slider = document.getElementById('europeSlider');
    if (slider) {
        const translateX = -europeCurrentSlide * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }
    // Update indicators
    const indicators = document.querySelectorAll('.europe-indicator');
    indicators.forEach((indicator, index) => {
        if (index === europeCurrentSlide) {
            indicator.classList.remove('bg-gray-300');
            indicator.classList.add('bg-indigo-600');
        } else {
            indicator.classList.remove('bg-indigo-600');
            indicator.classList.add('bg-gray-300');
        }
    });
}

// Global map variable
let map = null;
let markers = [];

// Location coordinates and details
const locations = {
    'main-office': {
        name: 'Main Office',
        lat: 16.4023,
        lng: 120.5960,
        address: 'Skyworld Commercial Center, Session Road, Baguio City 2600',
        phone: '(074) 123-4567',
        hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
        description: 'Central Baguio, near Session Road',
        color: 'indigo'
    },
    'sm-city': {
        name: 'SM City Branch',
        lat: 16.4023,
        lng: 120.5960,
        address: 'Upper Basement (Opposite DFA), SM City, Baguio City 2600',
        phone: '(074) 123-4567',
        hours: 'Monday - Sunday: 10:00 AM - 9:00 PM',
        description: 'Inside SM City Mall, near DFA Office',
        color: 'blue'
    },
    'ymca': {
        name: 'YMCA Branch',
        lat: 16.4023,
        lng: 120.5960,
        address: 'Ground Floor, YMCA Bldg., Upper Session Road, Baguio City 2600',
        phone: '(074) 123-4567',
        hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
        description: 'Historic YMCA Building',
        color: 'purple'
    },
    'santiago': {
        name: 'Santiago Branch',
        lat: 16.6881,
        lng: 121.5489,
        address: 'Level 2 Robinsons Mall, Maharlika Highway, Santiago City, Isabela 3311',
        phone: '(074) 123-4567',
        hours: 'Monday - Sunday: 10:00 AM - 9:00 PM',
        description: 'Inside Robinsons Mall',
        manager: 'Corazon A. Balisong',
        color: 'green'
    }
};

// Show all Baguio locations
function showBaguioLocations() {
    const mapModal = document.getElementById('mapModal');
    const locationDetailsContent = document.getElementById('locationDetailsContent');
    const mapTitle = document.getElementById('mapTitle');
    
    if (!mapModal) return;
    
    // Update title
    if (mapTitle) mapTitle.textContent = 'Baguio City Locations';
    
    // Update location details
    if (locationDetailsContent) {
        locationDetailsContent.innerHTML = `
            <div class="space-y-4">
                <h4 class="text-lg font-bold text-indigo-600 border-b border-indigo-200 pb-2">🏔️ Baguio City Branches</h4>
                <div class="space-y-3">
                    <div class="bg-indigo-50 p-3 rounded-lg border-2 border-indigo-200">
                        <h5 class="font-bold text-indigo-600 mb-1">🏢 Main Office</h5>
                        <p class="text-sm text-gray-700">Skyworld Commercial Center<br>Session Road, Baguio City 2600</p>
                        <div class="mt-2 text-xs text-indigo-600">📞 (074) 123-4567</div>
                    </div>
                    <div class="bg-blue-50 p-3 rounded-lg border-2 border-blue-200">
                        <h5 class="font-bold text-blue-600 mb-1">🛍️ SM City Branch</h5>
                        <p class="text-sm text-gray-700">Upper Basement (Opposite DFA)<br>SM City, Baguio City 2600</p>
                        <div class="mt-2 text-xs text-blue-600">Near DFA Office</div>
                    </div>
                    <div class="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
                        <h5 class="font-bold text-purple-600 mb-1">🏨 YMCA Branch</h5>
                        <p class="text-sm text-gray-700">Ground Floor, YMCA Bldg.<br>Upper Session Road, Baguio City 2600</p>
                        <div class="mt-2 text-xs text-purple-600">Historic Building</div>
                    </div>
                </div>
                <div class="p-3 bg-gray-100 rounded-lg">
                    <p class="text-gray-600 text-sm">🌡️ Cool mountain climate • 🚗 1,540m above sea level • 🌲 Summer capital of the Philippines</p>
                </div>
            </div>
        `;
    }
    
    // Show modal
    mapModal.classList.remove('hidden');
    
    // Initialize map with all Baguio locations
    setTimeout(() => {
        initializeBaguioMap();
    }, 100);
}

// Initialize map with all Baguio locations
function initializeBaguioMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Clear existing map
    if (map) {
        map.remove();
        map = null;
    }
    
    // Clear existing markers
    markers = [];
    
    // Create new map centered on Baguio
    map = L.map(mapElement).setView([16.4023, 120.5960], 13);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add markers for all Baguio locations
    const baguioLocations = [
        { name: 'Main Office', lat: 16.4023, lng: 120.5960, address: 'Skyworld Commercial Center, Session Road, Baguio City 2600' },
        { name: 'SM City Branch', lat: 16.4023, lng: 120.5960, address: 'Upper Basement (Opposite DFA), SM City, Baguio City 2600' },
        { name: 'YMCA Branch', lat: 16.4023, lng: 120.5960, address: 'Ground Floor, YMCA Bldg., Upper Session Road, Baguio City 2600' }
    ];
    
    baguioLocations.forEach((loc, index) => {
        // Create custom icon
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                width: 30px; 
                height: 30px; 
                background-color: ${index === 0 ? '#1e40af' : index === 1 ? '#3b82f6' : '#8b5cf6'}; 
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
        
        const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);
        
        // Add popup
        marker.bindPopup(`
            <div style="padding: 10px; max-width: 250px;">
                <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${loc.name}</h3>
                <p style="margin: 5px 0; color: #374151;">${loc.address}</p>
                <p style="margin: 5px 0; color: #374151;">📞 (074) 123-4567</p>
            </div>
        `);
        
        markers.push(marker);
    });
    
    // Trigger resize to ensure map displays correctly
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

// Map functionality
function showLocation(location) {
    const mapModal = document.getElementById('mapModal');
    const locationDetailsContent = document.getElementById('locationDetailsContent');
    const mapTitle = document.getElementById('mapTitle');
    
    if (!mapModal || !locations[location]) return;
    
    const loc = locations[location];
    
    // Update title
    if (mapTitle) mapTitle.textContent = loc.name;
    
    // Update location details
    if (locationDetailsContent) {
        locationDetailsContent.innerHTML = `
            <div class="space-y-4">
                <h4 class="text-lg font-bold text-${loc.color}-600 border-b border-${loc.color}-200 pb-2">📍 ${loc.name}</h4>
                <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                        <div class="text-xl">📍</div>
                        <div>
                            <p class="font-semibold text-gray-800">Address:</p>
                            <p class="text-gray-600 text-sm">${loc.address}</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="text-xl">📞</div>
                        <div>
                            <p class="font-semibold text-gray-800">Phone:</p>
                            <p class="text-gray-600 text-sm">${loc.phone}</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="text-xl">🕒</div>
                        <div>
                            <p class="font-semibold text-gray-800">Hours:</p>
                            <p class="text-gray-600 text-sm">${loc.hours}</p>
                        </div>
                    </div>
                    ${loc.manager ? `
                    <div class="flex items-start space-x-3">
                        <div class="text-xl">👤</div>
                        <div>
                            <p class="font-semibold text-gray-800">Manager:</p>
                            <p class="text-gray-600 text-sm">${loc.manager}</p>
                        </div>
                    </div>
                    ` : ''}
                    <div class="flex items-start space-x-3">
                        <div class="text-xl">ℹ️</div>
                        <div>
                            <p class="font-semibold text-gray-800">Location:</p>
                            <p class="text-gray-600 text-sm">${loc.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Show modal
    mapModal.classList.remove('hidden');
    
    // Initialize map after modal is shown
    setTimeout(() => {
        initializeMap(loc);
    }, 100);
}

// Initialize Leaflet Map
function initializeMap(location) {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Clear existing map
    if (map) {
        map.remove();
        map = null;
    }
    
    // Clear existing markers
    markers = [];
    
    // Create new map
    map = L.map(mapElement).setView([location.lat, location.lng], 15);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add marker
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    
    // Add popup
    marker.bindPopup(`
        <div style="padding: 10px; max-width: 250px;">
            <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${location.name}</h3>
            <p style="margin: 5px 0; color: #374151;">${location.address}</p>
            <p style="margin: 5px 0; color: #374151;">📞 ${location.phone}</p>
        </div>
    `);
    
    markers.push(marker);
    
    // Trigger resize to ensure map displays correctly
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

function hideLocation() {
    const mapModal = document.getElementById('mapModal');
    if (mapModal) {
        mapModal.classList.add('hidden');
        
        // Clear map when hiding
        if (map) {
            map.remove();
            map = null;
        }
        markers = [];
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add click outside modal to close functionality
    const mapModal = document.getElementById('mapModal');
    if (mapModal) {
        mapModal.addEventListener('click', function(e) {
            if (e.target === mapModal) {
                hideLocation();
            }
        });
    }
});