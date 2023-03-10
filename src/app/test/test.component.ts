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
      src: '../assets/img/afternoon-tea.jpg',
    };
    this.slides[1] = {
      src: '../assets/img/photo-1627677063748-0de05b0be717.jpg',
    };
    this.slides[2] = {
      src: '../assets/img/photo-1627677063748-0de05b0be717.jpg',
    };
  }

  showText() {
    this.isReadmore = !this.isReadmore;
  }

  learnBuy() {
    this.router.navigateByUrl('/wedding');
  }
}
