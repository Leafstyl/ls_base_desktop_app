import {Component, OnInit} from '@angular/core';
import {ResizeService} from '../services/resize.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  private width: number;

  constructor(private resizeService: ResizeService) {
  }

  ngOnInit() {
    this.resizeService.width$.subscribe(width => this.width = width);
  }

}
