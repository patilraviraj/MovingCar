var check =false;
$(document).ready(function(){

        $("#start").off('click').on('click',function(){
                var pos= $("#carImg").position();
                if( pos.left < 0 ){
                    $("#carImg").css('right', "0px");
                }
            
           check=true;
            $("#moveDiv").css('float','none');
            $("#carImg").addClass("animation");
        })
        $("#stop").off('click').on('click',function(){
            var roadWidth= $("#red-road").width();
            var pos= $("#carImg").position();
            console.log(pos);   
            $("#carImg").removeClass("animation");
            check=false;
            if( pos.left < 0 ){
            $("#carImg").css('right', "0px");
            }
            else{
                var calcWidth = window.innerWidth-pos.left;
                console.log(calcWidth);
            $("#carImg").css('right',calcWidth > 0 ? calcWidth +"px" : "0px")
            }
        })
        setInterval(function(){
            if(check){
                if( $("#carImg").position().left < 0 ){
                    $("#carImg").css('right', "0px");
                }
            }
           
        },10);
    });