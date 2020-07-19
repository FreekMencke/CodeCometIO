import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PrismicService } from './prismic/prismic.service';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (prismicService: PrismicService) => () => prismicService.init(),
      multi: true,
      deps: [PrismicService],
    },
  ],
})
export class CoreModule { }
