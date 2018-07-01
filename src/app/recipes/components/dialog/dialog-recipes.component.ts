import { Component, Inject } from '@angular/core';
// import { AuthService } from './auth';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'dialog-recipes',
  templateUrl: './dialog-recipes.component.html',
  styleUrls: ['./dialog-recipes.component.scss']
})

export class DialogRecipesComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogRecipesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addRecipe(e, any): void {
    console.log('===============> addRecipe', e);
  }

}




