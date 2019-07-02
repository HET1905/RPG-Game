var isSelected = false;

$(document).ready(function(){

    function createImgCard(){
        var newCard = $("<div>");
        var cardH1 = $("<h5>");
        var cardImg = $("<img>");
        var cardP = $("<p>"); 

    }

    $(".imgClass").on("click",function(){
        alert(this.src);
       
        if(isSelected==false){
            var newImg = $("<img>");
            newImg.attr('src',this.src);
            newImg.addClass('card-img-top');
            newImg.appendTo("#yourCharacterDiv");
            isSelected=true
        }
        else{
            var newImg = $("<img>");
            newImg.attr('src',this.src);
            newImg.addClass('card-img-top');
            newImg.appendTo("#enemiesDiv");
            isSelected=false
        }
       
    });

});