import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material';

import { ColorsComponent } from './global/colors/colors.component';
import { FallbackComponent } from './fallback/fallback.component';
import { SourceViewerComponent } from './source-viewer/source-viewer.component';



@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule
  ],
  declarations: [
    ColorsComponent,
    FallbackComponent,
    SourceViewerComponent
  ],
  entryComponents: [
    FallbackComponent,
    ColorsComponent
  ]
})
export class PatternLibraryModule { }
