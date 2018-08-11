

Page({
    data: {
        siteIcon: '../../../../static/images/ucenter/icon-25.png',
        cameraIcon1: '../../../../static/images/ucenter/icon-23.png',
        cameraIcon2: '../../../../static/images/ucenter/icon-24.png',
        delCameraImg: '../../../../static/images/ucenter/icon-30.png',
        cameraImgArr: [], // 上传图片路径
        confirmIcon: '../../../../static/images/ucenter/icon-26.png',
        robotImg: '../../../../static/images/ucenter/robot.png',
        faultIcon1: '../../../../static/images/ucenter/icon-29.png',
        faultIcon2: '../../../../static/images/ucenter/icon-28.png',
        checkedReason: '5', // 0:无法跟随 1:外壳磨损 2:储物柜损坏 3:车轮损坏 4: 其他
    },
    checkReason: function (e) {
        var currentStatu = e.currentTarget.dataset.reason_tag;
        this.setData({
            checkedReason: currentStatu
        });
    },
    // 选择图片
    chooseImg: function (e) {
        var that = this;
        let imgArr = that.data.cameraImgArr;
        wx.chooseImage({
            count: 3, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                console.log(tempFilePaths)
                for (let i in tempFilePaths) {
                    imgArr.push(tempFilePaths[i])
                }
                that.setData({
                    cameraImgArr: imgArr
                });

            }
        })
    },
    // 删除照片
    deleteImg: function (e) {
        var that = this;
        var index = e.currentTarget.dataset.index;
        that.data.cameraImgArr.splice(index, 1);
        const imgArr = that.data.cameraImgArr;
        that.setData({
            cameraImgArr: imgArr
        });
    }

});
