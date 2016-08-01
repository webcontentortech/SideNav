$(document).ready(function(){
    $("#leftHamburger, #img").show();
    $("#electronic").addClass("active");
    
    var showAllList = function(category){
        $("#leftPanel").show();
        hideAllList();
        var element = $("#" + category + "List");
        element.show();
        return;
    }

     var hideAllList = function(){
        $("#electronicList").hide();
        $("#automobilesList").hide();
        $("#clothingList").hide();
    }

    var stateInfo = {
        currentCategory: "electronic",
        isPinState: true,
        "electronic" : {
            "mobile": {isOpen: true},
            "tv": {isOpen: true},
            "laptop": {isOpen: true},
        },
        "automobiles" : {
            "car": {isOpen: true},
            "bikes": {isOpen:true},
            "truck": {isOpen: true},
        },
        "clothing": {
            "sari": {isOpen:true},
            "zeans": {isOpen:true},
            "tshirt": {isOpen:true}
        },
    }

    var rightHamburger = function(){
        showAllList(stateInfo.currentCategory);
        $("#leftPanel").addClass("opacityDone");
        $("#rightHamburger").hide();
    }

    $("#electronic").click(function(){
        $(this).addClass("active");
        $("#automobiles, #clothing").removeClass("active");
        stateInfo.currentCategory = "electronic";
        showAllList(stateInfo.currentCategory);
        return;
    });

    $("#automobiles").click(function(){
        $(this).addClass("active");
        $("#electronic, #clothing").removeClass("active");
        stateInfo.currentCategory = "automobiles";
        showAllList(stateInfo.currentCategory);
        return;
    });

    $("#clothing").click(function(){
        $(this).addClass("active");
        $("#electronic, #automobiles").removeClass("active");
        stateInfo.currentCategory = "clothing";
        showAllList(stateInfo.currentCategory);
    });

    $("#leftHamburger").click(function(){
        $("#rightHamburger").show();
        $("#leftPanel").hide();
        $("#rightPanel").addClass("increaseWidth");
    });

    $("#rightHamburger").click(rightHamburger);
    
    var clickOnPin = function(){
        if (stateInfo.isPinState) {
            $("#pin").addClass("pin");
            $("#leftPanel").hide();
            $("#rightHamburger").show();
            $("#rightPanel").addClass("increaseWidth");
            $("#listPanel").addClass("opacity");
        }else{
            $("#pin").removeClass("pin");
            $("#listPanel").removeClass("opacity");
        }
        stateInfo.isPinState = ! stateInfo.isPinState;

        return;
    }

    $("#pin").click(clickOnPin);

    var listHeadingClick = function(id, isOpen){
        var itemId = "#" + id + "Items";
        var imgId = "#" + id + "Angle";
        if(isOpen){
            $(imgId).addClass("angle");
            $(itemId).hide();
        }else{
            $(imgId).removeClass("angle");
            $(itemId).show();
        }
        stateInfo[stateInfo.currentCategory][id].isOpen = ! isOpen;

        return;
    };

    $("#mobile").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].mobile.isOpen);
    });

    $("#tv").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].tv.isOpen);
    });

    $("#laptop").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].laptop.isOpen);
    });

    $("#car").click(function(){
       listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].car.isOpen);
    });

    $("#bikes").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].bikes.isOpen);
    });

    $("#truck").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].truck.isOpen);
    });

    $("#sari").click(function(){
       listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].sari.isOpen);
    });

    $("#zeans").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].zeans.isOpen);
    });

    $("#tshirt").click(function(){
        listHeadingClick(this.id, stateInfo[stateInfo.currentCategory].tshirt.isOpen);
    });

    $("#automobilesList, #clothingList, #rightHamburger").hide();
    
}); 
    var getElement = function(subHeading,listHeading){
        var subHeading = subHeading.text();
        var listHeading = listHeading.text();
        $("#rightPara").text("This is" +" " +subHeading+" "+listHeading+" "+ "page");
    }