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

  checked(id: string, outerText: string): string[] {
    this.checkElement.toArray().forEach((array: any) => {
      if (array.nativeElement.id == id) {
        array.nativeElement.classList.toggle('checkbox');
        array.nativeElement.classList.toggle('checked');

        array.nativeElement.firstChild.classList.toggle('icon-check');

        if (array.nativeElement.classList.contains('checked')) {
          this.qtdTask -= 1;
        } else {
          this.qtdTask += 1;
        }
      }
    });

    this.taskItem.toArray().forEach((array: any) => {
      if (array.nativeElement.outerText == outerText) {
        array.nativeElement.classList.toggle('checked-text')
      }
    });

    this.id.push(id);

    return this.id
  }

  completed(): void {
  }

}
