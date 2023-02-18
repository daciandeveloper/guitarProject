//use strict

$(function(){
    
    $(".filter-price__input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.filter-price__from').text(data.from);
       $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
       $('.filter-price__from').text(data.from);
       $('.filter-price__to').text(data.to);
     },
    })
  })


  $(function () {
    $(".products-star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true
    });
   
  });

  $(function(){
    $('.customer__slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  
  })