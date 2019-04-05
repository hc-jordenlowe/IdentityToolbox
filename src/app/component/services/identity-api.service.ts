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

  public createClient(url, secret, client): Observable<Object> {
    let clientUrl = `${url}/api/v1/client`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.post(clientUrl, client, httpOptions)
  }

  public getClient(url, secret, clientId): Observable<Object> {
    let clientUrl = `${url}/api/v1/client/${clientId}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.get(clientUrl, httpOptions)
  }

  public resetClientPassword(url, secret, clientId): Observable<Object> {
    let clientUrl = `${url}/api/v1/client/${clientId}/resetPassword`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.post(clientUrl, null, httpOptions)
  }
}
