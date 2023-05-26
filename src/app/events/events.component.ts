import { Component } from '@angular/core';
import * as puppeteer from 'puppeteer';

async function runCrawler() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.wismasejahteramgl.com/events');
  const pageTitle = await page.title();
  console.log('Wisma Sejahtera Magelang', pageTitle);
  await browser.close();
}

runCrawler();

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/m3.png',
    };
    this.slides[1] = {
      src: '../assets/img/m4.png',
    }
    this.slides[2] = {
      src: '../assets/img/m5.png',
    }
  }
} 
