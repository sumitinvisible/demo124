import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
allownewserver=false;
servercreationstatus='no server was created';
servername='';
  constructor() {
    setTimeout(() =>{
this.allownewserver=true;
    },2000);

    }
   

  ngOnInit() {
  }
onCreateServer(){
  this.servercreationstatus='server was created';
}
onUpdateServerName(event:any){
  console.log(event);//
  this.servername=event.target.value;// if you are getting error then type (<HtmlInputElement>event.target).value



}
}




