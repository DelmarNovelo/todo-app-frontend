import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoService } from 'src/app/services/todo.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  toDoForm = new FormGroup({});

  constructor(
              private formBuilder: FormBuilder,
              private toDoService: TodoService,
              private matSnackBar: MatSnackBar,
              private logger: NGXLogger
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.toDoForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  /* Guarda una nueva tarea */
  newToDo() {
    if (this.toDoForm.invalid) {
      return this.toDoForm.markAllAsTouched();
    }

    this.toDoService.newToDo(this.toDoForm.value).subscribe((response) => {
      this.resetForm();
      this.matSnackBar.open('Nueva tarea guardada', 'Cerrar', { duration: 2500 });
      this.logger.info('Nueva tarea guardada', response);
    });
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
