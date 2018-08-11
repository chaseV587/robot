

Page({
    data: {
        siteIcon: '../../../../static/images/ucenter/icon-25.png',
        cameraIcon1: '../../../../static/images/ucenter/icon-23.png',
        cameraIcon2: '../../../../static/images/ucenter/icon-24.png',
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
    }

});
