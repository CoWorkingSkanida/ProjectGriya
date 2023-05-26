import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/m3.png',
    };
    this.slides[1] = {
      src: '../assets/img/m4.png',
    }
    this.slides[2] = {
      src: '../assets/img/m5.png',
    }
  }
} 
