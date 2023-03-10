import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})



export class GalleryComponent {
  textShow = true;
  showText(){
    this.textShow = true;
   }
   hideText(){
    this.textShow = false;
   }
   
}
