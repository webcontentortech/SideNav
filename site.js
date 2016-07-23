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
    var i = 1;

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

    $("#lap").click(function(){
        if(angle){
            angle = false;
            $("#angle3").addClass("angle");
            $("#lapItems").hide();
        }else{
            $("#angle3").removeClass("angle");
            $("#lapItems").show();
            angle = true;
        }
    });

    $("#cars").click(function(){
        if(angle){
            angle = false;
            $("#angle4").addClass("angle");
            $("#carItems").hide();
        }else{
            $("#angle4").removeClass("angle");
            $("#carItems").show();
            angle = true;
        }
    });

    $("#bikes").click(function(){
        if(angle){
            angle = false;
            $("#angle5").addClass("angle");
            $("#bikeItems").hide();
        }else{
            $("#angle5").removeClass("angle");
            $("#bikeItems").show();
            angle = true;
        }
    });

    $("#truck").click(function(){
        if(angle){
            angle = false;
            $("#angle6").addClass("angle");
            $("#truckItems").hide();
        }else{
            $("#angle6").removeClass("angle");
            $("#truckItems").show();
            angle = true;
        }
    });

    $("#sari").click(function(){
        if(angle){
            angle = false;
            $("#angle7").addClass("angle");
            $("#sareesItems").hide();
        }else{
            $("#angle7").removeClass("angle");
            $("#sareesItems").show();
            angle = true;
        }
    });

    $("#zeans").click(function(){
        if(angle){
            angle = false;
            $("#angle8").addClass("angle");
            $("#zeansItems").hide();
        }else{
            $("#angle8").removeClass("angle");
            $("#zeansItems").show();
            angle = true;
        }
    });

    $("#tshirt").click(function(){
        if(angle){
            angle = false;
            $("#angle9").addClass("angle");
            $("#tshirtItems").hide();
        }else{
            $("#angle9").removeClass("angle");
            $("#tshirtItems").show();
            angle = true;
        }
    });
}); 

var getElement = function(element,elem){
    var element = element.text();
    var elem = elem.text();
    $("#para").text("This is" +" " +element+" "+elem+" "+ "page");
}