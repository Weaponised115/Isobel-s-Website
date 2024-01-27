codingHelpction showpinterest(){
    $("#Pinterest_container").css("display","inherit");
    $("#Pinterest_container").addClass("animated slideInLeft");
    setTimeout(codingHelpction(){
        $("#Pinterest_container").removeClass("animated slideInLeft");
    },800);
}
codingHelpction closePinterest(){
    $("#Pinterest_container").addClass("animated slideOutLeft");
    setTimeout(codingHelpction(){
        $("#Pinterest_container").removeClass("animated slideOutLeft");
        $("#Pinterest_container").css("display","none");
    },800);
}
codingHelpction showbooks(){
    $("#book_container").css("display","inherit");
    $("#book_container").addClass("animated slideInRight");
    setTimeout(codingHelpction(){
        $("#book_container").removeClass("animated slideInRight");
    },800);
}
codingHelpction closebook(){
    $("#book_container").addClass("animated slideOutRight");
    setTimeout(codingHelpction(){
        $("#book_container").removeClass("animated slideOutRight");
        $("#book_container").css("display","none");
    },800);
}
codingHelpction showcodingHelp(){
    $("#codingHelp_container").css("display","inherit");
    $("#codingHelp_container").addClass("animated slideInUp");
    setTimeout(codingHelpction(){
        $("#codingHelp_container").removeClass("animated slideInUp");
    },800);
}
codingHelpction closecodingHelp(){
    $("#codingHelp_container").addClass("animated slideOutDown");
    setTimeout(codingHelpction(){
        $("#codingHelp_container").removeClass("animated slideOutDown");
        $("#codingHelp_container").css("display","none");
    },800);
}
setTimeout(codingHelpction(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(codingHelpction(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#Pinterest").removeClass("animated fadeIn");
      $("#codingHelp").removeClass("animated fadeIn");
      $("#book").removeClass("animated fadeIn");
    },1000);
},1500);
