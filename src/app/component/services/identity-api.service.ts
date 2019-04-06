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
    let clientUrl = `${url}/api/v1/client/${encodeURI(clientId)}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.get(clientUrl, httpOptions)
  }

  public updateClient(url, secret, clientId, client): Observable<Object> {
    let clientUrl = `${url}/api/v1/client/${encodeURI(clientId)}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.put(clientUrl, client, httpOptions)
  }

  public resetClientPassword(url, secret, clientId): Observable<Object> {
    let clientUrl = `${url}/api/v1/client/${encodeURI(clientId)}/resetPassword`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.post(clientUrl, null, httpOptions)
  }

  public getIdentityProviders(url, secret): Observable<Object> {
    let clientUrl = `${url}/api/v1/identityproviders`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.get(clientUrl, httpOptions)
  }

  public getUsersByPost(url, secret, clientId, userIds) {
    let userUrl = `${url}/api/v1/users`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }
    const body = {
      "clientId ": clientId,
      "userIds":userIds
    }

    return this.httpClient.post(userUrl, body, httpOptions)
  }

  public getUsersByGet(url, secret, clientId, userIds) {
    // not implemented exception
  }

  public searchUsersByIdentityProvider(url, secret, identityProvider, searchText) {
    let baseUrl = `${url}/api/v1/users/search?`
    if(identityProvider) {
      baseUrl = `${baseUrl}identityProvider=${encodeURI(identityProvider)}&`
    }
    if(searchText) {
      baseUrl = `${baseUrl}searchText=${encodeURI(searchText)}`
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.get(baseUrl, httpOptions)
  }

  public createapiresource(url, secret, apiresource): Observable<Object> {
    let apiresourceUrl = `${url}/api/v1/apiresource`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.post(apiresourceUrl, apiresource, httpOptions)
  }

  public getapiresource(url, secret, apiresourceId): Observable<Object> {
    let apiresourceUrl = `${url}/api/v1/apiresource/${encodeURI(apiresourceId)}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.get(apiresourceUrl, httpOptions)
  }

  public updateapiresource(url, secret, apiresourceId, apiresource): Observable<Object> {
    let apiresourceUrl = `${url}/api/v1/apiresource/${encodeURI(apiresourceId)}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.put(apiresourceUrl, apiresource, httpOptions)
  }

  public resetapiresourcePassword(url, secret, apiresourceId): Observable<Object> {
    let apiresourceUrl = `${url}/api/v1/apiresource/${encodeURI(apiresourceId)}/resetPassword`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.post(apiresourceUrl, null, httpOptions)
  }

  public createidentityresource(url, secret, identityresource): Observable<Object> {
    let identityresourceUrl = `${url}/api/v1/identityresource`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.post(identityresourceUrl, identityresource, httpOptions)
  }

  public getidentityresource(url, secret, identityresourceId): Observable<Object> {
    let identityresourceUrl = `${url}/api/v1/identityresource/${encodeURI(identityresourceId)}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.get(identityresourceUrl, httpOptions)
  }

  public updateidentityresource(url, secret, identityresourceId, identityresource): Observable<Object> {
    let identityresourceUrl = `${url}/api/v1/identityresource/${encodeURI(identityresourceId)}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `bearer ${secret}`
      })
    }

    return this.httpClient.put(identityresourceUrl, identityresource, httpOptions)
  }

}
