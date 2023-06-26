import { Injectable } from '@angular/core';

@Injectable({ // @Injectable allows angular to make this service injectable in different components
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
  data : any = "Display data";
  setDataToBeShared(data : any){
    this.data = data;
  }

  getDataToBeShared(){
    return this.data;
  }
}
