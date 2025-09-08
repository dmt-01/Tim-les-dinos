// ===== CONFIGURATION ===== 
const CONFIG = {
    animationDelay: 100,
    typingSpeed: 100,
    scrollOffset: 50
};

// ===== UTILITAIRES =====
const Utils = {
    // Sélecteur d'éléments avec gestion d'erreur
    select: (selector, all = false) => {
        const elements = all ? document.querySelectorAll(selector) : document.querySelector(selector);
        if (!elements && !all) {
            console.warn(`Élément non trouvé: ${selector}`);
        }
        return elements;
    },

    // Délai async
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

    // Vérifier si un élément est visible dans le viewport
    isInViewport: (element, offset = 0) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// ===== NAVIGATION SMOOTH SCROLL =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const navLinks = Utils.select('a[href^="#"]', true);
        navLinks.forEach(link => {
            link.addEventListener('click', this.handleClick.bind(this));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const target = Utils.select(href);
        
        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - CONFIG.scrollOffset;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ===== ANIMATIONS AU SCROLL =====
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: `0px 0px -${CONFIG.scrollOffset}px 0px`
        };
        this.init();
    }

    init() {
        // Créer l'observer
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.observerOptions
        );

        // Observer les cartes features
        const featureCards = Utils.select('.feature-card', true);
        featureCards.forEach((card, index) => {
            // Définir un délai d'animation échelonné
            card.style.transitionDelay = `${index * 0.1}s`;
            this.observer.observe(card);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Arrêter d'observer une fois animé
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ===== ANIMATION TYPING POUR LE HERO =====
class TypingAnimation {
    constructor(element, text, speed = CONFIG.typingSpeed) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
    }

    async start() {
        if (!this.element) return;
        
        this.element.textContent = '';
        
        for (let i = 0; i < this.text.length; i++) {
            this.element.textContent += this.text.charAt(i);
            await Utils.delay(this.speed);
        }
    }
}

// ===== GESTION DU FORMULAIRE =====
class FormHandler {
    constructor() {
        this.form = Utils.select('#reservationForm');
        this.init();
    }

    init() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // Validation en temps réel
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearErrors.bind(this));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.showSuccessMessage();
            this.resetForm();
        }
    }

    validateForm() {
        let isValid = true;
        const requiredFields = this.form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!this.validateField({ target: field })) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const fieldType = field.type;
        let isValid = true;
        let errorMessage = '';

        // Supprimer les erreurs précédentes
        this.clearFieldError(field);

        // Validation selon le type de champ
        switch (fieldType) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.required && !value) {
                    errorMessage = 'L\'email est requis';
                    isValid = false;
                } else if (value && !emailRegex.test(value)) {
                    errorMessage = 'Format d\'email invalide';
                    isValid = false;
                }
                break;
                
            case 'tel':
                const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
                if (value && !phoneRegex.test(value)) {
                    errorMessage = 'Format de téléphone invalide';
                    isValid = false;
                }
                break;
                
            case 'date':
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                if (field.required && !value) {
                    errorMessage = 'La date est requise';
                    isValid = false;
                } else if (value && selectedDate < today) {
                    errorMessage = 'La date ne peut pas être dans le passé';
                    isValid = false;
                }
                break;
                
            default:
                if (field.required && !value) {
                    errorMessage = 'Ce champ est requis';
                    isValid = false;
                }
        }

        // Afficher l'erreur si nécessaire
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        // Créer et insérer le message d'erreur
        const errorElement = document.createElement('span');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    clearErrors(e) {
        this.clearFieldError(e.target);
    }

    showSuccessMessage() {
        // Créer une notification de succès
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🎉</span>
                <span class="notification-message">
                    Votre réservation a été envoyée ! Nous vous contacterons bientôt pour confirmer votre safari dinosaures.
                </span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Ajouter au DOM
        document.body.appendChild(notification);

        // Animation d'apparition
        setTimeout(() => notification.classList.add('show'), 100);

        // Gestion du bouton fermer
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.hideNotification(notification));

        // Auto-fermeture après 5 secondes
        setTimeout(() => this.hideNotification(notification), 5000);
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    resetForm() {
        this.form.reset();
        
        // Supprimer toutes les erreurs
        const errorElements = this.form.querySelectorAll('.form-error');
        errorElements.forEach(error => error.remove());
        
        const errorFields = this.form.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }
}

