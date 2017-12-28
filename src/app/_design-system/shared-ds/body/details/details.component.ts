import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ContentModel} from '../../../core-ds/models/content-model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  item: ContentModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => this.item = data.item);
  }


}
