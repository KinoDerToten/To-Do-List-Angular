import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list-component';
import { CheckboxRadioComponent } from './checkbox-radio-component/checkbox-radio.component';



@NgModule({
  declarations: [
    ToDoListComponent,
    CheckboxRadioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToDoListComponent,
    CheckboxRadioComponent
  ]
})
export class ToDoListModule { }
