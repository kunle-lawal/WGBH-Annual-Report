(function(){
    $(document).ready(function(){
        var scroll_element =  $("html");
        $(document).scroll(function(){
            // console.log(scroll_element.scrollTop(), $(window).height());
            var curtain_height = $(".hero-window").height();
            console.log(curtain_height);
            if (scroll_element.scrollTop() >= curtain_height){
                $(".hero-window").css({
                    "position": "relative",
                    "margin-top": curtain_height
                });

                $(".nav").css({
                    "margin-top": -curtain_height
                });
            } else {
                $(".hero-window").css({
                    "position": "fixed",
                    "margin-top": 0
                });

                $(".nav").css({
                    "margin-top": 0
                });
            }
        //   console.log($("html").scrollTop());
        });

        $(".article-slides").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            mobileFirst: true,
        });
    });

    $(document).ready(function () {

        var getMax = function () {
            return $(document).height() - $(window).height();
        }

        var getValue = function () {
            return $(window).scrollTop();
        }

        if ('max' in document.createElement('progress')) {
            // Browser supports progress element
            var progressBar = $('progress');

            $(document).on('scroll', function () {
                // On scroll only Value attr needs to be calculated
                progressBar.attr({
                    max: getMax(),
                    value: getValue()
                });
            });

            $(window).resize(function () {
                // On resize, both Max/Value attr needs to be calculated
                progressBar.attr({
                    max: getMax(),
                    value: getValue()
                });
            });
        } else {
            var progressBar = $('.progress-bar'),
                max = getMax(),
                value, width;

            var getWidth = function () {
                // Calculate width in percentage
                value = getValue();
                width = (value / max) * 100;
                width = width + '%';
                return width;
            }

            var setWidth = function () {
                progressBar.css({
                    width: getWidth()
                });
            }

            $(document).on('scroll', function(){
                max = getMax();
                setWidth();
            });
            $(window).on('resize', function () {
                // Need to reset the Max attr
                max = getMax();
                setWidth();
            });
        }
    });

}());
