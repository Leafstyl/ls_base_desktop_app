import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../../core-ds/models/content-model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  items: ContentModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .map(data => data['items'])
      .subscribe(items => this.items = items);
  }

}
