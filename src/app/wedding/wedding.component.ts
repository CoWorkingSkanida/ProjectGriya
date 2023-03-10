import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  isReadmore = true;
  isLearnbuy = true;
  isMobile = false;
  isDesktop = false;

  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  show8 = false;

  constructor(private router: Router) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      this.isMobile = true;
    } else {
      this.isDesktop = true;
    }
  }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/komputer 2.png',
    };
    this.slides[1] = {
      src: '../assets/img/komputer 2.png',
    };
    this.slides[2] = {
      src: '../assets/img/komputer 2.png',
    };
  }

  showText() {
    this.isReadmore = !this.isReadmore;
  }
  showText1() {
    this.isReadmore = !this.isReadmore;
  }
  showText2() {
    this.isReadmore = !this.isReadmore;
  }
  showText3() {
    this.isReadmore = !this.isReadmore;
  }
  showText4() {
    this.isReadmore = !this.isReadmore;
  }
  showText5() {
    this.isReadmore = !this.isReadmore;
  }
  showText6() {
    this.isReadmore = !this.isReadmore;
  }
  showText7() {
    this.isReadmore = !this.isReadmore;
  }
  showText8() {
    this.isReadmore = !this.isReadmore;
  }

  learnBuy() {
    this.router.navigateByUrl('/booking');
  }
}
