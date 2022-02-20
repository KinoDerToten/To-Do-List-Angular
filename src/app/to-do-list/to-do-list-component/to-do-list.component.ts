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

  constructor(_ToDoList: ToDoListService) {
    this.ToDoList = _ToDoList;
  }

  ngOnInit(): void {
  }

  pressEnter(event: KeyboardEvent): void {
    this.todos = this.ToDoList.pressEnter(event);
  }

}
