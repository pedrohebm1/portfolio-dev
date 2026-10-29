import { Info, CodeXml, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/types.t";

type Props = {
  projects: Project[];
};

export default function Projects(props: Props) {
  return (
    <div className="flex flex-col gap-6">
      {props.projects.map((project: Project, index: number) => (
        <Dialog key={index}>
          <div className="w-full bg-card p-6 sm:p-8 rounded-2xl border flex flex-col gap-6 text-left relative">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-medium text-primary">
                  {project.title}
                </h3>
                {project.status === 'in-progress' && (
                  <span className="text-xs px-2.5 py-1 bg-primary text-primary-foreground rounded-2xl borderrounded-full font-medium">
                    Em desenvolvimento
                  </span>
                )}
              </div>

              
            </div>

            <p className="text-accent-foreground text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-muted text-secondary-foreground rounded-md border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-2">
              <DialogTrigger className="flex items-center gap-2 px-3.5 py-2 bg-muted hover:bg-muted/80 text-foreground text-sm rounded-lg border transition-colors cursor-pointer font-medium">
                  <Info size={16} className="text-muted-foreground" />
                  <span>Sobre o Projeto</span>
              </DialogTrigger>

              {project.link !== null && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>Repositório</span>
                  <CodeXml size={16} />
                </a>
              )}
            </div>

          </div>

          <DialogContent className="sm:max-w-150">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                {project.status === 'in-progress' && (
                  <span className="text-xs px-2.5 py-1 bg-primary text-primary-foreground border rounded-full font-medium">
                    Em desenvolvimento
                  </span>
                )}
              </div>
              <DialogDescription className="px-5 text-base text-accent-foreground pt-2 leading-relaxed text-justify">
                {project.detailedDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="py-4 space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                  Tecnologias utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-muted text-secondary-foreground rounded-md border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link !== null && (
                <div className="pt-4 border-t flex justify-end">
                  <Button variant="default">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Acessar Repositório
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}