import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ls-social',
  styleUrls: ['./social.component.scss'],
  templateUrl: './social.component.html'
})
export class SocialComponent {

  constructor(public route: ActivatedRoute) {
  }

}

