import {Component} from '@angular/core';
import {AuthService} from './auth';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(public auth: AuthService) {
  }
}
