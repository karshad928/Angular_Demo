import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from '../../component/menu/menu.component';
import { LoginComponent } from '../../component/login/login.component';
import { RegisterationComponent } from '../../component/registeration/registeration.component';


export const appRoutes: Routes = [
  { path: 'menu', component:  MenuComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'registeration', component:  RegisterationComponent},
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRouterModule { }
