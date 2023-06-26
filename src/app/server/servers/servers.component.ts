import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverName = "";
  @Input() serverType = ""; // Input property will specify that this property is being passed from parent.
  servers : String[]  = [];
  @Output() serverAdded  = new EventEmitter<String[]>(); // Output property specifies that this event will be passed to the parent.
  addServer(){
    this.servers.push(this.serverName);
    this.serverAdded.emit(this.servers); // emitting the output event
  }
}
