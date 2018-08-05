// //index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
        order_details:{
            order_no: '20180123100100012',
            start_time: '2018-01-23  12：00：00',
            end_time: '2018-01-23  12：03：00',
            site: '七宝宝龙广场',
            order_amount: '10.00',
            order_status: '1', // 0:已支付  1:待支付 2:违规订单
            robot_name: '机器人1号'
        },
        payBtn: '../../../../static/images/ucenter/icon-16.png'
    },

});
