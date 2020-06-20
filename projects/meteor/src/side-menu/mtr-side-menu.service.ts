import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeteorSideMenuService {

  private _open: BehaviorSubject<boolean> = new BehaviorSubject(true);
  get isOpen$(): Observable<boolean> {
    return this._open.asObservable();
  }

  open(): void {
    this._open.next(true);
  }

  close(): void {
    this._open.next(false);
  }

  toggle(): void {
    this._open.next(!this._open.value);
  }

}
