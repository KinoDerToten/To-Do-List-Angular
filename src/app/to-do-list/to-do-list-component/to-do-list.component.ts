import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ToDoListService } from '../to-do-list-service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public ToDoList: ToDoListService
  public TaskList: string[] = ['Viajar de avião', 'Regar as plantas de manhã', 'Ir na academia'];
  public qtdTask: number = this.TaskList.length;

  @ViewChildren('liElement') liElement: QueryList<'liElement'>;
  @ViewChildren('inputElement') inputElement: QueryList<'inputElement'>;

  constructor(public _ToDoList: ToDoListService) {
    this.ToDoList = _ToDoList;
  }

  ngOnInit(): void {

  }

  addItemTask(e: KeyboardEvent): void {
    if (e.code === 'Enter' && (<HTMLInputElement>e.target).value.length > 0) {
      this.TaskList.unshift((<HTMLInputElement>e.target).value);
      (<HTMLInputElement>e.target).value = '';

      this.itemsLeft(1);
    }
  }

  removeTask(task: string): void {
    this.TaskList.splice(this.TaskList.indexOf(task), 1);
  }

  itemsLeft(qtdItems: number): void {
    this.qtdTask += qtdItems;
  }

  all(): void {
    this.liElement.toArray().forEach((liElement: any) => {
      if (liElement.nativeElement.classList.contains('esconder')) {
        liElement.nativeElement.classList.remove('esconder');
      }
    });
  }

  active(): void {

  }
}
