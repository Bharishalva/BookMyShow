import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  slideIndex = 0;
  public imagesUrls: Array<string> = ['assets/images/KGF.jpg', 'assets/images/want.jpg', 'assets/images/pop.jpg'];
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    this.switchSlides();
  }


  plusSlides(n: number) {
    if (n >= this.imagesUrls.length) { n = 0 }
    if (n < 0) { n = this.imagesUrls.length - 1 }
    // if(n==0){n=0};
    this.slideIndex = n;
  }

  switchSlides() {
    this.plusSlides(this.slideIndex = (this.slideIndex + 1) % this.imagesUrls.length);
    setTimeout(() => {
      this.switchSlides()
    }, 2000);
  }
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
   
    if (n > this.imagesUrls.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.imagesUrls.length }

    // for (i = 0; i < slides.length; i++) {
    //   slides[i].classList.add("display-none");
    //   slides[i].classList.remove("display-block");
    // }
    // for (i = 0; i < dots.length; i++) {
    //  // dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[this.slideIndex - 1].classList.add("display-block");
    // slides[this.slideIndex - 1].classList.remove("display-none");
    // //  dots[this.slideIndex - 1].className += " active";
    //(this.showSlides, 2000,n+1); // Change image every 2 seconds
  }
}
