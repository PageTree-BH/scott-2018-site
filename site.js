    /*
global
PT:true, SITE:true,

ScrollMagic:true,
TimelineMax:true, TweenMax:true, TweenLite:true, SplitText:true,
Linear:true, Elastic:true, Power1:true, Power2:true, Power3:true, Power4:true, Bounce:true,

FastClick:true, enquire:true, Justice:true,
Modernizr:true, jQuery:true, ssm:true

*/



// @codekit-prepend "pt/pt-base-v13.js"




PT._isDevMode = false;

$(function() {
    // console.log('site specific js file');

    SITE.init();

















    // var holder = $('#g-series-letter').parent();
    // // var mySVG = $('#hippo2');
    // TweenMax.set("#g-series-letter", {transformOrigin:"50% 50%" });
    //
    // TweenMax.from($("#g-series-letter"), 5, {
    //     // transformOrigin:"50% 50%",
    //     // x: (window.innerWidth/2)
    //     // ,y: (window.innerHeight/2)
    //     // x: positionElementToCenter('#hippo2').x,
    //     // y: positionElementToCenter('#hippo2').y,
    //     // x: '50%',
    //     // y: '50%'
    //     delay:1,
    //     autoAlpha:0,
    //     scale:2
    // });


// console.log('aaa', window.innerWidth/2);

    // $(window).on('mousemove', function(e){
        // TweenMax.to($("#hippo2"), 0, {x: e.pageX, y:e.pageY });
        // TweenMax.set($("#g-series-letter"), {
        //   x: e.pageX-holder.width()/2
        //   ,y:e.pageY-holder.height()/2
        // });
    // });


        // TweenMax.to($("#hippo"), 3, {
        //   // x: e.pageX-mySVG.width()/3
        //   // ,y:e.pageY-mySVG.height()/3
        //   x: '500'
        //   ,y:'500'
        //   ,autoAlpha:0
        //   ,opacity:0
        //   ,ease:Power4.easeOut
        // });







});






