import Projects from "./components/projects";
import Navbar from "./components/navbar";
import HomeActions from "./components/homeactions";
import { Links, Project } from "@/types/types.t";
import Contact from "./components/contact";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home() {
  const projects: Project[] = [
    {
      title: "Glancedash",
      description:
        "Aplicativo de notas que permite aos usuários criarem suas notas, organizá-las, acessá-las de diferentes dispositivos e também criar flashcards.",
      tech: ["React Native", "Spring Boot", "Java", "PostgreSQL", "OpenAI"],
      status: "in-progress",
      link: null,
      detailedDescription: "Aplicativo multiplataforma de produtividade focado em organização e retenção de conhecimento. A interface móvel foi desenvolvida com React Native, utilizando bibliotecas feitas com javascript/typescript para que os usuários criem workspaces e organizem notas e pastas. A arquitetura de back-end foi construída em Java utilizando o ecossistema Spring Boot, responsável por gerenciar a lógica de negócios e a sincronização segura dos dados entre diferentes dispositivos, com todas as informações persistidas em um banco de dados relacional PostgreSQL. O diferencial do projeto é a integração com a API da OpenAI, que analisa o conteúdo das anotações do usuário para gerar flashcards inteligentes automaticamente, facilitando o estudo ativo."
    },
    {
      title: "Postfire",
      description:
        "Plataforma de blog onde os usuários podem compartilhar as suas ideias com outras pessoas.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Tailwind",
        "Localstack",
        "Docker",
      ],
      status: "completed",
      link: "https://github.com/pedrohebm1/postfire-blog-app",
      detailedDescription: "Plataforma moderna de publicação de conteúdo e blog interativo. O front-end foi construído utilizando Next.js e React para garantir alta performance e SEO dos posts, com a estilização de interfaces responsivas feita através do Tailwind CSS. O back-end, responsável por processar a criação de artigos, sistema de comentários e regras de compartilhamento, foi desenvolvido em Node.js, com os dados relacionais estruturados em PostgreSQL. Para garantir um ambiente de desenvolvimento padronizado e eficiente, foi utilizado a ferramenta Docker, utilizando o Localstack para simular serviços de nuvem localmente antes do deploy definitivo na infraestrutura escalável da AWS."
    },
  ];

  const backskills = [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Node.js",
    "Express",
    "Docker",
    "AWS",
    "Git",
  ];

  const frontskills = [
    "React",
    "Next.js",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ];
  const links: Links = {
    github: "https://github.com/pedrohebm1",
    linkedin: "https://www.linkedin.com/in/pedrohe-oliveira/",
    email: "phs.oliveirasi@gmail.com"
  };

  return (
    <div className="min-h-screen bg-primary-foreground text-gray-900">
      <Navbar sections={["home", "projetos", "sobre", "skills", "contatos"]} />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-16"
      >
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl text-primary font-light mb-6">
            Pedro Henrique
          </h1>
          <h1 className="text-2xl md:text-3xl text-primary font-light mb-6">
            Desenvolvedor Web / Desenvolvedor Fullstack
          </h1>
          <p className="text-xl text-primary mb-8 font-light">
            Construindo aplicações web modernas a partir de ideias.
            <br />
            Experiência em sistemas CRUD, autenticação, serviços em nuvem e
            integração com APIs.
          </p>
          <HomeActions />
        </div>
      </section>

      <section
        id="projetos"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-primary">
            Projetos
          </h2>
          <div className="flex flex-col gap-10">
            <Projects projects={projects} />
          </div>
        </div>
      </section>

      <About/>

      <Skills frontskills={frontskills} backskills={backskills}/>

      <Contact links={links}/>
    </div>
  );
}
