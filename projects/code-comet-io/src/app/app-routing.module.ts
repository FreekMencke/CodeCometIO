import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';

const routes: Routes = [
  {
    path: AppRoutes.Home,
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: AppRoutes.Projects,
    pathMatch: 'prefix',
    loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
