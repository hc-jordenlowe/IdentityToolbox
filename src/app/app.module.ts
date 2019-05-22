import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetInstallerAccessTokenComponent } from './component/get-installer-access-token/get-installer-access-token.component';
import { CreateClientComponent } from './component/create-client/create-client.component';
import { HttpClientModule } from '@angular/common/http';

import { IdentityApiService } from './component/services/identity-api.service';
import { GetClientsComponent } from './component/get-clients/get-clients.component';
import { ResetClientComponent } from './component/reset-client/reset-client.component';
import { GetIdentityProvidersComponent } from './component/get-identity-providers/get-identity-providers.component';
import { GetUserByIdentityProviderComponent } from './component/get-user-by-identity-provider/get-user-by-identity-provider.component';
import { GetApiResourceComponent } from './component/get-api-resource/get-api-resource.component';
import { GetIdentityResourceComponent } from './component/get-identity-resource/get-identity-resource.component';
import { GetCustomAccessTokenComponent } from './component/get-custom-access-token/get-custom-access-token.component';

@NgModule({
  declarations: [
    AppComponent,
    GetInstallerAccessTokenComponent,
    CreateClientComponent,
    GetClientsComponent,
    ResetClientComponent,
    GetIdentityProvidersComponent,
    GetUserByIdentityProviderComponent,
    GetApiResourceComponent,
    GetIdentityResourceComponent,
    GetCustomAccessTokenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IdentityApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
