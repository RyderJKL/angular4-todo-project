import {NgModule} from '@angular/core'
import {ShareModule} from '../share/share.module'

import {GithubSearchRoutingModule} from './github-search-routing.module'
import { GithubSearchComponent } from './github-search.component';
@NgModule({
  imports: [
    ShareModule,
    GithubSearchRoutingModule
  ],
  declarations: [GithubSearchComponent]
})
export class GithubSearchModule { }
