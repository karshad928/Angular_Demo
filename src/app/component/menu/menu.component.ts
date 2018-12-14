import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routes = routeConst;

  constructor() { }

  ngOnInit() {
  }

  
}
const routeConst = [
  {path:'/registeration', routename:'Register'},
  {path:'/login', routename:'Login'}
]