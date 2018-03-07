import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DashboardService } from '../../dashboard.service';

import { BiometricsComponent } from '../../../biometrics/components/biometrics/biometrics.component';


@Component({
  selector: 'ls-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(public route: ActivatedRoute,
              public dialog: MatDialog) {
  }
  //
  ngOnInit() {
    console.log('Initializing DashboardComponent...');

  }

  // Dialog
  openDialog(): void {
    let dialogRef = this.dialog.open(BiometricsComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

