import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpServiceService } from './http-service.service';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { RoleComponent } from './role/role.component';

import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RoleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthServiceService,
      multi: true,
    },
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
