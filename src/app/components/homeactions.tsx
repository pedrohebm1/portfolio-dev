'use client'

interface HomeActionsProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HomeActions() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => scrollToSection('projetos')}
        className="px-6 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
      >
        Ver Projetos
      </button>
      <button
        onClick={() => scrollToSection('contatos')}
        className="px-6 py-3 border border-gray-300 text-sm hover:border-gray-900 transition-colors"
      >
        Contato
      </button>
    </div>
  );
}