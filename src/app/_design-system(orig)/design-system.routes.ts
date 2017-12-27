import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { DesignSystemComponent } from './_components';
// Guards
import { RequireAuthGuard } from '../auth';
import {MasterTemplateComponent} from "./brand-identity/components/master-template/master-template.component";

export const DesignSystemRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'design-system',
    component: DesignSystemComponent,
    canActivate: [RequireAuthGuard]
  },
  {
    path: 'design-system/master-template',
    component: MasterTemplateComponent,
    canActivate: [RequireAuthGuard]
  }
]);
