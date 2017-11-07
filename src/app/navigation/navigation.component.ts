import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var scTop = 0,
      beginH = 138,
      wW = $(window).width(),
      classN,
      num;
    $(window).scroll(function(){
      scTop = $(window).scrollTop();
      beginH = 138;
      switch (scTop){
        case 600: beginH -= 45;break;
        case 500: beginH -= 50;break;
        case 400: beginH -= 55;break;
        case 300: beginH -= 60;break;
        case 200: beginH -= 65;break;
        default : beginH = 138;break;
      }
    });
    $('.side-li > li').hover(function(){
      $(this).find('h3').css({border: 'none'})
        .end().find('span').css({color: "#f40"});
      classN = $(this).attr('class');
      num = classN.substring(2, classN.length);

      switch (scTop){
        case 0: if(num > 14){ beginH += 120}else if(num >= 12){beginH += 41}; break;
        case 100: if(num == 1){beginH -= 27}else if(num == 16){beginH += 7}; break;
        case 200: num < 5 ? beginH -= 60 : beginH -= 30; break;
        case 300: num < 8 ? beginH -= 60 : beginH -= 40; break;
        case 400: num <= 11 ? beginH -= 50 : beginH += 10; break;
        case 500: num < 14 ? beginH -= 50 : ''; break;
        case 600: num <= 16 ? beginH -= 50 : ''; break;
        default : beginH = 138;break;
      }

      $('.hiden-box').show()
        .css({
          left: ((wW - 1190)/2 + 149),
          top:  beginH
        }).animate({width: '729px'}, 300);
      $('.hiden-box > li').hide();
      $('#hiden-'+num).fadeIn(200);
      beginH = 138;
    }, function(){
      $(this).find('h3').css({border: ''})
        .end().find('span').css({color: ""});
      $('.hiden-box').hide().css({width: '0'});
    });
    $('.hiden-box').hover(function(){
      $('.s_'+num).css({
        border: '1px solid #f40',
        borderRight: '1px solid #fff'
      }).find('h3').css({border: 'none'})
        .end().find('span').css({color: "#f40"});
      $(this).show().css({width: '729px'});
    }, function(){
      $('.s_'+num).css({
        border: '',
        borderRight: ''
      }).find('h3').css({border: ''})
        .end().find('span').css({color: ""});
      $(this).animate({
        width: 0
      }, 200).hide(200);
    });

    $('.li-nav').hover(function(){
      var _id, num;

      _id = $(this).attr('id');
      num = _id.substring(3, _id.length);
      $('.li-nav').removeClass('li-nav-hover');
      $('.hiddenBox').hide();
      $('#box-'+num).fadeIn(200);
    }, function(){
      $(this).addClass('li-nav-hover');
    });

    $('.service-cell').hover(function(){
      $(this).children('.service-i').find('img').animate({
        marginTop: '-10px'
      }, 100);
      $(this).children('.service-i').find('img').animate({
        marginTop: '6px'
      }, 100);
    }, function(){
      return false;
    });

    $('.product-box').hover(function(){
      $(this).css({
        zIndex: '3000'
      });
    }, function(){
      $(this).css({
        zIndex: ''
      });
    });

    $('.service-cell[id]').hover(function(){
      var _id, num;

      _id = $(this).attr('id');
      num = _id.substring(8, _id.length);
      $('.service-box').css({
        bottom: -50
      }).hide();
      $('#service-box-'+num).show().animate({
        bottom: '0'
      }, 200);
      $('.service-cell[id]').css({
        borderBottomColor: ''
      });
      $(this).css({
        borderBottomColor: '#fff'
      });
    }, function(){

    });

    $('.service-head > .fa-times').click(function(){
      $('.service-box').fadeOut(200);
    });

  }

}
