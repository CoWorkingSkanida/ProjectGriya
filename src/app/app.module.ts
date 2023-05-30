import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '@coreui/angular';
import { RoomComponent } from './room/room.component';
import { FacilitesComponent } from './facilites/facilites.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import {
  NavbarModule,
  CollapseModule,
  GridModule,
  HeaderModule,
  NavModule,
  DropdownModule,
} from '@coreui/angular';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DefaultComponent } from './default/default.component';
import { DefaultModule } from './default/default.module';
import { WeddingComponent } from './wedding/wedding.component';
import { MeetingComponent } from './meeting/meeting.component';
import { InsentivesComponent } from './insentives/insentives.component';
import { ConvensionComponent } from './convension/convension.component';
import { ExhibittonComponent } from './exhibitton/exhibitton.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RoomComponent,
    FacilitesComponent,
    EventsComponent,
    GalleryComponent,
    BookingComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    WeddingComponent,
    MeetingComponent,
    InsentivesComponent,
    ConvensionComponent,
    ExhibittonComponent,
    ExhibitionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    NavbarModule,
    CollapseModule,
    GridModule,
    HeaderModule,
    NavModule,
    DropdownModule,
    DefaultModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
