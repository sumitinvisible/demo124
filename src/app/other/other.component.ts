import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other', 
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent  {

 serverId:number=10;
 serverstatus:string="Offline";  // you can also call method in string interpolation.

}






