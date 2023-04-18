import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      src: '../assets/img/1.png',
    };
    this.slides[1] = {
      src: '../assets/img/m2.png',
    };
    this.slides[2] = {
      src: '../assets/img/5.png',
    };
    this.slides[3] = {
      src: '../assets/img/9.png',
    };
  }

  showText() {
    this.isReadmore = !this.isReadmore;
  }

  learnBuy() {
    this.router.navigateByUrl('/meeting');
  }
  learnBuy2() {
    this.router.navigateByUrl('/wedding');
  }
}
