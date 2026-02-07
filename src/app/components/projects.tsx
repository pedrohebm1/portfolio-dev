import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description?: string;
  link: string | null;
  tech: string[];
  status: 'completed' | 'in-progress';
};

type Props = {
  projects: Project[];
};

export default function Projects(props : Props) {
  return (
    <>
      {props.projects.map((project: Project, index: number) => (
        <div
          key={index}
          className="border-b border-gray-100 pb-12 last:border-0"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-light">{project.title}</h3>
              {project.status === 'in-progress' && (
                <span className="text-xs px-2 py-1 bg-gray-900 text-white">
                  Em desenvolvimento
                </span>
              )}
            </div>
            {project.link !== null && <a
              href={project.link}
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              <ExternalLink size={20} />
            </a>}
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}