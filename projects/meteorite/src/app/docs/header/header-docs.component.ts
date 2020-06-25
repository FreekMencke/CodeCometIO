import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mit-header-docs',
  templateUrl: './header-docs.component.html',
  styleUrls: ['./header-docs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDocsComponent { }
