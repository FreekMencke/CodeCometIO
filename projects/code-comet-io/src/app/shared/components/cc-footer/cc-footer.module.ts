import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeteorBannerModule, MeteorContainerModule } from '@code-comet/meteor';
import { FooterComponent } from './cc-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MeteorBannerModule,
    MeteorContainerModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
