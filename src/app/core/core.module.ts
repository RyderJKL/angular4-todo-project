import { NgModule, Optional, SkipSelf} from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AuthService} from 'auth.service'

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
  ]
})
export class CoreModule {
  constructor(@Optional @SkipSelf parentModule: CoreModule){
    if (parentModule) {
      throw new  Error (
        'CoreModule is already loaded. Import is in AppModule only'
      )
    }
  }
}
