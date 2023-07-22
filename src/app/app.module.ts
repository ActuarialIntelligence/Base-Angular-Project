import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreServices } from './app-core.service';
import {DataTest} from './app-core-data.service'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [AppCoreServices,DataTest],
  bootstrap: [AppComponent], //bootstraps component and news up associated services registered here

})
export class AppModule {
 }



function HttpsRequest() {
  throw new Error('Function not implemented.');
}



