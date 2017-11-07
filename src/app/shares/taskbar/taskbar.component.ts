import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var num = 0;

    $('[data-toggle=arrowdown]').hover(function(){
      var _id = $(this).attr('id');
      num = _id.substring(5, _id.length);
      $(this).find('span')
        .removeClass('run-down')
        .addClass('run-up');
      $('#nav-box'+num).slideDown(100);
    }, function(){
      $(this).find('span')
        .removeClass('run-up')
        .addClass('run-down');
      $('#nav-box'+num).hide();
    });
    $('[data-toggle=hidden-box]').hover(function(){
      var _id =  $(this).attr('id');
      num = _id.substring(7, _id.length);
      $('#arrow'+num).addClass('nav-hover')
        .find('span').removeClass('run-down')
        .addClass('run-up');
      $(this).show();
    }, function(){
      $('#arrow'+num).removeClass('nav-hover')
        .find('span').removeClass('run-up')
        .addClass('run-down');
      setTimeout(function(){
        $('#arrow'+num).find('span').removeClass('run-down');
      }, 500);
      $(this).slideUp(100);
    });
  }

}
