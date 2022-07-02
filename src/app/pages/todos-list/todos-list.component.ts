import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { RemoveTodoComponent } from 'src/app/dialogs/remove-todo/remove-todo.component';
import { ObservablesService } from 'src/app/services/observables.service';
import { TodoService } from 'src/app/services/todo.service';
import { IToDo } from 'src/app/interfaces/to-do-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NGXLogger } from "ngx-logger";

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
              private matDialog: MatDialog,
              private matSnackBar: MatSnackBar,
              private logger: NGXLogger
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

  /* Detecta los cambios en el buscador y ejecuta el evento que filtra los elementos */
  searcherValueChanges() {
    this.searcher.valueChanges.pipe(takeUntil(this.unsubscribe$), debounceTime(350))
    .subscribe((value) => this.filterToDos(value));
  }

  /* Se ejecuta cuando se elimina un elemento, si se eliminó correctamente actualiza el listado de elementos */
  updateToDosList() {
    this.observablesService.toDoUpdated$.pipe(takeUntil(this.unsubscribe$))
    .subscribe(update =>update ? this.filterToDos(this.searcher.value) : false);
  }

  /* Lista y filtra los elementos en la tabla */
  filterToDos(search: string) {
    search = !search || search.trim() == "" ? "all" : search;

    this.toDoService.filterToDos(search.trim()).subscribe(response => {
      this.dataSource = response;
      this.logger.info(response);
    });
  }

  /* Navega hacia el componente de edición de tareas y se le pasa el titulo de la tarea por parametro */
  updateToDo(toDoTitle: string) {
    this.router.navigate(['/todos/update', toDoTitle]);
  }

  /* Marca la tarea como REALIZADA */
  markToDoAsDone(toDoTitle: string) {
    this.toDoService.markToDoAsDone(toDoTitle).subscribe(response => {
      this.logger.info(response);
      
      this.dataSource = response;
      this.matSnackBar.open('Se marcó como realizada', 'Cerrar', { duration: 2500 });
    });
  }

  /* Abre el dialogo para eliminar una tarea, se le pasa el titulo de la tarea para capturarlo
  desde el dialogo */
  removeToDoDialog(toDoTitle: string) {
    this.matDialog.open(RemoveTodoComponent, { data: toDoTitle, autoFocus: false });
  }
}
