import { NgModule } from '@angular/core';
import { MeteorContainerModule, MeteorSideMenuModule } from '@code-comet/meteor';
import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from './project/project.component';
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
    ProjectComponent,
  ],
})
export class ProjectsModule { }
