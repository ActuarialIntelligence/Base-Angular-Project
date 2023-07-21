import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export  class MyFirstDataModel {

  public price? : number;
    public  exchange? : string;
    public  pair? : string;
    public  pairPrice? : number;
    public  volume? : number;
    

      }

   export class DataTest{   
  constructor() { }

  getData(): string {
    return 'Hello from DataService!';
  }
}