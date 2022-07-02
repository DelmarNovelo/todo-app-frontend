import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureComponent } from './structure.component';

const routes: Routes = [
  {
    path: '',
    component: StructureComponent,
    children: [
      {
        path: 'new',
        loadChildren: () => import('../../pages/new-todo/new-todo.module')
        .then(m => m.NewTodoModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../../pages/todos-list/todos-list.module')
        .then(m => m.TodosListModule)
      },
      {
        path: 'update/:title',
        loadChildren: () => import('../../pages/update-todo/update-todo.module')
        .then(m => m.UpdateTodoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
