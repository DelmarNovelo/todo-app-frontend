import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTodoRoutingModule } from './update-todo-routing.module';
import { UpdateTodoComponent } from './update-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveTodoModule } from 'src/app/dialogs/remove-todo/remove-todo.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UpdateTodoComponent
  ],
  imports: [
    CommonModule,
    RemoveTodoModule,
    UpdateTodoRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatIconModule,
    
  ]
})
export class UpdateTodoModule { }
