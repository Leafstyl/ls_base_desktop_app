import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styleUrls: ['./app-header.component.scss'],
  templateUrl: './app-header.component.html'
})

export class AppHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
}
