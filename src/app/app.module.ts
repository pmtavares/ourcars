import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarListComponent } from './components/car-list/car-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { OktaAuthModule, OktaAuthService, OktaAuthGuard } from '@okta/okta-angular'
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './components/home/home.component';

const config = {
  issuer: 'https://dev-344762.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oahiztofxHMFGpyu356'
}

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
}


