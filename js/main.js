/**
 * Gracious Angeli Travel & Tours - Main JavaScript
 * Optimized for performance, accessibility, and maintainability
 */

// Configuration object
const CONFIG = {
    API_ENDPOINTS: {
        packages: '/data/packages.json',
        offices: '/data/offices.json',
        services: '/data/services.json'
    },
    ANIMATION_DURATION: 300,
    NOTIFICATION_DURATION: 5000,
    SCROLL_THRESHOLD: 300
};

// Application state
const AppState = {
    currentTab: 'home',
    isDataLoaded: false,
    packages: null,
    offices: null,
    services: null,
    map: null,
    markers: []
};

/**
 * Utility Functions
 */
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Validate email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Sanitize HTML content
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    },

    // Get element with error handling
    getElement(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
        }
        return element;
    },

    // Animate element
    animateElement(element, animation, duration = CONFIG.ANIMATION_DURATION) {
        return new Promise(resolve => {
            element.style.animation = `${animation} ${duration}ms ease-in-out`;
            setTimeout(() => {
                element.style.animation = '';
                resolve();
            }, duration);
        });
    }
};

/**
 * Data Management
 */
const DataManager = {
    async loadData() {
        if (AppState.isDataLoaded) return;

        try {
            const [packagesResponse, officesResponse, servicesResponse] = await Promise.all([
                fetch(CONFIG.API_ENDPOINTS.packages),
                fetch(CONFIG.API_ENDPOINTS.offices),
                fetch(CONFIG.API_ENDPOINTS.services)
            ]);

            if (!packagesResponse.ok || !officesResponse.ok || !servicesResponse.ok) {
                throw new Error('Failed to load data files');
            }

            AppState.packages = await packagesResponse.json();
            AppState.offices = await officesResponse.json();
            AppState.services = await servicesResponse.json();
            AppState.isDataLoaded = true;

            console.log('Data loaded successfully');
        } catch (error) {
            console.error('Error loading data:', error);
            NotificationManager.show('Failed to load data. Please refresh the page.', 'error');
        }
    },

    getPackage(category, id) {
        if (!AppState.packages) return null;
        
        if (category === 'domestic') {
            return AppState.packages.domestic[id];
        } else if (category === 'international') {
            // Handle different international package structures
            const intl = AppState.packages.international;
            if (intl[id]) return intl[id];
            
            // Search in nested structures
            for (const key in intl) {
                if (intl[key][id]) return intl[key][id];
                if (Array.isArray(intl[key])) {
                    const found = intl[key].find(pkg => pkg.id === id);
                    if (found) return found;
                }
            }
        }
        return null;
    },

    getOffice(id) {
        if (!AppState.offices) return null;
        return AppState.offices.offices.find(office => office.id === id);
    },

    getService(id) {
        if (!AppState.services) return null;
        return AppState.services.services.find(service => service.id === id);
    }
};

/**
 * Navigation Management
 */
