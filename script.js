document.addEventListener('DOMContentLoaded', function() {
    // Traducciones
    const translations = {
        es: {
            home: "Inicio",
            games: "Juegos",
            support: "Soporte",
            welcome: "Bienvenidos a Planisfera Games",
            slogan: "Creando mundos de fantasía y dejándonos llevar por la nostalgia.",
            gamesTitle: "Elysium's Tide",
            gameDescription: "Sumérgete en un vasto y enigmático territorio más allá de los confines conocidos del mundo, donde las corrientes traicioneras han arrastrado a incontables marineros a través de los helados muros polares hacia playas desconocidas. Sobrevivirás en un lugar donde no se puede escapar, descubriendo los secretos de una isla plagada de ruinas misteriosas y habitada por criaturas mágicas y razas antiguas.",
            supportPatreon: "Apóyanos en Patreon",
            watchYoutube: "Ver en YouTube",
            moreInfo: "Más información",
            supportTitle: "Soporte",
            contactUs: "Para cualquier consulta, escríbenos a:",
            rights: "Todos los derechos reservados."
        },
        en: {
            home: "Home",
            games: "Games",
            support: "Support",
            welcome: "Welcome to Planisfera Games",
            slogan: "Creating fantasy worlds and letting nostalgia guide us.",
            gamesTitle: "Elysium's Tide",
            gameDescription: "Immerse yourself in a vast and enigmatic territory beyond the known confines of the world, where treacherous currents have dragged countless sailors through the icy polar walls to unknown shores. Survive in a place where there is no escape, discovering the secrets of an island plagued with mysterious ruins and inhabited by magical creatures and ancient races.",
            supportPatreon: "Support us on Patreon",
            watchYoutube: "Watch on YouTube",
            moreInfo: "More information",
            supportTitle: "Support",
            contactUs: "For any inquiries, write to us at:",
            rights: "All rights reserved."
        },
        pt: {
            home: "Início",
            games: "Jogos",
            support: "Suporte",
            welcome: "Bem-vindos à Planisfera Games",
            slogan: "Criando mundos de fantasia e nos deixando levar pela nostalgia.",
            gamesTitle: "Elysium's Tide",
            gameDescription: "Mergulhe em um vasto e enigmático território além dos confins conhecidos do mundo, onde correntes traiçoeiras arrastaram inúmeros marinheiros através das paredes polares geladas até praias desconhecidas. Sobreviva em um lugar onde não há escapatória, descobrindo os segredos de uma ilha repleta de ruínas misteriosas e habitada por criaturas mágicas e raças antigas.",
            supportPatreon: "Apoie-nos no Patreon",
            watchYoutube: "Assistir no YouTube",
            moreInfo: "Mais informações",
            supportTitle: "Suporte",
            contactUs: "Para qualquer consulta, escreva para:",
            rights: "Todos os direitos reservados."
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        const elements = {
            'nav-links li:nth-child(1) a': translations[lang].home,
            'nav-links li:nth-child(2) a': translations[lang].games,
            'nav-links li:nth-child(3) a': translations[lang].support,
            'hero h1': translations[lang].welcome,
            'hero p': translations[lang].slogan,
            'game-container h2': translations[lang].gamesTitle,
            'game-description > p': translations[lang].gameDescription,
            'patreon-button': translations[lang].supportPatreon,
            'youtube-button': translations[lang].watchYoutube,
            'more-info': translations[lang].moreInfo,
            'support-container h2': translations[lang].supportTitle,
            'contact-info': `${translations[lang].contactUs} `,
            'footer p': `© 2025 Planisfera Games. ${translations[lang].rights}`
        };

        Object.entries(elements).forEach(([selector, text]) => {
            const element = 
                document.querySelector(`.${selector}`) || 
                document.querySelector(selector) ||
                document.querySelector(`[class*="${selector}"]`);

            if (element) {
                if (selector === 'contact-info') {
                    element.firstChild.textContent = text;
                } else {
                    element.textContent = text;
                }
            } else {
                console.log(`No se encontró el elemento con selector: ${selector}`);
            }
        });

        // Mantener el enlace de email
        const emailLink = document.querySelector('.contact-info a');
        if (emailLink) {
            emailLink.textContent = 'planisferagames@gmail.com';
        }

        // Mantener los enlaces activos
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.classList.contains('active')) {
                link.classList.add('active');
            }
        });
    }

    // Evento para el selector de idioma
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });

        // Ejecutar la traducción inicial
        changeLanguage(langSelect.value);
    } else {
        console.log('No se encontró el selector de idioma');
    }

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Aquí puedes agregar la lógica para enviar el formulario
            alert('Gracias por tu mensaje. Te contactaremos pronto.');
            this.reset();
        });
    }

    // Actualizar navegación activa al hacer scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
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
}); 