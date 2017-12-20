import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { MarketComponent } from './components/market';
// Guards
import { RequireAuthGuard } from '../auth';

export const MarketRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'market',
    component: MarketComponent,
    canActivate: [RequireAuthGuard]
  }
])
