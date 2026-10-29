import getYearOffset from "../utils/getyearoffset";

export default function About() {
  const birthday = new Date("2004-06-16");
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center px-6 py-20 background"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-primary">
          Sobre
        </h2>
        <div className="space-y-8">
          <p className="text-lg text-primary leading-relaxed mb-6">
            Sou Pedro, um jovem de {getYearOffset(birthday, new Date())} anos,
            atualmente focado em desenvolvimento com Java e Spring Boot. Busco
            construir aplicações bem estruturadas, escaláveis e com performance
            otimizada, utilizando as melhores práticas de desenvolvimento.
          </p>
          <p className="text-lg text-primary leading-relaxed">
            A minha trajetória foi iniciada com a curiosidade sobre o
            funcionamento da web, o que me levou a aprender e aprimorar as
            habilidades em desenvolvimento web, como sistemas CRUD, autenticação
            e integração com APIs. Fora do código, mantenho interesse por jogos,
            exercícios físicos, música e séries.
          </p>
        </div>
      </div>
    </section>
  );
}
