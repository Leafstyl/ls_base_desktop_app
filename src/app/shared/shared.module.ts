import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatStepperModule
  ],
  declarations: []
})
export class SharedModule {
}
