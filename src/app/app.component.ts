import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ourcars';
  isAuthenticated: boolean;

  constructor(public okAuth: OktaAuthService){}

  async ngOnInit(){
    this.isAuthenticated = await this.okAuth.isAuthenticated();
    this.okAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  } 
  
  logout() {
    this.okAuth.logout('/');
  }
}
