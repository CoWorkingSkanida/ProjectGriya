import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilites',
  templateUrl: './facilites.component.html',
  styleUrls: ['./facilites.component.scss']
})
export class FacilitesComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/pexels-christian-heitz-842711 1 (1).png',
    };
    this.slides[1] = {
      src: '../assets/img/pexels-christian-heitz-842711 1 (1).png',
    };
    this.slides[2] = {
      src: '../assets/img/pexels-christian-heitz-842711 1 (1).png',
    };
  }
}