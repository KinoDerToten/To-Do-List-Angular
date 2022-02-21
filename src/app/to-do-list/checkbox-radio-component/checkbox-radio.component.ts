import { Component, Input, OnInit } from '@angular/core';

import { ToDoListService } from '../to-do-list-service';


@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.css']
})
export class CheckboxRadioComponent implements OnInit {
  public id: number = 0;
  public forLabel: number = 0;
  public ToDoList: ToDoListService;
  public classe: boolean = false;
  @Input() task: string = '';

  constructor(ToDoListService: ToDoListService) {
    this.ToDoList = ToDoListService;
    this.id = ToDoListService.idAleatorio();
    this.forLabel = ToDoListService.forAleatorio();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.classe = !this.classe;
  }
}
