import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  client = ''
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) {
    this.client = `{
      "allowOfflineAccess":false,
      "allowedGrantTypes":[""],
      "allowedScopes":[""],
      "clientId":"",
      "clientName":""
    }`
  }

  ngOnInit() {
  }

  public createClient() {
    if(this.client) {
    this.identityService.createClient(this.identityUrl, this.secret, this.client)
      .subscribe(response => {
        this.result = JSON.stringify(response)
      }, error => {
        this.result = JSON.stringify(error)
      })
    } else {
      this.result = 'Enter a client to create.'
    }
  }
}
