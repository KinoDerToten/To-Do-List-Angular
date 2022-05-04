export class ToDoListModel {
  public task?: string = '';
  public concluido?: boolean = false;
  public id?: number = 0;
  constructor(task?: string, id?: number) {
    this.task = task;
    this.id = id;
  }
}
