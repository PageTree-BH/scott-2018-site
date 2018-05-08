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

        SITE.buildHomePlate();

    }

    ,buildHomePlate: function() {
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
    }

    ,buildSiteNavigation: function() {

        $('#scott_menu_btn').click(function(e){
            e.preventDefault();
            $('#scott_side_menu').toggleClass('menu_out');
        });


        $("#scott_side_menu").css({'top': $("#scott_top_menu").outerHeight(true)});


        // PT.log('PT.makeSticky() ' + item, 'green');

        var thisItem = $("#scott_site_navigation");
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



// console.log('!!!!!!!!!!! ', $('.scott_logo-lg').outerHeight(true));


        $(window).resize( function(){
            if( scene1.state() === "DURING") {
                TweenMax.set(thisItem, {width:'100%'} );
            }
        });

    }


};
