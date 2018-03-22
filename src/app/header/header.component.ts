import {Component,OnInit} from '@angular/core';




@Component({
  selector: 'app-nav',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

 public urls= ["business" ,"entertainment" ,"general", "health" ,"science" ,"sports" ,"technology"];
  
  constructor(){
  };
  
  ngOnInit() {
    
  }

}
