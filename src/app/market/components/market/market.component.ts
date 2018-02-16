import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ls-market',
  template: `
    <h2>Market Page</h2>

    <mat-card>
      <div><img src="../assets/logo.svg" width="20%" height="auto" alt="Leafstyl Logo" style="margin:7px 0 0 12px;"></div>
    </mat-card>
  `
})
export class MarketComponent implements OnInit {
  constructor(){}
  ngOnInit() {
    console.log('=======> market.route.ts')
  }
}
