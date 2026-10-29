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
        className="rounded-[8px] cursor-pointer px-6 py-3 bg-secondary-foreground text-secondary text-sm hover:bg-muted-foreground transition-colors"
      >
        Ver Projetos
      </button>
      <button
        onClick={() => scrollToSection('contatos')}
        className="rounded-[8px] px-6 py-3 border cursor-pointer text-secondary-foreground  text-sm hover:bg-muted transition-colors"
      >
        Contato
      </button>
    </div>
  );
}