export class ProjectCardAction {
  name: string;
  actionFn: () => void;
}

export class ProjectCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  text: string;
  actions: ProjectCardAction[];
}
