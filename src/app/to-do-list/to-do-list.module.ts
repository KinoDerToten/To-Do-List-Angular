import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListComponent } from './to-do-list-component';



@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
