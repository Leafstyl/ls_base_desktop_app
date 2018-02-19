import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibService } from '../../lib.service';
// import { IDashboard, Dashboard } from '../../models/dashboard';

@Component({
  selector: 'ls-lib',
  styleUrls: ['./lib.component.scss'],
  templateUrl: './lib.component.html'
})
export class LibComponent implements OnInit {
  // dashboard: IDashboard;
  // editing: boolean = false;

  // private lastDashboard: IDashboard;

  constructor(public route: ActivatedRoute, public libService: LibService) {

    }

  ngOnInit() {
    console.log('Initializing Library Component...');
  }
}
