import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  public tasks = [];

  constructor() { }

  pressEnter(event: KeyboardEvent): any[] {
    if ((<HTMLInputElement>event.target).value == '') {
      alert('Por Favor insira uma tarefa!!!');
    } else {
      this.tasks.unshift({
        name: (<HTMLInputElement>event.target).value,
        id: (<HTMLInputElement>event.target).value
      });
      (<HTMLInputElement>event.target).value = '';
    }
    return this.tasks
  }
}
