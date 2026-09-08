import { Github, Linkedin, Mail } from "lucide-react";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import HomeActions from "./components/homeactions";
import getYearOffset from "./utils/getyearoffset";

type Project = {
  title: string;
  description?: string;
  link: string | null;
  tech: string[];
  status: 'completed' | 'in-progress';
};

export default function Home() {
  const birthday = new Date('2004-06-16');

  const projects: Project[] = [
    {
      title: 'Glancedash',
      description: 'Aplicativo de notas que permite aos usuários criarem suas notas, organizá-las, acessá-las de diferentes dispositivos e também criar flashcards.',
      tech: ['React Native', 'Spring Boot', 'Java', 'PostgreSQL', 'OpenAI'],
      status: 'in-progress',
      link: null
    },
    {
      title: 'Postfire',
      description: 'Plataforma de blog onde os usuários podem compartilhar as suas ideias com outras pessoas.',
      tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind', 'Localstack', 'Docker'],
      status: 'completed',
      link: 'https://github.com/pedrohebm1/postfire-blog-app',
    },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React Native', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Express', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Git'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar sections={['home', 'sobre', 'projetos', 'skills', 'contatos']} />

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-light mb-6">Pedro Henrique</h1>
          <h1 className="text-2xl md:text-3xl font-light mb-6">Desenvolvedor Web</h1>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Construindo aplicações web modernas e escaláveis.
            <br />
            Experiência em sistemas CRUD, autenticação, serviços em nuvem e integração com APIs.
          </p>
          <HomeActions />
        </div>
      </section>

      <section id="sobre" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Sobre</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sou Pedro, um jovem de {getYearOffset(birthday, new Date())} anos, atualmente focado em desenvolvimento com Java e Spring Boot.
              Busco construir aplicações bem estruturadas, escaláveis e com performance otimizada, utilizando as melhores práticas de desenvolvimento.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              A minha trajetória foi iniciada com a curiosidade sobre o funcionamento da web,
              o que me levou a aprender e aprimorar as habilidades em desenvolvimento web, como sistemas CRUD, autenticação e integração com APIs.
              Fora do código, mantenho interesse por jogos, exercícios físicos, música e séries.
            </p>
          </div>
        </div>
      </section>

      <section id="projetos" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Projetos</h2>
          <Projects projects={projects} />
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-100 hover:border-gray-300 transition-colors">
                <p className="text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatos" className="min-h-screen flex items-center justify-center px-6 py-1">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Contato</h2>
          <p className="text-xl text-gray-600 mb-12">Interessado em conversar? Entre em contato comigo.</p>
          <div className="flex items-center justify-center gap-6 mb-16">
            <a href="mailto:phs.oliveirasi@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              <Mail size={18} />
              Email
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 mb-20">
            <a href="https://github.com/pedrohebm1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pedrohe-oliveira/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}