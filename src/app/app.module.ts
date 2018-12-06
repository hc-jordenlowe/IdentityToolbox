import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetInstallerAccessTokenComponent } from './component/get-installer-access-token/get-installer-access-token.component';
import { CreateClientComponent } from './component/create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    GetInstallerAccessTokenComponent,
    CreateClientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
