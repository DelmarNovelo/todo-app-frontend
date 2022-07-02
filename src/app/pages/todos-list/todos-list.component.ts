import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { RemoveTodoComponent } from 'src/app/dialogs/remove-todo/remove-todo.component';
import { ObservablesService } from 'src/app/services/observables.service';
import { TodoService } from 'src/app/services/todo.service';
import { IToDo } from 'src/app/interfaces/to-do-interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit, OnDestroy {

  searcher = new FormControl();
  unsubscribe$ = new Subject();
  dataSource: IToDo[] = [];
  columns = ['title', 'description', 'done', 'menu'];

  constructor(  
              private router: Router,
              private observablesService: ObservablesService,
              private toDoService: TodoService,
              private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searcherValueChanges();
    this.filterToDos('all');
    this.updateToDosList();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();    
  }

  searcherValueChanges() {
    this.searcher.valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(350))
    .subscribe((value) => this.filterToDos(value));
  }

  updateToDosList() {
    this.observablesService.toDoUpdated$.pipe(takeUntil(this.unsubscribe$))
    .subscribe(update =>update ? this.filterToDos(this.searcher.value) : false);
  }

  filterToDos(search: string) {
    search = !search || search.trim() == "" ? "all" : search;

    this.toDoService.filterToDos(search.trim()).subscribe(response => this.dataSource = response);
  }

  updateToDo(toDoId: string) {
    this.router.navigate(['/todos/update', toDoId]);
  }

  removeToDoDialog(toDoTitle: string) {
    this.matDialog.open(RemoveTodoComponent, { data: toDoTitle, autoFocus: false });
  }
}
