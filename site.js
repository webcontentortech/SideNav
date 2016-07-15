$(document).ready(function(){
    $("#hamburger").hide();
    $("#img").hide();
    $("#electronic").hide();
    $("#autoMobiles").hide();
    $("#clothing").hide();
    
    var elec = false;
    var auto = false;
    var clothe = false;
    var pin = false;
    var ham = true;

    var hamburger = function(){
        showLeftDiv();
        //elec = true;
        /*ham = !ham;
        if (ham) {
            showLeftDiv();
        }else{
            hideLeftDiv();
        }*/
    }

    $("#hamburger").click(hamburger);

    $("#firstHeading").click(function(){
        $("#hamburger").show();
        $("#img").show();
        elec = true;
        showLeftDiv();
        elec = false;
    });

    $("#secondHeading").click(function(){
        $("#hamburger").show();
        $("#img").show();
        auto = true;
        showLeftDiv();
        auto = false;
    });

    $("#thirdHeading").click(function(){
        $("#hamburger").show();
        $("#img").show();
        clothe = true;
        showLeftDiv();
        clothe = false;
    });

    var hideLeftDiv = function(){
        $("#electronic").hide();
        $("#autoMobiles").hide();
        $("#clothing").hide();
    }
    
    var showLeftDiv = function(){
        hideLeftDiv();
        if (elec == true) {
            $("#electronic").show();
        }else if (auto == true) {
            $("#autoMobiles").show();
        }else if (clothe == true) {
            $("#clothing").show();
        }
    }

    $("#img").click(function(){
        if (pin == false) {
            pin = true;
            $("#img").addClass("pin");
            $("#electronic").addClass("opacity");
            console.log("opacity done");
        }else{
            $("#img").removeClass("pin");
             $("#electronic").removeClass("opacity");
            pin = false;
        }
    });
});