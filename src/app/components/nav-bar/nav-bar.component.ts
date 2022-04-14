import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  public imagesUrl:any;
  public search : String ="";
  ngOnInit(): void {
    this.imagesUrl = ['assets/images/logo.jpg'];
  }

}
