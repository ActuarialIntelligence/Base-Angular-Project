import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataTest{   
  constructor() { }

 public async getData(): Promise<string> {
    return 'Hello from DataService!';
  }
}


export  interface MyFirstDataModel {

   price : number;
      exchange : string;
      pair : string;
      pairPrice : number;
      volume : number;
    

      }

//#region OpenAPIInterfaces
export interface EntryOpenAPis {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}


export interface RootOpenApis {
  count: number;
  entries: EntryOpenAPis[];
}
//#endRegion 