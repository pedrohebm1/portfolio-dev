"use client"
import { Links } from '@/types/types.t'
import { Check, Copy, ExternalLink, Mail } from 'lucide-react'
import { useState } from 'react'

interface Props {
  links: Links
}
export default function Contact(props: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(props.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reseta o texto após 2 segundos
  };
  return (
    <section
        id="contatos"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-primary-foreground"
      >
        <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-primary">Contato</h2>
        <div className="items-center flex justify-center">
          <div className="bg-card p-8 rounded-xl shadow-sm border w-full max-w-4xl">
            <p className="text-primary text-base mb-6">
              Interessado em conversar? Entre em contato comigo para
              oportunidades ou projetos.
            </p>

            <div className="flex flex-col items-center gap-3 mb-8 flex-wrap sm:flex-row">
              <a
                href={`mailto:${props.links.email}`}
                className="flex items-center gap-2 bg-secondary-foreground text-secondary md:text-sm text-xs hover:bg-muted-foreground px-5 py-2.5 rounded-[8px] font-medium transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-primary-foreground" />
                Enviar E-mail
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center cursor-pointer gap-2 border text-secondary-foreground px-5 py-2.5 rounded-[8px] md:text-sm text-xs font-medium transition-colors hover:bg-muted"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>E-mail copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-primary" />
                    <span>Copiar e-mail</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <a
                href={props.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary  text-sm font-medium transition-colors"
              >
                GitHub <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={props.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}
