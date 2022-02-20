import { Component, OnInit } from '@angular/core';

import { ToDoListService } from '../to-do-list-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  pressEnter(event: KeyboardEvent): void {
    if (event.code === 'Enter') {
      this.todos.push((<HTMLInputElement>event.target).value);
      (<HTMLInputElement>event.target).value = '';
    }
  }
}
