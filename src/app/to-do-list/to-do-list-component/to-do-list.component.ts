import { Component, OnInit, ViewChildren } from '@angular/core';
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

  @ViewChildren('checkElement') checkElement: any;
  @ViewChildren('taskItem') taskItem: any;
  @ViewChildren('liElement') liElement: any;
  @ViewChildren('iconCheck') iconCheck: any;

  constructor(public ToDoList: ToDoListService) {
  }

  ngOnInit(): void {

  }

  pressEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.tasks = this.ToDoList.pressEnter(event);
      this.qtdTask = this.tasks.length;
      this.checkElement.toArray().forEach((checkElement: any) => {
        if (checkElement.nativeElement.classList.contains('checked')) {
          this.qtdTask -= 1;
        }
      });
    }
  }

  checked(id: string): void {
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
  }

  completed(): void {
    this.liElement.toArray().forEach((liElement: any) => {
      if (liElement.nativeElement.classList.contains('checked-text')) {
        liElement.nativeElement.classList.remove('esconder');
        liElement.nativeElement.classList.add('mostrar');
      } else {
        liElement.nativeElement.classList.remove('mostrar');
        liElement.nativeElement.classList.add('esconder');
      }
    });

    this.qtdTask = 0;
  }

  active(): void {
    this.qtdTask = 0;
    this.liElement.toArray().forEach((liElement: any) => {
      if (liElement.nativeElement.classList.contains('checked-text')) {
        liElement.nativeElement.classList.remove('mostrar');
        liElement.nativeElement.classList.add('esconder');
      } else {
        liElement.nativeElement.classList.remove('esconder');
        liElement.nativeElement.classList.add('mostrar');
        if (liElement.nativeElement.classList.contains('mostrar')) {
          this.qtdTask += 1;
        }
      }
    });
  }

  all(): void {
    this.qtdTask = this.tasks.length;
    this.checkElement.toArray().forEach((checkElement: any) => {
      if (checkElement.nativeElement.classList.contains('checked')) {
        this.qtdTask -= 1;
      }
    });
    this.liElement.toArray().forEach((liElement: any) => {
      if (liElement.nativeElement.classList.contains('esconder')) {
        liElement.nativeElement.classList.remove('esconder');
        liElement.nativeElement.classList.add('mostrar');
      }
    });
  }

  clearCompleted(): void {
    this.liElement.toArray().forEach((liElement: any) => {
      if (liElement.nativeElement.classList.contains('checked-text')) {
        this.tasks.forEach((tasks: any) => {
          if (tasks.name == liElement.nativeElement.id) {
            this.tasks.splice(this.tasks.indexOf(tasks), 1);
          }
        });
      }
    });
  }

}
