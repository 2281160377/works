$.ajax({
    url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
    type:"GET", // GET POST
    dataType:"json", // json html
    data: { page:1, user_id: 1 },
    success:function (res) {
        if ( ! res.data) {
            return false;
        }
        var data1 = res.data.slide;
        for (var i = 0; i < data1.length; i++) {
            var pp = data1[i].activity.img;
            var div  = $('<div class="swiper-slide" />');
            var img = $('<img/>').attr({src:pp}).css({ "width": "770px", "height": "350px" }).appendTo(div);
            div.appendTo($('.swiper-wrapper'));
        }
        var mySwiper = new Swiper('.swiper-container',{
            pagination : '.swiper-pagination',
            autoplay: 3000,//可选选项，自动滑动
            loop:true,
            autoplayDisableOnInteraction:false,
            paginationClickable: true
        })
        var menu1 = res.data.menu;
        for (var j = 0; j < menu1.length; j++) {
            var name = menu1[j].activity.name;
            var img = menu1[j].activity.img;
            var dl = $('<dl/>').append($('<dt/>').append($('<img/>').attr({src:img})));
            var dd = $('<dd/>').html(name).appendTo(dl);
            var menu = $(".menu").append(dl);
        }
    }
})

// var obj = { title:'小组赛', time:'03-07' } []
// obj.title