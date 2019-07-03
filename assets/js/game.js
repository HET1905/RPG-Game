var isSelected = false;
var imgObject = {
    img1: {
        name: "Prince",
        src: "assets/images/PrinceCard.png",
        healthPoint: 120
    },
    img2: {
        name: "Executioner",
        src: "assets/images/ExecutionerCard.png",
        healthPoint: 150
    },
    img3: {
        name: "Witch",
        src: "assets/images/WitchCard.png",
        healthPoint: 80
    },
    img4: {
        name: "Wizard",
        src: "assets/images/WizardCard.png",
        healthPoint: 100
    }

}

$(document).ready(function () {

    function createImgCard() {
        var newCard = $("<div>");
        var cardH1 = $("<h5>");
        var cardImg = $("<img>");
        var cardP = $("<p>");

    }
   
        $("#img1").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img src=assets/images/PrinceCard.png class=imgClass >");
                $("#enemiesDiv").html("<img src=assets/images/ExecutionerCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/WitchCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/WizardCard.png class=imgClass >")
                isSelected==true
            }
        });
        $("#img2").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img src=assets/images/ExecutionerCard.png class=imgClass >");
                $("#enemiesDiv").html("<img src=assets/images/PrinceCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/WitchCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/WizardCard.png class=imgClass >")
                isSelected==true
            }
        });
        $("#img3").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img src=assets/images/WitchCard.png class=imgClass >");
                $("#enemiesDiv").html("<img src=assets/images/ExecutionerCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/PrinceCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/WizardCard.png class=imgClass >")
                isSelected==true
            }
        });
        $("#img4").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img src=assets/images/WizardCard.png class=imgClass >");
                $("#enemiesDiv").html("<img src=assets/images/ExecutionerCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/PrinceCard.png class=imgClass >")
                $("#enemiesDiv").append("<img src=assets/images/WitchCard.png class=imgClass >")
                isSelected==true
            }
        });



    
    

});