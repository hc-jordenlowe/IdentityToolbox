import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityApiService {

  constructor(private httpClient: HttpClient) { }
  
  public getToken(url, name, secret): Observable<Object> {
    let tokenUrl = `${url}/connect/token`
    let body = new HttpParams({
      fromObject: { 
        "client_id":name,
        "grant_type":"client_credentials",
        "scope":"fabric/identity.manageresources",
        "client_secret": encodeURI(secret)
      }
    })
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }

    return this.httpClient.post(tokenUrl, body, httpOptions)
  }
}
