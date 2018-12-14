import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpDataServiceService } from './service/http/http-data-service.service';

import { AppRouterModule } from "./service/router/router.module";
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterationComponent } from './component/registeration/registeration.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [HttpDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