var SITE = {

    _VAR:''

    ,init: function() {

        // console.log('SITE.init()');

        // PT.monitorFPS();

        // PT.addRandomClass('.homeplate', ['bg-r1', 'bg-r2', 'bg-r3']);

        SITE.buildSiteNavigation();

        SITE.buildHomePlate();



        SITE.buildRodNav();









        // $('[data-pt-scroll-to]').each(function (index, element){
        //     console.log(element);
        //     $(element).click(function(e){
        //         e.preventDefault();
        //         console.log($(this).data('pt-scroll-to'));
        //         TweenMax.to(window, 0.5, { scrollTo:{ y:"#diff" }, ease:Power4.easeInOut } );
        //     });
        // });


        $('[data-pt-scroll-to]').click(function(e) {
            e.preventDefault();
            var _targetId = $(this).data('pt-scroll-to');
            var _scrollTo = $(_targetId).offset().top;



            var ScrollToOffsetID = $(this).data('pt-scroll-to-offset');
            var ScrollToOffsetNumber = $(ScrollToOffsetID).outerHeight(true);

            console.log(_scrollTo, ScrollToOffsetNumber);


            // var offSet = $(this.hash).offset();
            // var smsTo = $(this.hash).data('pt-spy-me');

            // if (offSet !== undefined){
            //     if( ScrollToOffsetNumber === null ){
            //         // console.log('null');
            //         TweenMax.to(window, 0.5, { scrollTo:{ y:smsTo }, ease:Power4.easeInOut } );
            //     }else{
            //         // console.log('not null');
            //         TweenMax.to(window, 0.5, { scrollTo:{ y:smsTo-ScrollToOffsetNumber }, ease:Power4.easeInOut } );
            //     }
            //
            // }


            TweenMax.to(window, 0.5, { scrollTo:{ y:_scrollTo }, ease:Power4.easeInOut } );


        });


    }




    ,buildHomePlate: function() {
        console.log('buildHomePlate()');

        var HP = $('[data-scott-homeplate]');



        // var tlm = new TimelineMax();

        function setSlide(_SLICK_, _slide_){
            TweenMax.set($(_slide_).find('.series-letter'), {
                alpha:0,
                ease:Power3.easeOut,
                scale:2
            });
            TweenMax.set($(_slide_).find('.shp-titles'), { alpha:0, scale:1.2 });
            TweenMax.set($(_slide_).find('.shp-titles h1'), { alpha:0 });
            TweenMax.set($(_slide_).find('.shp-titles img'), { alpha:0 });
            TweenMax.set($(_slide_).find('.shp-titles a'), { alpha:0 });
        }

        function animateSlide(_SLICK_, _slide_){
            TweenMax.to($(_slide_).find('.series-letter'), 3, {
                alpha:1,
                ease:Power3.easeOut,
                delay:0.3,
                scale:1
            });



            TweenMax.to($(_slide_).find('.shp-titles '), 3, {
                alpha:1,
                ease:Power3.easeOut,
                delay:1,
                scale:1
                // onComplete:function(e){
                    // _SLICK_.slickNext();
                // }
            });
            TweenMax.to($(_slide_).find('.shp-titles h1'), 3, {
                alpha:1,
                ease:Power3.easeOut,
                delay:1,
                // scale:1,
                onComplete:function(e){
                    // _SLICK_.slickNext();
                }
            });
            TweenMax.to($(_slide_).find('.shp-titles img'), 3.4, {
                alpha:1,
                ease:Power3.easeOut,
                delay:1.4,
            });
            TweenMax.to($(_slide_).find('.shp-titles a'), 3.8, {
                alpha:1,
                ease:Power3.easeOut,
                delay:1.8,
                // scale:1,
                onComplete:function(e){
                    _SLICK_.slickNext();
                }
            });
        }









        HP.on('init', function(event, slick, currentSlide, nextSlide){
            // function onInit(){
            console.log('init init init initc3c33 333 3 3 33');
            setSlide(slick, slick.$slides[0]);
            animateSlide(slick, slick.$slides[0]);
        });

        HP.slick({
                fade: true,
                dots: false,
                arrows: true,
                infinite: true,
                autoplaySpeed: 3000,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                nextArrow: '<button class="pt-slick-next"><i class="fa fa-angle-right"></i></button>',
                prevArrow: '<button class="pt-slick-prev"><i class="fa fa-angle-left"></i></button>'
            });

        HP.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            setSlide(slick, slick.$slides[nextSlide]);

        });
        HP.on('afterChange', function(event, slick, currentSlide, nextSlide){
            animateSlide(slick, slick.$slides[currentSlide]);
        });



    }










    ,
    buildSiteNavigation: function() {
        console.log('buildSiteNavigation()');

        $('.scott_menu_btn').click(function(e){
            e.preventDefault();
            $('#scott_side_menu').toggleClass('menu_out');
            $('#scott_side_menu_cover').toggleClass('menu_out');
        });

        $("#scott_side_menu").css({'top': $("#scott_top_menu").outerHeight(true)});

        // PT.log('PT.makeSticky() ' + item, 'green');

        var thisItem = $(".theme-home").find("#scott_site_navigation");
        // var thisData = thisItem.data('pt-sticky');
        // var thisOffset = thisData.offset;

        var scene1 = new ScrollMagic.Scene({
            triggerElement: thisItem
            ,triggerHook: 'onLeave'
        })
        .setPin(thisItem, {pushFollowers: false})
        .setClassToggle(thisItem, "isStuck")
        .addTo(PT.SM_CTRL);

        scene1.offset($('.scott_logo-lg').outerHeight(true));
        // scene1.addIndicators({name:"#scott_site_navigation " + thisItem });

        $(window).resize( function(){
            if( scene1.state() === "DURING") {
                TweenMax.set(thisItem, {width:'100%'} );
            }
        });







    }


    ,buildRodNav: function() {
        console.log('buildSitebuildRodNavNavigation()');
        // scrollX-btn

    }




};








// $(document).ready(function($) {
//   $('[data-accordion]').find('[data-accordion-button]').click(function(){
//
//     $(this).toggleClass('active');
//     //Expand or collapse this panel
//     $(this).next().slideToggle('fast');
//
//     //Hide the other panels
//     $("[data-accordion-content]").not($(this).next()).slideUp("slow");
//
//   });
//
//   $("[data-accordion-content]").slideUp(0);
//
// });



// $('[data-accordion]').find('[data-accordion-button]').each(function(i, val){
$('[data-accordion]').each(function(ii, valval){

    var thisAccordion = $(this);
    // $(this).find('[data-accordion-content]').
    $(this).find('[data-accordion-button]').each(function(i, val){

        var aaBtn = $(this);
        var aaContentId = aaBtn.data('accordion-button').toString();
        var aaContent = $(aaContentId);
        // console.log(aaBtn, aaContentId);

        if (aaContent.hasClass('active')){
            aaContent.slideDown();
            // aBtn.removeClass('active');
        } else {
            aaContent.slideUp();
            // aBtn.addClass('active');
        }


        $(this).click(function(e){
            var aBtn = $(this);
            var aContentId = aBtn.data('accordion-button').toString();
            var aContent = $(aContentId);
            console.log(aBtn, aContentId);


            if (aContent.hasClass('active')){
                aContent.removeClass('active').slideUp();
                aBtn.removeClass('active');
            } else {
                aContent.addClass('active').slideDown();
                aBtn.addClass('active');
            }

        });

        // $(this).click(function(e){
        //     console.log('panel', panel);
        //     // if (panel.hasClass('active')){
        //     if (panel.style.maxHeight){
        //         panel.removeClass('active');
        //         panel.style.maxHeight = null;
        //     } else {
        //         panel.addClass('active');
        //         panel.style.maxHeight = panel.scrollHeight + "px";
        //     }
        // });

    });

});
