import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  lists: Array<any> = [
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
    {
      title1: "|",
      title2: "女人爱搭配",
      title3: "关注到微淘",
      title4: "有到一年雪绒坊",
      title5: "优雅的温柔",
      title6: "春夏美鞋",
      title7: "春季亮色搭",
      title8: "潮流女装",
      title9: "小个子美搭",
      title10: "胖MM显廋",
      title11: "复古多包袋"
    },
  ];

  //页面渲染完成之后调用此函数
  ngAfterViewInit(){

    $('.product-box').hover(function () {
      $(this).find('.share-weitao').fadeIn(200);
    }, function () {
      $(this).find('.share-weitao').fadeOut(200);
    });

    $("img.lazy").lazyload({effect: "fadeIn"});

  }

  ngOnInit() {

  }

}
