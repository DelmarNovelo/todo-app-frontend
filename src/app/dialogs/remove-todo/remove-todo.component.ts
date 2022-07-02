import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ObservablesService } from 'src/app/services/observables.service';
import { TodoService } from 'src/app/services/todo.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-remove-todo',
  templateUrl: './remove-todo.component.html',
  styleUrls: ['./remove-todo.component.css']
})
export class RemoveTodoComponent implements OnInit {

  constructor(
              private router: Router,
              private toDoService: TodoService,
              private matSnackBar: MatSnackBar,
              private observablesService: ObservablesService,
              @Inject(MAT_DIALOG_DATA) private toDoTitle: string,
              private matDialogRef: MatDialogRef<RemoveTodoComponent>,
              private ngxLogger: NGXLogger
  ) { }

  ngOnInit(): void {
  }

  /* Elimina la tarea seleccionada */
  removeToDo() {
    this.toDoService.removeToDo(this.toDoTitle).subscribe((response) => {
      this.matSnackBar.open('Tarea eliminada', 'Cerrar', { duration: 2500 });
      this.ngxLogger.info(response);
      
      this.matDialogRef.close();

      /* Si el dialogo está abierto desde la ruta de actualización, vuelve al listado de tareas */
      if (this.router.url.includes('update-todo')) {
        this.router.navigate(['/todos/list']);

      /* Si no, es porque esta abierto desde el listado y solo actualiza los elementos */
      } else {
        this.observablesService.updateToDoList(true);
      }
    });
  }
}
