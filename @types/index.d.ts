export interface Project {
  id: string;
  name: string;
  description: string;
  date?: Date;
  image: string;
  liveLink?: string;
  srcLink?: string;
  tecnologies: Tecnology[];
}

export interface Tecnology {
  id: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
  image: string;
}
