import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls : ['./test.component.css']
})
export class TestComponent {
  data : any;
  constructor(public crudService : CrudService){ // Dependency Injection 
    // we are asking angular to initialize the CurdService for us and inject it in test component
    setTimeout(()=>{
      this.data  = this.crudService.getDataToBeShared();

    },4000);
  }
  username = '';
  
  btndisabled = true;
  games = ['COD', 'GTA', 'Counter Strike']
  buttonStatus(){
    if(this.username === '')
    {
      this.btndisabled = true;
    }
    else{
      this.btndisabled = false;
    }
  }
  setUsername(event : any){
    console.log(event.target.value);
    this.username = event.target.value;
    this.buttonStatus();
  }
  
}
