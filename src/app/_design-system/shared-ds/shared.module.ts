import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResizeService} from './services/resize.service';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

// import {HighlightJsModule, HighlightJsService} from 'angular2-highlight-js';

import {PatternLibraryModule} from '../pattern-library/pattern-library.module';

import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {MenuItemComponent} from './header/menu-item/menu-item.component';
import {LandingComponent} from './body/landing/landing.component';
import {DetailsComponent} from './body/details/details.component';
import {ComponentHostDirective} from './body/details/component-host.directive';
import {ResizableComponent} from './body/resizable/resizable.component';
import {ComponentViewerComponent} from './body/common/component-viewer/component-viewer.component';
import {MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule,
    // HighlightJsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCheckboxModule,
    PatternLibraryModule
  ],
  declarations: [
    HeaderComponent,
    LandingComponent,
    MenuItemComponent,
    BodyComponent,
    DetailsComponent,
    ComponentHostDirective,
    ResizableComponent,
    ComponentViewerComponent
  ],
  providers: [
    // HighlightJsService,
    ResizeService
  ],
  exports: [
    HeaderComponent,
    BodyComponent
  ]
})
export class SharedDsModule { }

