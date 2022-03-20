import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public ToDoList: ToDoListService
  public TaskList: string[] = [];

  constructor(public _ToDoList: ToDoListService) {
    this.ToDoList = _ToDoList;
  }

  ngOnInit(): void {

  }

  addItemTask(e: KeyboardEvent): void {
    if (e.code === 'Enter' && (<HTMLInputElement>e.target).value.length > 0) {
      this.TaskList.unshift((<HTMLInputElement>e.target).value);
      (<HTMLInputElement>e.target).value = '';
    }
  }



}
