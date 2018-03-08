import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetupService } from '../../setup.service';
import { ISetup, Setup } from '../../models/setup';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ls-setup',
  styleUrls: ['./setup.component.scss'],
  templateUrl: './setup.component.html'
})
export class SetupComponent implements OnInit {
  setup: ISetup;
  editing: boolean = false;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  private lastSetup: ISetup;

  constructor(
    public route: ActivatedRoute,
    public setupService: SetupService,
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    console.log('Initializing SetupComponent...');

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

  saveSetup(setup?: ISetup): void {
    if (setup) {
      this.setupService.saveSetup(setup);
    } else {
      this.setupService.saveSetup(this.setup);
    }
    this.stopEditing();
  }

  editSetup(): void {
    this.editing = true;
  }

  cancelEdit(): void {
    Object.assign(this.setup, this.lastSetup);
    this.stopEditing();
  }

  stopEditing(): void {
    this.editing = false;
  }
}
