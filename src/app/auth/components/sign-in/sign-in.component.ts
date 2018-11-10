import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'ls-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html'
})

export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  // signInAnonymously(): void {
  //   this.auth.signInAnonymously()
  //     .then(() => this.postSignIn());
  // }
  //
  // signInWithGithub(): void {
  //   this.auth.signInWithGithub()
  //     .then(() => this.postSignIn());
  // }
  //
  // signInWithTwitter(): void {
  //   this.auth.signInWithTwitter()
  //     .then(() => this.postSignIn());
  // }

  private postSignIn(): void {
    this.router.navigate(['/recipes']);
  }
}
