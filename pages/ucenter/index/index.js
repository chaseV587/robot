// //index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {
            tel: '138xxxx1234',
            name: '测试',
            imgUrl: '../../../static/images/ucenter/1608185570311.jpg'
        },
        menuList: [
            {
                linkUrl: '',
                icon: '../../../static/images/ucenter/icon-1.png',
                text: '我的行程',
                url: '../my-trips/index/index'
            },
            {
                linkUrl: '',
                icon: '../../../static/images/ucenter/icon-2.png',
                text: '我的钱包',
                url: '../wallet/index/index'
            },
            {
                linkUrl: '',
                icon: '../../../static/images/ucenter/icon-3.png',
                text: '客服中心',
                url: '../call-center/index/index'
            }
        ],
        switchBtn: '../../../static/images/ucenter/icon-4.png',
    },


});
