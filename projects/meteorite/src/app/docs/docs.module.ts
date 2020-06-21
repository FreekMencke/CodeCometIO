import { NgModule } from '@angular/core';
import { ButtonDocsComponent } from './button/button-docs.component';
import { MeteorSideMenuModule, MeteorButtonModule, MeteorHeaderModule } from 'meteor';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { SideMenuDocsComponent } from './side-menu/side-menu-docs.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderDocsComponent } from './header/header-docs.component';
import { ContainerDocsComponent } from './container/container-docs.component';

@NgModule({
  imports: [
    SharedModule,
    DocsRoutingModule,
    MeteorButtonModule,
    MeteorSideMenuModule,
  ],
  declarations: [
    DocsComponent,
    ButtonDocsComponent,
    ContainerDocsComponent,
    HeaderDocsComponent,
    SideMenuDocsComponent,
  ],
})
export class DocsModule { }
