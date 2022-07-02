import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
    .then(m => m.HomeModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./shared/structure/structure.module')
    .then(m => m.StructureModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
