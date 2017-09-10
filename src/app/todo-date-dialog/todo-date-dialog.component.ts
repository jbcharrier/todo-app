import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-todo-date-dialog',
  templateUrl: './todo-date-dialog.component.html',
  styleUrls: ['./todo-date-dialog.component.css']
})
export class TodoDateDialogComponent {

  todoDate: string = '';

  constructor(public dialogRef: MdDialogRef<TodoDateDialogComponent>) { }

}
