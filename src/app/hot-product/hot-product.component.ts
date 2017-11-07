import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.css']
})
export class HotProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("img").lazyload({effect: "fadeIn"});
  }

}
