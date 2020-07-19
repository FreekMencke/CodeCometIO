import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PrismicService } from '../../core/prismic/prismic.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<any> {

  constructor(
    private prismicService: PrismicService,
  ) { }

  resolve(): Observable<any> {
    return this.prismicService.getProjectCards();
  }

}
