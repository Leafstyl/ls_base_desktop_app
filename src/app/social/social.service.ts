import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../auth';
// import { IDashboard, Dashboard } from './models';
//
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/switchMap';
// import { Observer } from 'firebase/app';

@Injectable()
export class SocialService implements OnInit {

  constructor () { }
  // dashboard: Observable<IDashboard>;
  //
  // private _dashboardRef: AngularFireObject<IDashboard>;
  //
  // constructor(private _angularFireDatabase: AngularFireDatabase, private _authService: AuthService) {
  //   this._authService.uid$
  //   .take(1)
  //   .subscribe(uid => {
  //     const dashboardPath = `/dashboard/${uid}`
  //     this._dashboardRef = this._angularFireDatabase.object(dashboardPath);
  //     this.dashboard = this._dashboardRef.valueChanges();
  //   });
  // }
  //
  ngOnInit() {
    console.log('Initializing DashboardService...');
  }
  //
  // saveDashboard(biometric: IDashboard): void {
  //   this._dashboardRef.set(biometric);
  // }
}
