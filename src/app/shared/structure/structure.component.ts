import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  unsubscribe$ = new Subject();
  opened = false;
  mode: MatDrawerMode = 'side';

  constructor() { }

  ngOnInit(): void {
    this.verifyScreenWidth();
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }
  
  /* Escucha el evento resize para adaptar el sidenav */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verifyScreenWidth();
  }

  /* Adapta el sidenav dependiendo del ancho de la pantalla del dispositovo */
  verifyScreenWidth() {
    if (innerWidth < 767) {
      this.opened = false;
      this.mode = 'over';
    } else {
      this.opened = true;
      this.mode = 'side';
    }
  }
}
