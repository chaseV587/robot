// //index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
        triplist:[
            {
                time: '2018-08-04 17:40:26',
                pay_status: '0', // 0:已支付  1:待支付 2:违规订单
                robot_name: '机器人1号',
                work_time: '11',
                amount: '21.00',
                site: '张江万科广场'
            },
            {
                time: '2018-08-05 7:40:26',
                pay_status: '1', // 0:已支付  1:待支付 2:违规订单
                robot_name: '机器人2号',
                work_time: '22',
                amount: '31.00',
                site: '浦江万科广场'
            },
            {
                time: '2018-08-06 9:40:26',
                pay_status: '2', // 0:已支付  1:待支付 2:违规订单
                robot_name: '机器人3号',
                work_time: '36',
                amount: '51.00',
                site: '七宝万科广场'
            }
        ],
        time_icon1: '../../../../static/images/ucenter/icon-13.png',
        time_icon2: '../../../../static/images/ucenter/icon-14.png',
        site_icon: '../../../../static/images/ucenter/icon-15.png'
    },

});
