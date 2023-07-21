import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // or specify a module if it's not meant to be a root-level service
})
export class AppCoreServices {
    constructor(private http: HttpClient) {
        // Use the HttpClient instance here
      }
      private settingsUrl = './assets/UrlSettings.json';
      getData(url: string, params: any, tokenFor: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', this.getBearerToken(tokenFor));//(settings: { api: { barerToken: any; }; })=>settings.api.barerToken));

        return this.http.get(url,  params ); // headers will need to be appended to parameters
      }
      postData(url: string, data: any, tokenFor: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', this.getBearerToken(tokenFor));//(settings: { api: { barerToken: any; }; })=>settings.api.barerToken));

        return this.http.post(url, data, { headers });
      }
      getBearerToken(tokenFor:any): string {
        var token =  this.http.get<any>(this.settingsUrl).pipe(map(tokenFor)
        );
          var tkn="";
            (token: string) => {tkn = token};
          return tkn;
      }
}
