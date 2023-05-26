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

  message4 = 'Saya ingin memesan kamar standar. Saya sudah cek di website Anda dan harganya Rp. 350.000 untuk "2 orang".';


  phoneNumber = '+6281325852102';

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

  learnBuy4(){
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message4)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }

}