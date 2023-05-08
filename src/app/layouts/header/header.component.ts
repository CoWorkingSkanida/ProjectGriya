import { Component } from '@angular/core';

declare const myTest: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  kontol : any
  
  onClick() {
    myTest();
  }

}
