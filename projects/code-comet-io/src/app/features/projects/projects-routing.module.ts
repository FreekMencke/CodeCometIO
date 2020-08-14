import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectResolver } from './project/project.resolver';
import { ProjectsComponent } from './projects.component';
import { ProjectRoutes } from './projects.routes';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: ProjectsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: ProjectRoutes.Meteorite },
      {
        path: ProjectRoutes.Meteorite,
        component: ProjectComponent,
        data: { projectId: 'XxrG4BEAACUAmHPv' },
        resolve: { project: ProjectResolver },
      }, {
        path: ProjectRoutes.OSRSTracker,
        component: ProjectComponent,
        data: { projectId: 'Xxq2mREAACMAmCol' },
        resolve: { project: ProjectResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
