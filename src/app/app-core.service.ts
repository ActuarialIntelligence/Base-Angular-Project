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
    public async  getData(url: string, params: any, tokenFor: any): Promise<Observable<any>> {
        const headers = new HttpHeaders().set('Authorization', this.getBearerToken(tokenFor));//(settings: { api: { barerToken: any; }; })=>settings.api.barerToken));
        console.log("AppCoreServices getData() method called successfully");
        var result = this.http.get(url,  params );
        var jsonString = JSON.stringify(result);
        console.log(jsonString);
        return this.http.get(url,  params ); // headers will need to be appended to parameters
      }
      public async  getDataNoParameters(url: string,  tokenFor: any): Promise<Observable<any>> {
        const headers = new HttpHeaders().set('Authorization', this.getBearerToken(tokenFor));//(settings: { api: { barerToken: any; }; })=>settings.api.barerToken));
        console.log("AppCoreServices getDataNoParameters() method called successfully");
        var result = this.http.get(url);
        var jsonString = JSON.stringify(result);
        console.log(jsonString);
        return this.http.get(url); // headers will need to be appended to parameters
      }
      public async  getDataNoParametersNoToken(url: string): Promise<Observable<any>> {
        
        console.log("AppCoreServices getDataNoParametersNoToken() method called successfully");
        var result = this.http.get(url);
        var jsonString = JSON.stringify(result);
        console.log(jsonString);
        return this.http.get(url); // headers will need to be appended to parameters
      }
      public async  postData(url: string, data: any, tokenFor: any): Promise<Observable<any>> {
        const headers = new HttpHeaders().set('Authorization', this.getBearerToken(tokenFor));//(settings: { api: { barerToken: any; }; })=>settings.api.barerToken));

        return this.http.post(url, data, { headers });
      }
      private getBearerToken(tokenFor:any): string {
        var token =  this.http.get<any>(this.settingsUrl).pipe(map(tokenFor)
        );
          var tkn="";
            (token: string) => {tkn = token};
          return tkn;
      }
}
