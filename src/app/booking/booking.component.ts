import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})


export class BookingComponent {

  message4 = 'Saya ingin memesan kamar standar. Saya sudah cek di website Anda dan harganya Rp. 350.000 untuk "2 orang".';


  phoneNumber = '+6281325852102';

  learnBuy4(){
    // this.router.navigateByUrl('/https://api.whatsapp.com/send?phone=+628988735324&text=apakah%20masih%20ada%20kamar?');


    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message4)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }

}
