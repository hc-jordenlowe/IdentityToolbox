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

@NgModule({
  declarations: [
    AppComponent,
    GetInstallerAccessTokenComponent,
    CreateClientComponent,
    GetClientsComponent,

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
