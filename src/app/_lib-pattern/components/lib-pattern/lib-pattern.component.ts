import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ls-lib-pattern',
  styleUrls: ['./lib-pattern.component.scss'],
  templateUrl: './lib-pattern.component.html'
})
export class LibPatternComponent {

  constructor(public route: ActivatedRoute) {
  }

}

