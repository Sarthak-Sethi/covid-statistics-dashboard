import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images : string [] =  new Array(3);
  constructor() {  this.images[0]= 'https://source.unsplash.com/1600x900/?covid';
  this.images[1]= 'https://source.unsplash.com/1600x900/?vaccine';
  this.images[2]= 'https://source.unsplash.com/1600x900/?covid,medicine'; }

  ngOnInit(): void {
  }

}
