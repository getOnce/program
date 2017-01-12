var hotels = [
    {
      place: false,
      title: 'USA宾馆',
      price: '3661元起',
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
      id: 1
    },
    {
      place: 'CHN',
      title: 'CHN宾馆',
      price: '366元起',
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
      id: 2
    },
    {
      place: 'BRA',
      title: 'BRA宾馆',
      price: '366元起',
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
      id: 3
    },
    {
      place: 'USA',
      title: 'JPN宾馆',
      price: '366元起',
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
      id: 4
    },
    {
      place: 'ENG',
      title: 'USA宾馆',
      price: '3662元起',
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
      id: 5
    },
    {
      place: 'ENG',
      title: 'USA宾馆',
      price: '3663元起',
      src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
      id: 6
    }
  ]
var timer = null;
Page({
  data: {
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ],
    hotelArray: [{}, {}, {}, {}, {}, {}]
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  onLoad: function(){
    var me = this;
    setTimeout(function(){
      me.setData({
        hotelArray: hotels
      })
    }, 2000)
  },
  getInputData: function(e){

    var me = this;
    me.setData({
      hotelArray: [{}, {}, {}, {}, {}, {}]
    })
    if(timer){
      return 
    }
    timer = setTimeout(function(){
      if(!e.detail.value.trim()){
        me.setData({
          hotelArray: hotels
        })
      }else{
        me.setData({
          hotelArray: [{
            place: false,
            title: 'USA宾馆',
            price: '3661元起',
            src: 'https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/0.jpg',
            id: 1
          }]
        });
      }
      timer = null;
    }, 2000)

  }
})


















