import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenavEvent = new EventEmitter(true);
  
  constructor() { }

  ngOnInit(): void {
  }

  /* Emite el evento que hace el toggle del sidenav */
  toggleSidenav() {
    this.toggleSidenavEvent.emit();
  }
}
