var vm = new Vue({
  el: "#app",
  data: {
    basePrice: 50,
    serviceFee: 5,
    cards: [
      {
        title: "梅好旺萊",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202204251303191.JPG",
        price: 75,
        soldOut: true,
      },
      {
        title: "提拉米蘇2.0",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202112041324371.JPEG",
        price: 100,
      },
      {
        title: "芝芝草莓果粒",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202005151423331.JPG",
        price: 90,
      },
      {
        title: "多多綠茶",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202005151438221.JPG",
        price: 50,
      },
      {
        title: "香橙果粒茶",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202005151516441.JPG",
        price: 65,
      },
      {
        title: "咖啡凍奶茶",
        cover:
          "http://www.maculife.com.tw/upload/product/images/202106171755421.JPG",
        price: 70,
      },
    ],
  },
});
