// event pada saat link di klik
$('.page-scroll').on('click', function (e) {
    // ambil isi href
    var tujuan = $(this).attr('href');
    // menangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
    $('html').animate({
        scrollTop:elemenTujuan.offset().top - 50
    },1250,'easeInOutExpo');
    e.preventDefault();
});

// about
$(window).on('load', function () {
    $('.pkiri').addClass('pmuncul'); 
    $('.pkanan').addClass('pmuncul'); 
});

$(window).scroll(function () {
    // jumbotron
    var wscroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform':'translate(0px,'+wscroll/4+'%)'
    });
    $('.jumbotron h1').css({
        'transform':'translate(0px,'+wscroll/2+'%)'
    });
    $('.jumbotron p').css({
        'transform':'translate(0px,'+wscroll/1.2+'%)'
    });

    // portfolio
    if (wscroll > $('.portfolio').offset().top - 250) {
        // console.log('oke');
        
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                // $('.portfolio .thumbnail').addClass('muncul');
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },300 *i);
        });
    }
});