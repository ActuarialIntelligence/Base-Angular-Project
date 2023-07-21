import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-your-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
