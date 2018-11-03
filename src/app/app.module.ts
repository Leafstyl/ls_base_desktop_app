import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
// import { DialogOverviewExample } from './core/modal/dialog-overview-example';
// import { DialogOverviewExampleDialog } from './core/modal/dialog-overview-example';

// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { SetupModule } from './setup';
import { DashboardModule } from './dashboard';
import { LibModule } from './library';
import {RecipesModule} from './recipes/recipes.module';
import {HttpClientModule} from '@angular/common/http';
import {SocialModule} from './social/social.module';
// import {DialogOverviewExampleDialog} from './dashboard/components/dashboard/dashboard.component';

// Material UI
// Imported from shared

/* Feature Modules */
@NgModule({
  entryComponents: [
    // DialogOverviewExample,
    // DialogOverviewExampleDialog
  ],
  declarations: [
    AppComponent,
    NavComponent,
    // DialogOverviewExample,
    // DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { useHash: false }),
    AuthModule,
    FirebaseModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    // Modal
    // DialogOverviewExampleDialog,
    // Modules
    SetupModule,
    DashboardModule,
    LibModule,
    RecipesModule,
    SocialModule,
    CoreModule,

  ],
  bootstrap: [
    AppComponent
  ],
  // providers: [RecipesService]
})

export class LsModule {}


