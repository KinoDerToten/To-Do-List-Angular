import { Component, Input, OnInit } from '@angular/core';

import { ToDoListService } from '../to-do-list-service';


@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.css']
})
export class CheckboxRadioComponent implements OnInit {
  @Input()
  checkbox: string = null;

  constructor(public ToDoListService: ToDoListService) {
  }

  ngOnInit(): void {
  }
}
