
//********* List of global variables ***************//

var newImage;
var newImgHeader;
var imageOptions = ["assets/images/iron_man.png","assets/images/spiderman.png",
               "assets/images/venom.png","assets/images/captain_america.png"];

var headers = ["Iron Man","Spiderman","Venom","Captain America"];
var hpOpt = [200,50,180,200];
var powers = rand();
var goodHp;
var goodPower;
var badHp;
var badPower;
var badName;
var newRound = false;
var gp=[];


//***************** List of functions  ***********************//

//Function to create a a list of random numbers from 1-12
function rand(){
    var max = 4;
    var random = [];
    for(var i = 0;i<max ; i++) {
        var temp = Math.floor(Math.random() * (15-5)) + 5;

        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else {
          i--;
        }
    }
    return random;
};



function add(x) {
  var newNum=0;
  gp.push( parseInt(x));
  for (var i = 0; i < gp.length; i++) {
    newNum = newNum + gp[i];
  }
  return newNum;
}



//*****************  End of list of functions  ***********************//
 
function newGame () {

  $("#restart").css('display',"none");

   //Creating new images unde the image Div
   for (var i = 0; i < imageOptions.length; i++) {

    var newDiv = $("<div>");
    newDiv.addClass("col-md-12 col-xs-12 characters");
    newDiv.attr("id", ("image" + (i+1) ) );
    newDiv.attr("status", "false");
    newDiv.attr("power",powers[i]);
    $(".images").append(newDiv);


    var namehero = $("<h4>");
    namehero.addClass("headers");
    namehero.attr("id", ("imageH" + (i+1) ) );
    newDiv.append(namehero);
    newDiv.attr("name",headers[i]);
    namehero.text(headers[i]);

    newImage = $("<img>");
    newImage.addClass("image");
    newImage.attr("src", imageOptions[i]);
    newImage.attr("id", ("hero" + (i+1) ));
    newDiv.append(newImage);

    var heroHp = $("<h3>");
    heroHp.addClass("hp");
    heroHp.attr("id", ("imageHp" + (i+1) ) );
    newDiv.attr("hps", hpOpt[i] );
    newDiv.append(heroHp);
    heroHp.text(hpOpt[i]);    



  };



//Starting by choosing the main character
  $(".characters").on("click", function() {

      var imageValue = ($(this).attr("id"));
      $("#"+imageValue).attr("status","true" );



      //For loop to move characters to their respective areas 
      //(i.e main character vs enemies)
      for (var i = 1; i <= 4; i++) {    

          //Checking to see if it was clicked or not
          if ( ($("#image"+i).attr("status") ) === "true") {
              $("#image"+i).appendTo( $(".myChar") );
              $("#image"+i).attr("class","col-md-12 col-xs-12 good");
              $("#imageHp"+i).addClass("good1");

 
          }
          else if ( ($("#image"+i).attr("status") ) === "false" ) {
              $("#image"+i).appendTo( $(".enemies") );
              $("#image"+i).addClass("bad");
              $("#image"+i).css("background","red");
 



          }
         $("#image"+i).attr("status","done");

      }



      //Choosing your villian
      $(".bad").on("click", function() { 

          var a = ($(this).attr("id"));
          $("#" + a).appendTo( $(".defender"));
          $("#" + a).attr("class", "col-md-12 col-xs-12 characters bad defenders");
          $("#" + a).find('h3').attr("class","hp bad1");
          $("#" + a).css("background","black");
          $("#" + a).css("color","white");
  
          badHp = $(this).attr("hps");
          badPower = $(".defenders").attr("power");
          badName = $(".defenders").attr("name"); 


          if (!newRound) {
            goodHp = ($(".good").attr("hps") );
            goodPower = $(".good").attr("power"); 
          }

      });




  });



      $("#btn").on("click", function() { 
         
        var a = add(goodPower);
        console.log(a);

        $("#yourAttack").html("You attacked "+ badName  +" with " + a + " damage.");
        $("#yourDamage").html(badName + " attack you with " + badPower + " damage.");

        goodHp = goodHp - badPower;
        badHp = badHp - a;



        $(".good1").html("HP: " + goodHp);
        $(".bad1").html("HP: " + badHp);


        if (goodHp <= 0) {
          $("#yourAttack").html("You lose");
          $("#yourDamage").html("");
          $("#restart").css('display',"inline");
        }
        else if (badHp <= 0 ) {
          newRound=true;
          $(".defender").empty();
          $("#yourAttack").html("You defeated " + badName);
          $("#yourDamage").html("Chose new enemy to fight");
        }

      });




      $("#restart").on("click", function() { 
        newRound = false;
        $(".myChar").empty();
        $(".myChar").html("<h2>Your Character</h2>");

        $(".enemies").empty();
        $(".enemies").html("<h2>Enemies Available To Attack</h2>");

        $(".defender").empty();
        $("#yourAttack").html(" ");
        // $(".defenders").html("<h2>Defender</h2>");


        newGame();
      });
  
}
    
newGame();


