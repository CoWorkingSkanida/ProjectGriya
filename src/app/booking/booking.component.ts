import { Component } from '@angular/core';
import * as puppeteer from 'puppeteer';

async function runCrawler() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.wismasejahteramgl.com/booking');
  const pageTitle = await page.title();
  console.log('Wisma Sejahtera Magelang', pageTitle);
  await browser.close();
}

runCrawler();

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})


export class BookingComponent {

  message4 = 'Saya ingin memesan kamar standar. Saya sudah cek di website Anda dan harganya Rp. 350.000 untuk "2 orang".';


  phoneNumber = '+6281325852102';

  learnBuy4(){

    const whatsappLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(this.message4)}`;

    console.log(whatsappLink)

    window.location.href = whatsappLink;
  }

}
