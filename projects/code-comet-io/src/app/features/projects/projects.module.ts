import { NgModule } from '@angular/core';
import { MeteorContainerModule, MeteorSideMenuModule } from 'meteor';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectsRoutingModule,
    MeteorContainerModule,
    MeteorSideMenuModule,
  ],
  declarations: [
    ProjectsComponent,
  ],
})
export class ProjectsModule { }
