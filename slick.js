
$('.team-carusele').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  arrows:false,
  responsive: [{
    breakpoint:768,
    settings:{
      slidesToShow:2
    }
  },
  {
    breakpoints: 992,
    settings:{
      slidesToShow:4,
    }
  }
]
  
});