import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const myTest:any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  isReadmore = true;
  isLearnbuy = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/BG1.jpg',
    };
    this.slides[1] = {
      src: '../assets/img/BG2.jpg',
    };
    this.slides[2] = {
      src: '../assets/img/BG3.jpg',
    };
    this.slides[3] = {
      src: '../assets/img/BG4.jpg',
    };
    this.slides[4] = {
      src: '../assets/img/BG5.jpg',
    };
    this.slides[5] = {
      src: '../assets/img/BG6.jpg',
    };
    this.slides[6] = {
      src: '../assets/img/Hall.jpg',
    };
  }

  showText() {
    this.isReadmore = !this.isReadmore;
  }

  learnBuy() {
    this.router.navigateByUrl('/5.png');
  }
  learnBuy2() {
    this.router.navigateByUrl('/wedding');
  }

  onClick() {
    // myTest();
  }
}
