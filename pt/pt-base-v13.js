
// Custom JS Application Code

// If using JSLint for syntax debugging, include the following

/*
    global
    PT:true,
    SITE:true,
    TimelineMax:true,
    TweenMax:true,
    TweenLite:true,
    SplitText:true,
    Linear:true,
    Elastic:true,
    Power1:true,
    Power2:true,
    Power3:true,
    Power4:true,
    Bounce:true,
    ScrollMagic:true,
    FastClick:true,
    enquire:true,
    Justice:true,
    ScrollMagic:true,
    Modernizr:true,
    PT_UTILS:true,
    jQuery:true,
    ssm:true
*/



// @codekit-prepend "pt-base-lib-bundle-v9.js"

// @codekit-append "../sasskits/pt-slicks.js"
//
// @codekit-append "../sasskits/pt-homeplate.js"
// @codekit-append "../sasskits/pt-pinunpin.js"






$(function() {
    PT.init();
});





/*

    ########  ########
    ##     ##    ##
    ##     ##    ##
    ########     ##
    ##           ##
    ##           ##
    ##           ##

    ==========================================
    ==========================================

 */

var PT = {

	_SETTINGS: {
		name: "pt-base-v13.js",
		version: "13.0.0",
		url: "pt base 13 "
	}
 

    ,_isDevMode : true


    // SIMPLE STATE MANAGER.js
    ,_SSM: ssm


    // xs,sm,md,lg,xl
    ,_Size:'xs'


    // THIS IS THE GLOBAL SCROLLMAGIC CONTROLLER FOR ALL SCROLLING INTERACTION IN THIS FILE:
    ,SM_CTRL: new ScrollMagic.Controller()



	,init: function() {
        PT.log(this._SETTINGS.name + "(v" + this._SETTINGS.version + ") Started");

        $('html').addClass('pt-yes');


        // ADDS BREAKPOINT SIZE INDICATOR :
        $('body').prepend('<div class="pt-sizer"></div>');

        // PT.monitorFPS();

        PT.checkPreloader();

        PT.fastClick();

        PT.buildSSM();

        PT.runStickies();

        PT.runImgSwaps();

        PT.buildTransitions(true);

        PT.buildNavSpy();

        PT.buildSIDR();

        PT.buildTopBar();

    }
















/*

    ##        #######   ######
    ##       ##     ## ##    ##
    ##       ##     ## ##
    ##       ##     ## ##   ####
    ##       ##     ## ##    ##
    ##       ##     ## ##    ##
    ########  #######   ######

    =========================================
    =========================================

 */

    ,log: function(_data_, _color_){

        if(PT._isDevMode){

            var arg = [''];
            var textArr = _data_;
            var ratio = 360 / textArr.length;

            // console.log('_color_ = ' + _color_);

            var thisColor = 'green';

            if(_color_ === 'undefined'){
            }else{
                thisColor = _color_;
            }

            arg[0] += '%c' + textArr;

            arg.push( 'color: ' + thisColor );

            console.log.apply(console, arg);

        }else{
            // console.log("ooooooh, I am sorry, but we are in dev mode.");
        }

    }




















/*

     #######  ##    ##    ##        #######     ###    ########
    ##     ## ###   ##    ##       ##     ##   ## ##   ##     ##
    ##     ## ####  ##    ##       ##     ##  ##   ##  ##     ##
    ##     ## ## ## ##    ##       ##     ## ##     ## ##     ##
    ##     ## ##  ####    ##       ##     ## ######### ##     ##
    ##     ## ##   ###    ##       ##     ## ##     ## ##     ##
     #######  ##    ##    ########  #######  ##     ## ########

    ============================================================
    ============================================================

    // THIS IS A WAY TO ADD MULTIPLE window.onload FUNCTIONS PER PAGE.
 */

    ,onLoadFuncs:[]

    ,addOnLoad: function(func) {
        //console.log('adding func to onLoadFuncs[]');
        // //console.log(func);
        PT.onLoadFuncs.push(func);

        window.onload = function() {
            //console.log('!!! ON LOAD !!!');

            for (var i = 0; i < PT.onLoadFuncs.length; i++) {
                var f = PT.onLoadFuncs[i];
                f();
            }

        };

    }























/*

    ########  ########  ######## ##        #######     ###    ########  ######## ########
    ##     ## ##     ## ##       ##       ##     ##   ## ##   ##     ## ##       ##     ##
    ##     ## ##     ## ##       ##       ##     ##  ##   ##  ##     ## ##       ##     ##
    ########  ########  ######   ##       ##     ## ##     ## ##     ## ######   ########
    ##        ##   ##   ##       ##       ##     ## ######### ##     ## ##       ##   ##
    ##        ##    ##  ##       ##       ##     ## ##     ## ##     ## ##       ##    ##
    ##        ##     ## ######## ########  #######  ##     ## ########  ######## ##     ##

    ======================================================================================
    ======================================================================================

 */

    ,checkPreloader:function(){
        // PT.log('PT.checkPreloader()', 'orange');

        var _pl = $('.pt-preloader');

        if(_pl.length){

            _pl.css({'display':'flex'});

            PT.addOnLoad(
                fadePreloader
            );

        }else{
            PT.log('there was no preloader');
        }

        function fadePreloader(){
            TweenMax.to(_pl, 0.3, {autoAlpha:0, onComplete:function(){
                _pl.css({'display':'none'});
            }});
        }

    }






















/*

    ########  ##     ## #### ##       ########         ######   ######  ##     ##
    ##     ## ##     ##  ##  ##       ##     ##       ##    ## ##    ## ###   ###
    ##     ## ##     ##  ##  ##       ##     ##       ##       ##       #### ####
    ########  ##     ##  ##  ##       ##     ##        ######   ######  ## ### ##
    ##     ## ##     ##  ##  ##       ##     ##             ##       ## ##     ##
    ##     ## ##     ##  ##  ##       ##     ##       ##    ## ##    ## ##     ##
    ########   #######  #### ######## ########         ######   ######  ##     ##

    =============================================================================
    =============================================================================

    BUILD SIMPLE STATE MANAGER

 */

    ,buildSSM: function() {
        PT._SSM.addStates([
            {
                id: 'xs',
                query: '(min-width: 300px) and (max-width: 768px)',
                onEnter: function(){
                    PT.log('~ xs', 'green');
                    PT._Size = 'xs';
                    // PT.runImgSwapUploadCareResponsive();
                }
            },
            {
                id: 'sm',
                query: '(min-width: 768px) and (max-width: 992px)',
                onEnter: function(){
                    PT.log('~ sm', 'green');
                    PT._Size = 'sm';
                    // PT.runImgSwapUploadCareResponsive();
                }
            },
            {
                id: 'md',
                query: '(min-width: 992px) and (max-width: 1200px)',
                onEnter: function(){
                    PT.log('~ md', 'green');
                    PT._Size = 'md';
                    // PT.runImgSwapUploadCareResponsive();
                }
            },
            {
                id: 'lg',
                query: '(min-width: 1200px) and (max-width: 1500px)',
                onEnter: function(){
                    PT.log('~ lg', 'green');
                    PT._Size = 'lg';
                    // PT.runImgSwapUploadCareResponsive();
                }
            }
            ,{
                id: 'xl',
                query: '(min-width: 1500px)',
                onEnter: function(){
                    PT.log('~ lg', 'green');
                    PT._Size = 'xl';
                    // PT.runImgSwapUploadCareResponsive();
                }
            }
        ]);
    }
























/*

    ##     ##    ###    ##    ## ########        ######  ######## ####  ######  ##    ## ##    ##
    ###   ###   ## ##   ##   ##  ##             ##    ##    ##     ##  ##    ## ##   ##   ##  ##
    #### ####  ##   ##  ##  ##   ##             ##          ##     ##  ##       ##  ##     ####
    ## ### ## ##     ## #####    ######          ######     ##     ##  ##       #####       ##
    ##     ## ######### ##  ##   ##                   ##    ##     ##  ##       ##  ##      ##
    ##     ## ##     ## ##   ##  ##             ##    ##    ##     ##  ##    ## ##   ##     ##
    ##     ## ##     ## ##    ## ########        ######     ##    ####  ######  ##    ##    ##

    =============================================================================================
    =============================================================================================

    <section data-pt-sticky>
    <section data-pt-sticky='{"offset":"#pt-topbar"}' >
    <section data-pt-sticky='{"offset":"-100"}' >
    <section data-pt-sticky='{"offset":"#pt-topbar", "offset2":"-50" }' >
    <section data-pt-sticky='{"offset":"#pt-topbar", "offset2":".pt-quick-contact", "duration":"150"}' >
    <section data-pt-sticky='{"offset":"#pt-topbar", "offset2":".pt-quick-contact", "duration":".other-class"}' >


    <section data-pt-sticky='{ "fullWidth":true }' >
*/



    ,runStickies:function(){

        $('[data-pt-sticky]').each(function(i, val){
            PT.makeSticky( $(this) );
        });

    }


    ,makeSticky: function(item){
        PT.log('PT.makeSticky() ' + item, 'green');

        var thisItem = $(item);
        var thisData = thisItem.data('pt-sticky');
        // var thisOffset = thisData.offset;

        var scene1 = new ScrollMagic.Scene({
            triggerElement: item
            ,triggerHook: 'onLeave'
        })
        .setPin(item, {pushFollowers: false})
        .setClassToggle(thisItem, "isStuck")
        .addTo(PT.SM_CTRL);



        if( thisData.offset != undefined){
            if( $.isNumeric( thisData.offset ) ){
                scene1.offset( thisData.offset );
            }else{
                scene1.offset( - $( thisData.offset ).height() );
            }
        }

        if( thisData.offset2 != undefined){
            if( $.isNumeric( thisData.offset2 ) ){
                scene1.offset( parseInt(scene1.offset() ) + parseInt(thisData.offset2) );
            }else{
                scene1.offset( parseInt( scene1.offset() ) + (- parseInt( $( thisData.offset2 ).height()) ) );
            }
        }

        if( thisData.duration != undefined){
            if( $.isNumeric( thisData.duration ) ){
                scene1.duration( thisData.duration );
            }else{
                scene1.duration( $( thisData.duration ).height()  );
            }
        }

        if(PT._isDevMode){
            // .addIndicators({name:"pt-spy-to " +SpyZoneID, indent:100})
            scene1.addIndicators({name:"PT.makeSticky " + thisItem });
        }

        if( thisData.fullWidth ){

            // console.log(scene1.state());
            $(window).resize( function(){
                if( scene1.state() === "DURING") {
                    TweenMax.set(thisItem, {width:'100%'} );
                }
            });
        }

    }



























/*

    ##    ##    ###    ##     ##        ######  ########  ##    ##
    ###   ##   ## ##   ##     ##       ##    ## ##     ##  ##  ##
    ####  ##  ##   ##  ##     ##       ##       ##     ##   ####
    ## ## ## ##     ## ##     ##        ######  ########     ##
    ##  #### #########  ##   ##              ## ##           ##
    ##   ### ##     ##   ## ##         ##    ## ##           ##
    ##    ## ##     ##    ###           ######  ##           ##

    ==============================================================
    ==============================================================


    li{
        &.active{
            a{
                color:white;
                background-color:$pt-color-primary;
                &:hover, &:focus, &:active, &:focus:hover{
                    // color:$pt-color-primary;
                    background-color:lighten($pt-color-primary, 5%);
                }
            }
        }
        a{
            color:$pt-color-primary;
            &:hover, &:focus, &:active, &:focus:hover{
                color:white;
                background-color:$pt-color-primary;
            }
        }
    }

    <div class="testyspy">
        <ul class="nav" data-pt-spy >
            <li><a data-pt-spy-to="#section-intro"   data-pt-spy-offset="#sitenav"  href="#section-intro">intro</a></li>
            <li><a data-pt-spy-to="#section-truck"   data-pt-spy-offset="#sitenav"  href="#section-truck">truck</a></li>
            <li><a data-pt-spy-to="#section-brands"  data-pt-spy-offset="#sitenav"  href="#section-brands">brands</a></li>
            <li><a                                   href="other-page/">no spy</a></li>
        </ul>
    </div>

*/


    ,buildNavSpy: function() {

        // WE MUST WAIT UNTIL THE CONTENT IS DONE LOADING BEFORE
        // CALCULATING THE HEIGHTS OF THE SCROLL SPY SECTIONS:
        PT.addOnLoad(
           doNow
        );

        function doNow(){


            // var _triggerHook =  ( SITE._QuickContact.outerHeight() + SITE._SITE_NAV.outerHeight() )  / $(window).height() ;
            // var _triggerHook =  ( SITE._SITE_NAV.outerHeight() )  / $(window).height() ;

            // SCROLL SPY USING SCROLLMAGIC:
            $('[data-pt-spy]').each(function (index, element){
                PT.log('PT.buildNavSpy() { doNow() ' + $(element), 'green');

                $(element).find($('[data-pt-spy-to]')).each(function (index, element){

                    var SpyZoneID = $(element).data('pt-spy-to');

                    var SpyZone = $(SpyZoneID);

                    var SpyNavItem = $(element).parent();



// add option for spy-offset as a number.
                    var ScrollToOffsetID = $(element).data('pt-spy-offset');
                    var ScrollToOffsetNumber = $(ScrollToOffsetID).outerHeight(true);





                    if($(SpyZone).length){

                        var sm_scene = new ScrollMagic.Scene()
                                        .triggerElement(SpyZoneID)
                                        .setClassToggle(SpyNavItem, "active") // add class toggle
                                        .triggerHook(0.2)
                                        // .trigger('hello')
                                        // DURATION IS THE HEIGHT OF THE ANCHORED ZONE
                                        .duration($(SpyZoneID).outerHeight())
                                        // .addIndicators({name:"pt-spy-to " +SpyZoneID, indent:100}) // add indicators (requires plugin)
                                        .addTo(PT.SM_CTRL);


                        if(!PT.isDevMode){
                            sm_scene.addIndicators({name:"pt-spy-to "+SpyZoneID, indent:100})
                        }



                        // var spyToNumber = (SpyZone.offset().top - SITE._QuickContact.outerHeight() - SITE._SITE_NAV.outerHeight()) + 1 ;
                        var spyToNumber = (SpyZone.offset().top) ;

                        SpyZone.attr( 'data-pt-spy-me', spyToNumber );

                    }else{
                        //console.log('There is no matching anchor id for the SpyZone ' + SpyLink);
                    }


                    // ANIMATE TO POSITION WHEN CLICKED
                    $(element).on('click', function(e) {
                        // prevent default anchor click behavior
                        e.preventDefault();

                        var offSet = $(this.hash).offset();
                        var smsTo = $(this.hash).data('pt-spy-me');

                        if (offSet !== undefined){
                            if( ScrollToOffsetNumber === null ){
                                // console.log('null');
                                TweenMax.to(window, 0.5, { scrollTo:{ y:smsTo }, ease:Power4.easeInOut } );
                            }else{
                                // console.log('not null');
                                TweenMax.to(window, 0.5, { scrollTo:{ y:smsTo-ScrollToOffsetNumber }, ease:Power4.easeInOut } );
                            }

                        }

                    });

                });

            });

        }

    }






























/*

    #### ##     ##    ###     ######   ########
     ##  ###   ###   ## ##   ##    ##  ##
     ##  #### ####  ##   ##  ##        ##
     ##  ## ### ## ##     ## ##   #### ######
     ##  ##     ## ######### ##    ##  ##
     ##  ##     ## ##     ## ##    ##  ##
    #### ##     ## ##     ##  ######   ########


     ######  ##      ##    ###    ########
    ##    ## ##  ##  ##   ## ##   ##     ##
    ##       ##  ##  ##  ##   ##  ##     ##
     ######  ##  ##  ## ##     ## ########
          ## ##  ##  ## ######### ##
    ##    ## ##  ##  ## ##     ## ##
     ######   ###  ###  ##     ## ##

    ======================================================
    ======================================================

    COPIES IMG SRC INTO CSS BACKGROUND-IMAGE

 */

    ,imgSwap: function(_img, _div) {
        // PT.log('PT.imgSwap()');
        var IMG = _img;
        var DIV = _div;
        var IMGurl = IMG.attr('src');

        IMG.css('display', 'none');
        // IMG.css('visibility', 'hidden');

        DIV.css('background-image', 'url("'+IMGurl+'")' )
            .css('background-size', 'cover')
            .css('background-position','center');

    }


    // RUNS PT.imgSwap ON A PRESET BUNCH OF CLASSSES;
    ,runImgSwaps: function() {
        PT.log('PT.runImgSwaps() { ', 'green');

        /*
            <div data-pt-imgswap ><img src="http://placehold.it/500x300/?text=Img 4b "></div>
        */
        $('[data-pt-imgswap]').each(function(i, val){
            PT.imgSwap( $(val).find('img:first'), $(val) );
        });


        /*
            <ul data-pt-imgswap-list>
                <li><img src="http://placehold.it/500x300/?text=Img 4b "></li>
                <li><img src="http://placehold.it/500x300/?text=Img 5b "></li>
                <li><img src="http://placehold.it/500x300/?text=Img 6b"></li>
            </ul>
        */
        $('ul[data-pt-imgswap-list] li').each(function(i, val){
            console.log('ul[data-pt-imgswap-list] > li');
            PT.imgSwap( $(val).find('img:first'), $(val) );
        });


        /*
            <div data-pt-imgswap-list>
                <div><img src="http://placehold.it/500x300/?text=Img 4b "></div>
                <div><img src="http://placehold.it/500x300/?text=Img 5b "></div>
                <div><img src="http://placehold.it/500x300/?text=Img 6b "></div>
            </div>
        */
        $('div[data-pt-imgswap-list] > div').each(function(i, val){
            console.log('div[data-pt-imgswap-list] > div');
            PT.imgSwap( $(val).find('img:first'), $(val) );
        });

    }

































/*

    ##     ## ########  ##        #######     ###    ########         ######     ###    ########  ########
    ##     ## ##     ## ##       ##     ##   ## ##   ##     ##       ##    ##   ## ##   ##     ## ##
    ##     ## ##     ## ##       ##     ##  ##   ##  ##     ##       ##        ##   ##  ##     ## ##
    ##     ## ########  ##       ##     ## ##     ## ##     ##       ##       ##     ## ########  ######
    ##     ## ##        ##       ##     ## ######### ##     ##       ##       ######### ##   ##   ##
    ##     ## ##        ##       ##     ## ##     ## ##     ##       ##    ## ##     ## ##    ##  ##
     #######  ##        ########  #######  ##     ## ########         ######  ##     ## ##     ## ########


    #### ##     ##    ###     ######   ########           ######  ##      ##    ###    ########
     ##  ###   ###   ## ##   ##    ##  ##                ##    ## ##  ##  ##   ## ##   ##     ##
     ##  #### ####  ##   ##  ##        ##                ##       ##  ##  ##  ##   ##  ##     ##
     ##  ## ### ## ##     ## ##   #### ######             ######  ##  ##  ## ##     ## ########
     ##  ##     ## ######### ##    ##  ##                      ## ##  ##  ## ######### ##
     ##  ##     ## ##     ## ##    ##  ##                ##    ## ##  ##  ## ##     ## ##
    #### ##     ## ##     ##  ######   ########           ######   ###  ###  ##     ## ##

    ======================================================================================================
    ======================================================================================================

    // data-pt-imgswap-ucr (-ucr = Upload Care Responsive)

    //<div class="testy" data-pt-imgswap-ucr=''>
    //<div class="testy" data-pt-imgswap-ucr='{"md":"-/resize/1000x/-/blur/30/", "lg":"-/resize/1200x/", "xl":"-/resize/2000x/"}'>

    <div class="testy" data-pt-imgswap-ucr='{"xs":"-/resize/400x/", "sm":"-/resize/600x/", "md":"-/resize/1000x/", "lg":"-/resize/1200x/", "xl":"-/resize/1800x/"}'>
        <img src="https://ucarecdn.com/32badcc5-bd4f-4473-9c17-385a3bd2ecd5/" alt="">
    </div>


    //IN THE CMS:
    <div class="testy" data-pt-imgswap-ucr >
       <div class="image-editor"></div>
    </div>

*/



    // RUNS PT.imgSwap ON A PRESET BUNCH OF CLASSSES;
    ,runImgSwapUploadCareResponsive: function() {
        // PT.log('PT.runImgSwapUploadCareResponsive()');

        $('[data-pt-imgswap-ucr]').each(function(i, val){
            // check the data attribute value and pass it along to the imgSwap function.
            // var _bgStyle = ;// 'cover' / 'contain' /
            PT.imgSwapUploadCareResponsive( $(val).find('img:first'), $(val) );
            // console.log($(val).data('pt-imgswap-ucr').xs);
        });
    }



    ,imgSwapUploadCareResponsive: function(_img, _div) {

        PT.log('PT.imgSwapResponsive()');

        var IMG = _img;
        var DIV = _div;
        var IMGurl = IMG.attr('src');


        IMG.css('display', 'none');

        if(PT._Size === 'xs'){
            if(DIV.data('pt-imgswap-ucr').xs !== undefined){
                IMGurl += (DIV.data('pt-imgswap-ucr').xs);
            }else{
                IMGurl += ("-/resize/400x/-/effect/grayscale/");
            }
        }
        if(PT._Size === 'sm'){
            if(DIV.data('pt-imgswap-ucr').sm !== undefined){
                IMGurl += (DIV.data('pt-imgswap-ucr').sm);
            }else{
                IMGurl += ("-/resize/800x/-/effect/grayscale/");
            }
        }
        if(PT._Size === 'md'){
            if(DIV.data('pt-imgswap-ucr').md !== undefined){
                IMGurl += (DIV.data('pt-imgswap-ucr').md);
            }else{
                IMGurl += ("-/resize/1000x/-/effect/grayscale/");
            }
        }
        if(PT._Size === 'lg'){
            if(DIV.data('pt-imgswap-ucr').lg !== undefined){
                IMGurl += (DIV.data('pt-imgswap-ucr').lg);
            }else{
                IMGurl += ("-/resize/1400x/-/effect/grayscale/");
            }
        }
        if(PT._Size === 'xl'){
            if(DIV.data('pt-imgswap-ucr').xl !== undefined){
                IMGurl += (DIV.data('pt-imgswap-ucr').xl);
            }else{
                IMGurl += ("-/resize/1800x/-/effect/grayscale/");
            }
        }

        if(DIV.data('pt-imgswap-ucr') === '' || DIV.data('pt-imgswap-ucr') === ' ' || DIV.data('pt-imgswap-ucr') === 'default' || DIV.data('pt-imgswap-ucr') === undefined){
            // PT.log('?~? zilcho');
        }else{
            // PT.log('?~? ' + DIV.data('pt-imgswap-ucr'));
        }

        // PT.log('???? ' + $(DIV.data('pt-imgswap-ucr')).length);

        PT.log(IMGurl);

        DIV.css('background-image', 'url("'+IMGurl+'")' )
            .css('background-size', 'cover')
            .css('background-position','center');

    }































/*

    ########  ##     ## #### ##       ########
    ##     ## ##     ##  ##  ##       ##     ##
    ##     ## ##     ##  ##  ##       ##     ##
    ########  ##     ##  ##  ##       ##     ##
    ##     ## ##     ##  ##  ##       ##     ##
    ##     ## ##     ##  ##  ##       ##     ##
    ########   #######  #### ######## ########


    ######## ########     ###    ##    ##  ######  #### ######## ####  #######  ##    ##  ######
       ##    ##     ##   ## ##   ###   ## ##    ##  ##     ##     ##  ##     ## ###   ## ##    ##
       ##    ##     ##  ##   ##  ####  ## ##        ##     ##     ##  ##     ## ####  ## ##
       ##    ########  ##     ## ## ## ##  ######   ##     ##     ##  ##     ## ## ## ##  ######
       ##    ##   ##   ######### ##  ####       ##  ##     ##     ##  ##     ## ##  ####       ##
       ##    ##    ##  ##     ## ##   ### ##    ##  ##     ##     ##  ##     ## ##   ### ##    ##
       ##    ##     ## ##     ## ##    ##  ######  ####    ##    ####  #######  ##    ##  ######

    =============================================================================================
    =============================================================================================


    <div data-pt-transition="slide-from-left">
    <div data-pt-transition="slide-from-right">
    <div data-pt-transition="slide-from-top">
    <div data-pt-transition="slide-from-bottom">
    <div data-pt-transition="fade-in">

 */

    ,buildTransitions: function(_DURATION) {
        // PT.log('PT.buildTransitions()', 'green');

        if ( (PT.getSize() === 'md') || (PT.getSize() === 'lg') || (PT.getSize() === 'xl') ) {
            PT.addOnLoad(
               doNow
            );
        }


        // WE MUST WAIT UNTIL THE CONTENT IS DONE LOADING BEFORE CALCULATING THE HEIGHTS OF THE SCROLL SPY SECTIONS:
        function doNow(){
            PT.log('PT.buildTransitions() { doNow() ', 'green');

            var _D_ = typeof _DURATION !== 'undefined' ? _DURATION : false;

            var H = $(window).height();


            var SLIDE_FromRight     = [];
            var SLIDE_FromLeft      = [];
            var SLIDE_FromBottom    = [];
            var SLIDE_FromTop       = [];
            var FADE_In             = [];
            var ZOOM_In             = [];



            // CHECK THE PAGE FOR ELEMENTS AND LOAD THEM IN THE ARRAYS FOR BUILD:
            $('[data-pt-transition]').each(function(i, val){

                var transitionType = $(this).data('pt-transition');

                switch(transitionType) {

                    case "slide-from-right":
                        SLIDE_FromRight.push(this);
                        break;

                    case "slide-from-left":
                        SLIDE_FromLeft.push(this);
                        break;

                    case "slide-from-top":
                        SLIDE_FromTop.push(this);
                        break;

                    case "slide-from-bottom":
                        SLIDE_FromBottom.push(this);
                        break;

                    case "fade-in":
                        FADE_In.push(this);
                        break;

                    case "zoom-in":
                        ZOOM_In.push(this);
                        break;

                    default:
                        // default
                        break;
                }

            });


            // LOOP THROUGH EACH ARRAY OF ELEMENTNS AND BUILD

            // <div data-pt-transition="slide-from-left">
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // for (var i2=0; i2 < SLIDE_FromLeft.length; i2++){
            $(SLIDE_FromLeft).each(function(i, _thing_){

                $(_thing_).parent().css({'overflow-x':'hidden'});

                // var tweenFromLeft = new TweenMax.from(SLIDE_FromLeft[i2], 1, {alpha:0, x:'-=50', ease:Power1.easeOut} );
                var tweenFromLeft = new TweenMax.fromTo(_thing_, 1, {alpha:0, x:'-=50'}, {alpha:1, x:'0', ease:Power1.easeOut} );

                var scene_fromLeft = new ScrollMagic.Scene({
                // var SM_Scene = new ScrollMagic.Scene({
                    triggerElement: _thing_
                    ,triggerHook:0.9
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(false)
                // .addIndicators()
                .setTween(tweenFromLeft);

                if(_D_){
                    scene_fromLeft.reverse(true);
                    scene_fromLeft.duration(H/2);
                }else{
                    // MAYBE THIS SHOULD BE DESTROYED AFTER IT RUNS
                    // scene_fromLeft.on('end', function(e){scene_fromLeft.destroy()} );
                }
            });


            // <div data-pt-transition="slide-from-right">
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // for (var i1=0; i1 < SLIDE_FromRight.length; i1++){
            $(SLIDE_FromRight).each(function(i, _thing_){

                $(_thing_).parent().css({'overflow-x':'hidden'});

                // var tweenFromRight = new TweenMax.from(SLIDE_FromRight[i1], 1, {alpha:0, x:'+=50', ease:Power1.easeOut} );
                var tweenFromRight = new TweenMax.fromTo(_thing_, 1, {alpha:0, x:'+=50'}, {alpha:1, x:'0', ease:Power1.easeOut} );

                var scene_fromRight = new ScrollMagic.Scene({
                    triggerElement: _thing_
                    ,triggerHook:0.9
                })
                .addTo(PT.SM_CTRL)
                .reverse(false)
                .setTween(tweenFromRight);

                if(_D_){
                    scene_fromRight.reverse(true);
                    scene_fromRight.duration(H/2);
                }
            });


            // <div data-pt-transition="slide-from-bottom">
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // for (var i3=0; i3 < SLIDE_FromBottom.length; i3++){
            $(SLIDE_FromBottom).each(function(i, _thing_){

                $(_thing_).parent().css({'overflow-y':'hidden'});

                // var tweenFromBottom = new TweenMax.from(SLIDE_FromBottom[i3], 1, {alpha:0, y:'+=50', ease:Power1.easeOut} );
                var tweenFromBottom = new TweenMax.fromTo(_thing_, 1, {alpha:0, y:'+=50'}, {alpha:1, y:'0', ease:Power1.easeOut} );

                var scene_fromBottom = new ScrollMagic.Scene({
                    triggerElement: _thing_
                    ,triggerHook:0.9
                })
                .addTo(PT.SM_CTRL)
                .reverse(false)
                .setTween(tweenFromBottom);

                if(_D_){
                    scene_fromBottom.reverse(true);
                    scene_fromBottom.duration(H/2);
                }
            });


            // <div data-pt-transition="slide-from-top">
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            // for (var i4=0; i4 < SLIDE_FromTop.length; i4++){
            $(SLIDE_FromTop).each(function(i, _thing_){
                // $(SLIDE_FromTop[i4]).parent().css({'overflow-y':'hidden'});
                $(_thing_).parent().css({'overflow-y':'hidden'});

                // var tweenFromTop = new TweenMax.from(SLIDE_FromTop[i4], 1, {alpha:0, y:'-=50', ease:Power1.easeOut} );
                var tweenFromTop = new TweenMax.fromTo(_thing_, 1, {alpha:0, y:'-=50'}, {alpha:1, y:'0', ease:Power1.easeOut} );

                var scene_fromTop = new ScrollMagic.Scene({
                    // triggerElement: SLIDE_FromTop[i4]
                    triggerElement: _thing_
                    ,triggerHook:0.9
                })
                .addTo(PT.SM_CTRL)
                .reverse(false)
                .setTween(tweenFromTop);

                if(_D_){
                    scene_fromTop.reverse(true);
                    scene_fromTop.duration(H/2);
                }
            });


            // <div data-pt-transition="fade-in">
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            $(FADE_In).each(function(i, _thing_){

                var tweenFadeIn = new TweenMax.fromTo(_thing_, 1, {alpha:0}, {alpha:1, ease:Power1.easeIn} );

                var scene_f = new ScrollMagic.Scene({
                    triggerElement: _thing_
                    ,triggerHook:0.9
                })
                .addTo(PT.SM_CTRL)
                .reverse(true)
                .setTween(tweenFadeIn);

                if(_D_){
                    scene_f.reverse(true);
                    scene_f.duration(H/2);
                }
            });


            // <div data-pt-transition="zoom-in">
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            $(ZOOM_In).each(function(i, _thing_){

                var tweenFadeIn = new TweenMax.fromTo(_thing_, 1, {alpha:0, scale:0.9}, {alpha:1, scale:1, ease:Power1.easeIn} );

                var scene_f = new ScrollMagic.Scene({
                    triggerElement: _thing_
                    ,triggerHook:0.9
                })
                .addTo(PT.SM_CTRL)
                .reverse(true)
                .setTween(tweenFadeIn);

                if(_D_){
                    scene_f.reverse(true);
                    scene_f.duration(H/2);
                }
            });










        }

    }









































/*


    ########  ##     ## #### ##       ########      ######  #### ########  ########
    ##     ## ##     ##  ##  ##       ##     ##    ##    ##  ##  ##     ## ##     ##
    ##     ## ##     ##  ##  ##       ##     ##    ##        ##  ##     ## ##     ##
    ########  ##     ##  ##  ##       ##     ##     ######   ##  ##     ## ########
    ##     ## ##     ##  ##  ##       ##     ##          ##  ##  ##     ## ##   ##
    ##     ## ##     ##  ##  ##       ##     ##    ##    ##  ##  ##     ## ##    ##
    ########   #######  #### ######## ########      ######  #### ########  ##     ##


     ######  #### ########  ########    ########     ###    ########
    ##    ##  ##  ##     ## ##          ##     ##   ## ##   ##     ##
    ##        ##  ##     ## ##          ##     ##  ##   ##  ##     ##
     ######   ##  ##     ## ######      ########  ##     ## ########
          ##  ##  ##     ## ##          ##     ## ######### ##   ##
    ##    ##  ##  ##     ## ##          ##     ## ##     ## ##    ##
     ######  #### ########  ########    ########  ##     ## ##     ##

    ================================================================================
    ================================================================================


    <a id="sidr-menu-btn" href="#sidr-main"><i class="fa fa-bars"></i></a>

    <div id="site-topbar">
        <div class="logoholder"><img class="img-responsive" src="assets/img/logo-bci-white.png" alt=""></div>
    </div>

    <div id="sidr-main">

        <a id="sidr-close-btn" href="#"><i class="fa fa-chevron-left"></i></a>

        <nav>
            <ul>
                <li><a href="#">Sample link 1</a></li>
                <li>
                    <a href="#">Sample link 2</a>
                    <ul>
                        <li><a href="#">Child link 1</a></li>
                        <li><a href="#">Child link 2</a></li>
                        <li><a href="#">Child link 3</a></li>
                    </ul>
                </li>
                <li><a href="#">Sample link 3</a></li>
                <li><a href="#">Sample link 4</a></li>
                <li><a href="#">Sample link 5</a></li>
                <li><a href="#">Sample link 6</a></li>
            </ul>
        </nav>

        <div class="main">
            <p>Content.</p>
        </div>

    </div>

*/




    ,buildSIDR: function(){
        // PT.log('buildSIDR()');

        var _sidrMAIN       = $('#pt-sidr');
        var _sidrSIDE       = "right";
        var _sidrCOVER      = $('.sidr-cover');
        var _sidrCLOSE      = $('#sidr-close-btn');
        var _sidrBTN        = $('#sidr-menu-btn');
        var _sidrTOPBAR     = $('#sidr-topbar');

        // var _sidrWIDTH = $('#sidr-main').width();

        if( _sidrMAIN.length ){
            PT.addOnLoad(
                doNow
            )
        }else{
            PT.log('PT.buildSIDR() { there is no SIDR to build.', 'green');
        }



        function doNow(){
            PT.log('PT.buildSIDR() { doNow()', 'green');

            // ADD A COVER TO THE PAGE TO SHOW WHEN THE MENU IS OPEN:
            // $('body').prepend('<div class="sidr-cover"></div>');

            // SET THE COVER TINT TO INVISIBLE:
            TweenMax.set(_sidrCOVER, {autoAlpha:0});


            // TURNS THE NESTED <ul>'s INTO ACCORDION NAV:
            // _sidrMAIN.find('nav ul').navgoco();
            _sidrMAIN.find('nav > ul').navgoco();
            // _sidrMAIN.find('nav ul').navgoco({ accordion: true });




            if(_sidrMAIN.attr('data-sidr-side')){
                // PT.log(_sidrMAIN.data('sidr-side'), 'orange');
                _sidrSIDE = _sidrMAIN.data('sidr-side');
            }

            if(_sidrSIDE === 'left'){
                // _sidrSIDE = "left";
                $(_sidrBTN).addClass('left');
                $(_sidrTOPBAR).addClass('right');

            }else{
                // _sidrSIDE = "right";
                $(_sidrBTN).addClass('right');
                $(_sidrTOPBAR).addClass('left');
            }




            // THE ACTUAL SIDR MENU CODE:
            _sidrBTN.sidr({

                speed: 200
                ,displace: false
                ,name: _sidrMAIN.attr('id')
                ,side: _sidrSIDE
                // ,body:'.viewport'

                ,onOpen: sidr_onOpen
                ,onClose: sidr_onClose

                // ,onOpenEnd: function () {
                //   console.log('onOpenEnd');
                // }

                // ,onCloseEnd: function () {
                //   console.log('onCloseEnd');
                // }

            });



            // ON CLICK, CLOSE THE SIDR MENU:
            _sidrCOVER.on('click', function(e){
                $.sidr('close', _sidrMAIN.attr('id'));
            });


            // _sidrCLOSE.on('click', function(e){
            //     $.sidr('close', 'sidr-main');
            // });


            // _sidrBTN.on('click', function(e){
            //     $.sidr('toggle', 'sidr-main');
            // });


            /*
                        PT._SSM.addStates([
                            {
                                id: 'sidr-show',
                                query: '(min-width: 1200px)',
                                onEnter: function(){
                                    startResize();
                                    $.sidr('open', 'sidr-main');
                                },
                                onLeave: function(){
                                    endResize();
                                    $.sidr('close', 'sidr-main');
                                }
                            }
                        ]);
            */




            $(window).resize( function(){
                TweenMax.set(_sidrTOPBAR, {width:'100%'} );
            });


        }




        function sidr_onOpen(){
            TweenMax.to(_sidrCOVER, 0.2, {autoAlpha:1});
            // TweenMax.to(_sidrBTN, 0.1, {right:$('#pt-sidr').width(), ease:Power1.easeIn});

            if(_sidrSIDE === "left"){

                TweenMax.to(_sidrBTN, 0.1, {left:$('#pt-sidr').width(), ease:Power1.easeIn});

            }else if(_sidrSIDE === "right"){

                TweenMax.to(_sidrBTN, 0.1, {right:$('#pt-sidr').width(), ease:Power1.easeIn});

            }

            _sidrBTN.html('<i class="fa fa-close"></i>');

        }


        function sidr_onClose(){
            TweenMax.to(_sidrCOVER, 0.2, {autoAlpha:0});
            TweenMax.to(_sidrBTN, 0.1, {right:0, ease:Power1.easeOut});


            if(_sidrSIDE === "left"){

                TweenMax.to(_sidrBTN, 0.1, {left:0, ease:Power1.easeOut});

            }else if(_sidrSIDE === "right"){

                TweenMax.to(_sidrBTN, 0.1, {right:0, ease:Power1.easeOut});

            }

            _sidrBTN.html('<i class="fa fa-bars"></i>');

        }


        /*
                        function resizer() {
                            console.log('resizer()');
                            TweenMax.to(['.viewport', '#site-topbar'], 0.3, { left:$('#sidr-main').width() , width:$(window).width() - $('#sidr-main').width() });
                        }

                        function startResize() {
                            console.log('startResize()');
                            $(window).resize(resizer);
                            TweenMax.to(['.viewport', '#site-topbar'], 0.3, { left:$('#sidr-main').width() , width:$(window).width() - $('#sidr-main').width() });
                        }

                        function endResize() {
                            console.log('endResize()');
                            $(window).off("resize", resizer);
                            TweenMax.to(['.viewport','#site-topbar'], 0.3, { left:0, width:'100%' });

                        }
        */


    }

































/*

    ########  ##     ## #### ##       ########
    ##     ## ##     ##  ##  ##       ##     ##
    ##     ## ##     ##  ##  ##       ##     ##
    ########  ##     ##  ##  ##       ##     ##
    ##     ## ##     ##  ##  ##       ##     ##
    ##     ## ##     ##  ##  ##       ##     ##
    ########   #######  #### ######## ########


    ########   #######   #######  ########  ######  ######## ########     ###    ########
    ##     ## ##     ## ##     ##    ##    ##    ##    ##    ##     ##   ## ##   ##     ##
    ##     ## ##     ## ##     ##    ##    ##          ##    ##     ##  ##   ##  ##     ##
    ########  ##     ## ##     ##    ##     ######     ##    ########  ##     ## ########
    ##     ## ##     ## ##     ##    ##          ##    ##    ##   ##   ######### ##
    ##     ## ##     ## ##     ##    ##    ##    ##    ##    ##    ##  ##     ## ##
    ########   #######   #######     ##     ######     ##    ##     ## ##     ## ##


    ########  #######  ########     ########     ###    ########     ##    ##    ###    ##     ##
       ##    ##     ## ##     ##    ##     ##   ## ##   ##     ##    ###   ##   ## ##   ##     ##
       ##    ##     ## ##     ##    ##     ##  ##   ##  ##     ##    ####  ##  ##   ##  ##     ##
       ##    ##     ## ########     ########  ##     ## ########     ## ## ## ##     ## ##     ##
       ##    ##     ## ##           ##     ## ######### ##   ##      ##  #### #########  ##   ##
       ##    ##     ## ##           ##     ## ##     ## ##    ##     ##   ### ##     ##   ## ##
       ##     #######  ##           ########  ##     ## ##     ##    ##    ## ##     ##    ###

    =============================================================================================
    =============================================================================================



    <div class="pt-quick-contact">
        <ul class="social-media-icons">
            <li><a href="#" target="_blank"><i class="fa fa-account"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-login"></i></a></li>
            <li><i class="">&nbsp;&nbsp;&nbsp;</i></li>
            <li><a href="#" target="_blank"><i class="fa fa-phone"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-map-marker"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
        </ul>
    </div>


    <div id="pt-topbar" class="navbar navbar-default " >
        <div class="pt-container">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#"><img src="http://placehold.it/100x50/?text=LOGO" alt="logo"></a>
            </div>

            <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">

                <ul class="nav navbar-nav">
                    <li id="main_nav_item_0" class="main_nav_item "><a tabindex="-1" href="#">Home</a></li>
                    <li id="main_nav_item_1" class="main_nav_item "><a tabindex="-1" href="#">About</a></li>
                    <li id="main_nav_item_2" class="main_nav_item "><a tabindex="-1" href="#">Contact</a></li>
                    <li id="main_nav_item_4" class="main_nav_item dropdown"><a tabindex="-1" href="#" role="button" data-toggle="dropdown" class="dropdown-toggle">Sub Pages <b class="caret"></b></a>
                        <ul role="menu" class="dropdown-menu multi-level" aria-labelledby="dropdownMenu">
                            <li class=""><a tabindex="-1" href="#">One</a></li>
                            <li class=""><a tabindex="-1" href="#">Two</a></li>
                            <li class=""><a tabindex="-1" href="#">Three</a></li>
                        </ul>
                    </li>
                    <li id="main_nav_item_5" class="main_nav_item "><a tabindex="-1" href="#">New Page</a></li>
                </ul>

            </div>

        </div>

    </div>

 */

    ,buildTopBar: function() {

        // PT.log('buildTopBar()','green');


        var _TopBar = $('#pt-topbar');
        var _Offset = 0;
        var _isSticky = false;



        if($('.pt-quick-contact').length ){
            $('body').addClass('has-quick-contact');
            _Offset = -$('.pt-quick-contact').height();
        }


        if( _TopBar.length ){
            PT.addOnLoad(
                doNow
            )
        }else{
            PT.log('PT.buildTopBar() { there is no TOPBAR to build.', 'green');
        }





        function doNow(){

            PT.log('PT.buildTopBar() doNow() ', 'green');
            // PT.log(_TopBar.offset().top, 'purple');


            if( $('.pt-quick-contact').length ){
                if( _TopBar.offset().top > $('.pt-quick-contact').height() ){
                    //
                }else{
                    _TopBar.addClass('is-fixed-top');
                }
            }else{
                if( _TopBar.offset().top > 0 ){
                    //
                }else{
                    _TopBar.addClass('is-fixed-top');
                }
            }




            // ADD THE TRIGGER FOR THE TOP BAR:
            if(_TopBar.hasClass('is-fixed-top')){
                _isSticky = false;
                _TopBar.after('<div class="pt-topbar-trigger"></div>');
            }else{
                _isSticky = true;
                _TopBar.before('<div class="pt-topbar-trigger"></div>');
            }




            // EVENT LISTENERS FOR THE NAVBAR TOGGLE:
            _TopBar.find(".navbar-collapse" ).on( "show.bs.collapse", function() {
                _TopBar.addClass('nav-is-open');
            }).on( "hidden.bs.collapse", function() {
                _TopBar.removeClass('nav-is-open');
            });




            // IF WE'RE ON THE HOME PAGE, SCROLL TO THE TOP, IF NOT, GO TO THE HOME PAGE:
            _TopBar.find('.navbar-brand').on('click', function(e) {
                if($('.page-home').length ){
                    e.preventDefault();
                    TweenMax.to(window, 0.5, { scrollTo:{ y:0 }, ease:Power4.easeInOut } );
                }
            });




            // TRIGGER FOR NAVBAR .bg-solid CLASS : ( SETS BG FOR NAVBAR AND SHOWS NAVBAR LOGO )
            var smScene1 = new ScrollMagic.Scene({
                triggerElement: $('.pt-topbar-trigger')
                ,triggerHook: '0'
            })
            // .addIndicators()
            .addTo(PT.SM_CTRL);




            if(PT._isDevMode){
                // .addIndicators({name:"pt-spy-to " +SpyZoneID, indent:100})
                smScene1.addIndicators({name:"buildTopBar " });
            }




            if(_isSticky){
                smScene1.setClassToggle(_TopBar, "bg-solid is-fixed-top");
                smScene1.offset(_Offset)
            }else{
                smScene1.setClassToggle(_TopBar, "bg-solid");
                smScene1.offset(1)
            }
            smScene1.addTo(PT.SM_CTRL);




            // ON ENTER:
            smScene1.on("enter", function (event) {
                // PT.log('ENTER', 'purple');

                if(_isSticky){
                    if( $('.pt-quick-contact').length ){
                        if( _TopBar.offset().top > $('.pt-quick-contact').height() ){
                            $('.pt-topbar-trigger').height(_TopBar.height());
                        }
                    }else{
                        if( _TopBar.offset().top > 0 ){
                            $('.pt-topbar-trigger').height(_TopBar.height());
                        }
                    }
                }
            });




            // ON LEAVE:
            smScene1.on("leave", function (event) {
                // PT.log('LEAVE', 'purple');

                $('.pt-topbar-trigger').height(0);
            });

        }

    }





























/*
    =========================================================================================
    =========================================================================================

                                 ##     ## ####  ######   ######
                     ##   ##     ###   ###  ##  ##    ## ##    ##     ##   ##
                      ## ##      #### ####  ##  ##       ##            ## ##
                    #########    ## ### ##  ##   ######  ##          #########
                      ## ##      ##     ##  ##        ## ##            ## ##
                     ##   ##     ##     ##  ##  ##    ## ##    ##     ##   ##
                                 ##     ## ####  ######   ######

    =========================================================================================
    =========================================================================================
 */









/*

    ##     ##  #######  ##    ## #### ########  #######  ########        ######## ########   ######
    ###   ### ##     ## ###   ##  ##     ##    ##     ## ##     ##       ##       ##     ## ##    ##
    #### #### ##     ## ####  ##  ##     ##    ##     ## ##     ##       ##       ##     ## ##
    ## ### ## ##     ## ## ## ##  ##     ##    ##     ## ########        ######   ########   ######
    ##     ## ##     ## ##  ####  ##     ##    ##     ## ##   ##         ##       ##              ##
    ##     ## ##     ## ##   ###  ##     ##    ##     ## ##    ##        ##       ##        ##    ##
    ##     ##  #######  ##    ## ####    ##     #######  ##     ##       ##       ##         ######

    ================================================================================================
    ================================================================================================

    ADDS A FPS (FramePerSecond) MONITOR TO THE PAGE:

    PT.monitorFPS();

 */

    ,monitorFPS:function(){

        PT.addOnLoad(
            doNow
        );

        function doNow(){
            Justice.init();
        }
    }











/*

    ########    ###     ######  ########     ######  ##       ####  ######  ##    ##
    ##         ## ##   ##    ##    ##       ##    ## ##        ##  ##    ## ##   ##
    ##        ##   ##  ##          ##       ##       ##        ##  ##       ##  ##
    ######   ##     ##  ######     ##       ##       ##        ##  ##       #####
    ##       #########       ##    ##       ##       ##        ##  ##       ##  ##
    ##       ##     ## ##    ##    ##       ##    ## ##        ##  ##    ## ##   ##
    ##       ##     ##  ######     ##        ######  ######## ####  ######  ##    ##

    =================================================================================
    =================================================================================

 */

    ,fastClick:function(){
        FastClick.attach(document.body);
    }












/*

     ######   ######## ########     ######  #### ######## ########
    ##    ##  ##          ##       ##    ##  ##       ##  ##
    ##        ##          ##       ##        ##      ##   ##
    ##   #### ######      ##        ######   ##     ##    ######
    ##    ##  ##          ##             ##  ##    ##     ##
    ##    ##  ##          ##       ##    ##  ##   ##      ##
     ######   ########    ##        ######  #### ######## ########

    ==============================================================
    ==============================================================

 */

    ,getSize: function(){

        return PT._Size;

    }












/*

       ###    ########  ########
      ## ##   ##     ## ##     ##
     ##   ##  ##     ## ##     ##
    ##     ## ##     ## ##     ##
    ######### ##     ## ##     ##
    ##     ## ##     ## ##     ##
    ##     ## ########  ########

    ########     ###    ##    ## ########   #######  ##     ##
    ##     ##   ## ##   ###   ## ##     ## ##     ## ###   ###
    ##     ##  ##   ##  ####  ## ##     ## ##     ## #### ####
    ########  ##     ## ## ## ## ##     ## ##     ## ## ### ##
    ##   ##   ######### ##  #### ##     ## ##     ## ##     ##
    ##    ##  ##     ## ##   ### ##     ## ##     ## ##     ##
    ##     ## ##     ## ##    ## ########   #######  ##     ##

     ######  ##          ###     ######   ######
    ##    ## ##         ## ##   ##    ## ##    ##
    ##       ##        ##   ##  ##       ##
    ##       ##       ##     ##  ######   ######
    ##       ##       #########       ##       ##
    ##    ## ##       ##     ## ##    ## ##    ##
     ######  ######## ##     ##  ######   ######

    ====================================================================================
    ====================================================================================

    PT.addRandomClass('.homeplate', ['bg-r1', 'bg-r2', 'bg-r3']);

 */



    ,addRandomClass: function(_obj, _arr) {
        PT.log('addRandomClass()');
        var arr = _arr;
        var obj = $(_obj);
        obj.addClass( arr[ Math.floor(Math.random() * arr.length)  ]  );
    }







};
