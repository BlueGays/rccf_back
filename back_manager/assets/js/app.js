$(function() {
    // 读取body data-type 判断是哪个页面然后执行相应页面方法，方法在下面。
    var dataType = $('body').attr('data-type');
    console.log(dataType);
    for (key in pageData) {
        if (key == dataType) {
            pageData[key]();
        }
    }
    autoLeftNav();
    $(window).resize(function() {
        autoLeftNav();
        console.log($(window).width())
    });

    //    if(storageLoad('SelcetColor')){

    //     }else{
    //       storageSave(saveSelectColor);
    //     }
})


// 页面数据
var pageData = {
    // ===============================================
    // 首页
    // ===============================================
    'index': function indexData() {
        $('#example-r').DataTable({

            bInfo: false, //页脚信息
            dom: 'ti'
        });

    }
}
// 侧边菜单开关


function autoLeftNav() {


            $('.tpl-header-switch-button').on('click', function () {
                if ($('.left-sidebar').is('.active')) {
                    if ($(window).width() > 1024) {
                        $('.tpl-content-wrapper').removeClass('active');
                    }
                    $('.left-sidebar').removeClass('active');
                } else {

                    $('.left-sidebar').addClass('active');
                    if ($(window).width() > 1024) {
                        $('.tpl-content-wrapper').addClass('active');
                    }
                }
            })

            if ($(window).width() < 1024) {
                $('.left-sidebar').addClass('active');
            } else {
                $('.left-sidebar').removeClass('active');
            }
        }


// 侧边菜单
$('.sidebar-nav-sub-title').on('click', function () {
            $(this).siblings('.sidebar-nav-sub').slideToggle(80)
                .end()
                .find('.sidebar-nav-sub-ico').toggleClass('sidebar-nav-sub-ico-rotate');
        });

//iframe
var getWindowWH = function(){
    return ["Height","Width"].map(function(name){
        return window["inner"+name] ||
            document.compatMode === "CSS1Compat" && document.documentElement[ "client" + name ] || document.body[ "client" + name ]
    });
}