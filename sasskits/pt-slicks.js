



// THIS IS A WAY TO ADD A NEW FUNCTION / METHOD / VARIABLES OR WHATEVER TO THE NWG OBJECT.








$(function() {


    // $('.homeplate').on('click', function(e){
    //     e.preventDefault();
    //     PT.helloTest();
    // });

    PT.buildSlicks();
});







// PT.helloTest = function() {
//     console.log('helloTest()');
// },







/*
    ########  ##     ## #### ##       ########      ######  ##       ####  ######  ##    ##  ######
    ##     ## ##     ##  ##  ##       ##     ##    ##    ## ##        ##  ##    ## ##   ##  ##    ##
    ##     ## ##     ##  ##  ##       ##     ##    ##       ##        ##  ##       ##  ##   ##
    ########  ##     ##  ##  ##       ##     ##     ######  ##        ##  ##       #####     ######
    ##     ## ##     ##  ##  ##       ##     ##          ## ##        ##  ##       ##  ##         ##
    ##     ## ##     ##  ##  ##       ##     ##    ##    ## ##        ##  ##    ## ##   ##  ##    ##
    ########   #######  #### ######## ########      ######  ######## ####  ######  ##    ##  ######
*/

PT.buildSlicks = function() {

    PT.log('buildSlicks()');







    /*

        ########   #######  ##      ##
        ##     ## ##     ## ##  ##  ##
        ##     ## ##     ## ##  ##  ##
        ########  ##     ## ##  ##  ##
        ##   ##   ##     ## ##  ##  ##
        ##    ##  ##     ## ##  ##  ##
        ##     ##  #######   ###  ###

        <ul data-pt-slick-single data-pt-imgswap-list>
            <li><img src="http://lorempixel.com/400/200/abstract/1"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/2"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/3"></li>
        </ul>

        <ul data-pt-slick-single >
            <li><img src="http://lorempixel.com/400/200/abstract/4"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/5"></li>
            <li><img src="http://lorempixel.com/400/200/abstract/6"></li>
        </ul>

    */

    var _defaultSlick_Row = {
        dots: true,
        arrows: true,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
        draggable:true,
        nextArrow: '<button class="pt-slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button class="pt-slick-prev"><i class="fa fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3
                }
            }
            ,{
                breakpoint: 992,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 3
                }
            }
            ,{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 4
                }
            }
            ,{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 4
                }
            }
        ]
    }





    $('[data-pt-slick-row]').each(function(index) {


        // var _s1 = $('this').data('pt-slick-row') || {};
        var _data = $(this).data('pt-slick-row') || {} ;

        console.log(    _data     );

        // Merge object2 into object1
        $.extend( _defaultSlick_Row, _data );

        $(this).slick(_defaultSlick_Row);


    });








    /*
         ######  #### ##    ##  ######   ##       ########
        ##    ##  ##  ###   ## ##    ##  ##       ##
        ##        ##  ####  ## ##        ##       ##
         ######   ##  ## ## ## ##   #### ##       ######
              ##  ##  ##  #### ##    ##  ##       ##
        ##    ##  ##  ##   ### ##    ##  ##       ##
         ######  #### ##    ##  ######   ######## ########
    */

    var _defaultSlick_Single = {
            fade: true,
            dots: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: 3000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow: '<button class="pt-slick-next"><i class="fa fa-angle-right"></i></button>',
            prevArrow: '<button class="pt-slick-prev"><i class="fa fa-angle-left"></i></button>'
        }


    $('[data-pt-slick-single]').each(function(i, val){

        var _newData = $(this).data('pt-slick-single') || {} ;


        var _copiedData = jQuery.extend({}, _defaultSlick_Single)

        // var _blankData = {} ;
        // var _defaultData  = _defaultSlick_Single.clone();

        // var _copiedData = jQuery.extend(true, {}, _defaultSlick_Single);
        // var _copiedData = $.extend(_defaultSlick_Single, _newData);



        console.log('single ');
        console.log(_newData );
        // console.log(_copiedData );

        // Merge object2 into object1
        $.extend( _copiedData, _newData );

        $(this).slick(_copiedData);

    });









    /*
        ########     ###    ##    ## ########   #######  ##     ##
        ##     ##   ## ##   ###   ## ##     ## ##     ## ###   ###
        ##     ##  ##   ##  ####  ## ##     ## ##     ## #### ####
        ########  ##     ## ## ## ## ##     ## ##     ## ## ### ##
        ##   ##   ######### ##  #### ##     ## ##     ## ##     ##
        ##    ##  ##     ## ##   ### ##     ## ##     ## ##     ##
        ##     ## ##     ## ##    ## ########   #######  ##     ##
    */

    var _defaultSlick_Random = {
            fade: true,
            dots: false,
            arrows: false,
            autoplay: false,
            swipe:false,
            draggable:false,
            swipeToSlide:false,
            touchMove:false,
            lazyLoad: "ondemand",
            nextArrow: '<button class="pt-slick-next"><i class="fa fa-angle-right"></i></button>',
            prevArrow: '<button class="pt-slick-prev"><i class="fa fa-angle-left"></i></button>',
            // lazyLoad: "progressive",
            // infinite: true,
            // autoplaySpeed: 3000,
            // speed: 1000,
            // slidesToScroll: 1,
            slidesToShow: 1
        }

    $('[data-pt-slick-random]').each(function(i, val){
        console.log('random ');

        var _newData = $(this).data('pt-slick-single') || {} ;
        var _copiedData = jQuery.extend({}, _defaultSlick_Random)

        // var _rn_ = Math.floor(Math.random() * 6) + 1
        // var _rn_ = Math.floor( Math.random() * $(this).children("li").length - 1);
        var _rn_ = Math.floor( Math.random() * $(this).children().length - 1);

        var _random = { "initialSlide": _rn_ }

        $.extend( _copiedData, _newData, _random );
        // $.extend( _copiedData, _newData );
        // $.extend( _copiedData, _random );


        $(this).slick(_copiedData);

    });




















};
// PT.buildSlicks();
