import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-identity-resource',
  templateUrl: './get-identity-resource.component.html',
  styleUrls: ['./get-identity-resource.component.css']
})
export class GetIdentityResourceComponent implements OnInit {
  identityResourceId = ''
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) { }

  ngOnInit() {
  }

  public getIdentityResource() {
    if(this.identityResourceId) {
        this.identityService.getidentityresource(this.identityUrl, this.secret, this.identityResourceId)
          .subscribe(response => {
            this.result = JSON.stringify(response)
          }, error => {
            this.result = `error: ${JSON.stringify(error)}`
          })
    }
    else {
      this.result = 'Need an identity resource id'
    }
  }
}
