import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-sidebar-product',
  templateUrl: './sidebar-product.component.html',
  styleUrls: ['./sidebar-product.component.css']
})
export class SidebarProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dynamic').hover(function(){
      $(this).find('.follow').fadeIn(200);
    }, function(){
      $(this).find('.follow').fadeOut(200);
    })

    $("img").lazyload({effect: "fadeIn"});

  }

}
