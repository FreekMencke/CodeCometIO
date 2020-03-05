import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeteorButtonComponent } from './mtr-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MeteorButtonComponent],
  exports: [MeteorButtonComponent],
})
export class MeteorButtonModule { }
