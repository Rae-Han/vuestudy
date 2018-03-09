// 새로운 뷰를 정의합니다
var app = new Vue({
  el: '#app', // 어떤 엘리먼트에 적용을 할 지 정합니다
  // data 는 해당 뷰에서 사용할 정보를 지닙니다 
  data: {
    counter: 0,
    msg: `Hello~!`,
    
    rawHtml: `<span style='color:red'>This should be red.</span>`,
    vbind: 'v-bind',

    number: 10,
    ok: true,
    message: 'Hello~ Hi~',
    id: 'id-bind',

    seen: true,
    front: true,
    vue_logo: 'https://kr.vuejs.org/images/logo.png',
    angular_logo: 'https://angular.io/assets/images/logos/angular/angular.svg',

    event_item: '<div>hi hello</div>'

  },
  methods: {
    plusCounter: function() {
      this.counter = this.counter+1;
    },
    addItem: function() {
      var item = document.createElement('div');
      item.innerText = 'hi hello';
      document.getElementsByClassName('event_ground')[0].appendChild(item);
    },
    delItem: function() {
      parentsNode = document.getElementsByClassName('event_ground')[0];

      while(parentsNode.hasChildNodes()) {
        parentsNode.removeChild( parentsNode.firstChild );
      }
    }
  }
});