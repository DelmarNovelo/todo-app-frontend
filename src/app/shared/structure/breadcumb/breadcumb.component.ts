import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IRouterData } from 'src/app/interfaces/router-data.interface';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent implements OnInit, OnChanges {

  @Input('routerData') routerData: IRouterData = {};
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}
