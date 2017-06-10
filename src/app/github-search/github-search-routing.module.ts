/**
 * Created by root on 17-6-10.
 */

import {NgModule} from '@angular/core'

import {RouterModule, Routes} from '@angular/router'

import {GithubSearchComponent} from './github-search.component'

const routes : Routes = [
  {
    path:'github',
    component: GithubSearchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class GithubSearchRoutingModule{}
