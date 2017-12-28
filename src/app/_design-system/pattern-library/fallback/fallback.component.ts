import {Component, OnInit} from '@angular/core';
import {ContentModel} from '../../core-ds/models/content-model';
import {ComponentInterface} from '../component.interface';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.scss']
})
export class FallbackComponent implements OnInit, ComponentInterface {

  data: ContentModel;

  constructor() {
  }

  ngOnInit() {
  }

}
