import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../../app.routes';
import { ProjectCard } from './models/project-card.model';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  projects: ProjectCard[] = [{
    title: 'Meteor',
    subtitle: 'A no-nonsense Angular component library.',
    imageSrc: 'assets/projects/meteorite-image.png',
    text: `
<p>Meteor is a simple, no-nonsense Angular component library. I made it specifically for the CodeComet website, and is kept simple on purpose. It also has it's own styleguide called Meteorite.</p>
<p>The reason behind it's simplicity is so I can have a lot of easy to use components, but to still maintain a lot of freedom. A lot of frameworks force you to do things their way, now I can do things my way.</p>
    `.trim(),
    actions: [{
      name: 'Learn more',
      actionFn: () => this.router.navigate([AppRoutes.Projects]),
    }, {
      name: 'Meteorite',
      actionFn: () => window.open('https://freekmencke.github.io/CodeCometIO/meteorite', '_blank'),
    }],
  }, {
    title: 'OSRS Tracker',
    subtitle: 'An app to track your OSRS progress.',
    imageSrc: 'assets/projects/osrs-tracker-image.png',
    text: `
<p>The OSRS Tracker project was about creating an app that people would actually use. I wanted to have large user base so I could test the load on my backend. At the height of it's popularity, OSRS Tracker had 10.000 unique monthly users.</p>
<p>The OSRS Tacker project existed out of multiple, smaller projects that were run on a Kubernetes cluster, all running replicated. For example a message storage queue (<a href="https://github.com/FreekMencke/tox-mq">ToxMQ</a>) was created for better reliability and perfomance.</p>
    `.trim(),
    actions: [{
      name: 'Learn more',
      actionFn: () => this.router.navigate([AppRoutes.Projects]),
    }, {
      name: 'Github',
      actionFn: () => window.open('https://github.com/osrs-tracker', '_blank'),
    }],
  }];

  constructor(
    private router: Router,
  ) { }

}
