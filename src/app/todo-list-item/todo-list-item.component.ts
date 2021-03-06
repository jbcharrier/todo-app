import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input()
  todo: Todo;

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  toggleTodoComplete(todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo) {
    this.remove.emit(todo);
  }

}