const NavigationManager = {
    init() {
        this.bindEvents();
        this.updateActiveTab();
    },

    bindEvents() {
        // Desktop navigation
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = this.getTabFromButton(button);
                if (tabName) this.showTab(tabName);
            });
        });

        // Mobile navigation
        const mobileMenuBtn = Utils.getElement('#mobileMenuBtn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', this.toggleMobileMenu);
        }

        // Handle browser back/forward
        window.addEventListener('popstate', () => {
            this.updateActiveTab();
        });
    },

    getTabFromButton(button) {
        const onclick = button.getAttribute('onclick');
        if (onclick) {
            const match = onclick.match(/showTab\('([^']+)'\)/);
            return match ? match[1] : null;
        }
        return null;
    },

    showTab(tabName) {
        if (AppState.currentTab === tabName) return;

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all buttons
        document.querySelectorAll('.tab-button, .tab-button-mobile').forEach(button => {
            button.classList.remove('active');
        });

        // Show selected tab
        const tabElement = Utils.getElement(`#${tabName}`);
        if (tabElement) {
            tabElement.classList.add('active');
            AppState.currentTab = tabName;
        }

        // Update active buttons
        document.querySelectorAll('.tab-button, .tab-button-mobile').forEach(button => {
            const buttonTab = this.getTabFromButton(button);
            if (buttonTab === tabName) {
                button.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update URL without page reload
        history.pushState({ tab: tabName }, '', `#${tabName}`);

        // Update back to top button visibility
        setTimeout(() => BackToTopManager.updateVisibility(), 100);

        // Close mobile menu if open
        this.closeMobileMenu();
    },

    toggleMobileMenu() {
        const mobileMenu = Utils.getElement('#mobileMenu');
        const mobileMenuBtn = Utils.getElement('#mobileMenuBtn');
        
        if (!mobileMenu || !mobileMenuBtn) return;

        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.innerHTML = `
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Close menu">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            NavigationManager.closeMobileMenu();
        }
    },

    closeMobileMenu() {
        const mobileMenu = Utils.getElement('#mobileMenu');
        const mobileMenuBtn = Utils.getElement('#mobileMenuBtn');
        
        if (!mobileMenu || !mobileMenuBtn) return;

        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = `
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="Open menu">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        `;
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    },

    updateActiveTab() {
        const hash = window.location.hash.slice(1);
        const tabName = hash || 'home';
        if (document.getElementById(tabName)) {
            this.showTab(tabName);
        }
    }
};

/**
 * Back to Top Button Management
 */
const BackToTopManager = {
    init() {
        this.button = Utils.getElement('#backToTop');
        if (!this.button) return;

        this.bindEvents();
        this.updateVisibility();
    },

    bindEvents() {
        if (!this.button) return;

        this.button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Throttled scroll handler for better performance
        window.addEventListener('scroll', Utils.throttle(() => {
            this.updateVisibility();
        }, 100));
    },

    updateVisibility() {
        if (!this.button) return;

        if (window.pageYOffset > CONFIG.SCROLL_THRESHOLD) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }
};

/**
 * Notification Management
 */
const NotificationManager = {
    show(message, type = 'info', duration = CONFIG.NOTIFICATION_DURATION) {
        // Remove existing notification
        const existing = Utils.getElement('.notification');
        if (existing) {
            existing.remove();
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
            <div class="flex items-center" role="alert" aria-live="polite">
                <span class="mr-2" aria-hidden="true">${icons[type] || icons.info}</span>
                <span>${Utils.sanitizeHTML(message)}</span>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="ml-4 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Close notification">×</button>
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
};

/**
 * Form Management
 */
const FormManager = {
    init() {
        this.bindContactForm();
        this.bindSurveyForm();
    },

    bindContactForm() {
        const contactForm = Utils.getElement('#contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleContactSubmission(contactForm);
        });
    },

    bindSurveyForm() {
        const surveyForm = Utils.getElement('#surveyForm');
        if (!surveyForm) return;

        surveyForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSurveySubmission(surveyForm);
        });
    },

    async handleContactSubmission(form) {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name')?.trim(),
            email: formData.get('email')?.trim(),
            subject: formData.get('subject')?.trim(),
            message: formData.get('message')?.trim()
        };

        // Validation
        const errors = this.validateContactForm(data);
        if (errors.length > 0) {
            NotificationManager.show(errors.join('<br>'), 'error');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate API call (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            NotificationManager.show('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            NotificationManager.show('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    },

    async handleSurveySubmission(form) {
        const formData = new FormData(form);
        
        // Basic validation
        const required = ['booking-ease', 'information-clarity', 'value-money'];
        const missing = required.filter(field => !formData.get(field));
        
        if (missing.length > 0) {
            NotificationManager.show('Please answer all required questions.', 'warning');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading-spinner mr-2"></span>Submitting...';
        submitBtn.disabled = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            NotificationManager.show('Thank you for your feedback! We appreciate your input and will use it to improve our services.', 'success');
            form.reset();
        } catch (error) {
            console.error('Error submitting survey:', error);
            NotificationManager.show('Failed to submit feedback. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    },

    validateContactForm(data) {
        const errors = [];

        if (!data.name) errors.push('Name is required');
        if (!data.email) errors.push('Email is required');
        else if (!Utils.isValidEmail(data.email)) errors.push('Please enter a valid email address');
        if (!data.subject) errors.push('Subject is required');
        if (!data.message) errors.push('Message is required');

        return errors;
    }
};

/**
 * Package Booking
 */
const BookingManager = {
    bookTour(packageName = '', price = '') {
        NavigationManager.showTab('contact');
        
        setTimeout(() => {
            const contactForm = Utils.getElement('#contactForm');
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
                    NotificationManager.show(`Redirecting you to book ${packageName}...`, 'info', 3000);
                }
            }
        }, 100);
    },

    handlePackageClick(packageType) {
        const subjectMappings = {
            'australia': 'Study Abroad Inquiry - Australia Programs',
            'canada': 'Study Abroad Inquiry - Canada Programs', 
            'philippines': 'Philippines Travel Package Inquiry',
            'domestic': 'Domestic Travel Package Inquiry'
        };

        if (packageType === 'domestic') {
            NavigationManager.showTab('services');
            return;
        }

        NavigationManager.showTab('contact');
        
        setTimeout(() => {
            const subjectField = Utils.getElement('#subject');
            if (subjectField && subjectMappings[packageType]) {
                subjectField.value = subjectMappings[packageType];
            }

            const contactForm = Utils.getElement('#contactForm');
            if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300);
    }
};

/**
 * Map Management
 */
const MapManager = {
    showLocation(locationId) {
        const office = DataManager.getOffice(locationId);
        if (!office) {
            console.error('Office not found:', locationId);
            return;
        }

        const modal = Utils.getElement('#mapModal');
        const title = Utils.getElement('#mapTitle');
        const content = Utils.getElement('#locationDetailsContent');
        
        if (!modal) return;

        // Update modal content
        if (title) title.textContent = office.name;
        if (content) this.updateLocationDetails(content, office);

        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Initialize map after modal is shown
        setTimeout(() => {
            this.initializeMap(office);
        }, 100);
    },

    showBaguioLocations() {
        if (!AppState.offices) return;

        const baguioOffices = AppState.offices.offices.filter(office => office.city === 'Baguio');
        
        const modal = Utils.getElement('#mapModal');
        const title = Utils.getElement('#mapTitle');
        const content = Utils.getElement('#locationDetailsContent');
        
        if (!modal) return;

        if (title) title.textContent = 'Baguio City Locations';
        if (content) this.updateBaguioDetails(content, baguioOffices);

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            this.initializeBaguioMap(baguioOffices);
        }, 100);
    },

    hideLocation() {
        const modal = Utils.getElement('#mapModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
            
            // Clean up map
            if (AppState.map) {
                AppState.map.remove();
                AppState.map = null;
            }
            AppState.markers = [];
        }
    },

    updateLocationDetails(container, office) {
        container.innerHTML = `
            <div class="space-y-4">
                <h4 class="text-lg font-bold text-${office.color}-600 border-b border-${office.color}-200 pb-2">📍 ${office.name}</h4>
                <div class="space-y-3">
                    ${this.createDetailItem('📍', 'Address', office.address)}
                    ${this.createDetailItem('📞', 'Phone', office.phone)}
                    ${this.createDetailItem('🕒', 'Hours', office.hours)}
                    ${office.manager ? this.createDetailItem('👤', 'Manager', office.manager) : ''}
                    ${this.createDetailItem('ℹ️', 'Location', office.description)}
                </div>
                
                <div class="pt-4 border-t border-gray-200">
                    <div class="space-y-2">
                        <button onclick="MapManager.openGoogleMaps('${office.address}', ${office.coordinates.lat}, ${office.coordinates.lng})" 
                                class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                            <span class="text-lg">🧭</span>
                            <span>Navigate with Google Maps</span>
                        </button>
                        <button onclick="MapManager.copyAddress('${office.address}')" 
                                class="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                            <span class="text-lg">📋</span>
                            <span>Copy Address</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    updateBaguioDetails(container, offices) {
        const officeCards = offices.map(office => `
            <div class="bg-${office.color}-50 p-3 rounded-lg border-2 border-${office.color}-200">
                <h5 class="font-bold text-${office.color}-600 mb-1">${this.getOfficeIcon(office.type)} ${office.name}</h5>
                <p class="text-sm text-gray-700">${office.address}</p>
                <div class="mt-2 text-xs text-${office.color}-600">📞 ${office.phone}</div>
                <button onclick="MapManager.openGoogleMaps('${office.address}', ${office.coordinates.lat}, ${office.coordinates.lng})" 
                        class="mt-2 w-full bg-${office.color}-600 text-white py-1 px-2 rounded text-xs hover:bg-${office.color}-700 transition-all">
                    🧭 Navigate
                </button>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="space-y-4">
                <h4 class="text-lg font-bold text-indigo-600 border-b border-indigo-200 pb-2">🏔️ Baguio City Branches</h4>
                <div class="space-y-3">
                    ${officeCards}
                </div>
                <div class="p-3 bg-gray-100 rounded-lg">
                    <p class="text-gray-600 text-sm">🌡️ Cool mountain climate • 🚗 1,540m above sea level • 🌲 Summer capital of the Philippines</p>
                </div>
            </div>
        `;
    },

    createDetailItem(icon, label, value) {
        return `
            <div class="flex items-start space-x-3">
                <div class="text-xl">${icon}</div>
                <div>
                    <p class="font-semibold text-gray-800">${label}:</p>
                    <p class="text-gray-600 text-sm">${value}</p>
                </div>
            </div>
        `;
    },

    getOfficeIcon(type) {
        const icons = {
            main: '🏢',
            branch: '🏬'
        };
        return icons[type] || '🏢';
    },

    async initializeMap(location) {
        if (typeof L === 'undefined') {
            console.error('Leaflet not loaded');
            return;
        }

        const mapElement = Utils.getElement('#map');
        if (!mapElement) return;

        // Clear existing map
        if (AppState.map) {
            AppState.map.remove();
            AppState.map = null;
        }

        try {
            // Create new map
            AppState.map = L.map(mapElement).setView([location.coordinates.lat, location.coordinates.lng], 15);

            // Add tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(AppState.map);

            // Add marker
            const marker = L.marker([location.coordinates.lat, location.coordinates.lng]).addTo(AppState.map);
            
            marker.bindPopup(`
                <div style="padding: 10px; max-width: 250px;">
                    <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${location.name}</h3>
                    <p style="margin: 5px 0; color: #374151;">${location.address}</p>
                    <p style="margin: 5px 0; color: #374151;">📞 ${location.phone}</p>
                </div>
            `);

            AppState.markers = [marker];

            // Trigger resize
            setTimeout(() => {
                if (AppState.map) {
                    AppState.map.invalidateSize();
                }
            }, 100);
        } catch (error) {
            console.error('Error initializing map:', error);
            mapElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                    <div class="text-center">
                        <div class="text-4xl mb-2">🗺️</div>
                        <p class="text-gray-600">Map temporarily unavailable</p>
                    </div>
                </div>
            `;
        }
    },

    async initializeBaguioMap(locations) {
        if (typeof L === 'undefined') {
            console.error('Leaflet not loaded');
            return;
        }

        const mapElement = Utils.getElement('#map');
        if (!mapElement) return;

        // Clear existing map
        if (AppState.map) {
            AppState.map.remove();
            AppState.map = null;
        }

        try {
            // Create new map centered on Baguio
            AppState.map = L.map(mapElement).setView([16.4023, 120.5960], 13);

            // Add tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(AppState.map);

            // Add markers for all locations
            AppState.markers = [];
            
            locations.forEach((loc, index) => {
                const colors = ['#1e40af', '#3b82f6', '#8b5cf6'];
                
                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="
                        width: 30px; 
                        height: 30px; 
                        background-color: ${colors[index] || '#1e40af'}; 
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

                const marker = L.marker([loc.coordinates.lat, loc.coordinates.lng], { icon: customIcon }).addTo(AppState.map);
                
                marker.bindPopup(`
                    <div style="padding: 10px; max-width: 250px;">
                        <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${loc.name}</h3>
                        <p style="margin: 5px 0; color: #374151;">${loc.address}</p>
                        <p style="margin: 5px 0; color: #374151;">📞 ${loc.phone}</p>
                    </div>
                `);

                AppState.markers.push(marker);
            });

            // Trigger resize
            setTimeout(() => {
                if (AppState.map) {
                    AppState.map.invalidateSize();
                }
            }, 100);
        } catch (error) {
            console.error('Error initializing Baguio map:', error);
        }
    },

    openGoogleMaps(address, lat, lng) {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=driving`;
        window.open(googleMapsUrl, '_blank');
    },

    async copyAddress(address) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(address);
            } else {
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
            }
            NotificationManager.show('Address copied to clipboard!', 'success', 3000);
        } catch (error) {
            console.error('Failed to copy address:', error);
            NotificationManager.show('Failed to copy address', 'error');
        }
    }
};

/**
 * Application Initialization
 */
const App = {
    async init() {
        try {
            console.log('Initializing Gracious Angeli Travel & Tours app...');
            
            // Load data first
            await DataManager.loadData();
            
            // Initialize modules
            NavigationManager.init();
            BackToTopManager.init();
            FormManager.init();
            
            // Bind global functions for onclick handlers
            this.bindGlobalFunctions();
            
            // Handle initial URL
            NavigationManager.updateActiveTab();
            
            // Add modal close handlers
            this.bindModalHandlers();
            
            console.log('App initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
            NotificationManager.show('Application failed to initialize properly', 'error');
        }
    },

    bindGlobalFunctions() {
        // Make functions available globally for onclick handlers
        window.showTab = (tabName) => NavigationManager.showTab(tabName);
        window.toggleMobileMenu = () => NavigationManager.toggleMobileMenu();
        window.bookTour = (packageName, price) => BookingManager.bookTour(packageName, price);
        window.bookSpecificTour = (packageName, price) => BookingManager.bookTour(packageName, price);
        window.handlePackageClick = (packageType) => BookingManager.handlePackageClick(packageType);
        window.showLocation = (locationId) => MapManager.showLocation(locationId);
        window.showBaguioLocations = () => MapManager.showBaguioLocations();
        window.hideLocation = () => MapManager.hideLocation();
        window.MapManager = MapManager; // For map-related functions
    },

    bindModalHandlers() {
        // Close modal when clicking outside
        const mapModal = Utils.getElement('#mapModal');
        if (mapModal) {
            mapModal.addEventListener('click', (e) => {
                if (e.target === mapModal) {
                    MapManager.hideLocation();
                }
            });
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                MapManager.hideLocation();
            }
        });
    }
};

/**
 * Error Handling
 */
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    NotificationManager.show('An unexpected error occurred', 'error');
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    NotificationManager.show('An unexpected error occurred', 'error');
});

/**
 * Initialize app when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}