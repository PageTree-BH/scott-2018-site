



// THIS IS A WAY TO ADD A NEW FUNCTION / METHOD / VARIABLES OR WHATEVER TO THE NWG OBJECT.








$(function() { 

    if( !Modernizr.touchevents ){
        PT.log('no touchevents!', 'red');

        if ( (PT.getSize() === 'md') || (PT.getSize() === 'lg') || (PT.getSize() === 'xl') ) {
            PT.log('````````` YOU ARE ARE BIG ENOUGH ! ' + PT.getSize(), 'red');

            PT.buildHomePlate();

        }else{
            PT.log('````````` SORRY BUB, YOU ARE TOO SMALL ' + PT.getSize(), 'red');
        }

    }

}); 
   








PT.buildHomePlate = function() {

    PT.log('PT.buildHomePlate()','orange');

        $('[data-pt-homeplate]').each(function(i, val){

            var ThisDIV         = $(val);
            var ThisBG          = ThisDIV.find('.pt-homeplate-bg');
            var ThisLOGO        = ThisDIV.find('.pt-homeplate-logo');
            var ThisHEADLINE    = ThisDIV.find('.pt-homeplate-headline');

            var ThisTLM = new TimelineMax();

                ThisTLM.fromTo(ThisHEADLINE,    0.2, { opacity:1, top:0 }, {opacity:0, top:85, ease:Linear.easeNone }, 'a');
                ThisTLM.fromTo(ThisBG,          1,  { opacity:1, top:0 }, {opacity:0, top:500, ease:Linear.easeNone }, 'a');
                ThisTLM.fromTo(ThisLOGO,        1, { top:0 }, {top:400, ease:Linear.easeNone }, 'a');

            var ThisDuration = ThisDIV.outerHeight();

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisDIV,
                triggerHook:0
            })
            .offset( 1 )
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "data-pt-homeplate"});
            }







            // NWG._ResetSMs.push(ThisSCENE);
            // NWG._ResetTLMs.push(ThisTLM);
            // NWG._ResetOBJs.push(ThisBG);
            
        });

























 
/*




        $('[data-pt-parallax]').each(function(i, val){

            var ThisDIV         = $(val);
            var ThisBG          = ThisDIV.find('.pt-bg');
            // var ThisLOGO        = ThisDIV.find('.pt-homeplate-logoholder');
            // var ThisHEADLINE    = ThisDIV.find('.pt-homeplate-headline');

            TweenMax.set(ThisDIV,   {css:{position:'relative', overflow:'hidden'}})
            TweenMax.set(ThisBG.find('img'),    {css:{width:'100%' }})

            var ThisTLM = new TimelineMax();

                // TweenMax.set(ThisBG,    {css:{position:'absolute', width:'100%', height:'200%', zIndex:0 }})
                // ThisTLM.fromTo(ThisBG,          1,  {top:'-50%' }, {top:'+50%', ease:Linear.easeNone }, 'a');


                TweenMax.set(ThisBG,    {css:{position:'absolute', width:'100%', height:'100%', zIndex:0 }})
                ThisTLM.fromTo(ThisBG,          1,  {backgroundPositionY:'+50%' }, {backgroundPositionY:'-50%', ease:Linear.easeNone }, 'a');


            var ThisDuration = $(window).height() * 2;
            // var ThisDuration = ThisDIV.height() * 2;

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisDIV,
                triggerHook:1
            })
            // .offset( 0 )
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "data-pt-parallax"});
            }

            // NWG._ResetSMs.push(ThisSCENE);
            // NWG._ResetTLMs.push(ThisTLM);
            // NWG._ResetOBJs.push(ThisBG);
            
        });






*/



















// function buildSplitSticky(){
//     PT.log('PT.buildSplitSticky()', 'pink');

//     // THIS MUST RUN AFTER CONTENT HAS BEEN FULLY LOADED.
//     PT.addOnLoad(
//         doNow
//     );

//     function doNow(){
//         //console.log('buildSplitSticky() after page load');

//             $('[data-pt-splitsticky]').each(function(i, val){
//             PT.log(val, 'pink');

//             var _div = $(val);

//             var _txt = _div.find('.pt-card-txt');
//             var _img = _div.find('.pt-card-img');

//             var _imgInner = _div.find('.pt-card-img-inner');
            
//             var _durationHeight;

//             var _sz = PT.getSize();

//             var _DO = false;

            
//             // IF _txt IS LARGER THAN VIEWPORT AND WE'RE NOT ON XS DEVICE:
//             if(   ( _txt.height() > $(window).height() )   &&   ( _txt.height() > _imgInner.height() )   &&   (_sz !== '')   &&   (_sz !== 'XS') ){
                
//                 // //console.log('YEP build');
                
//                 if( typeof _imgInner.attr('data-pt-imgswap') !== "undefined"){

//                     _imgInner.addClass('pt-zone-100');
//                     // _imgInner.css({'height': $(window).height(),
//                     // 'border':'2px dotted yellow' });

//                     _durationHeight = _txt.outerHeight() - $(window).height();
                
//                 }else{

//                     _durationHeight = _txt.outerHeight() - _imgInner.height(); 
                
//                 }
        
//                 _DO = true;
    
//             }else{
//                 // //console.log('NO build');
//                 // _img.find('img').css({'display':'block'})
//                 // _imgInner.removeAttr('style');

//                 if((_sz !== '') && (_sz !== 'XS')){
//                 if((_sz !== '') && (_sz !== 'XS')){
//                     // //console.log('at least SM');

//                 // }else{
//                     // //console.log('at least SM');
//                     if( typeof _imgInner.attr('data-pt-imgswap') !== "undefined"){
//                         _img.css({'display':'flex'});
//                         // //console.log('HEY!!  ADD FLEX TO pt-card-img');
//                         // _imgInner.css({'position':'absolute', 'height': _txt.outerHeight().toString() });
//                     }                        
//                 }

//             } 




//             if(_DO){

//                 var SS = new ScrollMagic.Scene({triggerElement: _div})
//                     .triggerHook(0)
//                     .duration( _durationHeight )
//                     .setPin(_img, {pushFollowers: false})
//                     // .setClassToggle(_div, "green")
//                     // .on("enter leave", updateBox)
//                     // .addIndicators()
//                     .addTo(PT.SM_CTRL);
//             }



//         });


//     }


// }


}














 
 

 

























