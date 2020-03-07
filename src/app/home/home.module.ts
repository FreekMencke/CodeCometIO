import { NgModule } from '@angular/core';
import { MeteorButtonModule } from 'meteor';
import { SharedModule } from 'src/shared/shared.module';
import { ButtonDocsComponent } from './button/button-docs.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ButtonDocsComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MeteorButtonModule,
  ],
})
export class HomeModule { }
