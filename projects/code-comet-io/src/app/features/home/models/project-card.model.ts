export class ProjectCardAction {
  name: string;
  internalRoute?: string;
  externalRoute?: string;
}

export class ProjectCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  text: string;
  actions: ProjectCardAction[];
}
