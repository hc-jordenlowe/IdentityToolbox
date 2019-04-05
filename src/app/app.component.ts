import { Component, ViewChild } from '@angular/core';
import { GetInstallerAccessTokenComponent } from './component/get-installer-access-token/get-installer-access-token.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(GetInstallerAccessTokenComponent) child;
  secret = ''
  identityUrl = ''

  title = 'IdentityToolbox';

  public receivedToken($event) {
    this.identityUrl = $event.url
    this.secret = $event.token
  }
}


