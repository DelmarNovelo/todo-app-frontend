import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { IRouterData } from 'src/app/interfaces/router-data.interface';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  routerData: IRouterData = {};
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
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.verifyScreenWidth();
  }

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
