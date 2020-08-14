import { NgModule } from '@angular/core';
import { MeteorBannerModule, MeteorButtonModule, MeteorCardModule } from '@code-comet/meteor';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MeteorBannerModule,
    MeteorButtonModule,
    MeteorCardModule,
  ],
})
export class HomeModule { }
