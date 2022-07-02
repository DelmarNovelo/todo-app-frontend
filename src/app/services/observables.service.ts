import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  toDoUpdated = new Subject();
  toDoUpdated$ = this.toDoUpdated.asObservable();

  constructor() { }

  updateToDoList(update: boolean) {
    this.toDoUpdated.next(update);
  }
}
