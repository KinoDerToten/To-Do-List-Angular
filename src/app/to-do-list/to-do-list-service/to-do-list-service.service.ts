import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  public id: number = 0;
  public forLabel: number = 0;
  public tasks: string[] = [];

  constructor() { }

  pressEnter(event: KeyboardEvent): string[] {
    if (event.code === 'Enter') {
      this.tasks.unshift((<HTMLInputElement>event.target).value);
      (<HTMLInputElement>event.target).value = '';
    }
    return this.tasks
  }

  idAleatorio(): number {
    this.id++;
    return this.id
  }

  forAleatorio(): number {
    this.forLabel++;
    return this.forLabel
  }
}
