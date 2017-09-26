//判断参数是否为 '' , ' ' , null , 类别是否为 undefined
function isNull(variable1) {
    if (variable1 === null) {
        return true;
    }
    if (typeof (variable1) === 'undefined') {
        return true;
    }
    if (variable1 === "") {
        return true;
    }

    if (variable1 === "null") {
        return true;
    }

    return false;
}

//null 字符串 ———— 0 原字符串
function getdata(str) {
    if (str == null) {
        return 0;
    }
    return str;
}

//null 字符串 ------ 无  原字符串
function getdata_1(str) {
    if (isNull(str)) {
        return '无';
    }
    return str;
}

// 0 1  ------- 无  有
function have(num) {
    if (num == 0) {
        return '无';
    }
    return '有';
}

//贷款类别
function getType(type) {
    if (type === 0) {
        return '信用贷';
    } else if (type === 1) {
        return '抵押';
    } else if (type === 2) {
        return '质押';
    } else if (type === 3) {
        return '权证';
    } else {
        return '其他';
    }
}

//受理单状态
function getState(state) {
    if (state === 1) {
        return '受理';
    } else if (state === 2) {
        return '办结';
    } else if (state === 3) {
        return '被拒';
    } else if (state === 4) {
        return '撤单';
    } else {
        return '其他';
    }
}

//业绩求和
function get_sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i][6];
    }
    return sum;
}

Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}

//时间格式化
function getDate(time) {
    var date = new Date();
    if (isNull(time)) {
        return '';
    }
    date.setTime(time);
    return date.format('yyyy-MM-dd')
}

//  文字闪烁效果
function textColor() {
    function changeColor() {
        var color = "red|green|blue";
        color = color.split("|");
        $("").css("color", color[parseInt(Math.random() * color.length)]);
    }

    setInterval("changeColor()", 200);
}

//判断手机号格式
function isPhone(num) {
    var reg_phone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\\d{8}$/;
    if (reg_phone.test(num)) {
        return true;
    }else{
        return false;
    }

}
function isMobile(phone) {
    var reg = /^1[34578]\d{9}$/;
    if (reg.test(phone)) {
        return true;
    } else {
        return false;
    }
}

//判断身份证格式
function isIdCard(sId) {
    var reg_idCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ ;
    if(reg_idCard.test(sId)){
        return true;
    }else{
        return false;
    }

}