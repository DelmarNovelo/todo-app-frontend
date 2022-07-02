import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosListRoutingModule } from './todos-list-routing.module';
import { TodosListComponent } from './todos-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveTodoModule } from 'src/app/dialogs/remove-todo/remove-todo.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TodosListComponent
  ],
  imports: [
    CommonModule,
    TodosListRoutingModule,
    RemoveTodoModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class TodosListModule { }
