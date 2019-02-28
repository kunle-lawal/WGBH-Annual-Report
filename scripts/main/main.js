(function(){
    $(document).ready(function(){
        var scroll_element =  $("html");
        $(document).scroll(function(){
            // console.log(scroll_element.scrollTop(), $(window).height());
            var curtain_height = $(".hero-window").height();
            var articlePos = [getOffSetVal(".truth-transparency"), getOffSetVal(".science"), getOffSetVal(".educating-youth"), getOffSetVal(".town-square")];

            // console.log(articlePos);
            // console.log(curtain_height);
            if (document.scrollingElement.scrollTop >= curtain_height){
                $(".hero-window").css({
                    "position": "relative",
                    "margin-top": curtain_height
                });

                $(".nav").css({
                    "margin-top": -curtain_height
                });
            } else {
                // alert(curtain_height);
                $(".hero-window").css({
                    "position": "fixed",
                    "margin-top": 0
                });

                $(".nav").css({
                    "margin-top": 0
                });
            }

            // console.log(scroll_element.scrollTop(), articlePos[0]);
            if (document.scrollingElement.scrollTop >= getOffSetVal(".logo_farm") - 100) {
                $("nav").css({
                    "background-color": "#222222",
                    "color": "white"
                });
            } else if (document.scrollingElement.scrollTop > getOffSetVal("#financial")) {
                $("nav").css({
                    "background-color": "#03507c",
                    "color": "white"
                });
            } else if (document.scrollingElement.scrollTop > articlePos[3] - 100) {
                $("nav").css({
                    "background-color": "#20b5bf",
                    "color": "#white"
                });
            } else if (document.scrollingElement.scrollTop > articlePos[2] - 100) {
                $("nav").css({
                    "background-color": "#f7922a",
                    "color": "#ffffff"
                });
            } else if (document.scrollingElement.scrollTop > articlePos[1] - 100) {
                $("nav").css({
                    "background-color": "#6e3078",
                    "color": "white"
                });
            } else if (document.scrollingElement.scrollTop > articlePos[0] - 100) {
                $("nav").css({
                    "background-color": "#d83300",
                    "color": "white"
                });
            } else if (document.scrollingElement.scrollTop > getOffSetVal(".link")) {
                $("nav").css({
                    "background-color": "#222222",
                    "color": "white"
                });
            }
        });

        $(".article-slides").slick({
            dots:true,
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            fade: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $(function () {
            $('.lazy').Lazy();
        });

        // Scroll Reveal Overview Section
        // window.sr = ScrollReveal();
        // sr.reveal('.brand', { duration: 500 }, 50);

        // Animate Scroll down After Gradient Message Comes in
        // setTimeout(function () {
        //     $('.scroll-down').addClass('animate');
        // }, 4000);

        $(".mobile_button").click(function(){
            $(".nav-items-container").toggleClass("slideInDown");
            $(".mobile_button").toggleClass("mobile_button_clicked");
        });
        $(".nav-items").click(function () {
            $(".slideInDown").toggleClass("slideInDown");
            $(".mobile_button").toggleClass("mobile_button_clicked");
        });


        var clicked = true;
        // Add smooth scrolling to all links


        $("a").on('click', function (event) {
            console.log(clicked);
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "" && clicked) {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;
                if ($(hash).offset().top == $("html").scrollTop()) {
                    return;
                }
                // console.log($(hash).offset().top, $("html").scrollTop());
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                clicked = false
                if (hash == "#pres") {
                    animateScroll(hash, -1000);
                } else {
                    animateScroll(hash, 0);
                }

            } // End if
        });


        getOffSetVal = function (element) {
            return $(element).offset().top;
        }

        animateScroll = function (hash, offset) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top + offset,
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                clicked = true;
            });
        }
    });
}());
