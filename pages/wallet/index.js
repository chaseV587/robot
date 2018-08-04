// //index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
        wallet: {
            balance: '1530.00',
            cashPledge: '300.00',
        },
        menuList: [
            {
                linkUrl: '',
                icon: '../../static/images/ucenter/icon-1.png',
                title: '我的余额',
                amount: '1530.00',
                linkText: '充    值'
            },
            {
                linkUrl: '',
                icon: '../../static/images/ucenter/icon-5.png',
                title: '我的押金',
                amount: '300.00',
                linkText: '交押金'
            },
        ],
        showModalStatus: true,
        switchBtn: '../../static/images/ucenter/icon-6.png',
        closeIcon: '../../static/images/ucenter/icon-7.png',
    },


});
