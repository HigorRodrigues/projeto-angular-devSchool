import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  templateUrl: './snackbar-dialog.component.html',
  styleUrls: ['./snackbar-dialog.component.scss']
})
export class SnackbarDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string, 
  ) { }

  ngOnInit(): void {
  }

}
