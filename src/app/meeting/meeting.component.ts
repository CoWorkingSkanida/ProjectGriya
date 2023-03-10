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
  message = 'Hello, World!';
  message1 = 'Hello, dontol!';
  message2 = 'Hello, twols!';
  message3 = 'Hello, perdontolan!';

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  phoneNumber = '+628988735324';

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/DSCF5829.JPG', 
    };
    this.slides[1] = {
      src: '../assets/img/DSCF5777 (1).JPG',
    }
    this.slides[2] = {
      src: '../assets/img/DSCF6133.JPG',
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

} 
