var rno1=Math.random();
var randomNumber1=Math.floor((rno1 * 6)+1);
var randomImage="dice" + randomNumber1 + ".png";
var randomImageFile="images/"+ randomImage;
var Img= document.querySelectorAll("img")[0];  //querySelector used when only one tag is required , querySelectorAll is for all the tags and u need [0],[1],etc
Img.setAttribute("src",randomImageFile);


var rno2=Math.random();
var randomNumber2=Math.floor((rno2 * 6)+1);
var randomImage2="dice" + randomNumber2 + ".png";
var randomImageFile2="images/"+ randomImage2;
var Img2= document.querySelectorAll("img")[1];  //querySelector used when only one tag is required , querySelectorAll is for all the tags and u need [0],[1],etc
Img2.setAttribute("src",randomImageFile2);


if(randomNumber1 > randomNumber2)
{
   document.querySelector("h1").innerHTML="Player 1 wins";
    
}

else if(randomNumber1 === randomNumber2)
{
   document.querySelector("h1").innerHTML="Draw";
    
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}