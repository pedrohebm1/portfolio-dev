import { Monitor, Terminal } from 'lucide-react'

interface Props {
  frontskills: string[],
  backskills: string[]
}

export default function Skills(props: Props) {
  return (
    <section
  id="skills"
  className="min-h-screen flex items-center justify-center px-6 py-20 bg-secondary"
>
  <div className="max-w-4xl w-full">
    <h2 className="text-4xl md:text-5xl font-light mb-12 md:mb-16 text-primary text-center md:text-left">
      Habilidades técnicas
    </h2>
    
    {/* Ajuste principal: de items-center para items-stretch para igualar as alturas */}
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
      
      {/* Cartão 1 - Uso do flex-1 para dividir o espaço igualmente em telas grandes */}
      <div className="flex-1 flex flex-col p-6 rounded-2xl border bg-primary-foreground w-full">
        <div className="flex items-center gap-3 mb-3">
          <Terminal className="w-6 h-6 text-primary shrink-0" />
          <h3 className="text-xl font-bold text-primary">
            Backend & Cloud
          </h3>
        </div>

        <p className="text-secondary-foreground text-sm mb-6 grow">
          Construção de APIs RESTful estruturadas, arquitetura em
          microsserviços e containers.
        </p>

        <div className="flex flex-wrap gap-2">
          {props.backskills.map((skill, index) => (
            <span
              key={index}
              className="text-primary px-3 py-1.5 rounded-lg text-sm font-medium border bg-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Cartão 2 - Estrutura idêntica ao primeiro */}
      <div className="flex-1 flex flex-col p-6 rounded-2xl border bg-primary-foreground w-full">
        <div className="flex items-center gap-3 mb-3">
          <Monitor className="w-6 h-6 text-primary shrink-0" />
          <h3 className="text-xl font-bold text-primary">
            Frontend & Mobile
          </h3>
        </div>

        <p className="text-secondary-foreground text-sm mb-6 grow">
          Interfaces responsivas, componentização reativa e experiências
          centradas no usuário.
        </p>

        <div className="flex flex-wrap gap-2">
          {props.frontskills.map((skill, index) => (
            <span
              key={index}
              className="text-primary px-3 py-1.5 rounded-lg text-sm font-medium border bg-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}
