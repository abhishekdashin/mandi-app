import { Component } from '@angular/core';
import { MandiService } from './app.mandi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mandiSvc:MandiService;
  appName = "Mandi App";
  rootObj;
  offset = 0;
  
  constructor(private mandiService:MandiService){
   this.mandiSvc = mandiService;
   mandiService.getPrices(this.offset).subscribe(p => this.rootObj=p);
  }

  public next(){
    this.offset = this.offset +10;
    this.mandiSvc.getPrices(this.offset).subscribe(p => this.rootObj=p);
  }

  public back(){
    if(this.offset > 0 ){
      this.offset = this.offset - 10;
      this.mandiSvc.getPrices(this.offset).subscribe(p => this.rootObj=p);
    }
  }


}
