import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppCoreServices } from './app-core.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyFirstDataModel} from './app-core-data.service';
import {DataTest} from './app-core-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private myFirstDataModel = new MyFirstDataModel();
  private myDataModelList!: MyFirstDataModel[];
  title = 'my-angular-project';
  constructor(
    private http: HttpClient,
    private appCoreService: AppCoreServices,
    private dataTest : DataTest,  // All gets newed up when Appcomponent Begins
    private model : MyFirstDataModel
    ) {}

  public GetGenericData()
  {
    var result = this.appCoreService.getData("",this.myFirstDataModel,(settings: { api: { barerToken: any; }; })=>settings.api.barerToken);
    return result;
  }

  public  GetSomeData(){
     var result = this.dataTest.getData();
     return result;
  }
}
