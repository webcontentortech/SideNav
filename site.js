$(document).ready(function(){
    $("#hamburger").hide();
    $("#img").hide();
    
    $("#electronic").show();
    $("#autoMobiles").hide();
    $("#clothing").hide();

    var tab = "";
    var pin = true;
    var ham = true;

    var headingData = {
        "mob": {isOpen: true},
        "tv": {isOpen: true},
        "lap": {isOpen: true},
        "car": {isOpen: true},
        "bikes": {isOpen:true},
        "truck": {isOpen: true},
        "sari": {isOpen:true},
        "zeans": {isOpen:true},
        "tshirt": {isOpen:true}};

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

    var clickOnPin = function(){
        if (pin) {
            pin = false;
            $("#img").addClass("pin");
            $("#electronic").addClass("opacity");
            $("#autoMobiles").addClass("opacity");
            $("#clothing").addClass("opacity");
            hideLeftDiv();
            $("#img").hide();
            ham = false;
        }else{
            $("#img").removeClass("pin");
            $("#electronic").removeClass("opacity");
            $("#autoMobiles").removeClass("opacity");
            $("#clothing").removeClass("opacity");
            pin = true;
        }

        return;
    }

    $("#img").click(clickOnPin);

    var listHeadingClick = function(id, angle){
        var itemId = "#" + id + "Items";
        var imgId = "#" + id + "Angle";
        if(angle){
            headingData[id].isOpen = false;
            $(imgId).addClass("angle");
            $(itemId).hide();
        }else{
            headingData[id].isOpen = true;
            $(imgId).removeClass("angle");
            $(itemId).show();
        }

        return;
    };

    $("#mob").click(function(){
        listHeadingClick(this.id, headingData.mob.isOpen);
    });

    $("#tv").click(function(){
        listHeadingClick(this.id, headingData.tv.isOpen);
    });

    $("#lap").click(function(){
        listHeadingClick(this.id, headingData.lap.isOpen);
    });

    $("#car").click(function(){
       listHeadingClick(this.id, headingData.car.isOpen);
    });

    $("#bikes").click(function(){
        listHeadingClick(this.id, headingData.bikes.isOpen);
    });

    $("#truck").click(function(){
        listHeadingClick(this.id, headingData.truck.isOpen);
    });

    $("#sari").click(function(){
       listHeadingClick(this.id, headingData.sari.isOpen);
    });

    $("#zeans").click(function(){
        listHeadingClick(this.id, headingData.zeans.isOpen);
    });

    $("#tshirt").click(function(){
        listHeadingClick(this.id, headingData.tshirt.isOpen);
    });

}); 

var getElement = function(subHeading,listHeading){
    var subHeading = subHeading.text();
    var listHeading = listHeading.text();
    $("#para").text("This is" +" " +subHeading+" "+listHeading+" "+ "page");
}