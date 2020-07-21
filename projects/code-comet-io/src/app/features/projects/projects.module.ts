import { NgModule } from '@angular/core';
import { MeteorContainerModule, MeteorSideMenuModule } from 'meteor';
import { SharedModule } from '../../shared/shared.module';
import { MeteorProjectComponent } from './meteor/meteor-project.component';
import { OSRSTrackerProjectComponent } from './osrs-tracker/osrs-tracker-project.component';
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
    MeteorProjectComponent,
    OSRSTrackerProjectComponent,
  ],
})
export class ProjectsModule { }
