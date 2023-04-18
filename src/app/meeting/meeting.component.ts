import { Component, OnInit } from '@angular/core';
import { Router, Route, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  isLearnbuy = true;
  isReadmore = true;
  //
  message = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 2.500.000 per malam.';
  message1 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 65.000 untuk "Quarter day meeting (3 jam)".';
  message2 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 140.000 untuk "Half day meeting (6 jam)".';
  message3 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 165.000 untuk "One day meeting (8 jam)".';
  message4 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 215.000 untuk "Full day meeting (10 jam)".';
  message5 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 370.000 untuk "Full board package A ".';
  message6 = 'Saya ingin memesan ruang meeting Aula Filadelphia. Saya sudah cek di website Anda dan harganya Rp. 355.000 untuk "Full board package B ".';
  //
  message7 = 'Saya ingin memesan ruang meeting Aula Wisma Sejahtera. Saya sudah cek di website Anda dan harganya Rp. 65.000 untuk "Quarter day meeting (3 jam) ".';
  message8 = 'Saya ingin memesan ruang meeting Aula Wisma Sejahtera. Saya sudah cek di website Anda dan harganya Rp. 140.000 untuk "Half day meeting (6 jam)".';
  message9 = 'Saya ingin memesan ruang meeting Aula Wisma Sejahtera. Saya sudah cek di website Anda dan harganya Rp. 165.000 untuk "One day meeting (8 jam)".';
  message10 = 'Saya ingin memesan ruang meeting Aula Wisma Sejahtera. Saya sudah cek di website Anda dan harganya Rp. 215.000 untuk "Full day meeting (10 jam)".';
  message11 = 'Saya ingin memesan ruang meeting Aula Wisma Sejahtera. Saya sudah cek di website Anda dan harganya Rp. 370.000 untuk "Full board package A ".';
  message12 = 'Saya ingin memesan ruang meeting Aula Wisma Sejahtera. Saya sudah cek di website Anda dan harganya Rp. 355.000 untuk "Full board package B  ".';
  //
  message13 = 'Saya ingin memesan ruang meeting Upper Hall Balconny. Saya sudah cek di website Anda dan harganya Rp. 65.000 untuk "Quarter day meeting (3 jam) ".';
  message14 = 'Saya ingin memesan ruang meeting Upper Hall Balconny. Saya sudah cek di website Anda dan harganya Rp. 140.000 untuk "Half day meeting (6 jam)".';
  message15 = 'Saya ingin memesan ruang meeting Upper Hall Balconny. Saya sudah cek di website Anda dan harganya Rp. 165.000 untuk "One day meeting (8 jam)".';
  message16 = 'Saya ingin memesan ruang meeting Upper Hall Balconny. Saya sudah cek di website Anda dan harganya Rp. 215.000 untuk "Full day meeting (10 jam)".';
  message17 = 'Saya ingin memesan ruang meeting Upper Hall Balconny. Saya sudah cek di website Anda dan harganya Rp. 370.000 untuk "Full board package A ".';
  message18 = 'Saya ingin memesan ruang meeting Upper Hall Balconny. Saya sudah cek di website Anda dan harganya Rp. 355.000 untuk "Full board package B  ".';
  //

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
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
  learnBuy9() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message9)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy10() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message10)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy11() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+6289881135324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message11)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy12() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+6289881235324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message12)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy13() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+6289881335324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message13)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy14() {
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+6289881435324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message14)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy15(){
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message15)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy16(){
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message16)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy17(){
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message17)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }
  learnBuy18(){
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message18)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }

} 
