import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrismicService } from '../../core/prismic/prismic.service';
import { HomePage } from './models/home-page.model';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<HomePage> {

  constructor(private prismicService: PrismicService) { }

  resolve(): Observable<HomePage> {
    return forkJoin([
      this.prismicService.getAbout(),
      this.prismicService.getProjectCards(),
    ]).pipe(map(([about, projectCards]) => ({
      about,
      projectCards,
    })));
  }

}
