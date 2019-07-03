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
                $("#yourCharacterDiv").html("<img id=prince src=assets/images/PrinceCard.png class=imgClass >");
              
                $("#enemiesDiv").html("<img id=executioner src=assets/images/ExecutionerCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=witch src=assets/images/WitchCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=wizard src=assets/images/WizardCard.png class=imgClass >")
                $("#playerDiv").hide();
                isSelected==true
            }
        });
        $("#img2").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img id=executioner src=assets/images/ExecutionerCard.png class=imgClass >");
                // $("#yourCharacterDiv").prop("disabled", "disabled");

                $("#enemiesDiv").html("<img id=prince src=assets/images/PrinceCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=witch src=assets/images/WitchCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=wizard src=assets/images/WizardCard.png class=imgClass >")
                $("#playerDiv").hide();
                isSelected==true
            }
        });
        $("#img3").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img id=witch  src=assets/images/WitchCard.png class=imgClass >");
                $("#enemiesDiv").html("<img id=executioner src=assets/images/ExecutionerCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=prince src=assets/images/PrinceCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=wizard src=assets/images/WizardCard.png class=imgClass >")
                $("#playerDiv").hide();
                isSelected==true
            }
        });
        $("#img4").on("click", function () {
            if(isSelected===false){
                $("#yourCharacterDiv").html("<img id=wizard src=assets/images/WizardCard.png class=imgClass >");
                $("#enemiesDiv").html("<img id=executioner src=assets/images/ExecutionerCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=prince src=assets/images/PrinceCard.png class=imgClass >")
                $("#enemiesDiv").append("<img id=witch src=assets/images/WitchCard.png class=imgClass >")
                $("#playerDiv").hide();
                isSelected==true
            }
        });
        $("#enemiesDiv").on("click","#prince",function(){
            $("#defenderDiv").append("<img id=prince src=assets/images/PrinceCard.png class=imgClass >")
            $("#prince").hide();
        });
        $("#enemiesDiv").on("click","#executioner",function(){
            $("#defenderDiv").append("<img id=prince src=assets/images/ExecutionerCard.png class=imgClass >")
            $("#executioner").hide(this);
        });
        $("#enemiesDiv").on("click","#wizard",function(){
            $("#defenderDiv").append("<img id=prince src=assets/images/WizardCard.png class=imgClass >")
            $("#wizard").hide(this);
        });
        $("#enemiesDiv").on("click","#witch",function(){
            $("#defenderDiv").append("<img id=prince src=assets/images/WitchCard.png class=imgClass >")
            $("#witch").hide(this);
        });


    
    

});