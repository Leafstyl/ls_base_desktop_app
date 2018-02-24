import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

// Biometrics Form
import { BiometricsService } from '../../../biometrics/biometrics.service';
import { IBiometrics, Biometrics } from '../../../biometrics/models/biometrics';

@Component({
  selector: 'ls-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  biometrics: IBiometrics;
  editing: boolean = false;

  private lastBiometrics: IBiometrics;

  constructor(public route: ActivatedRoute, public biometricsService: BiometricsService) {
  }

  ngOnInit() {
    console.log('Initializing DashboardComponent...');

    this.biometricsService.biometrics.subscribe(biometrics => {
      this.biometrics = <IBiometrics>biometrics;
      if(!this.biometrics) {
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
