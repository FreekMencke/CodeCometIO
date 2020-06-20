import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MeteorSideMenuService } from './mtr-side-menu.service';

@Component({
  selector: 'mtr-side-menu-container',
  template: `
    <div class="mtr-side-menu__item-list">
      <ng-content select="mtr-side-menu-item-list"></ng-content>
    </div>
    <div class="mtr-side-menu__content">
      <ng-content select="mtr-side-menu-content"></ng-content>
    </div>
  `,
  styleUrls: ['./mtr-side-menu-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeteorSideMenuContainerComponent implements OnInit, OnDestroy {

  private readonly destroyed$: Subject<void> = new Subject();

  @HostBinding('class.mtr-side-menu--closed') closed: boolean;

  constructor(
    private mtrSideMenuService: MeteorSideMenuService,
  ) { }

  ngOnInit(): void {
    this.mtrSideMenuService.isOpen$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isOpen => this.closed = !isOpen);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
