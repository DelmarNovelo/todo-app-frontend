import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menu = [
    {
      link: 'new',
      icon: 'add',
      label: 'Nueva tarea'
    },
    {
      link: 'list',
      icon: 'list',
      label: 'Ver tareas'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
