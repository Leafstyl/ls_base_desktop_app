import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   width: '250px'
    //   //data: { name: this.name, animal: this.animal }
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   //this.animal = result;
    // });

    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });

  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  // templateUrl: 'dialog-overview-example-dialog.html',
  // template: '<ls-biometrics></ls-biometrics>',
  template: '<h1> Morning Grant </h1><br><h2>Ready for your Monday mealplan?</h2>'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}