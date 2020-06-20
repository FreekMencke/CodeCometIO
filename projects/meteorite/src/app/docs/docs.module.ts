import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/code-comet-io/src/app/shared/shared.module';
import { ButtonDocsComponent } from './button/button-docs.component';
import { MeteorSideMenuModule, MeteorButtonModule } from 'meteor';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { SideMenuDocsComponent } from './side-menu/side-menu-docs.component';

@NgModule({
  imports: [
    SharedModule,
    DocsRoutingModule,
    MeteorButtonModule,
    MeteorSideMenuModule,
  ],
  declarations: [
    ButtonDocsComponent,
    SideMenuDocsComponent,
    DocsComponent,
  ],
})
export class DocsModule { }
