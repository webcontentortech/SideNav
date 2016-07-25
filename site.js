$(document).ready(function(){
    $("#hamburger").show();
    $("#img").show();
    $("#electronic").show();
    $("#autoMobiles").hide();
    $("#clothing").hide();
    
    var tab = "";
    var pin = false;
    var ham = true;
    isMobileVer = true;
    isTvVer = true;
    isLapVer = true;
    isCarVer = true;
    isBikeVer = true;
    isTruckVer = true;
    isSariVer = true;
    isZeansVer = true;
    isTshirtVer = true;

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
        $("#img").show();
        tab = "electronic"
        showLeftDiv();
    });

    $("#secondHeading").click(function(){
        $("#img").show();
        tab = "auto";
        showLeftDiv();
    });

    $("#thirdHeading").click(function(){
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

    var allTrue = function(){
        isMobileVer = true;
        isTvVer = true;
        isLapVer = true;
        isCarVer = true;
        isBikeVer = true;
        isTruckVer = true;
        isSariVer = true;
        isZeansVer = true;
        isTshirtVer = true;
        return;
    }

    var allFalse = function(){
        isMobileVer = false;
        isTvVer = false;
        isLapVer = false;
        isCarVer = false;
        isBikeVer = false;
        isTruckVer = false;
        isSariVer = false;
        isZeansVer = false;
        isTshirtVer = false;
        return;
    }

    var listHeadingClick = function(id, angle){
        var itemId = "#" + id + "Items";
        var imgId = "#" + id + "Angle";
        if(angle){
            allFalse();
            $(imgId).addClass("angle");
            $(itemId).hide();
        }else{
            allTrue();
            $(imgId).removeClass("angle");
            $(itemId).show();
        }
        return;
    };

    $("#mob").click(function(){
        listHeadingClick(this.id, isMobileVer);
    });

    $("#tv").click(function(){
        listHeadingClick(this.id, isTvVer);
    });

    $("#lap").click(function(){
        listHeadingClick(this.id, isLapVer);
    });

    $("#car").click(function(){
       listHeadingClick(this.id, isCarVer);
    });

    $("#bikes").click(function(){
        listHeadingClick(this.id, isBikeVer);
    });

    $("#truck").click(function(){
        listHeadingClick(this.id, isTruckVer);
    });

    $("#sari").click(function(){
       listHeadingClick(this.id, isSariVer);
    });

    $("#zeans").click(function(){
        listHeadingClick(this.id, isZeansVer);
    });

    $("#tshirt").click(function(){
        listHeadingClick(this.id, isTshirtVer);
    });
}); 

var getElement = function(element,elem){
    var element = element.text();
    var elem = elem.text();
    $("#para").text("This is" +" " +element+" "+elem+" "+ "page");
}