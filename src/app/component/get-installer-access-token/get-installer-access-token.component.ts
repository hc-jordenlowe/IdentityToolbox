import { Component, OnInit } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-installer-access-token',
  templateUrl: './get-installer-access-token.component.html',
  styleUrls: ['./get-installer-access-token.component.css']
})
export class GetInstallerAccessTokenComponent implements OnInit {
  installerToken = ''
  identityUrl=''
  fabricInstallerName='Fabric-Installer'
  fabricInstallerSecret=''

  constructor(
    private identityService: IdentityApiService) { 
    
  }

  ngOnInit() {
  }

  public getToken() {
    if( this.identityUrl && this.fabricInstallerSecret) {
      this.identityService.getToken(this.identityUrl, this.fabricInstallerName, this.fabricInstallerSecret)
        .subscribe(response => {
          this.installerToken = response["access_token"]
        }, error => {
          this.installerToken = `error: ${JSON.stringify(error)}`
        })
    }
    else {
      this.installerToken = 'Invalid url and secret'
    }
  }
}
