import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajldfjlaksdjf';
  value = "value";
  colors = ["Red", "Green", "Blue", "yellow"];
 appendColor(color:any){
  this.colors.push(color)

 }
}
