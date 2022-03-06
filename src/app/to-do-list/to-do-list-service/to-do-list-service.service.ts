import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  public tasks = [];

  constructor() { }

  pressEnter(event: KeyboardEvent): object[] {
    if ((<HTMLInputElement>event.target).value == '' || this.tasks.map((task: any) => /\s/g.test(task))) {
      alert('Por Favor insira uma tarefa!!!');
      (<HTMLInputElement>event.target).value = '';
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
