var stateInfo = {
        currentCategory: "electronic",
        isPinState: true,
        isUnpinState: false,
        isLeftHamburgerClickedInUnpinState: false,
        isLeftHamburgerOnClick: false,
        isLeftHamburgerClicked: false,
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

$(document).ready(function(){
    $("#rightPara").text("This is Samsung Mobile page");
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

    var change = function(){
        $("#pin").addClass("pin");
        stateInfo.isLeftHamburgerOnClick =! stateInfo.isLeftHamburgerOnClick;
        stateInfo.isLeftHamburgerClicked = true;
        $("#leftPanel").hide();
        $("#rightHamburger").show();
        $("#rightPanel").addClass("increaseWidth");
        $("#listPanel").addClass("opacity");
        $("#leftPanel").addClass("opacityDone");
        if (stateInfo.isLeftHamburgerClickedInUnpinState == false) {
            stateInfo.isLeftHamburgerClicked = true;
            $("#leftPanel").hide();
        }
    }

    var clickOnPin = function(){
        if (stateInfo.isPinState) {
            change();
        }else{
            $("#pin").removeClass("pin");
            stateInfo.isLeftHamburgerClicked = false;
            stateInfo.isLeftHamburgerOnClick =! stateInfo.isLeftHamburgerOnClick;
            $("#rightPanel").removeClass("increaseWidth");
            $("#rightPanel").addClass("decreaseWidth");
            $("#listPanel").removeClass("opacity");
            $("#leftPanel").removeClass("opacityDone");

        }
        stateInfo.isPinState = ! stateInfo.isPinState;
        $("#rightPanel").removeClass("decreaseWidth");
        stateInfo.isUnpinState =! stateInfo.isUnpinState;
        console.log("unpin state in clickon function: ",stateInfo.isUnpinState);
        return;
    }

    var addAndRemoveClass = function(){
        showAllList(stateInfo.currentCategory);
        $("#rightPanel").removeClass("increaseWidth");
        $("#rightPanel").addClass("decreaseWidth");
        $("#rightHamburger").hide();
        stateInfo.isLeftHamburgerClicked =! stateInfo.isLeftHamburgerClicked;
        console.log("state of left hamburger:", stateInfo.isLeftHamburgerClicked);
    }

    var rightHamburger = function(){
        addAndRemoveClass();
        if (stateInfo.isUnpinState) {
            console.log("unpin state in right hamburger button in IF case:", stateInfo.isUnpinState);
            $("#rightPanel").removeClass("decreaseWidth");
            $("#rightPanel").addClass("increaseWidth");
        }else if (!stateInfo.isUnpinState) {
            console.log("unpin state in right hamburger button in ELSE case :", stateInfo.isUnpinState);
            $("#rightPanel").removeClass("increaseWidth");
            $("#rightPanel").addClass("decreaseWidth");
        }
    }

    var leftHamburger = function(){
        $("#rightPanel").removeClass("decreaseWidth");
        $("#rightPanel").addClass("increaseWidth");
        $("#rightHamburger").show();
        $("#leftPanel").hide();
        stateInfo.isLeftHamburgerClicked =! stateInfo.isLeftHamburgerClicked;
        //stateInfo.isLeftHamburgerOnClick =! stateInfo.isLeftHamburgerOnClick;
    }

    $("#electronic").click(function(){
        $("#rightPara").text("This is Samsung Mobile page");
        stateInfo.currentCategory = "electronic";
        showAllList(stateInfo.currentCategory);
        $(this).addClass("active");
        $("#automobiles, #clothing").removeClass("active");
        if (stateInfo.isLeftHamburgerClicked) {
            $("#leftPanel").hide();
            $("#rightHamburger").show();
        }else if (stateInfo.isLeftHamburgerClicked == false) {
            stateInfo.currentCategory = "electronic";
            showAllList(stateInfo.currentCategory);
        }
    });

    $("#automobiles").click(function(){
        $("#rightPara").text("This is Mercedes Cars page");
        stateInfo.currentCategory = "automobiles";
        showAllList(stateInfo.currentCategory);
        $(this).addClass("active");
        $("#electronic, #clothing").removeClass("active");
        if (stateInfo.isLeftHamburgerClicked) {
            $("#leftPanel").hide();
            $("#rightHamburger").show();
        }else if (stateInfo.isLeftHamburgerClicked == false) {
            stateInfo.currentCategory = "automobiles";
            showAllList(stateInfo.currentCategory);
        }
    });

    $("#clothing").click(function(){
        $("#rightPara").text("This is Banarsi Sarees page");
        stateInfo.currentCategory = "clothing";
        showAllList(stateInfo.currentCategory);
        $(this).addClass("active");
        $("#electronic, #automobiles").removeClass("active");
        if (stateInfo.isLeftHamburgerClicked) {
            $("#leftPanel").hide();
            $("#rightHamburger").show();
        }else if (stateInfo.isLeftHamburgerClicked == false) {
            stateInfo.currentCategory = "clothing";
            showAllList(stateInfo.currentCategory);
        }
    });

    $("#leftHamburger").click(leftHamburger);

    $("#rightHamburger").click(rightHamburger);
    
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
    if (stateInfo.isLeftHamburgerOnClick == true) {
        stateInfo.isLeftHamburgerClicked = true;
        $("#leftPanel").hide();
        $("#rightHamburger").show();
    }
}