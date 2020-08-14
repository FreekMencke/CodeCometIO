import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeteorHeaderModule } from '@code-comet/meteor';
import { HeaderComponent } from './cc-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MeteorHeaderModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule { }
