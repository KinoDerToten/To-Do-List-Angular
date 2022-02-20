import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  public id: number = 0;
  public forLabel: number = 0;

  constructor() { }

  idAleatorio(): number {
    this.id++;
    return this.id
  }

  forAleatorio(): number {
    this.forLabel++;
    return this.forLabel
  }
}