// ===== GESTION DES BOUTONS CTA =====
class CTAHandler {
    constructor() {
        this.init();
    }

    init() {
        // Bouton principal du hero
        const heroBtn = Utils.select('#bookNowBtn');
        if (heroBtn) {
            heroBtn.addEventListener('click', this.scrollToContact.bind(this));
        }

        // Tous les autres boutons de réservation
        const ctaButtons = Utils.select('.hero__cta, .cta-button', true);
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', this.scrollToContact.bind(this));
        });
    }

    scrollToContact() {
        const contactSection = Utils.select('#contact');
        if (contactSection) {
            const offsetTop = contactSection.getBoundingClientRect().top + window.pageYOffset - CONFIG.scrollOffset;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ===== EFFETS VISUELS ADDITIONNELS =====
class VisualEffects {
    constructor() {
        this.init();
    }

    init() {
        this.initParallaxEffect();
        this.initHoverEffects();
    }

    initParallaxEffect() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const hero = Utils.select('.hero');
        
        if (hero) {
            const speed = scrolled * 0.5;
            hero.style.transform = `translateY(${speed}px)`;
        }
    }

    initHoverEffects() {
        // Effet sur les cartes features
        const featureCards = Utils.select('.feature-card', true);
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover.bind(this));
            card.addEventListener('mouseleave', this.handleCardLeave.bind(this));
        });
    }

    handleCardHover(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateX(10px) scale(1.02)';
    }

    handleCardLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateX(0) scale(1)';
    }
}

// ===== INITIALISATION PRINCIPALE =====
class DinoSafariApp {
    constructor() {
        this.init();
    }

    async init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.startApp.bind(this));
        } else {
            this.startApp();
        }
    }

    async startApp() {
        try {
            // Initialiser tous les modules
            this.smoothScroll = new SmoothScroll();
            this.scrollAnimations = new ScrollAnimations();
            this.formHandler = new FormHandler();
            this.ctaHandler = new CTAHandler();
            this.visualEffects = new VisualEffects();

            // Animation typing pour le titre du hero
            const heroTitle = Utils.select('.hero__title');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                const typingAnimation = new TypingAnimation(heroTitle, originalText);
                await Utils.delay(500); // Délai avant de commencer
                typingAnimation.start();
            }

            // Ajouter les styles pour les notifications et erreurs
            this.injectStyles();

            console.log('🦕 DinoSafari App initialisée avec succès !');
            
        } catch (error) {
            console.error('Erreur lors de l\'initialisation de l\'app:', error);
        }
    }

    injectStyles() {
        const styles = `
            /* Styles pour les erreurs de formulaire */
            .form-group__input.error,
            .form-group__textarea.error,
            .form-group__select.error {
                border-color: #dc3545;
                box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
            }

            .form-error {
                color: #dc3545;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            }

            /* Styles pour les notifications */
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 400px;
            }

            .notification.show {
                transform: translateX(0);
            }

            .notification.success {
                border-left: 5px solid #28a745;
            }

            .notification-content {
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            .notification-icon {
                font-size: 1.5rem;
            }

            .notification-message {
                flex: 1;
                font-size: 0.9rem;
                line-height: 1.4;
            }

            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.2s;
            }

            .notification-close:hover {
                background-color: #f0f0f0;
            }

            /* Animation pour les feature cards */
            .feature-card {
                transition: all 0.3s ease, opacity 0.6s ease, transform 0.6s ease;
            }

            .feature-card.animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
}

// ===== LANCEMENT DE L'APPLICATION =====
const app = new DinoSafariApp();