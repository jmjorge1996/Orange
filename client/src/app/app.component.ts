import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  mode:string = 'side'
  opened:boolean = true

  constructor(public breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(){
    this.breakpointObserver.observe(['(max-width: 769px)']).subscribe((state: BreakpointState)=>{
      if(state.matches){
        this.mode = 'over';
        this.opened = false;
      }else{
        this.mode = 'side';
        this.opened = true;
      }
    });
  }
}
