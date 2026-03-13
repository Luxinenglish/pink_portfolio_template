export const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            projects: 'Réalisations',
            models: 'Portfolio',
            education: 'Formation',
            experiences: 'Expériences',
            contact: 'Contact'
        },
        hero: {
            cta: 'Me contacter'
        },
        about: {
            title: 'À propos'
        },
        projects: {
            title: 'Réalisations'
        },
        models: {
            title: 'Portfolio Créatif'
        },
        education: {
            title: 'Formation',
            level: 'Niveau',
            period: 'Période'
        },
        experiences: {
            title: 'Expériences & Stages',
            period: 'Période'
        },
        contact: {
            title: 'Me contacter',
            description: 'N\'hésitez pas à me contacter pour discuter de projets ou d\'opportunités.',
            email: 'Email',
            linkedin: 'LinkedIn'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            models: 'Portfolio',
            education: 'Education',
            experiences: 'Experiences',
            contact: 'Contact'
        },
        hero: {
            cta: 'Contact me'
        },
        about: {
            title: 'About'
        },
        projects: {
            title: 'Projects'
        },
        models: {
            title: 'Creative Portfolio'
        },
        education: {
            title: 'Education',
            level: 'Level',
            period: 'Period'
        },
        experiences: {
            title: 'Experiences & Internships',
            period: 'Period'
        },
        contact: {
            title: 'Contact me',
            description: 'Feel free to contact me to discuss projects or opportunities.',
            email: 'Email',
            linkedin: 'LinkedIn'
        }
    }
};

export const getTranslations = (language) => translations[language] || translations.fr;
