import { NgModule } from '@angular/core';

// Components
import { MarketComponent } from './components/market';
// Modules
import { MarketRoutesModule } from './market.routes';
import { SharedModule } from '../shared/shared.module';
// Services

@NgModule({
  declarations: [
    MarketComponent
  ],
  imports: [
    MarketRoutesModule,
    SharedModule
  ],
  providers: []
})

export class MarketModule {
}
