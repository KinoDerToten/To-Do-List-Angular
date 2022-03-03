import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';

import { ToDoListService } from '../to-do-list-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public tasks: object[] = [];
  public qtdTask: number = 0;
  public checkbox: boolean = true;
  public id: string[] = [];

  @ViewChildren('checkElement') checkElement: any;
  @ViewChildren('taskItem') taskItem: any;
  @ViewChildren('liElement') liElement: any;
  @ViewChildren('iconCheck') iconCheck: any;

  constructor(public ToDoList: ToDoListService) {
  }

  ngOnInit(): void {

  }

  pressEnter(event: KeyboardEvent): void {
    this.tasks = this.ToDoList.pressEnter(event);
    this.qtdTask = this.tasks.length;
  }

  checked(id: string): string[] {
    this.checkElement.toArray().forEach((checkElement: any) => {
      if (checkElement.nativeElement.id == id) {
        checkElement.nativeElement.classList.toggle('checkbox');
        checkElement.nativeElement.classList.toggle('checked');
        checkElement.nativeElement.firstChild.classList.toggle('icon-check');

        if (checkElement.nativeElement.classList.contains('checked')) {
          this.qtdTask -= 1;
        } else {
          this.qtdTask += 1;
        }


      }
    });

    this.liElement.toArray().forEach((liElement: any) => {
      if (liElement.nativeElement.id == id) {
        liElement.nativeElement.classList.toggle('checked-text')
      }
    });

    this.id.push(id);

    return this.id
  }

  completed(): void {

  }

}
