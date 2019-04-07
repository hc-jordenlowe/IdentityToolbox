import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-user-by-identity-provider',
  templateUrl: './get-user-by-identity-provider.component.html',
  styleUrls: ['./get-user-by-identity-provider.component.css']
})
export class GetUserByIdentityProviderComponent implements OnInit {
  identityProvider = ''
  searchText = ''
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) { }

  ngOnInit() {
  }

  public getUsers() {

    if(this.secret && this.identityUrl && this.searchText && this.identityProvider) {
      this.identityService.searchUsersByIdentityProvider(this.identityUrl, this.secret, this.identityProvider, this.searchText)
        .subscribe( response => {
          this.result = JSON.stringify(response)
        }, error => {
          this.result = JSON.stringify(error)
        })
    } else {
      this.result = 'Get a token from access token tab and fill in all fields'
    }
  }
}
