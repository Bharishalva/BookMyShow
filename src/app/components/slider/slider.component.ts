import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  slideIndex = 0;
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.switchSlides();
  }

  switchSlides() {
    let _this = this;
    this.plusSlides(this.slideIndex + 1);
    setTimeout(_this.switchSlides, 2000);
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("display-none");
      slides[i].classList.remove("display-block");
    }
    // for (i = 0; i < dots.length; i++) {
    //  // dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[this.slideIndex - 1].classList.add("display-block");
    slides[this.slideIndex - 1].classList.remove("display-none");
    //  dots[this.slideIndex - 1].className += " active";
    //(this.showSlides, 2000,n+1); // Change image every 2 seconds
  }
}
