import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ls-market',
  template: `
    <div style="
    border-radius: 6px;
    overflow: hidden;
    height: 400px;
    width: 400px;
    margin: 100px 200px;
    box-shadow: 7px 7px 16px 1px rgba(0,0,0,.3);
    float:left;
">
      <img src="http://ghk.h-cdn.co/assets/17/11/480x720/gallery-1489698268-danielle-occhiogrosso-beet-mushroom-avo-salad-0417.jpg">

    </div>
  `
})
export class MarketComponent implements OnInit {
  constructor(){}
  ngOnInit() {
    console.log('=======> market.route.ts')
  }
}
