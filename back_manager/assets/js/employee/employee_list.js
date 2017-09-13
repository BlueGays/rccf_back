    //模拟数据
    var data;
    var nums = 15; //每页出现的数量
    $.ajax({
        url:"file.json",
        data:{"pageNo":1},
        dataType:"json",
        success:function (result) {
            if(result.code) {
                data =JSON.parse(result.data) ;
                var pages = Math.ceil(data.length / nums); //得到总页数
                $("#curr").attr("max",pages);
                $(function () {
                    //返回的是一个page示例，拥有实例方法
                    var $page = $("#page").page({
                        pages: pages, //页数
                        curr: 1, //当前页
                        type: 'default', //主题
                        groups: 5, //连续显示分页数
                        prev: '<', //若不显示，设置false即可
                        next: '>', //若不显示，设置false即可
                        first: "首页",
                        last: "尾页", //false则不显示
                        before: function (context, next) { //加载前触发，如果没有执行next()则中断加载
                            console.log('开始加载...');
                            context.time = (new Date()).getTime(); //只是演示，并没有什么卵用，可以保存一些数据到上下文中
                            next();
                        },
                        render: function (context, $el, index) { //渲染[context：对this的引用，$el：当前元素，index：当前索引]
                            //逻辑处理
                            if (index == 'last') { //虽然上面设置了last的文字为尾页，但是经过render处理，结果变为最后一页
                                $el.find('a').html('最后一页');
                                return $el; //如果有返回值则使用返回值渲染
                            }
                            return false; //没有返回值则按默认处理
                        },
                        after: function (context, next) { //加载完成后触发
                            var time = (new Date()).getTime(); //没有什么卵用的演示
                            console.log('分页组件加载完毕，耗时：' + (time - context.time) + 'ms');
                            next();
                        },
                        /*
                         * 触发分页后的回调，如果首次加载时后端已处理好分页数据则需要在after中判断终止或在jump中判断first是否为假
                         */
                        jump: function (context, first) {
                            console.log('当前第：' + context.option.curr + "页");
                            $("#content").html(thisDate(context.option.curr));
                        }
                    });
                });
            }else {
                alert(result.error_msg);
            }
        }
    });
    var thisDate = function (curr) {
    //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
    var str = '',
        last = curr * nums - 1;
        last = last >= data.length ? (data.length - 1) : last;
    for (var i =  (curr * nums - nums); i <= last; i++) {
    str += '<tr>\n' +
    '                        <td>' + data[i].id + '</td>\n' +
    '                        <td>' + data[i].name + '</td>\n' +
    '                        <td>' + data[i].sex + '</td>\n' +
    '                        <td>' + data[i].phone + '</td>\n' +
    '                        <td>' + data[i].department + '</td>\n' +
    '                        <td>' + data[i].job + '</td>\n' +
    '                        <td>' + data[i].depu + '</td>\n' +
    '                        <td>' + data[i].majordomo + '</td>\n' +
    '                        <td>\n' +
    '                            <button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span\n' +
    '                                    class="am-icon-pencil-square-o"></span> 详情\n' +
    '                            </button>\n' +
    '                            <button class="am-btn am-btn-default am-btn-xs"><span\n' +
    '                                    class="am-icon-copy"></span> 编辑\n' +
    '                            </button>\n' +
    '                            <button class="am-btn am-btn-default am-btn-xs am-text-danger">\n' +
    '                                <span class="am-icon-trash-o"></span> 删除\n' +
    '                            </button>\n' +
    '                        </td>\n' +
    '                    </tr>';
}
    return str;
};
    var all_Data = function () {
    var str = '';
    for (var i = 0; i <data.length; i++) {
    str += '<tr>\n' +
    '                        <td>' + data[i].id + '</td>\n' +
    '                        <td>' + data[i].name + '</td>\n' +
    '                        <td>' + data[i].sex + '</td>\n' +
    '                        <td>' + data[i].phone + '</td>\n' +
    '                        <td>' + data[i].department + '</td>\n' +
    '                        <td>' + data[i].job + '</td>\n' +
    '                        <td>' + data[i].depu + '</td>\n' +
    '                        <td>' + data[i].majordomo + '</td>\n' +
    '                        <td>\n' +
    '                            <button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span\n' +
    '                                    class="am-icon-pencil-square-o"></span> 详情\n' +
    '                            </button>\n' +
    '                            <button class="am-btn am-btn-default am-btn-xs"><span\n' +
    '                                    class="am-icon-copy"></span> 编辑\n' +
    '                            </button>\n' +
    '                            <button class="am-btn am-btn-default am-btn-xs am-text-danger">\n' +
    '                                <span class="am-icon-trash-o"></span> 删除\n' +
    '                            </button>\n' +
    '                        </td>\n' +
    '                    </tr>';
}
    return str;
};

    //点击跳转页数实现
        $("#set").click(function () {
            var page = $("#curr").val();
            if (page > pages) {
                $("#content").html("当前页无数据！");
            } else {
                $page.setCurr(page, function () {
                    console.log('跳转到第' + page + "页");
                });
        }});

    //导出excel实现
    var $exportLink = document.getElementById('export');
    $exportLink.addEventListener('click',
    function (e) {
    e.preventDefault();
    if (e.target.nodeName === "A") {
    tableExport('employee_table', '员工列表', e.target.getAttribute('data-type'))
}
},
    false);
    //显示全部
    $("#display_all").bind("click",function () {
    $("#content").html(all_Data());
    $("#jump").hide();
    $("#page").hide();
})
