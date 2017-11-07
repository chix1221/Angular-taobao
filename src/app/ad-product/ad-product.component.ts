import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.css']
})
export class AdProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("img").lazyload({effect: "fadeIn"});
  }

}
