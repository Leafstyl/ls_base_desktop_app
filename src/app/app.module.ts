import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Components
import {AppComponent} from './app.component';
import {AppHeaderComponent} from './app-header.component';
// Modules
import {AuthModule} from './auth';
import {FirebaseModule} from './firebase';
import {RecipesModule} from './recipes';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    AuthModule,
    FirebaseModule,
    RecipesModule
  ],
  providers: []
})

export class AppModule {
}
