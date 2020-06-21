import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteorContainerComponent } from './mtr-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MeteorContainerComponent],
  exports: [MeteorContainerComponent],
})
export class MeteorContainerModule { }
