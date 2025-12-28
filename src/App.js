import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, ChevronDown, ExternalLink, Moon, Sun, Globe, Github, Twitter, Instagram } from 'lucide-react';

export default function PortfolioTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('fr');

  // ============================================
  // 🎨 CONFIGURATION - Modifiez ces valeurs !
  // ============================================

  const config = {
    // Informations personnelles
    name: "Votre Nom",
    title: {
      fr: "Votre Titre Professionnel",
      en: "Your Professional Title"
    },
    description: {
      fr: "Une description accrocheuse de votre parcours et de vos passions.",
      en: "A catchy description of your background and passions."
    },
    photoUrl: "https://via.placeholder.com/300",

    // À propos
    about: {
      fr: [
        "Premier paragraphe : Présentez votre formation actuelle ou votre poste.",
        "Deuxième paragraphe : Décrivez votre parcours académique ou professionnel.",
        "Troisième paragraphe : Mettez en avant vos compétences et vos centres d'intérêt.",
        "Quatrième paragraphe : Parlez de vos objectifs et de votre vision."
      ],
      en: [
        "First paragraph: Introduce your current education or position.",
        "Second paragraph: Describe your academic or professional background.",
        "Third paragraph: Highlight your skills and interests.",
        "Fourth paragraph: Talk about your goals and vision."
      ]
    },

    // Projets / Réalisations
    projects: [
      {
        title: { fr: "Projet 1", en: "Project 1" },
        description: {
          fr: "Description détaillée de votre premier projet.",
          en: "Detailed description of your first project."
        },
        skills: ["Compétence A", "Compétence B"],
        imageUrl: "https://via.placeholder.com/400x300"
      },
      {
        title: { fr: "Projet 2", en: "Project 2" },
        description: {
          fr: "Description détaillée de votre deuxième projet.",
          en: "Detailed description of your second project."
        },
        skills: ["Compétence C", "Compétence D"],
        imageUrl: "https://via.placeholder.com/400x300"
      },
      {
        title: { fr: "Projet 3", en: "Project 3" },
        description: {
          fr: "Description détaillée de votre troisième projet.",
          en: "Detailed description of your third project."
        },
        skills: ["Compétence E", "Compétence F"],
        imageUrl: "https://via.placeholder.com/400x300"
      }
    ],

    // Maquettes / Portfolio créatif
    models: [
      {
        title: { fr: "Création 1", en: "Creation 1" },
        description: {
          fr: "Description de votre création, matériaux, processus...",
          en: "Description of your creation, materials, process..."
        },
        details: {
          fr: ["Matériaux : ...", "Échelle : ..."],
          en: ["Materials: ...", "Scale: ..."]
        },
        imageUrl: "https://via.placeholder.com/500x400"
      },
      {
        title: { fr: "Création 2", en: "Creation 2" },
        description: {
          fr: "Description de votre création, matériaux, processus...",
          en: "Description of your creation, materials, process..."
        },
        details: {
          fr: ["Matériaux : ...", "Échelle : ..."],
          en: ["Materials: ...", "Scale: ..."]
        },
        imageUrl: "https://via.placeholder.com/500x400"
      }
    ],

    // Formation
    education: [
      {
        school: "Nom de l'école",
        degree: {
          fr: "Diplôme / Spécialité",
          en: "Degree / Specialty"
        },
        period: {
          fr: "Sept. 2024 - Présent",
          en: "Sept. 2024 - Present"
        },
        level: {
          fr: "Année en cours",
          en: "Current year"
        }
      },
      {
        school: "École précédente",
        degree: {
          fr: "Diplôme obtenu",
          en: "Degree obtained"
        },
        period: {
          fr: "Sept. 2021 - Juil. 2024",
          en: "Sept. 2021 - Jul. 2024"
        },
        level: {
          fr: "Niveau",
          en: "Level"
        }
      }
    ],

    // Expériences / Stages
    experiences: [
      {
        title: {
          fr: "Titre du stage 1",
          en: "Internship 1 title"
        },
        period: {
          fr: "Durée",
          en: "Duration"
        },
        company: "Nom de l'entreprise",
        description: {
          fr: "Description détaillée : missions, apprentissages, outils utilisés...",
          en: "Detailed description: missions, learnings, tools used..."
        }
      },
      {
        title: {
          fr: "Titre du stage 2",
          en: "Internship 2 title"
        },
        period: {
          fr: "Durée",
          en: "Duration"
        },
        company: "Nom de l'entreprise",
        description: {
          fr: "Description détaillée : missions, apprentissages, outils utilisés...",
          en: "Detailed description: missions, learnings, tools used..."
        }
      }
    ],

    // Contact
    contact: {
      email: "votre.email@exemple.com",
      linkedin: "https://www.linkedin.com/in/votre-profil",
      github: "",
      twitter: "",
      instagram: ""
    },

    // Footer
    footerCredit: {
      name: "Votre Nom",
      url: ""
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
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

  const t = translations[language];

  const sections = [
    { id: 'accueil', label: t.nav.home },
    { id: 'apropos', label: t.nav.about },
    { id: 'realisations', label: t.nav.projects },
    { id: 'portfolio', label: t.nav.models },
    { id: 'formation', label: t.nav.education },
    { id: 'experiences', label: t.nav.experiences },
    { id: 'contact', label: t.nav.contact }
  ];

  const scrollToSection = (id) => {
    setIsTransitioning(true);
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  return (
      <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
          darkMode
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
              : 'bg-gradient-to-br from-pink-50 via-white to-rose-50'
      }`}>
        {/* Floating blurred circles */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
              className={`absolute w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
                  darkMode ? 'bg-pink-500/10' : 'bg-pink-300/20'
              }`}
              style={{
                top: '10%',
                left: '5%',
                transform: `translateY(${scrollY * 0.1}px)`
              }}
          />
          <div
              className={`absolute w-80 h-80 rounded-full blur-3xl transition-colors duration-300 ${
                  darkMode ? 'bg-rose-500/8' : 'bg-rose-300/15'
              }`}
              style={{
                top: '40%',
                right: '10%',
                transform: `translateY(${scrollY * 0.15}px)`
              }}
          />
          <div
              className={`absolute w-72 h-72 rounded-full blur-3xl transition-colors duration-300 ${
                  darkMode ? 'bg-pink-600/10' : 'bg-pink-400/10'
              }`}
              style={{
                bottom: '20%',
                left: '15%',
                transform: `translateY(${scrollY * -0.08}px)`
              }}
          />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="relative flex items-center justify-center">
              {/* Theme and Language toggles - Desktop */}
              <div className="hidden md:flex absolute left-0 gap-2">
                <button
                    onClick={toggleDarkMode}
                    className={`p-2.5 rounded-2xl shadow-xl border transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-2xl ${
                        darkMode
                            ? 'bg-gray-800/30 backdrop-blur-2xl border-white/10 text-yellow-400 hover:bg-gray-800/40'
                            : 'bg-white/20 backdrop-blur-2xl border-white/40 text-gray-700 hover:bg-white/30'
                    }`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                    onClick={toggleLanguage}
                    className={`px-3.5 py-2.5 rounded-2xl shadow-xl border transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-1.5 backdrop-blur-2xl ${
                        darkMode
                            ? 'bg-gray-800/30 backdrop-blur-2xl border-white/10 text-gray-200 hover:bg-gray-800/40'
                            : 'bg-white/20 backdrop-blur-2xl border-white/40 text-gray-700 hover:bg-white/30'
                    }`}
                >
                  <Globe size={18} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>

              {/* Desktop Menu */}
              <div className={`hidden md:flex gap-2 lg:gap-3 rounded-3xl px-8 py-3 shadow-2xl border backdrop-blur-2xl ${
                  darkMode
                      ? 'bg-gray-800/30 border-white/10'
                      : 'bg-white/20 border-white/40'
              }`}>
                {sections.map(section => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`relative px-4 py-2 rounded-2xl transition-all duration-300 active:scale-95 ${
                            activeSection === section.id
                                ? 'text-white font-semibold'
                                : darkMode
                                    ? 'text-gray-300 hover:text-pink-400 hover:bg-white/5'
                                    : 'text-gray-700 hover:text-pink-500 hover:bg-white/30'
                        }`}
                    >
                      {activeSection === section.id && (
                          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl -z-10 shadow-lg"></span>
                      )}
                      <span className="relative z-10">{section.label}</span>
                    </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                  className={`md:hidden absolute right-0 top-1/2 translate-y-2 p-2.5 rounded-2xl shadow-xl border backdrop-blur-2xl transition-all duration-300 ${
                      darkMode
                          ? 'bg-gray-800/30 border-white/10 text-gray-200 hover:bg-gray-800/40'
                          : 'bg-white/20 border-white/40 text-gray-700 hover:bg-white/30'
                  }`}
                  onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Theme and Language toggles - Mobile */}
              <div className="md:hidden absolute right-14 top-1/2 translate-y-2 flex gap-2">
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-2xl shadow-xl border backdrop-blur-2xl transition-all duration-300 ${
                        darkMode
                            ? 'bg-gray-800/30 border-white/10 text-yellow-400'
                            : 'bg-white/20 border-white/40 text-gray-700'
                    }`}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                    onClick={toggleLanguage}
                    className={`px-2 py-2 rounded-2xl shadow-xl border backdrop-blur-2xl transition-all duration-300 text-xs font-medium ${
                        darkMode
                            ? 'bg-gray-800/30 border-white/10 text-gray-200'
                            : 'bg-white/20 border-white/40 text-gray-700'
                    }`}
                >
                  {language.toUpperCase()}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`md:hidden mt-4 pb-4 space-y-2 rounded-3xl p-4 shadow-2xl border backdrop-blur-2xl ${
                    darkMode
                        ? 'bg-gray-800/30 border-white/10'
                        : 'bg-white/20 border-white/40'
                }`}>
                  {sections.map(section => (
                      <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left py-3 px-4 rounded-2xl transition-all duration-300 active:scale-95 ${
                              activeSection === section.id
                                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg'
                                  : darkMode
                                      ? 'text-gray-300 hover:bg-white/5'
                                      : 'text-gray-700 hover:bg-white/30'
                          }`}
                      >
                        {section.label}
                      </button>
                  ))}
                </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="accueil" className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              <div
                  className="flex-1 text-center md:text-left"
                  style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
                    darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {config.name}
                </h2>
                <p className="text-lg sm:text-xl text-pink-500 mb-4 sm:mb-6">
                  {config.title[language]}
                </p>
                <p className={`text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {config.description[language]}
                </p>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                  {t.hero.cta}
                </button>
              </div>

              <div
                  className="flex-1 flex justify-center"
                  style={{ transform: `translateY(${scrollY * -0.03}px)` }}
              >
                <div className="w-56 h-56 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl">
                  <img
                      src={config.photoUrl}
                      alt={config.name}
                      className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 sm:mt-16 animate-bounce">
            <ChevronDown className="text-pink-400" size={32} />
          </div>
        </section>

        {/* À propos */}
        <section id="apropos" className={`py-20 px-4 relative z-10 ${
            darkMode ? 'bg-gray-900/50' : 'bg-white'
        }`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-8 text-center ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {t.about.title}
            </h2>
            <div className={`p-8 rounded-2xl ${
                darkMode
                    ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50'
                    : 'bg-gradient-to-r from-pink-50 to-rose-50'
            }`}>
              {config.about[language].map((paragraph, index) => (
                  <p key={index} className={`leading-relaxed mb-4 last:mb-0 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {paragraph}
                  </p>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section id="realisations" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {t.projects.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {config.projects.map((project, index) => (
                  <div key={index} className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 ${
                      darkMode ? 'bg-gray-800/50' : 'bg-white'
                  }`}>
                    <div className="h-48 overflow-hidden">
                      <img
                          src={project.imageUrl}
                          alt={project.title[language]}
                          className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-semibold mb-2 ${
                          darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        {project.title[language]}
                      </h3>
                      <p className={`text-sm mb-4 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {project.description[language]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                            <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                                idx % 2 === 0
                                    ? darkMode
                                        ? 'bg-pink-900/30 text-pink-300'
                                        : 'bg-pink-100 text-pink-600'
                                    : darkMode
                                        ? 'bg-rose-900/30 text-rose-300'
                                        : 'bg-rose-100 text-rose-600'
                            }`}>
                                                {skill}
                                            </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio créatif */}
        <section id="portfolio" className={`py-20 px-4 relative z-10 ${
            darkMode ? 'bg-gray-900/50' : 'bg-white'
        }`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {t.models.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {config.models.map((model, index) => (
                  <div key={index} className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ${
                      darkMode
                          ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50'
                          : 'bg-gradient-to-br from-pink-50 to-rose-50'
                  }`}>
                    <div className="h-64 rounded-xl mb-4 overflow-hidden">
                      <img
                          src={model.imageUrl}
                          alt={model.title[language]}
                          className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className={`text-2xl font-semibold mb-3 ${
                        darkMode ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      {model.title[language]}
                    </h3>
                    <p className={`mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {model.description[language]}
                    </p>
                    {model.details[language].map((detail, idx) => (
                        <div key={idx} className={`flex gap-2 text-sm ${
                            darkMode ? 'text-pink-400' : 'text-pink-600'
                        }`}>
                          <span>•</span>
                          <span>{detail}</span>
                        </div>
                    ))}
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formation */}
        <section id="formation" className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {t.education.title}
            </h2>
            <div className="space-y-6">
              {config.education.map((edu, index) => (
                  <div key={index} className={`rounded-2xl p-8 shadow-lg border-l-4 border-pink-400 ${
                      darkMode ? 'bg-gray-800/50' : 'bg-white'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-semibold mb-2 ${
                            darkMode ? 'text-gray-100' : 'text-gray-800'
                        }`}>
                          {edu.school}
                        </h3>
                        <p className={`text-lg mb-2 ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {edu.degree[language]}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                                        <span className="text-pink-500 font-medium mb-1">
                                            {edu.period[language]}
                                        </span>
                        <span className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                                            {t.education.level} : {edu.level[language]}
                                        </span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expériences */}
        <section id="experiences" className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {t.experiences.title}
            </h2>
            <div className="space-y-6">
              {config.experiences.map((exp, index) => (
                  <div key={index} className={`rounded-2xl p-8 shadow-lg border-l-4 border-pink-400 ${
                      darkMode ? 'bg-gray-800/50' : 'bg-white'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className={`text-2xl font-semibold ${
                          darkMode ? 'text-gray-100' : 'text-gray-800'
                      }`}>
                        {exp.title[language]}
                      </h3>
                      <span className="text-pink-500 font-medium">
                                        {t.experiences.period} : {exp.period[language]}
                                    </span>
                    </div>
                    <p className={`mb-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <strong>{exp.company}</strong>
                    </p>
                    <p className={`leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.description[language]}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`py-20 px-4 relative z-10 ${
            darkMode
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                : 'bg-gradient-to-br from-pink-100 to-rose-100'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${
                darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}>
              {t.contact.title}
            </h2>
            <p className={`mb-12 text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t.contact.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                  href={`mailto:${config.contact.email}`}
                  className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 ${
                      darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                  }`}
              >
                <Mail className="text-pink-500" />
                <span>{t.contact.email}</span>
              </a>

              {config.contact.linkedin && (
                  <a
                      href={config.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 ${
                          darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                      }`}
                  >
                    <Linkedin className="text-pink-500" />
                    <span>{t.contact.linkedin}</span>
                  </a>
              )}

              {config.contact.github && (
                  <a
                      href={config.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 ${
                          darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                      }`}
                  >
                    <Github className="text-pink-500" />
                    <span>GitHub</span>
                  </a>
              )}

              {config.contact.twitter && (
                  <a
                      href={config.contact.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 ${
                          darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                      }`}
                  >
                    <Twitter className="text-pink-500" />
                    <span>Twitter</span>
                  </a>
              )}

              {config.contact.instagram && (
                  <a
                      href={config.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 ${
                          darkMode ? 'bg-gray-800/50 text-gray-200' : 'bg-white text-gray-700'
                      }`}
                  >
                    <Instagram className="text-pink-500" />
                    <span>Instagram</span>
                  </a>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 px-4 relative z-10 ${
            darkMode ? 'bg-gray-950 text-gray-400' : 'bg-gray-900 text-white'
        }`}>
          <div className="max-w-6xl mx-auto text-center">
            <p className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
              © 2025 {config.footerCredit.url ? (
                <a
                    href={config.footerCredit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  {config.footerCredit.name} <ExternalLink size={18} />
                </a>
            ) : (
                config.footerCredit.name
            )}
            </p>
          </div>
        </footer>

        {/* Page transition overlay */}
        <div className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${
            isTransitioning
                ? darkMode
                    ? 'opacity-100 bg-gray-900/40 backdrop-blur-[2px]'
                    : 'opacity-100 bg-white/40 backdrop-blur-[2px]'
                : 'opacity-0'
        }`} />
      </div>
  );
}