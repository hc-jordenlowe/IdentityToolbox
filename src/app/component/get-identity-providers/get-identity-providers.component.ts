import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-identity-providers',
  templateUrl: './get-identity-providers.component.html',
  styleUrls: ['./get-identity-providers.component.css']
})
export class GetIdentityProvidersComponent implements OnInit {
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) { }

  ngOnInit() {
  }

  public getIdentityProviders() {
    if(this.secret && this.identityUrl) {
      this.identityService.getIdentityProviders(this.identityUrl, this.secret)
        .subscribe(response => {
          this.result = JSON.stringify(response)
        }, error => {
          this.result = `Error: ${JSON.stringify(error)}`
        })
    } else {
      this.result = 'Fill out the tab to get an access token.'
    }
  }
}
