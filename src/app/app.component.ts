import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppCoreServices } from './app-core.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EntryOpenAPis,RootOpenApis, DataTest} from './app-core-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  rootOpenApis: RootOpenApis[] = [];
  data: string = '';
  showData: boolean = false;
  title = 'my-angular-project';
  constructor(
    private http: HttpClient,
    private appCoreService: AppCoreServices,
    private dataTest : DataTest,  // All gets newed up when Appcomponent Begins
                                  // As such no interfaces allowed
    ) {}

 public async  GetGenericData()
  {
    console.log("GetGenericData method is called!");
    var result = await this.appCoreService
    .getDataNoParametersNoToken("https://api.publicapis.org/entries");
    const jsonString = JSON.stringify(result);
    console.log("Results Obtained: " + jsonString);
    return result;
  }

  public  async  GetSomeData(){
    console.log("GetSomeData method is called!");
     var result = this.dataTest.getData();
     console.log("Result obtained!");
     return result;
  }
  public async getSomeData(): Promise<string> {
    console.log("getSomeData method is called!");
    this.data = await this.dataTest.getData();
    this.showData = true;
    return this.data;
  }
}
