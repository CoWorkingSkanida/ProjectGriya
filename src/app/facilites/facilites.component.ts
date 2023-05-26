import { Component, OnInit } from '@angular/core';
import * as puppeteer from 'puppeteer';

async function runCrawler() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.wismasejahteramgl.com/facilities');
  const pageTitle = await page.title();
  console.log('Wisma Sejahtera Magelang', pageTitle);
  await browser.close();
}

runCrawler();

@Component({
  selector: 'app-facilites',
  templateUrl: './facilites.component.html',
  styleUrls: ['./facilites.component.scss']
})
export class FacilitesComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/karpet.png',
    };
    this.slides[1] = {
      src: '../assets/img/11.png',
    };
    this.slides[2] = {
      src: '../assets/img/f1.png',
    };
    this.slides[3] = {
      src: '../assets/img/f2.png',
    };
    this.slides[4] = {
      src: '../assets/img/f3.png',
    };
  }
}