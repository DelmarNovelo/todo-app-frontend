import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToDo } from 'src/app/interfaces/to-do-interface';
import { URL_SERVICE } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
              private httpClient: HttpClient
  ) { }

  newToDo(toDo: IToDo) {
    const url = `${URL_SERVICE}/to-do-list`;

    return this.httpClient.post(url, toDo);
  }

  filterToDos(search: string) {
    const url = `${URL_SERVICE}/to-do-list/search/${search}`;

    return this.httpClient.get<IToDo[]>(url);
  }

  getToDoDetails(toDoTitle: string) {
    const url = `${URL_SERVICE}/to-do-list/${toDoTitle}`;

    return this.httpClient.get<IToDo>(url);
  }

  updateToDo(toDo: IToDo, toDoTitle: string) {
    const url = `${URL_SERVICE}/to-do-list/${toDoTitle}`;

    return this.httpClient.put(url, toDo);
  }

  removeToDo(toDoTitle: string) {
    const url = `${URL_SERVICE}/to-do-list/${toDoTitle}`;

    return this.httpClient.delete(url);
  }
}
