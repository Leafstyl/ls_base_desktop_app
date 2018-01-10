import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiometricsService } from '../../biometrics.service';
import { IBiometrics, Biometrics } from '../../models/biometrics';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ls-biometrics',
  styleUrls: ['./biometrics.component.scss'],
  templateUrl: './biometrics.component.html'
})
export class BiometricsComponent implements OnInit {
  biometrics: IBiometrics;
  editing: boolean = false;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  private lastBiometrics: IBiometrics;

  constructor(
    public route: ActivatedRoute,
    public biometricsService: BiometricsService,
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    console.log('Initializing BiometricsComponent...');

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
    // Biometrics
    this.biometricsService.biometrics.subscribe(biometrics => {
      this.biometrics = <IBiometrics>biometrics;
      if (!this.biometrics) {
        this.saveBiometrics(new Biometrics());
      } else {
        this.lastBiometrics = Object.assign({}, this.biometrics);
      }
      console.log(`this.biometrics: ${this.biometrics}`)
    });
  }

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
}
