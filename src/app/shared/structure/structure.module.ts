import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructureComponent } from './structure.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';


@NgModule({
  declarations: [
    StructureComponent,
    ToolbarComponent,
    SidenavComponent,
    BreadcumbComponent
  ],
  imports: [
    CommonModule,
    StructureRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class StructureModule { }
