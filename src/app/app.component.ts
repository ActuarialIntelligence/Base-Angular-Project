import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppCoreServices } from './app-core.service';

import {MyFirstDataModel} from './app-core-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private myFirstDataModel = new MyFirstDataModel();
  title = 'my-angular-project';
  constructor(
    private http: HttpClient,
    private appCoreService: AppCoreServices,
  ) {}

  private GetGenericData()
  {
    var result = this.appCoreService.getData("",this.myFirstDataModel,(settings: { api: { barerToken: any; }; })=>settings.api.barerToken);
    return result;
  }
}
