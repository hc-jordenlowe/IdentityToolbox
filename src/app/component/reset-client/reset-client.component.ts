import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-reset-client',
  templateUrl: './reset-client.component.html',
  styleUrls: ['./reset-client.component.css']
})
export class ResetClientComponent implements OnInit {
  clientId = ''
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) {

  }

  ngOnInit() {
  }

  public resetClient() {
    if(this.clientId) {
    this.identityService.resetClientPassword(this.identityUrl, this.secret, this.clientId)
      .subscribe(response => {
        this.result = JSON.stringify(response)
      }, error => {
        this.result = JSON.stringify(error)
      })
    } else {
      this.result = 'Enter a clientid to reset.'
    }
  }
}
