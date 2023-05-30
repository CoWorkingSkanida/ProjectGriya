import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { FacilitesComponent } from './facilites/facilites.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomComponent } from './room/room.component';
import { TestComponent } from './test/test.component';
import { DefaultComponent } from './default/default.component';
import { WeddingComponent } from './wedding/wedding.component';
import { MeetingComponent } from './meeting/meeting.component';
import { InsentivesComponent } from './insentives/insentives.component';
import { ConvensionComponent } from './convension/convension.component';
import { ExhibittonComponent } from './exhibitton/exhibitton.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: TestComponent,
      },
      { path: 'event', component: EventsComponent },
      { path: 'room', component: RoomComponent },
      { path: 'facilities', component: FacilitesComponent },
      { path: 'events', component: EventsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'wedding', component: WeddingComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'meeting', component: MeetingComponent },
      { path: 'insen', component: InsentivesComponent },
      { path: 'conves', component: ConvensionComponent },
      { path: 'exhib', component: ExhibitionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
