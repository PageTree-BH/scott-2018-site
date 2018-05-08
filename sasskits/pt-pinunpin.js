



// THIS IS A WAY TO ADD A NEW FUNCTION / METHOD / VARIABLES OR WHATEVER TO THE NWG OBJECT.


$(function() { 

    if( !Modernizr.touchevents ){
        PT.log('no touchevents!', 'red');


        if ( (PT.getSize() === 'md') || (PT.getSize() === 'lg') || (PT.getSize() === 'xl') ) {
            // PT.log('````````` YOU ARE ARE BIG ENOUGH ! ' + PT.getSize(), 'red');

            PT.buildPinUnPin();

        }else{
            // PT.log('````````` SORRY BUB, YOU ARE TOO SMALL ' + PT.getSize(), 'red');            
        }


    }

}); 
   
PT.buildPinUnPin = function() {

    PT.log('PT.buildPinUnPin()','orange');

    PT.addOnLoad(
        doNow
    );

    function doNow(){

        $('[data-pt-pinunpin]').each(function(i, val){

            PT.log(val, 'orange');

        });


    }

}














 
 

 

























