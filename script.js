// parallax

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    //header
    $(' .header img').css({
        'transform': 'translate(0px, ' + wScroll / 2.9 + '%)'
    });

    $(' .header h2').css({
        'transform': 'translate(0px, ' + wScroll / 1.8 + '%)'
    });
    $(' .header h5').css({
        'transform': 'translate(0px, ' + wScroll / 0.7 + '%)'
    });



    //experience
    if (wScroll > $('.experience').offset().top - 550) {
        $('.experience .gambar').addClass('munculkan');
        console.log('ok');
    };

    //services
    if (wScroll > $('.line1').offset().top - 400) {
        // console.log('ok');

        $('.line1 .colline1').each(function (i) {
            setTimeout(function () {
                $('.line1 .colline1').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
        // 
    }




});