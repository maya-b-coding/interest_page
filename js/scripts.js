$(document).ready(function() {

    var faded = 0;
    var upSound = "Up";
    var downSound = "Down";
    var thunder = "Thunder";

      createjs.Sound.registerSound("./sounds/up.wav", upSound);

      createjs.Sound.registerSound("./sounds/down.wav", downSound);

      createjs.Sound.registerSound("./sounds/Thunder2.ogg", thunder);



    $("#increase_font").click(function(){

      var curSize = $(".lrg_box").css("font-size");
      var intSize = parseInt(curSize, 10) + 1;

      $(".lrg_box").css("font-size", intSize );
      $(".full_box").css("font-size", intSize);
      createjs.Sound.play(upSound);
    });

    $("#decrease_font").click(function(){

      var curSize = $(".lrg_box").css("font-size");
      var intSize = parseInt(curSize, 10) -1;

      $(".lrg_box").css("font-size", intSize );
      $(".full_box").css("font-size", intSize);
      createjs.Sound.play(downSound);
    });



    $("#fade").click(function(){
        if (faded == 1){
          faded = 0;
          $("#fade").html("Fade Out");
          $("#herobrine").fadeOut();
          createjs.Sound.play(thunder);
        } else {
          faded = 1;
          $("#fade").html("Fade In");
          $("#herobrine").fadeIn();
          createjs.Sound.play(thunder);

        }
    });

    $("#test_sound").click(function(){
      createjs.Sound.play(upSound);
    });

});
