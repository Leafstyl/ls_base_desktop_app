import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { DashboardService } from '../../dashboard.service';

// Biometrics Form
import { BiometricsService } from '../../../biometrics/biometrics.service';
import { IBiometrics, Biometrics } from '../../../biometrics/models/biometrics';
import {SetupService} from '../../../setup/setup.service';
import {ISetup, Setup} from '../../../setup/models/setup';


@Component({
  selector: 'ls-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  biometrics: IBiometrics;
  editing: boolean = false;

  setup: ISetup;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  private lastBiometrics: IBiometrics;
  private lastSetup: ISetup;


  constructor(public route: ActivatedRoute,
              public setupService: SetupService,
              private _formBuilder: FormBuilder,
              public biometricsService: BiometricsService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log('Initializing DashboardComponent...');

    this.biometricsService.biometrics.subscribe(biometrics => {
      this.biometrics = <IBiometrics>biometrics;
      if (!this.biometrics) {
        this.saveBiometrics(new Biometrics());
      } else {
        this.lastBiometrics = Object.assign({}, this.biometrics);
      }
      console.log(`this.biometrics: ${this.biometrics}`)
    });


    // Stepper
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    // Setup
    this.setupService.setup.subscribe(setup => {
      this.setup = <ISetup>setup;
      if (!this.setup) {
        this.saveSetup(new Setup());
      } else {
        this.lastSetup = Object.assign({}, this.setup);
      }
      console.log(`this.setup: ${this.setup}`)
    });

  }

  // Biometrics
  saveBiometrics(biometrics?: IBiometrics): void {
    if (biometrics) {
      this.biometricsService.saveBiometrics(biometrics);
    } else {
      this.biometricsService.saveBiometrics(this.biometrics);
    }
    this.stopEditing();
  }

  editBiometrics(): void {
    this.editing = true;
  }

  cancelEdit(): void {
    Object.assign(this.biometrics, this.lastBiometrics);
    this.stopEditing();
  }

  stopEditing(): void {
    this.editing = false;
  }


  saveSetup(setup?: ISetup): void {
    if (setup) {
      this.setupService.saveSetup(setup);
    } else {
      this.setupService.saveSetup(this.setup);
    }
  }

  editSetup(): void {
    this.editing = true;
  }

}

