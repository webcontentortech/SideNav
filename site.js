$(document).ready(function(){
    $("#hamburger").hide();
    $("#img").hide();
    var hamelec = false;
    var hamauto = false;
    var hamclothe = false;
    var pin = false;

    $("#clothing").hide();
    $("#autoMobiles").hide();
    $("#electronic").hide();
    $("#para").hide();
    
    $("#img").click(function(){
        if (pin == false) {
            pin = true;
            $("#img").addClass("pin");
            $("#clothing").addClass("opacity");
            console.log("opacity done");
        }else{
            $("#img").removeClass("pin");
             $("#clothing").removeClass("opacity");
            pin = false;
        }
    });

    $("#1").click(function(){
        $("#hamburger").show();
        $("#img").show();
        $("#electronic").show();
        $("#autoMobiles").hide();
        $("#clothing").hide();
    });

    $("#2").click(function(){
        $("#hamburger").show();
        $("#img").show();
        $("#autoMobiles").show();
        $("#electronic").hide();
        $("#clothing").hide();
    });

    $("#3").click(function(){
        $("#hamburger").show();
        $("#img").show();
        $("#clothing").show();
        $("#electronic").hide();
        $("#autoMobiles").hide();
    });
   
    $("#sam").click(function(){
        $("#para").show();
        console.log(para);
    });

    $("#hamburger").click(function(){
        if (hamelec == false) {
            hamelec = true;
            $("#electronic").hide();
        }else{
            hamelec = false;
            $("#electronic").show();
            $("#autoMobiles").hide();
            $("#clothing").hide();
        }
        if (hamauto == false) {
            hamauto = true;
            $("#autoMobiles").hide();
        }else{
            hamauto = false;
            $("#autoMobiles").show();
            $("#electronic").hide();
            $("#clothing").hide();
        }
        if (hamclothe == false) {
            hamclothe = true;
            $("#clothing").hide();
        }else{
            hamclothe = false;
            $("#clothing").show();
            $("#electronic").hide();
            $("#autoMobiles").hide();
        }
    });  
});