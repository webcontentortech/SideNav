$(document).ready(function(){
    $("#hamburger").hide();
    $("#img").hide();
    var hamelec = false;
    var hamauto = false;
    var hamclothe = false;
    var elec = true;
    var auto = true;
    var clothe = true;
    var pin = false;

    $("#clothing").hide();
    $("#autoMobiles").hide();
    $("#electronic").hide();
    $("#para").hide();
    
    $("#img").click(function(){
        if (pin == false) {
            pin = true;
            $("#img").addClass("pin");
        }else{
            $("#img").removeClass("pin");
            pin = false;
        }
    });

    $("#1").click(function(){
        $("#hamburger").show();
        $("#img").show();
        if (elec) {
            elec = false;
            $("#electronic").show();
            $("#autoMobiles").hide();
            $("#clothing").hide();
        }else{
            return;
        }
    });

    $("#2").click(function(){
        $("#hamburger").show();
        if (auto) {
           auto =  false;
            $("#autoMobiles").show();
            $("#electronic").hide();
            $("#clothing").hide();
        }else{
            return;
        }
    });

    $("#3").click(function(){
        $("#hamburger").show();
        if (clothe) {
            clothe = false;
            $("#clothing").show();
            $("#electronic").hide();
            $("#autoMobiles").hide();
       }else{
            return;
       }
    });
   
    $("#sam").click(function(){
        $("#para").show();
        console.log(para);
    });

    $("#hamburger").click(function(){
        if (hamelec == false) {
            $("#electronic").hide();
            hamelec = true;
        }else if(hamelec) {
            $("#electronic").show();
            $("#autoMobiles").hide();
            $("#clothing").hide();
            hamelec = false;
        }else if (hamauto == false) {
            $("#autoMobiles").hide();
            hamauto = true;
        }else if(hamauto){
            $("#autoMobiles").show();
            $("#electronic").hide();
            $("#clothing").hide();
            hamauto = false;
        }else if (hamclothe == false) {
            $("#clothing").hide();
            hamclothe = true;
        }else{
            $("#clothing").show();
            $("#electronic").hide();
            $("#autoMobiles").hide();
            hamclothe = true;
        }
    });  
});