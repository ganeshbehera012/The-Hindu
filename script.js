// Owl Script Here 
$(document).ready(function () {
    $('#first .owl-carousel').owlCarousel({
        items: 5, // This Is The Number of Items You Want To show
        margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: false, // Playing The Carousel Automatically
        autoplayTimeout:  4000, // At What Time You Need The Carousel To scroll Automatically
       
        // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        // rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order

                
        responsive: {
            0: {
                items:3,
                nav : false,
                margin : 0,
                dots:false
            },
            600 : {
                items : 3,
                nav : false,
                margin : 5,
            },
            1000 : {
                items : 3,
                nav : true,
                dots : false
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});

// Owl Script Here 
$(document).ready(function () {
    $('#second .owl-carousel').owlCarousel({
        items: 5, // This Is The Number of Items You Want To show
        margin: 20, // This Is The Gap Which You Want To Shows
        loop: true, // Behaves As A Loop As The Default is False We Need To Change
        nav: true, // It Will Show THe arrows 
        autoplay: false, // Playing The Carousel Automatically
        autoplayTimeout:  4000, // At What Time You Need The Carousel To scroll Automatically
       
        // This Is For The Animation Only Occurs For Single Data
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        // rtl : true, // It Will Make The Carousel Slide from Right To left In reverse Order

                
        responsive: {
            0: {
                items:3,
                nav : false,
                margin : 0,
                dots:false
            },
            600 : {
                items : 3,
                nav : false,
                margin : 5,
            },
            1000 : {
                items : 4,
                nav : true,
                dots : false
                // stagePadding: 50, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
            },
        }
    })
});

