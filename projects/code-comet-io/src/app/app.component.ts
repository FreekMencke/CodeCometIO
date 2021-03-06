import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cc-app',
  template: `
    <cc-header></cc-header>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent { }
