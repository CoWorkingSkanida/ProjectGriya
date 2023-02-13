import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';
  constructor(){}

  menu_icon_variable: boolean=false
  menuVariable: boolean =false
  openMenu(){
    this.menuVariable =! this.menuVariable; 
    this.menu_icon_variable =!  this.menu_icon_variable;
  }
}
