import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RemoveTodoComponent } from 'src/app/dialogs/remove-todo/remove-todo.component';
import { TodoService } from 'src/app/services/todo.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  toDoForm = new FormGroup({});
  toDoTitle = '';

  constructor(
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private toDoService: TodoService,
              private matDialog: MatDialog,
              private matSnackBar: MatSnackBar,
              private logger: NGXLogger
  ) { 
    this.getToDoTitle();
  }

  ngOnInit(): void {
    this.buildForm();

    this.getToDoDetails();
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next(null);
      this.unsubscribe$.complete();
  }

  /* Obtiene el titulo de la tarea que viene en la ruta */
  getToDoTitle() {
    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe$))
    .subscribe(params => this.toDoTitle = params['title']);
  }

  /* Trae los detalles de la tarea y hace un patch al formulario */
  getToDoDetails() {
    this.toDoService.getToDoDetails(this.toDoTitle).subscribe(response => {
      this.toDoForm.patchValue(response);
      this.logger.info(response);
    });
  }

  buildForm() {
    this.toDoForm = this.formBuilder.group({
      done: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  /* Actualiza la tarea */
  updateToDo() {
    if (this.toDoForm.invalid) {
      return this.toDoForm.markAllAsTouched();
    }

    this.toDoService.updateToDo(this.toDoForm.value, this.toDoTitle).subscribe((response) => {
      this.matSnackBar.open('Tarea actualizada', 'Cerrar', { duration: 2500 });
      this.logger.info('Tarea actualizada', response);
      this.router.navigate(['/todos/list']);
    });
  }

  /* Abre el dialogo para eliminar una tarea, se le pasa el titulo de la tarea para capturarlo
  desde el dialogo */
  removeToDoDialog() {
    this.matDialog.open(RemoveTodoComponent, { data: this.toDoTitle, autoFocus: false });
  }
  
  resetForm() {
    this.toDoForm.reset();
  }

  //! GETTERS
  get titleError() {
    const title = this.toDoForm.get('title');
    return title?.touched && title.invalid;
  }

  get descriptionError() {
    const description = this.toDoForm.get('description');
    return description?.touched && description.invalid;
  }

  get titleErrorMsg() {
    return 'Título requerido';
  }

  get descriptionErrorMsg() {
    return 'Descripción requerida';
  }
}
