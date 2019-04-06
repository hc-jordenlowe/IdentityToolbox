import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-installer-access-token',
  templateUrl: './get-installer-access-token.component.html',
  styleUrls: ['./get-installer-access-token.component.css']
})
export class GetInstallerAccessTokenComponent implements OnInit {
  installerToken = ''
  identityUrl=''
  clientName='Fabric-Installer'
  clientSecret=''

  @Output() messageEvent = new EventEmitter<Object>();

  constructor(
    private identityService: IdentityApiService) {

  }

  ngOnInit() {
  }

  public getToken() {
    if( this.identityUrl && this.clientSecret && this.clientName) {
      this.identityService.getToken(this.identityUrl, this.clientName, this.clientSecret)
        .subscribe(response => {
          this.installerToken = response["access_token"]
          let message = { "url":this.identityUrl, "token":this.installerToken }
          this.messageEvent.emit(message)
        }, error => {
          this.installerToken = `error: ${JSON.stringify(error)}`
        })
    }
    else {
      this.installerToken = 'Invalid url and secret'
    }
  }
}
