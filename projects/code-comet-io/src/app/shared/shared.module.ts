import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeteorContainerModule } from 'meteor';
import { FooterModule } from './components/cc-footer/cc-footer.module';
import { HeaderModule } from './components/cc-header/cc-header.module';

const MODULES = [
  CommonModule,
  HeaderModule,
  FooterModule,
  MeteorContainerModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule { }
