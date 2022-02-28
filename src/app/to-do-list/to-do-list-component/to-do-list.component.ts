import { Component, ElementRef, OnInit, AfterViewInit, ViewChildren } from '@angular/core';

import { ToDoListService } from '../to-do-list-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, AfterViewInit {
  public tasks: object[] = [];
  public qtdTask: number = 0;
  public checkbox: boolean = true;

  @ViewChildren('liElement') liElement: any;
  @ViewChildren('taskItem') taskItem: any;

  constructor(public ToDoList: ToDoListService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  pressEnter(event: KeyboardEvent): void {
    this.tasks = this.ToDoList.pressEnter(event);
    this.qtdTask = this.tasks.length;
  }

  checked(id: string, outerText: string): void {
    this.liElement.toArray().forEach((array: any) => {
      if (array.nativeElement.id == id) {
        array.nativeElement.classList.toggle('checked');

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


  }

}
