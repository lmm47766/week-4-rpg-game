
//********* List of global variables ***************//

var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
var status=true;
var losses=0;
var newImage;
var newImgHeader;
var randomArray=ran12();
var r;
var imageOptions = ["assets/images/iron_man.png","assets/images/spiderman.png",
  					   "assets/images/venom.png","assets/images/captain_america.png"];

var headers = ["Iron Man","Spiderman","Venom","Captain America"];
var HpOptions = ["Iron Man","Spiderman","Venom","Captain America"];



//***************** List of functions  ***********************//

//Display the stats
function display() {


};

//Resets the values of the images
function resetImgValues() {


};



//Function to create a a list of random numbers from 1-12
function ran12(){

};




//*****************  End of list of functions  ***********************//


   //Creating new images unde the image Div
   for (var i = 0; i < imageOptions.length; i++) {

    var newDiv = $("<div>");
    newDiv.addClass("col-md-12 col-xs-12 characters");
    newDiv.attr("id", ("image" + (i+1) ) );
    newDiv.attr("status", "false");
    $(".images").append(newDiv);


    var namehero = $("<h4>");
    namehero.addClass("headers");
    namehero.attr("id", ("imageH" + (i+1) ) );
    newDiv.append(namehero);
    namehero.text(headers[i]);

    newImage = $("<img>");
    newImage.addClass("image");
    newImage.attr("src", imageOptions[i]);
    newImage.attr("id", ("hero" + (i+1) ));
    newDiv.append(newImage);



  };



  $(".characters").on("click", function() {

      var imageValue = ($(this).attr("id"));
      $("#"+imageValue).attr("status","true" );
      // var test = ($(this).attr("status"));
      // console.log(test);

      for (var i = 1; i <= 4; i++) {
   
        if ( ($("#image"+i).attr("status") ) === "true") {
            $("#image"+i).appendTo( $(".myChar") );
            $("#image"+i).addClass("good");
        }
        else {
            $("#image"+i).appendTo( $(".enemies") );
            $("#image"+i).addClass("bad");
        }
      }

      $(".bad").on("click", function() { 
          var a = ($(this).attr("id"));
          console.log(a);
          $("#" + a).appendTo( $(".defender"));

      });


  });


  
