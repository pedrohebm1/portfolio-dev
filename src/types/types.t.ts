export type Project = {
  title: string;
  description?: string;
  link: string | null;
  tech: string[];
  status: "completed" | "in-progress";
  detailedDescription: string;
}

export type Links = {
  github: string,
  linkedin: string,
  email: "phs.oliveirasi@gmail.com"
}