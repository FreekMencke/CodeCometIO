import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MeteorSideMenuService } from 'meteor';

@Component({
  selector: 'mit-docs',
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent { }
