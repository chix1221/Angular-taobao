import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.close-code').click(function(){
      $('.two-code').fadeOut(200);
    });
  }
}
