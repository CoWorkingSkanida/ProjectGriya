import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/k1.png',
    };
    this.slides[1] = {
      src: '../assets/img/k2.png',
    };
    this.slides[2] = {
      src: '../assets/img/k3.png',
    };
  }
}