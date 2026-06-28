document.addEventListener('DOMContentLoaded', function() {
    // Traducciones
    const translations = {
        es: {
            home: "Inicio",
            games: "Juegos",
            support: "Soporte",
            welcome: "Bienvenidos a Planisfera Games",
            slogan: "Creando mundos de fantasía y dejándonos llevar por la nostalgia.",
            explore: "Explorar Juegos",
            ourGames: "Nuestros Juegos",
            gamesTitle: "Elysium's Tide",
            inDevelopment: "En Desarrollo",
            gameDescription: "Sumérgete en un vasto y enigmático territorio más allá de los confines conocidos del mundo, donde las corrientes traicioneras han arrastrado a incontables marineros a través de los helados muros polares hacia playas desconocidas. Sobrevivirás en un lugar donde no se puede escapar, descubriendo los secretos de una isla plagada de ruinas misteriosas y habitada por criaturas mágicas y razas antiguas.",
            patreonBtn: "Patreon",
            youtubeBtn: "YouTube",
            discordBtn: "Únete a Discord",
            supportTitle: "Soporte",
            contactUs: "Contáctanos",
            contactText: "Para cualquier consulta, escríbenos a:",
            rights: "Todos los derechos reservados."
        },
        en: {
            home: "Home",
            games: "Games",
            support: "Support",
            welcome: "Welcome to Planisfera Games",
            slogan: "Creating fantasy worlds and letting nostalgia guide us.",
            explore: "Explore Games",
            ourGames: "Our Games",
            gamesTitle: "Elysium's Tide",
            inDevelopment: "In Development",
            gameDescription: "Immerse yourself in a vast and enigmatic territory beyond the known confines of the world, where treacherous currents have dragged countless sailors through the icy polar walls to unknown shores. Survive in a place where there is no escape, discovering the secrets of an island plagued with mysterious ruins and inhabited by magical creatures and ancient races.",
            patreonBtn: "Patreon",
            youtubeBtn: "YouTube",
            discordBtn: "Join Discord",
            supportTitle: "Support",
            contactUs: "Contact Us",
            contactText: "For any inquiries, write to us at:",
            rights: "All rights reserved."
        },
        pt: {
            home: "Início",
            games: "Jogos",
            support: "Suporte",
            welcome: "Bem-vindos à Planisfera Games",
            slogan: "Criando mundos de fantasia e nos deixando levar pela nostalgia.",
            explore: "Explorar Jogos",
            ourGames: "Nossos Jogos",
            gamesTitle: "Elysium's Tide",
            inDevelopment: "Em Desenvolvimento",
            gameDescription: "Mergulhe em um vasto e enigmático território além dos confins conhecidos do mundo, onde correntes traiçoeiras arrastaram inúmeros marinheiros através das paredes polares geladas até praias desconhecidas. Sobreviva em um lugar onde não há escapatória, descobrindo os segredos de uma ilha repleta de ruínas misteriosas e habitada por criaturas mágicas e raças antigas.",
            patreonBtn: "Patreon",
            youtubeBtn: "YouTube",
            discordBtn: "Entrar no Discord",
            supportTitle: "Suporte",
            contactUs: "Entre em Contato",
            contactText: "Para qualquer consulta, escreva para:",
            rights: "Todos os direitos reservados."
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        const selectors = {
            '.nav-links li:nth-child(1) a': translations[lang].home,
            '.nav-links li:nth-child(2) a': translations[lang].games,
            '.nav-links li:nth-child(3) a': translations[lang].support,
            '.hero-title': translations[lang].welcome,
            '.hero-subtitle': translations[lang].slogan,
            '.cta-button': translations[lang].explore,
            '.section-title h2': translations[lang].ourGames,
            '.game-title': translations[lang].gamesTitle,
            '.game-status-badge': translations[lang].inDevelopment,
            '.game-description': translations[lang].gameDescription,
            '.patreon-button .button-text': translations[lang].patreonBtn,
            '.youtube-button .button-text': translations[lang].youtubeBtn,
            '.discord-button .button-text': translations[lang].discordBtn,
            '.support-card h3': translations[lang].contactUs,
            '.support-section .section-title h2': translations[lang].supportTitle,
            'footer p': `© 2025 Planisfera Games. ${translations[lang].rights}`
        };

        Object.entries(selectors).forEach(([selector, text]) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (selector === '.contact-info') {
                    const textNode = Array.from(element.childNodes).find(node => node.nodeType === 3);
                    if (textNode) {
                        textNode.textContent = translations[lang].contactText + ' ';
                    }
                } else {
                    element.textContent = text;
                }
            });
        });

        // Mantener el enlace de email
        const emailLink = document.querySelector('.contact-link');
        if (emailLink) {
            emailLink.textContent = 'planisferagames@gmail.com';
        }
    }

    // Evento para el selector de idioma
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
        changeLanguage(langSelect.value);
    }

    // Generar estrellas animadas en el fondo
    function createStars() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) return;

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.style.position = 'fixed';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.opacity = Math.random() * 0.7 + 0.3;
            star.style.zIndex = '0';
            star.style.pointerEvents = 'none';
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
            starsContainer.appendChild(star);
        }
    }

    // Agregar animación de parpadeo
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.9; }
        }
    `;
    document.head.appendChild(style);

    createStars();

    // Efecto parallax mejorado en el hero
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('mousemove', (e) => {
            const glowOrbs = document.querySelectorAll('.glow-orb');
            glowOrbs.forEach((orb, index) => {
                const moveX = (e.clientX / window.innerWidth) * 20;
                const moveY = (e.clientY / window.innerHeight) * 20;
                orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // Navegación suave mejorada
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Actualizar navegación activa al hacer scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Animación de fade-in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.game-card, .support-card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Efecto hover en botones
    const buttons = document.querySelectorAll('.social-button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Efecto glow en los enlaces del navegador
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 12px rgba(6, 182, 212, 0.8)';
        });
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.textShadow = 'none';
            }
        });
    });

    // Efecto de clic en los botones sociales
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';

            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Agregar animación de ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Animar números y estadísticas (si existen)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight) {
                el.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    console.log('Planisfera Games - Página cargada exitosamente');
});
