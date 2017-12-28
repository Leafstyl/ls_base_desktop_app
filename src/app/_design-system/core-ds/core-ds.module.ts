import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { SharedDsModule } from '../shared-ds/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedDsModule,
    RouterModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    // HttpClient
  ]
})
export class CoreDsModule { }
