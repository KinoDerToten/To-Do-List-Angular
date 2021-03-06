import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list-service';
import { ToDoListModel } from './to-do-list.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public ToDoList: ToDoListService
  public TaskList: ToDoListModel[] = [];
  public stats: string = 'all';
  public itemsLeft: number = 0;
  public theme: boolean = false;

  constructor(public _ToDoList: ToDoListService) {
    this.ToDoList = _ToDoList;
  }

  ngOnInit(): void {
  }

  onClickTheme() {
    this.theme = !this.theme;
  }

  addTodo(event: any): void {
    if (event.target.value.trim().length === 0) {
      event.target.value = '';
    } else {
      this.TaskList.push(new ToDoListModel(event.target.value));
      event.target.value = '';
      this.itemsLeft++;
    }
  }

  todoCompleted(task: ToDoListModel): void {
    task.concluido = !task.concluido;
    if (task.concluido) {
      this.itemsLeft--; .0000

    } else {
      this.itemsLeft++;
    }
  }

  obterTask(): any[] {
    if (this.stats === 'active' || this.stats === 'active-mobile') {
      return this.TaskList.filter((task: any) => task.concluido == false);
    } else if (this.stats === 'completed' || this.stats === 'completed-mobile') {
      return this.TaskList.filter((task: any) => task.concluido == true);
    } else {
      return this.TaskList
    }
  }

  mudarStats(event: any): void {
    this.stats = event.target.id;
  }

  removeTask(task: any): void {
    this.TaskList.splice(this.TaskList.indexOf(task), 1);
    if (task.concluido == false) {
      this.itemsLeft--;
    }
  }

  clearCompleted(): any {
    while (this.TaskList.findIndex(task => task.concluido === true) >= 0) {
      this.TaskList.splice(this.TaskList.findIndex(task => task.concluido === true), 1);
    };
  }
}
