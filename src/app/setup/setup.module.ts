import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components
import { SetupComponent } from './components/setup';
// Modules
import { SetupRoutesModule } from './setup.routes';
// Services
import { SetupService } from './setup.service';
import { SharedModule } from '../shared/shared.module';
// Stepper
// import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CdkTableModule,
    FormsModule,
    HttpModule,
    // MatNativeDateModule,
    ReactiveFormsModule,
    SetupRoutesModule,
    SharedModule
  ],
  providers: [
    SetupService
  ]
})

export class SetupModule {
}
