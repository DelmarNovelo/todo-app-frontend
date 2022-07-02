import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToDo } from 'src/app/interfaces/to-do-interface';
import { URL_SERVICE } from 'src/app/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
              private httpClient: HttpClient
  ) { }

  newToDo(toDo: IToDo) {
    const url = `${URL_SERVICE}/to-do-list`;

    return this.httpClient.post<IToDo[]>(url, toDo);
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

    return this.httpClient.put<IToDo[]>(url, toDo);
  }

  markToDoAsDone(toDoTitle: string) {
    const url = `${URL_SERVICE}/to-do-list/update-status/${toDoTitle}`;

    return this.httpClient.put<IToDo[]>(url, {});
  }

  removeToDo(toDoTitle: string) {
    const url = `${URL_SERVICE}/to-do-list/${toDoTitle}`;

    return this.httpClient.delete<IToDo[]>(url);
  }
}
