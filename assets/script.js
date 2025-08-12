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

// Map functionality
function showLocation(location) {
    const locationDetails = document.getElementById('locationDetails');
    const locationContent = document.getElementById('locationContent');
    let content = '';
    
    switch(location) {
        case 'baguio':
            content = `
                <div class="text-center">
                    <div class="text-6xl mb-4">🏔️</div>
                    <h3 class="text-3xl font-bold text-indigo-600 mb-4">Baguio City Locations</h3>
                    <div class="grid md:grid-cols-3 gap-6 text-left">
                        <div class="bg-indigo-50 p-4 rounded-lg border-2 border-indigo-200">
                            <h4 class="font-bold text-indigo-600 mb-2">🏢 Main Office</h4>
                            <p class="text-sm text-gray-700">Skyworld Commercial Center<br>Session Road, Baguio City 2600</p>
                            <div class="mt-2 text-xs text-indigo-600">📞 (074) 123-4567</div>
                        </div>
                        <div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                            <h4 class="font-bold text-blue-600 mb-2">🛍️ SM City Branch</h4>
                            <p class="text-sm text-gray-700">Upper Basement (Opposite DFA)<br>SM City, Baguio City 2600</p>
                            <div class="mt-2 text-xs text-blue-600">Near DFA Office</div>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                            <h4 class="font-bold text-purple-600 mb-2">🏨 YMCA Branch</h4>
                            <p class="text-sm text-gray-700">Ground Floor, YMCA Bldg.<br>Upper Session Road, Baguio City 2600</p>
                            <div class="mt-2 text-xs text-purple-600">Historic Building</div>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p class="text-gray-600">🌡️ Cool mountain climate • 🚗 1,540m above sea level • 🌲 Summer capital of the Philippines</p>
                    </div>
                </div>
            `;
            break;
            
        case 'main-office':
            content = `
                <div class="text-center">
                    <div class="text-6xl mb-4">🏢</div>
                    <h3 class="text-3xl font-bold text-indigo-600 mb-4">Main Office</h3>
                    <div class="max-w-md mx-auto">
                        <div class="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200 text-left">
                            <h4 class="font-bold text-indigo-600 mb-3 text-center">🏢 Main Office</h4>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Address:</strong> Skyworld Commercial Center<br>Session Road, Baguio City 2600</p>
                                <p class="text-gray-700"><strong>Phone:</strong> (074) 123-4567</p>
                                <p class="text-gray-700"><strong>Location:</strong> Central Baguio, near Session Road</p>
                                <p class="text-gray-700"><strong>Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p class="text-gray-600">🏔️ Cool mountain climate • 🚗 1,540m above sea level • 🌲 Summer capital of the Philippines</p>
                    </div>
                </div>
            `;
            break;
            
        case 'sm-city':
            content = `
                <div class="text-center">
                    <div class="text-6xl mb-4">🛍️</div>
                    <h3 class="text-3xl font-bold text-blue-600 mb-4">SM City Branch</h3>
                    <div class="max-w-md mx-auto">
                        <div class="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 text-left">
                            <h4 class="font-bold text-blue-600 mb-3 text-center">🛍️ SM City Branch</h4>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Address:</strong> Upper Basement (Opposite DFA)<br>SM City, Baguio City 2600</p>
                                <p class="text-gray-700"><strong>Phone:</strong> (074) 123-4567</p>
                                <p class="text-gray-700"><strong>Location:</strong> Inside SM City Mall, near DFA Office</p>
                                <p class="text-gray-700"><strong>Hours:</strong> Monday - Sunday: 10:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p class="text-gray-600">🛍️ Shopping mall location • 📋 Near DFA Office • 🚗 Convenient parking</p>
                    </div>
                </div>
            `;
            break;
            
        case 'ymca':
            content = `
                <div class="text-center">
                    <div class="text-6xl mb-4">🏨</div>
                    <h3 class="text-3xl font-bold text-purple-600 mb-4">YMCA Branch</h3>
                    <div class="max-w-md mx-auto">
                        <div class="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 text-left">
                            <h4 class="font-bold text-purple-600 mb-3 text-center">🏨 YMCA Branch</h4>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Address:</strong> Ground Floor, YMCA Bldg.<br>Upper Session Road, Baguio City 2600</p>
                                <p class="text-gray-700"><strong>Phone:</strong> (074) 123-4567</p>
                                <p class="text-gray-700"><strong>Location:</strong> Historic YMCA Building</p>
                                <p class="text-gray-700"><strong>Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p class="text-gray-600">🏨 Historic building • 🏛️ Upper Session Road • 🌲 Scenic mountain view</p>
                    </div>
                </div>
            `;
            break;
            
        case 'santiago':
            content = `
                <div class="text-center">
                    <div class="text-6xl mb-4">🌾</div>
                    <h3 class="text-3xl font-bold text-green-600 mb-4">Santiago Branch</h3>
                    <div class="max-w-md mx-auto">
                        <div class="bg-green-50 p-6 rounded-lg border-2 border-green-200 text-left">
                            <h4 class="font-bold text-green-600 mb-3 text-center">🏬 Santiago Branch</h4>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Address:</strong> Level 2 Robinsons Mall<br>Maharlika Highway, Santiago City, Isabela 3311</p>
                                <p class="text-gray-700"><strong>Manager:</strong> Corazon A. Balisong</p>
                                <p class="text-gray-700"><strong>Phone:</strong> (074) 123-4567</p>
                                <p class="text-gray-700"><strong>Location:</strong> Inside Robinsons Mall</p>
                                <p class="text-gray-700"><strong>Hours:</strong> Monday - Sunday: 10:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p class="text-gray-600">🌾 Agricultural hub • 🛣️ Along Maharlika Highway • 🏪 Convenient mall location</p>
                    </div>
                    <div class="mt-4 text-sm text-gray-600">
                        <p>Santiago City is the gateway to Northern Luzon and a major commercial center in Isabela province.</p>
                    </div>
                </div>
            `;
            break;
            
        default:
            content = `
                <div class="text-center">
                    <div class="text-6xl mb-4">📍</div>
                    <h3 class="text-3xl font-bold text-gray-600 mb-4">Location Not Found</h3>
                    <p class="text-gray-600">Please select a valid location from the map.</p>
                </div>
            `;
    }
    
    if (locationContent) locationContent.innerHTML = content;
    if (locationDetails) {
        locationDetails.classList.remove('hidden');
        locationDetails.style.opacity = '0';
        // Add fade-in animation
        setTimeout(() => {
            if (locationDetails) locationDetails.style.opacity = '1';
        }, 10);
    }
}

function hideLocation() {
    const locationDetails = document.getElementById('locationDetails');
    if (locationDetails) {
        locationDetails.style.opacity = '0';
        setTimeout(() => {
            locationDetails.classList.add('hidden');
        }, 300);
    }
}