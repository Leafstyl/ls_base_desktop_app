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

  menuItems;

  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);

  ngOnInit() {
    this.menuItems = [
      { caption: 'Food', link: ['/recipes'] },
      { caption: 'People', link: ['/social'] },
      { caption: 'Life', link: ['/dashboard'] },
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
