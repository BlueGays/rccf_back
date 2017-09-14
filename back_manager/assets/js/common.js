function getdata(str) {
    if (str == null) {
        return '无';
    }
    return str;
}

function getType(type) {
    if (type === 0) {
        return '信用贷';
    } else if (type === 1) {
        return '抵押';
    } else if (type === 2) {
        return '质押';
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