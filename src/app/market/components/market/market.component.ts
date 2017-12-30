import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ls-market',
  template: `
    <h2>Market Page</h2>
    <div style="
    border-radius: 6px;
    overflow: hidden;
    height: 400px;
    width: 400px;
    margin: 100px 200px;
    box-shadow: 7px 7px 16px 1px rgba(0,0,0,.3);">
      <img src="http://ghk.h-cdn.co/assets/17/11/480x720/gallery-1489698268-danielle-occhiogrosso-beet-mushroom-avo-salad-0417.jpg">

    </div>
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
