import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MeteorButtonModule, MeteorBannerModule } from 'meteor';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MeteorBannerModule,
    MeteorButtonModule,
  ],
})
export class HomeModule { }
