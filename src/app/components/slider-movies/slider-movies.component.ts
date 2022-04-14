import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-movies',
  templateUrl: './slider-movies.component.html',
  styleUrls: ['./slider-movies.component.scss']
})
export class SliderMoviesComponent implements OnInit {

  constructor() { }
  public imagesUrl:any;
  ngOnInit(): void {
    this.imagesUrl = ['assets/images/KGF.jpg', 'assets/images/want.jpg', 'assets/images/pop.jpg','assets/images/want.jpg'];
  }

}
