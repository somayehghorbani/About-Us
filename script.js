$(function () {
    $(window).scroll(function () {
        var $h = $(window).scrollTop();

        if ($h > 10) {
            $('.navBottom-container').addClass('animatzoomout');
        } else {
            $('.navBottom-container').removeClass('animatzoomout');

        }
    });
});
$(function () {
    $(window).scroll(function () {
        var $h = $(window).scrollTop();

        if ($h < 10) {

            $('.navBottom-container').addClass('animatzoomin');
        } else {
            $('.navBottom-container').removeClass('animatzoomin');
            //
        }
    });
});