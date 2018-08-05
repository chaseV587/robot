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
                icon: '../../../../static/images/ucenter/icon-1.png',
                title: '我的余额',
                amount: '1530.00',
                linkText: '充    值'
            },
            {
                linkUrl: '',
                icon: '../../../../static/images/ucenter/icon-5.png',
                title: '我的押金',
                amount: '300.00',
                linkText: '交押金'
            },
            {
                linkUrl: '',
                icon: '../../../../static/images/ucenter/icon-5.png',
                title: '我的押金',
                amount: '300.00',
                linkText: '退押金'
            },
        ],
        showRechargeStatus: false, // 缴费弹窗状态
        showDepositStatus: false, // 交押金弹窗状态
        showRefundStatus: false, // 退押金弹窗
        switchBtn: '../../../../static/images/ucenter/icon-6.png',
        switchBtn2: '../../../../static/images/ucenter/icon-17.png',
        switchBtn3: '../../../../static/images/ucenter/icon-18.png',
        closeIcon: '../../../../static/images/ucenter/icon-7.png',
        refunIncon1: '../../../../static/images/ucenter/icon-19.png',
        refunIncon2: '../../../../static/images/ucenter/icon-20.png',
        creditList: [1,5,10,20],
        credit: 1, // 充值金额
        deposit_amount: 99, // 押金金额\
        reason_status: '' // 退押金原因
    },
    // 充值弹窗
    recharge: function (e) {
        var currentStatu = e.currentTarget.dataset.recharge_status;
        this.util(currentStatu, 'recharge')
    },
    // 缴纳押金弹窗
    deposit: function (e) {
        var currentStatu = e.currentTarget.dataset.deposit_status;
        this.util(currentStatu, 'deposit')
    },
    // 退押金弹窗
    refund: function (e) {
        var currentStatu = e.currentTarget.dataset.refund_status;
        this.util(currentStatu, 'refund')
    },
    util: function(currentStatu, type){
        /* 动画部分 */
        // 第1步：创建动画实例
        var animation = wx.createAnimation({
            duration: 200, //动画时长
            timingFunction: "linear", //线性
            delay: 0 //0则不延迟
        });
        // 第2步：这个动画实例赋给当前的动画实例
        this.animation = animation;
        // 第3步：执行第一组动画
        animation.opacity(0).rotateX(-100).step();
        // 第4步：导出动画对象赋给数据对象储存
        this.setData({
            animationData: animation.export(),
        });
        // 第5步：设置定时器到指定时候后，执行第二组动画
        setTimeout(function () {
            // 执行第二组动画
            animation.opacity(1).rotateX(0).step();
            // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
            this.setData({
                animationData: animation
            });
            //关闭
            if (currentStatu == "close" && type == 'recharge') {
                this.setData(
                    {
                        showRechargeStatus: false
                    }
                );
            } else if (currentStatu == "close" && type == 'deposit') {
                this.setData(
                    {
                        showDepositStatus: false
                    }
                );
            } else if (currentStatu == "close" && type == 'refund') {
                this.setData(
                    {
                        showRefundStatus: false
                    }
                );
            }
        }.bind(this), 200);
        // 显示
        if (currentStatu == "open" && type == 'recharge') {
            this.setData(
                {
                    showRechargeStatus: true
                }
            );
        } else if (currentStatu == "open" && type == 'deposit') {
            this.setData(
                {
                    showDepositStatus: true
                }
            );
        } else if (currentStatu == "open" && type == 'refund') {
            this.setData(
                {
                    showRefundStatus: true
                }
            );
        }
    },
    // 选择充值金额
    chooseItem(e) {
        console.log(e);
        var currentStatu = e.currentTarget.dataset.status;
        this.setData({
            credit: currentStatu
        });
    },
    // 选择退货原因
    chosseReason(e) {
        var currentStatu = e.currentTarget.dataset.reason_status;
        this.setData({
            reason_status: currentStatu
        });

    }

});
