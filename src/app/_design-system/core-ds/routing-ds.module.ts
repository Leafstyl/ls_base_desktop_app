import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {SharedDsModule} from '../shared-ds/shared.module';
import {LandingComponent} from '../shared-ds/body/landing/landing.component';
import {DetailsComponent} from '../shared-ds/body/details/details.component';
import {AllResolve} from './resolvers/all-resolve';
import {DetailsResolve} from './resolvers/details-resolve';

const routes: Routes = [
  {
    path: 'design-system/all',
    component: LandingComponent,
    resolve: {
      items: AllResolve
    }
  },
  {
    path: 'component/:key',
    component: DetailsComponent,
    resolve: {
      item: DetailsResolve
    }
  }
  // { path: '**', redirectTo: '/all' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedDsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AllResolve,
    DetailsResolve
  ]
})

export class RoutingDsModule { }
