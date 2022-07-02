import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTodoRoutingModule } from './new-todo-routing.module';
import { NewTodoComponent } from './new-todo.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NewTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewTodoRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class NewTodoModule { }
