import { Component, OnInit } from '@angular/core';

import { ToDoListService } from '../to-do-list-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  ToDoList: ToDoListService;
  todos: string[] = [];
  qtdTask: number;
  classe: boolean;

  constructor(_ToDoList: ToDoListService) {
    this.ToDoList = _ToDoList;
  }

  ngOnInit(): void {
  }

  pressEnter(event: KeyboardEvent): void {
    this.todos = this.ToDoList.pressEnter(event);
    this.qtdTask = this.todos.length;
  }

  taskLength(event: any): void {
    if (event.valor.target.checked === true) {
      this.qtdTask -= 1;
    } else {
      this.qtdTask += 1;
    }
  }
}
