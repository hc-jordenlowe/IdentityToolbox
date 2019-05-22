import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-get-custom-access-token',
  templateUrl: './get-custom-access-token.component.html',
  styleUrls: ['./get-custom-access-token.component.css']
})
export class GetCustomAccessTokenComponent implements OnInit {
  installerToken = ''
  identityUrl=''
  message=''

  @Output() messageEvent = new EventEmitter<Object>();
  
  constructor() { }

  ngOnInit() {
  }

  public useCustomToken() {
    if( this.installerToken && this.identityUrl ) {
      let message = { "url":this.identityUrl, "token":this.installerToken }
      this.messageEvent.emit(message)
      this.message = "ready for use."
    }
    else {
      this.message = 'Invalid url or token.'
    }
  }
}
