$(document).ready(function () {

$('.menu-burger').click(function() {
    $(this).toggleClass("active");
    $('.menu-wrapper').toggleClass("show");
});

    // mouse move parallax

    var isParallaxActive = false;
    const elem = document.querySelector(".main-image");

    function toggleParallax() {
        if (window.innerWidth > 1279) {
            if (!isParallaxActive) {
                $(document).on("mousemove", ".wrapper-main>section", parallax);
                isParallaxActive = true;
            }
        }
        else {
            $(document).off("mousemove", ".wrapper-main>section", parallax);
            elem.removeAttribute("style");
            isParallaxActive = false;
        }
    }

    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        // let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        // let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        // let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${0 - (_mouseX - _w) * 0.01}%`;
        let y = `${0 - (_mouseY - _h) * 0.01}%`;
        elem.style.top = y;
        elem.style.right = x;
    }

    $(window).resize(function () {
        try {
            toggleParallax();
          } catch (err) {}
    })

    try {
        toggleParallax();
    } catch (err) {};

});