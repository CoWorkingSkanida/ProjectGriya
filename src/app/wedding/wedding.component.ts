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
  

  phoneNumber = '+628988735324';
  message1 = 'Hello, 1!';
  message2 = 'Hello, 2!';
  message3 = 'Hello, 3!';
  message4 = 'Hello, 4!';
  message5 = 'Hello, 5!';
  message6 = 'Hello, 6!';
  message7 = 'Hello, 7!';
  message8 = 'Hello, 8!';

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
   
  }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/w3.jpeg',
    };
    this.slides[1] = {
      src: '../assets/img/w4.jpeg',
    };
    this.slides[2] = {
      src: '../assets/img/w2.jpeg',
    };
    this.slides[3] = {
      src: '../assets/img/w1.jpeg',
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
  learnBuy1() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message1)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy2() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message2)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy3() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message3)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy4() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message4)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy5() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message5)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy6() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message6)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy7() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message7)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
  learnBuy8() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message8)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
  }
}
