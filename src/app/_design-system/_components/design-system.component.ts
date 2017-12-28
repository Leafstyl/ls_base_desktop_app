import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
// import {Router} from '@angular/router';

class DsMenuItem {
  constructor(public id: number, public type: string, public caption: string, public link: any[]) {
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DesignSystemComponent implements OnInit {
  @Input() authenticated: boolean;
  dsMenuItems: DsMenuItem[];

  // constructor(private router: Router) {
  // }

  constructor(){}

  ngOnInit() {
    // this.dsMenuItems = [
    //   {id: 1, type: 'bi', caption: 'Typography', link: ['/master-template/typography']},
    //   {id: 2, type: 'bi', caption: 'Colors', link: ['/master-template/colors']},
    //   {id: 3, type: 'bi', caption: 'Iconography', link: ['/master-template/iconography']},
    //   {id: 4, type: 'pl', caption: 'Buttons', link: ['/master-template/iconography']},
    //   {id: 5, type: 'pl', caption: 'Toggles', link: ['/master-template/iconography']},
    // ];
  }

}
