import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from './../todo';
import { TodoDataService } from './../todo-data.service';
import { MdDialog } from '@angular/material';
import { TodoDateDialogComponent } from './../todo-date-dialog/todo-date-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoDataService]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute,
              public dialog: MdDialog){

  }

  public ngOnInit() {
    this.route.data
      .map((data) => data['todos'])
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      )
  }

  openDateDialog(todo) {
    let dialogRef = this.dialog.open(TodoDateDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      todo.date = result;
      this.onAddTodo(todo);
    })
  }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo){
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

}
