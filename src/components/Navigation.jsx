import React from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

const Navigation = ({
                        sections,
                        activeSection,
                        menuOpen,
                        setMenuOpen,
                        scrollToSection,
                        darkMode,
                        toggleDarkMode,
                        language,
                        toggleLanguage
                    }) => {
    return (
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
                                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl -z-10 shadow-lg transition-all duration-500 ease-out"></span>
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
    );
};

export default Navigation;