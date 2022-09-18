Page({
  data: {
    openid: "",
    title: null,//烟草名称
    sid: null,//烟草编号
    sdate: '2022-09-01',//过期日期
    house: ['平潭烟草', '其他烟草'],//仓库选择
    index1: 0,
    sprice: 0,//入库单价
    snum: 0,// 入库数量
    content: null,//备注 
    admin: null,//审核人
    picture: [],//活动图片
  },
  onLoad(options) {
    let that = this
    //获取code
    wx.getStorage({
      key: 'openid',
      success: (res) => {
        that.setData({ openid: res.data })
      },
      fail: () => { },
    })

  },
  STitle(e) { this.setData({ title: e.detail.value }) },
  SSid(e) { this.setData({ startdate: e.detail.value }) },
  STime(e) { this.setData({ enddate: e.detail.value }) },
  HouseChange(e) { this.setData({ index1: e.detail.value }) },
  Sprice(e) { this.setData({ sprice: e.detail.value }) },
  Snum(e) { this.setData({ snum: e.detail.value }) },
  SContent(e) { this.setData({ content: e.detail.value }) },
  Sadmin(e) { this.setData({ admin: e.detail.value }) },
  //上传图片
  UpLoadPicture(e) {
    let that = this;
    console.log(e);
    wx.chooseMedia({
      count: 3,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success: res => {
        console.log(res, '图片链接');
        that.setData({ picture: res.tempFiles })
      }
    })
  },
  //上传数据
  Submit(e) {
    //     console.log(e);
    //     e.detail.value;
    //     let pid = e.detail.value.form_pid
    //     let pname = e.detail.value.form_pname
    //     let pnum = e.detail.value.form_pnum
    //     let oid = this.data.oid
    //     let request = wx.request({
    //       url: 'http://localhost:8082/OrderAdmin/Addorderitem',
    //       data: {
    //         pid: pid, pname: pname, pnum: pnum, oid: oid
    //       },
    //       success: (result) => {
    //         wx.showToast({
    //           title: '添加成功',
    //           icon: 'success',
    //           duration: 1000,
    //           success: (result) => {
    //             wx.navigateTo({
    //               url: '../EnterWarehouse/EnterWarehouse',
    //             })
    //           },
    //         });
    //       },
    //       fail: () => { },
    //     });

    //   }













    // let that = this
    // let teamswitch = this.data.teamswitch == true ? 0 : 1;
    // let checkswitch = this.data.checkswitch == true ? 0 : 1;
    // let allnum = 0;
    // let teamnum = that.data.teamnum;
    // let place = this.data.place + '-' + this.data.jinweidu;
    // if (that.data.index1 == 1) { place = '' }
    // if (teamswitch == 1) { allnum = this.data.activitynum; teamnum = 1; }
    // else { allnum = this.data.teamnum * this.data.teampnum; }
    // let classify = this.data.index1 == 0 ? this.data.classify1[this.data.index3] : this.data.classify2[this.data.index4]

    // if (allnum != 0) {
    //   wx.request({
    //     url: 'https://www.zhiyuankoushao.top/postActivity',
    //     // url: 'http://106.13.204.79:8080/postActivity?head=' + that.data.title + '&place=' + place + '&starttime=' + that.data.startdate + '-' + that.data.starttime + '&endtime=' + that.data.enddate + '-' + that.data.endtime + '&sponsor=' + that.data.openid + '&mode=' + that.data.mode[that.data.index1] + '&numofmate=' + that.data.teamnum + '&mechanism=' + '福州市政f' + '&content=' + that.data.content + '&allnum=' + allnum + '&classify1=' + classify + '&teamswitch=' + teamswitch + '&checkswitch=' + checkswitch + '&qiandao=' + that.data.qiandao[that.data.index2],
    //     data: {
    //       head: that.data.title,
    //       starttime: that.data.startdate + ' ' + that.data.starttime,
    //       endtime: that.data.enddate + ' ' + that.data.endtime,
    //       mode: that.data.mode[that.data.index1],
    //       sponsor: that.data.openid,
    //       teamswitch: teamswitch,
    //       checkswitch: checkswitch,
    //       mechanism: that.data.organization,
    //       content: that.data.content,
    //       numofmate: teamnum,
    //       qiandao: that.data.qiandao[that.data.index2],
    //       classify1: classify,
    //       allnum: allnum,
    //       place: place,
    //     },
    //     header: {
    //       'content-type': 'application/x-www-form-urlencoded'
    //     },
    //     method: 'POST',
    //     success: (res) => {
    //       console.log(res);
    //       let picture = that.data.picture
    //       if (res.data.error != "发布失败，请重新尝试") {
    //         let i;
    //         wx.uploadFile({
    //           filePath: picture[0].tempFilePath,
    //           name: 'file',
    //           formData: { 'id': res.data.id + '-0' },
    //           url: 'https://www.zhiyuankoushao.top/uploadactivitypic',
    //           success: res => {
    //             console.log(res, "上传图片成功");
    //           },
    //           fail: () => { },
    //         })
    //         wx.uploadFile({
    //           filePath: picture[1].tempFilePath,
    //           name: 'file',
    //           formData: { 'id': res.data.id + '-1' },
    //           url: 'https://www.zhiyuankoushao.top/uploadactivitypic',
    //           success: res => {
    //             console.log(res, "上传图片成功");
    //           },
    //           fail: () => { },
    //         })
    //         wx.uploadFile({
    //           filePath: picture[2].tempFilePath,
    //           name: 'file',
    //           formData: { 'id': res.data.id + '-2' },
    //           url: 'https://www.zhiyuankoushao.top/uploadactivitypic',
    //           success: res => {
    //             console.log(res, "上传图片成功");
    //           },
    //           fail: () => { },
    //         })
    //         wx.showToast({
    //           title: '发布成功',
    //           icon: 'success',
    //           duration: 2500,
    //         });
    //         setTimeout(() => {
    //           wx.navigateBack({
    //             delta: 1
    //           });
    //         }, 2000);

    //       }
    //       else {
    //         wx.showToast({
    //           title: '发布失败',
    //           icon: 'error',
    //           duration: 2500,
    //         });
    //       }
    //     },
    //     fail: () => {
    //       wx.showToast({
    //         title: '发布失败',
    //         icon: 'error',
    //         duration: 2500,
    //       });
    //     },
    //   });
    // }
    // else {
    //   wx.showToast({
    //     title: '请输入活动人数',
    //     icon: 'error',
    //     duration: 2500,
    //   });
    // }

  },
})