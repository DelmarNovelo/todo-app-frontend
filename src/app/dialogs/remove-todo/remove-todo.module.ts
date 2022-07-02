import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveTodoComponent } from './remove-todo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    RemoveTodoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    RemoveTodoComponent
  ]
})
export class RemoveTodoModule { }
