import { Component, OnInit } from '@angular/core';
import { Router,Route, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit{

  isLearnbuy = true;
  isReadmore = true;
  message = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 2.500.000 per malam.';
  message1 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 65.000 untuk "Quarter day meeting (3 jam)".';
  message2 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 140.000 untuk "Half day meeting (6 jam)".';
  message3 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 165.000 untuk "One day meeting (8 jam)".';
  message4 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 215.000 untuk "Full day meeting (10 jam)".';
  message5 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 370.000 untuk "Full board package A ".';
  message6 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 355.000 untuk "Full board package B ".';

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  phoneNumber = '+6281325852102';

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/1.png', 
    };
    this.slides[1] = {
      src: '../assets/img/2.png',
    }
    this.slides[2] = {
      src: '../assets/img/3.png',
    }
    this.slides[3] = {
      src: '../assets/img/4.png',
    }
    this.slides[4] = {
      src: '../assets/img/m1.png',
    }
    this.slides[5] = {
      src: '../assets/img/m2.png',
    }
    this.slides[6] = {
      src: '../assets/img/m3.png',
    }
  }

  learnBuy() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');
    
    
    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message)}`;

    console.log(whatsappLink)

  window.location.href = whatsappLink;
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

} 
