import { Component } from '@angular/core';
import { appRoutes } from './service/router/router.module';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routeList;

  constructor() {
    this.routeList = [
      { path: 'imageConverter', name: 'Image Converter' },
      { path: 'imageReader', name: 'Image Reader' }
    ]
  }

}
