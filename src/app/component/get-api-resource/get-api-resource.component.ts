import { Component, OnInit, Input } from '@angular/core';
import { IdentityApiService } from '../../component/services/identity-api.service';

@Component({
  selector: 'app-get-api-resource',
  templateUrl: './get-api-resource.component.html',
  styleUrls: ['./get-api-resource.component.css']
})
export class GetApiResourceComponent implements OnInit {
  apiResourceId = ''
  result = ''
  @Input() secret
  @Input() identityUrl

  constructor(private identityService: IdentityApiService) { }

  ngOnInit() {
  }

  public getApiResource() {
    if(this.apiResourceId) {
        this.identityService.getapiresource(this.identityUrl, this.secret, this.apiResourceId)
          .subscribe(response => {
            this.result = JSON.stringify(response)
          }, error => {
            this.result = `error: ${JSON.stringify(error)}`
          })
    }
    else {
      this.result = 'Need an api resource id'
    }
  }
}
