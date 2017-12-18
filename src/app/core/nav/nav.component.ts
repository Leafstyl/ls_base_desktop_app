// import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// import { MessageService, ModalService } from '../';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'ls-header',
  templateUrl: '/nav.component.html',
  styleUrls: ['/nav.component.scss'],
})

export class NavComponent implements OnInit {

  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Market', link: ['/characters'] },
      { caption: 'Kitchen', link: ['/vehicles'] },
      { caption: 'Sherpa', link: ['/admin'] },
      { caption: 'Metrics', link: ['/biometrics'] },
    ];
  }

  // constructor(
  //   // private messageService: MessageService,
  //   // private modalService: ModalService
  //   ) {
  // }

  resetDb() {
    // let msg = 'Are you sure you want to reset the database?';
    // this.modalService.activate(msg).then(responseOK => {
    //   if (responseOK) {
    //     this.messageService.resetDb();
    //   }
    // });
  }
}
