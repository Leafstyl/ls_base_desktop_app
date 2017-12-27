import { NgModule } from '@angular/core';
// Components
import { DesignSystemComponent } from './_components/design-system.component';
import {MasterTemplateComponent} from './brand-identity/components/master-template/master-template.component';
import {PatternLibComponent} from './pattern-lib/components/pattern-lib.component';
// Modules
import { DesignSystemRoutesModule } from './design-system.routes';
// Services
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DesignSystemComponent,
    MasterTemplateComponent,
    PatternLibComponent
  ],
  imports: [
    DesignSystemRoutesModule,
    SharedModule
  ],
  providers: [
    // DesignSystemService
  ]
})

export class DesignSystemModule {
}
