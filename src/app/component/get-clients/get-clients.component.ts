import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-clients',
  templateUrl: './get-clients.component.html',
  styleUrls: ['./get-clients.component.css']
})
export class GetClientsComponent implements OnInit {
  clientId = ''
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) { }

  ngOnInit() {
  }

  public getClient() {
    if(this.clientId) {
        this.identityService.getClient(this.identityUrl, this.secret, this.clientId)
          .subscribe(response => {
            this.result = JSON.stringify(response)
          }, error => {
            this.result = `error: ${JSON.stringify(error)}`
          })
    }
    else {
      this.result = 'Need a client id'
    }
  }
}
