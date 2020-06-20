import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDocsComponent } from './button/button-docs.component';
import { DocsComponent } from './docs.component';
import { SideMenuDocsComponent } from './side-menu/side-menu-docs.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DocsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'button' },
      { path: 'button', component: ButtonDocsComponent },
      { path: 'side-menu', component: SideMenuDocsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule { }
