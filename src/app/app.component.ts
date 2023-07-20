import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppCoreServices } from './app-core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'my-angular-project';
  constructor(
    private http: HttpClient,
    private appCoreService: AppCoreServices,
  ) {}

  private GetGenericData(url:string,params:any)
  {
    this.appCoreService.getData(url,params,(settings: { api: { barerToken: any; }; })=>settings.api.barerToken);
  }
}
