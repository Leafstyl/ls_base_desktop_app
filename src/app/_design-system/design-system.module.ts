import {NgModule} from '@angular/core';
// Components
import {DesignSystemComponent} from './_components/design-system.component';
// import {MasterTemplateComponent} from './brand-identity/components/master-template/master-template.component';
// import {PatternLibComponent} from './pattern-lib/components/pattern-lib.component';
// Modules
import {DesignSystemRoutesModule} from './design-system.routes';
import {CoreDsModule} from './core-ds/core-ds.module';
import {RoutingDsModule} from './core-ds/routing-ds.module';

// Services
import {SharedDsModule} from './shared-ds/shared.module';
import {ContentService} from './core-ds/services/content.service';

@NgModule({
  declarations: [
    DesignSystemComponent
    // MasterTemplateComponent,
    // PatternLibComponent
  ],
  imports: [
    DesignSystemRoutesModule,
    CoreDsModule,
    RoutingDsModule,
    SharedDsModule
  ],
  providers: [
    // DesignSystemService
    ContentService
  ]
})

export class DesignSystemModule {
}
