import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteorProjectComponent } from './meteor/meteor-project.component';
import { OSRSTrackerProjectComponent } from './osrs-tracker/osrs-tracker-project.component';
import { ProjectsComponent } from './projects.component';
import { ProjectRoutes } from './projects.routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: ProjectsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: ProjectRoutes.Meteor },
      { path: ProjectRoutes.Meteor, pathMatch: 'full', component: MeteorProjectComponent },
      { path: ProjectRoutes.OSRSTracker, pathMatch: 'full', component: OSRSTrackerProjectComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
