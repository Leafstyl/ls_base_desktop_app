import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiometricsService } from '../../biometrics.service';
import { IBiometrics, Biometrics } from '../../models/biometrics';

@Component({
  selector: 'ls-biometrics',
  styleUrls: ['./biometrics.component.scss'],
  templateUrl: './biometrics.component.html'
})
export class BiometricsComponent implements OnInit {
  biometrics: IBiometrics;
  editing: boolean = false;

  private lastBiometrics: IBiometrics;

  constructor(public route: ActivatedRoute, public biometricsService: BiometricsService) {
  }

  ngOnInit() {
    console.log('Initializing BiometricsComponent...');

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
