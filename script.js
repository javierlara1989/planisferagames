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
            inDevelopment: "En Desarrollo",
            available: "Disponible",
            elysiumTitle: "Elysium's Tide",
            elysiumDescription: "Sumérgete en un vasto y enigmático territorio más allá de los confines conocidos del mundo, donde las corrientes traicioneras han arrastrado a incontables marineros a través de los helados muros polares hacia playas desconocidas. Sobrevivirás en un lugar donde no se puede escapar, descubriendo los secretos de una isla plagada de ruinas misteriosas y habitada por criaturas mágicas y razas antiguas.",
            huachikullTitle: "Huachikull",
            huachikullDescription: "Elige tu inicial junto a la machi y recorre la Araucanía desde el cruce central de Villarrica. Explora Temuco, Lonquimay, Galvarino, Pucón y Puerto Saavedra, reúne los 6 instrumentos rituales venciendo a los Jefes rituales, e invoca a Pacha Mama en el altar de la Isla Mocha. Un RPG completo inspirado en las criaturas y mitología de la Araucanía.",
            patreonBtn: "Patreon",
            youtubeBtn: "YouTube",
            discordBtn: "Únete a Discord",
            itchioBtn: "Jugar en itch.io",
            supportTitle: "Soporte",
            contactUs: "Contáctanos",
            contactText: "Para cualquier consulta, escríbenos a:",
            footerRights: "© 2025 Planisfera Games. Todos los derechos reservados."
        },
        en: {
            home: "Home",
            games: "Games",
            support: "Support",
            welcome: "Welcome to Planisfera Games",
            slogan: "Creating fantasy worlds and letting nostalgia guide us.",
            explore: "Explore Games",
            ourGames: "Our Games",
            inDevelopment: "In Development",
            available: "Available",
            elysiumTitle: "Elysium's Tide",
            elysiumDescription: "Immerse yourself in a vast and enigmatic territory beyond the known confines of the world, where treacherous currents have dragged countless sailors through the icy polar walls to unknown shores. Survive in a place where there is no escape, discovering the secrets of an island plagued with mysterious ruins and inhabited by magical creatures and ancient races.",
            huachikullTitle: "Huachikull",
            huachikullDescription: "Choose your starter alongside the machi and travel across the Araucanía region from the central crossroads of Villarrica. Explore Temuco, Lonquimay, Galvarino, Pucón and Puerto Saavedra, gather the 6 ritual instruments by defeating the ritual bosses, and summon Pacha Mama at the altar of Isla Mocha. A full RPG inspired by the creatures and mythology of the Araucanía.",
            patreonBtn: "Patreon",
            youtubeBtn: "YouTube",
            discordBtn: "Join Discord",
            itchioBtn: "Play on itch.io",
            supportTitle: "Support",
            contactUs: "Contact Us",
            contactText: "For any inquiries, write to us at:",
            footerRights: "© 2025 Planisfera Games. All rights reserved."
        },
        pt: {
            home: "Início",
            games: "Jogos",
            support: "Suporte",
            welcome: "Bem-vindos à Planisfera Games",
            slogan: "Criando mundos de fantasia e nos deixando levar pela nostalgia.",
            explore: "Explorar Jogos",
            ourGames: "Nossos Jogos",
            inDevelopment: "Em Desenvolvimento",
            available: "Disponível",
            elysiumTitle: "Elysium's Tide",
            elysiumDescription: "Mergulhe em um vasto e enigmático território além dos confins conhecidos do mundo, onde correntes traiçoeiras arrastaram inúmeros marinheiros através das paredes polares geladas até praias desconhecidas. Sobreviva em um lugar onde não há escapatória, descobrindo os segredos de uma ilha repleta de ruínas misteriosas e habitada por criaturas mágicas e raças antigas.",
            huachikullTitle: "Huachikull",
            huachikullDescription: "Escolha seu inicial junto à machi e percorra a Araucanía a partir do cruzamento central de Villarrica. Explore Temuco, Lonquimay, Galvarino, Pucón e Puerto Saavedra, reúna os 6 instrumentos rituais derrotando os Chefes rituais, e invoque a Pacha Mama no altar da Isla Mocha. Um RPG completo inspirado nas criaturas e mitologia da Araucanía.",
            patreonBtn: "Patreon",
            youtubeBtn: "YouTube",
            discordBtn: "Entrar no Discord",
            itchioBtn: "Jogar no itch.io",
            supportTitle: "Suporte",
            contactUs: "Entre em Contato",
            contactText: "Para qualquer consulta, escreva para:",
            footerRights: "© 2025 Planisfera Games. Todos os direitos reservados."
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        const dict = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (dict[key]) {
                element.textContent = dict[key];
            }
        });
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
            this.style.textShadow = '0 0 12px rgba(254, 127, 45, 0.8)';
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

    console.log('Planisfera Games - Página cargada exitosamente');
});
