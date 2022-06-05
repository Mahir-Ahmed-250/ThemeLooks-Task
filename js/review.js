$('.owl-carousel').owlCarousel({
    loop: "true",
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
        '<i style="font-size:40px; color: #000000;" class="fa-solid fa fa-left-long"></i>'
        ,
        '<i style="font-size:40px; color: #000000;"  class="fa-solid fa fa-right-long"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})