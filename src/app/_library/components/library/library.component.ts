import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ls-library',
  styleUrls: ['./library.component.scss'],
  templateUrl: './library.component.html'
})
export class LibraryComponent {

  constructor(public route: ActivatedRoute) {
  }

}

