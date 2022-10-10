var wxCharts = require('../../utils/wxcharts.js');
Page({
  data: {
    startdata: '2022-09-01',//start日期
    enddata: '2022-08-01',//end日期
    summary: [{ name: '平均库存量', num: 1 }, { name: '数量周转率', num: 1 }, { name: '金额周转率', num: 1 }],
    database: [{ entertotal: 0, entercount: 1 }, { outtotal: 2, outcount: 3 }],
    classify: [{ name: "采购入库", num: 111, price: 33 }, { name: "调拨入库", num: 11, price: 3 }, { name: "生产入库", num: 11, price: 13 }, { name: "退货入库", num: 11, price: 23 }],
    cltotal: 44,
    order: [],
    activity: [{ name: "订单1", mode: "生产入库", oplace: "1号入口", otime: "2022-04-01", onum: "300", price: 3000, picture: "../../icon/LOGO/five.jpg" },{ name: "订单2", mode: "生产入库", oplace: "1号入口", otime: "2022-04-01", onum: "300", price: 3000, picture: "../../icon/LOGO/four.jpg" }],
  },
  onShow(e) {
    var windowWidth = wx.getSystemInfoSync().windowWidth
    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: [2001, 2002, 2003, 2004, 2005],
      series: [{
        name: '成交量',
        data: [15.00, 20.00, 45.00, 37.00],
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量',
        data: [6.00, 9.00, 20.00, 45.00],
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        },
        title: 'hello',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth - 20,
      height: 200,
    });
  }
});