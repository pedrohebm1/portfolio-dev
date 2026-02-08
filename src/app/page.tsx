'use client'

import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Projects from "./components/projects";

type Project = {
  title: string;
  description?: string;
  link: string | null;
  tech: string[];
  status: 'completed' | 'in-progress';
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const birthday = new Date('2004-06-16');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects: Project[] = [
    {
      title: 'Levelex',
      description: 'Sistema de gerenciamento de tarefas diárias, com recompensas para incentivar a produtividade e o foco',
      tech: ['React Native', 'Spring Boot', 'Java', 'PostgreSQL', 'AWS', 'ChatGPT', 'Tailwind'],
      status: 'in-progress',
      link: null
    },
    {
      title: 'Postfire',
      description: 'Plataforma de blog onde os usuários podem compartilhar as suas ideias com outras pessoas',
      tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind'],
      link: 'https://postfire.vercel.app/',
      status: 'completed',
    },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Express', 'PostgreSQL', 'Java',
    'Tailwind CSS', 'Git', 'Spring Boot', 'AWS'
  ];

  function getYearOffset(date1: Date, date2: Date): number {
    const startDate = new Date(Math.min(date1.getTime(), date2.getTime()));
    const endDate = new Date(Math.max(date1.getTime(), date2.getTime()));

    let years = endDate.getFullYear() - startDate.getFullYear();

    const monthDifference = endDate.getMonth() - startDate.getMonth();
    const dayDifference = endDate.getDate() - startDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      years--;
    }

    return years;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-medium"
          >
            Pedro
          </button>

          <ul className="flex items-center gap-8">
            {['home', 'sobre', 'projetos', 'skills', 'contatos'].map(item => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`text-sm capitalize transition-colors ${activeSection === item
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-16"
      >
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            Pedro Henrique
          </h1>
          <h1 className="text-2xl md:text-3xl font-light mb-6">
            Desenvolvedor Web
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Construindo aplicações web modernas e escaláveis.
            <br />
            Experiência em sistemas CRUD, autenticação, serviços em nuvem e integração com APIs.
          </p>
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
        </div>
      </section>

      <section
        id="sobre"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Sobre</h2>

          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sou Pedro, um jovem de {getYearOffset(birthday, new Date())} anos, atualmente focado em desenvolvimento com Java e Spring Boot.
                Busco construir aplicações bem estruturadas, escaláveis e com performance otimizada, utilizando as melhores práticas de desenvolvimento.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A minha trajetória foi iniciada com a curiosidadede sobre o funcionamento da web,
                o que me levou a aprender e aprimorar as habilidades em desenvolvimento web, como sistemas CRUD, autenticação e integração com APIs.
                Fora do código, mantenho interesse por jogos, exercícios físicos, música e séries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Projetos</h2>
          <div className="space-y-12">
            <Projects projects={projects} />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white border border-gray-100 hover:border-gray-300 transition-colors"
              >
                <p className="text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contatos"
        className="min-h-screen flex items-center justify-center px-6 py-1"
      >
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Contato</h2>

          <p className="text-xl text-gray-600 mb-12">
            Interessado em conversar? Entre em contato comigo.
          </p>
          <div className="flex items-center justify-center gap-6 mb-16">
            <a
              href="mailto:phs.oliveirasi@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 mb-20">
            <a
              href="https://github.com/pedrohebm1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/pedro-oliveira-3b8849234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <footer className="pt-2 border-t border-gray-100">
            <p className="text-sm text-gray-500">© 2026 Pedro Henrique. Todos os direitos reservados.</p>
          </footer>
        </div>
      </section>
    </div>
  );
}
