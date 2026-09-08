'use client'

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    sections: string[];
}

export default function Navbar({ sections }: NavbarProps) {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -50% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        setIsOpen(false);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 50);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-lg font-medium"
                >
                    Pedro
                </button>

                {/* Menu Desktop */}
                <ul className="hidden md:flex items-center gap-8">
                    {sections.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => scrollToSection(item)}
                                className={`text-sm capitalize transition-colors ${activeSection === item
                                        ? 'text-gray-900 font-semibold'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Botão Hambúrguer / Fechar */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-1 text-gray-700 hover:text-gray-900 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.15 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Menu Suspenso Animado (Mobile) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="md:hidden overflow-hidden bg-white border-b border-gray-100 shadow-lg"
                    >
                        <ul className="flex flex-col gap-4 px-4 pt-2 pb-6">
                            {sections.map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className={`w-full text-left text-base capitalize py-1 transition-colors ${activeSection === item
                                                ? 'text-gray-900 font-semibold'
                                                : 'text-gray-500 hover:text-gray-900'
                                            }`}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}