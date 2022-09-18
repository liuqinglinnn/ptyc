Page({
  data: {
    oid: "100001",
    order: [{ title: "玉溪", sid: "112233", sdate: '2022-09-01', house: '平潭烟草', sprice: 1, snum: 0, content: 22, admin: null, picture: [], }, { title: "玉溪", sid: "112233", sdate: '2022-09-01', house: '平潭烟草', sprice: 1, snum: 0, content: 22, admin: null, picture: [], }],
  },
  onShow() {
    let that = this;
    let oid = that.data.oid;
    let request = wx.request({
      url: 'http://localhost:8082/OrderAdmin/Showorderitem',
      data: { oid: oid },
      method: 'GET',
      success: (res) => {
        that.setData({ order: res.data.data })
      },
      fail: () => { },
      complete: () => { }
    });
  },
  //订单提交
  formSubmit(e) {
    console.log(e);
    let oid = this.data.oid
    let ordersort = e.detail.value.form_sort
    let ordernote = e.detail.value.form_note
    let request = wx.request({
      url: 'http://localhost:8082/OrderAdmin/Addorder',
      data: {
        oid: oid,
        ordersort: ordersort,
        ordernote: ordernote,
      },
      success: (res) => {
        wx.showToast({
          title: '入库成功',
          icon: 'success',
          duration: 1500,
        });
      },
      fail: () => { },
      complete: () => { }
    });
  },
  //跳转到扫码页面
  scancodenav(e) {
    wx.navigateTo({
      url: '../scancode/scancode?oid=' + this.data.oid,
    })
  },
})