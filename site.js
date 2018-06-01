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
});






var SITE = {

    _VAR:''

    ,init: function() {

        // console.log('SITE.init()');

        // PT.monitorFPS();

        // PT.addRandomClass('.homeplate', ['bg-r1', 'bg-r2', 'bg-r3']);

        SITE.buildSiteNavigation();

        // SITE.buildHomePlate();













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

    // ,buildHomePlate: function() {
        // console.log('buildHomePlate()');
        // $("#homeplate_slick-imgs").slick({
        //         fade: true,
        //         dots: true,
        //         arrows: true,
        //         infinite: true,
        //         autoplaySpeed: 3000,
        //         speed: 1000,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         autoplay: true
        //         // asNavFor: '#homeplate_slick-titles',
        //     })

        // $("#homeplate_slick-titles").slick({
        //         fade: true,
        //         dots: true,
        //         arrows: true,
        //         infinite: true,
        //         autoplaySpeed: 3000,
        //         speed: 1000,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         autoplay: true,
        //         asNavFor: '#homeplate_slick-imgs',
        //     })
    // }

    ,
    buildSiteNavigation: function() {
        console.log('buildSiteNavigation()');

        $('#scott_menu_btn').click(function(e){
            e.preventDefault();
            $('#scott_side_menu').toggleClass('menu_out');
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
