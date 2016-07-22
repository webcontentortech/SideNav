$(document).ready(function(){
    $("#hamburger").hide();
    $("#img").hide();
    $("#electronic").hide();
    $("#autoMobiles").hide();
    $("#clothing").hide();
    
    var tab = "";
    var pin = false;
    var ham = true;
    var angle = true;

    var hamburger = function(){
        ham = !ham;
        if (ham) {
            showLeftDiv();
        }else{
            hideLeftDiv();
        }
    }

    $("#hamburger").click(hamburger);
    $("#firstHeading").click(function(){
        $("#hamburger").show();
        $("#img").show();
        tab = "electronic"
        showLeftDiv();
    });

    $("#secondHeading").click(function(){
        $("#hamburger").show();
        $("#img").show();
        tab = "auto";
        showLeftDiv();
    });

    $("#thirdHeading").click(function(){
        $("#hamburger").show();
        $("#img").show();
        tab = "clothe";
        showLeftDiv();
    });

    var hideLeftDiv = function(){
        $("#electronic").hide();
        $("#autoMobiles").hide();
        $("#clothing").hide();
    }
    
    var showLeftDiv = function(){
        hideLeftDiv();
        if (tab == "electronic") {
            $("#electronic").show();
        }else if (tab == "auto") {
            $("#autoMobiles").show();
        }else if (tab == "clothe") {
            $("#clothing").show();
        }
    }

    $("#img").click(function(){
        if (pin == false) {
            pin = true;
            $("#img").addClass("pin");
            $("#electronic").addClass("opacity");
            $("#autoMobiles").addClass("opacity");
            $("#clothing").addClass("opacity");
            hideLeftDiv();
            $("#img").hide();
        }else{
            $("#img").removeClass("pin");
            $("#electronic").removeClass("opacity");
            $("#autoMobiles").removeClass("opacity");
            $("#clothing").removeClass("opacity");
            pin = false;
        }
    });

    $("#mob").click(function(){
        if(angle){
            angle = false;
            $("#angle1").addClass("angle");
            $("#mobItems").hide();
        }else{
            $("#angle1").removeClass("angle");
            $("#mobItems").show();
            angle = true;
        }
    });

    $("#tv").click(function(){
        if(angle){
            angle = false;
            $("#angle2").addClass("angle");
            $("#tvItems").hide();
        }else{
            $("#angle2").removeClass("angle");
            $("#tvItems").show();
            angle = true;
        }
    });    
}); 

var getElement = function(element,elem){
    var element = element.text();
    var elem = elem.text();
    $("#para").text("This is" +" " +element+" "+elem+" "+ "page");
}

var getId = function(){
    var b = $(this).attr("id");
    console.log(b);
}