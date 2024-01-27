function showpinterest(){
    $("#Pinterest_container").css("display","inherit");
    $("#Pinterest_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#Pinterest_container").removeClass("animated slideInLeft");
    },800);
}
function closePinterest(){
    $("#Pinterest_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#Pinterest_container").removeClass("animated slideOutLeft");
        $("#Pinterest_container").css("display","none");
    },800);
}
function showbooks(){
    $("#book_container").css("display","inherit");
    $("#book_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#book_container").removeClass("animated slideInRight");
    },800);
}
function closebook(){
    $("#book_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#book_container").removeClass("animated slideOutRight");
        $("#book_container").css("display","none");
    },800);
}
function showfun(){
    $("#fun_container").css("display","inherit");
    $("#fun_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#fun_container").removeClass("animated slideInUp");
    },800);
}
function closefun(){
    $("#fun_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#fun_container").removeClass("animated slideOutDown");
        $("#fun_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#Pinterest").removeClass("animated fadeIn");
      $("#fun").removeClass("animated fadeIn");
      $("#book").removeClass("animated fadeIn");
    },1000);
},1500);
