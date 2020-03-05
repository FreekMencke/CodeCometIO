import { NgModule } from '@angular/core';
import { MeteorButtonModule } from 'meteor';
import { SharedModule } from 'src/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MeteorButtonModule,
  ],
})
export class HomeModule { }
