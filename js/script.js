
/*index page*/


/*Jumborton fadein*/

$(document).ready(function() {
    $('#snow').fadeIn(2000);
});



/*typpwrite effect inside about <strong> part*/
var str = "Web developer + Web desinger +  Media programmer";
var split = str.split("");
var counter = 0;

var si = setInterval(function(){
	var strong = $("strong");
	
	strong.append(split[counter]);
	counter++;
	if(counter==length){clearInterval(si)}
	
},100);



/*Design page*/

/* Full  Overlay inside design page */
function openNav() {
    document.getElementById("myFul").style.width = "100%";
  }
function closeNav() {
    document.getElementById("myFul").style.width = "0%";
  }
  
function openNav2() {
    document.getElementById("myFul2").style.height = "100%";
  }
function closeNav2() {
    document.getElementById("myFul2").style.height = "0%";
  }
 
  
/* Side  Overlay inside design page */  
function openNav3() {
    document.getElementById("mySidenav").style.width = "290px";
    document.getElementById("main").style.marginLeft = "290px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav3() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}



/*databse page*/

/*'Slide show */


$('.carousel').carousel({
  interval: 2000
})