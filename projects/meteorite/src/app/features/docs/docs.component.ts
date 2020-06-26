import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MeteorSideMenuService } from 'meteor';

@Component({
  selector: 'mit-docs',
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {

  readonly availableDocs: { path: string, text: string }[] = [
    { path: 'button', text: 'Button' },
    { path: 'container', text: 'Container' },
    { path: 'header', text: 'Header' },
    { path: 'side-menu', text: 'Side Menu' },
  ];

}
