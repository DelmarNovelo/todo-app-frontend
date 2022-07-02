import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ObservablesService } from 'src/app/services/observables.service';
import { TodoService } from 'src/app/services/todo.service';

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
              private matDialogRef: MatDialogRef<RemoveTodoComponent>
  ) { }

  ngOnInit(): void {
  }

  removeToDo() {
    this.toDoService.removeToDo(this.toDoTitle).subscribe(() => {
      this.matSnackBar.open('Tarea eliminada', 'Cerrar', { duration: 2500 });

      this.matDialogRef.close();

      if (this.router.url.includes('update-todo')) {
        this.router.navigate(['/todos/list']);
      } else {
        this.observablesService.updateToDoList(true);
      }
    });
  }
}
