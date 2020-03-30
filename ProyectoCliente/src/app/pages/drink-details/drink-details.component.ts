import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {

  drink: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DrinkDetailsComponent>) {
    this.drink = data;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
