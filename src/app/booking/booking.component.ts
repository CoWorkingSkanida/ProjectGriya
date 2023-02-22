import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  public isReadMore:boolean = true;
  text = `Located within 322 m of Central Park and Columbus
        Circle metro station, this boutique hotel features
        an interior lobby garden with trees and ivy walls.
        Guests can enjoy convenience of concierge services
        and a fitness center.<br /><br />Guests can relax
	with a game of billiards, or catch up with family
	and friends on business center computers
	<br /><br />
	The Hudson New York is located 0.7 mi from Times
	Square. The Museum of Modern Art is 0.8 mi away. For
	those who would like to enjoy a concert during their
	visit to New York, Lincoln Center and Carnegie Hall
	are 645 m from the property.
	<br /><br />
	Located within 322 m of Central Park and Columbus
	Circle metro station, this boutique hotel features
	an interior lobby garden with trees and ivy walls.
	Guests can enjoy convenience of concierge services
	and a fitness center.<br /><br />Guests can relax
	with a game of billiards, or catch up with family
	and friends on business center computers`
}

