import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectRoutes } from './projects.routes';

@Component({
  selector: 'cc-projects',
  templateUrl: './projects.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {

  readonly projects: { name: string, path: string }[] = [
    {
      name: 'Meteor',
      path: ProjectRoutes.Meteor,
    },
    {
      name: 'OSRS Tracker',
      path: ProjectRoutes.OSRSTracker,
    },
  ];

}
