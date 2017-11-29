import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '../firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.map(user => !!user);
    this.uid$ = afAuth.authState.map(user => user.uid);
  }

  signIn(provider: firebase.auth.AuthProvider): Promise<any> {
    return this.afAuth.auth.signInWithPopup(provider)
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGoogle(): Promise<any> {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook(): Promise<any> {
    return this.signIn(new firebase.auth.FacebookAuthProvider());
  }

  // signInAnonymously(): Promise<any> {
  //   return this.afAuth.auth.signInAnonymously()
  //     .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
  // }
  //
  // signInWithGithub(): Promise<any> {
  //   return this.signIn(new firebase.auth.GithubAuthProvider());
  // }
  //
  // signInWithTwitter(): Promise<any> {
  //   return this.signIn(new firebase.auth.TwitterAuthProvider());
  // }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
