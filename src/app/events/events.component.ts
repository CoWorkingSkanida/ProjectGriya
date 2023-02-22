import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/pexels-christian-heitz-842711 1 (1).png',
    };
    this.slides[1] = {
      src:  '../assets/pexels-christian-heitz-842711 1 (1).png',
    }
    this.slides[2] = {
      src:  '../assets/pexels-christian-heitz-842711 1 (1).png',
    }
  }
} 
