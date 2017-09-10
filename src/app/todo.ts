export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  date: string = '';

  constructor(values: Object = {}){
    Object.assign(this, values);
  }

}
