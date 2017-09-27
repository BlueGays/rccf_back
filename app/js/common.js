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


function getdata(str) {
    if (str == null) {
        return 0;
    }
    return str;
}
function getdata_1(str) {
    if (isNull(str)) {
        return '无';
    }
    return str;
}
function have(num) {
    if (num == 0) {
        return '无';
    }
    return '有';
}
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
function get_sum(arr) {
    var sum = 0;
    for(var i=0 ; i<arr.length;i++){
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


function getDate(time) {
    var date = new Date();
    if(isNull(time)){
        return '';
    }
    date.setTime(time);
    return date.format('yyyy-MM-dd')
}

//  文字闪烁效果
function changeColor() {
    var color = "red|green|blue";
    color = color.split("|");
    $("").css("color", color[parseInt(Math.random() * color.length)]);
}

setInterval("changeColor()", 200);

