import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PrismicService } from '../../../core/prismic/prismic.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectResolver implements Resolve<any> {

  constructor(private prismicService: PrismicService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.prismicService.getProject(route.data.projectId);
  }

}
