
  $(document).ready(function() {
  
    $('input[name="age"]').on('change', (function(e){
      var age = $("input:radio[name=age]:checked").val();
      
      if (age === "child") {
        alert("Child");
      } else if (age === "youth") {
        alert("Youth");
      } else {
        alert("Adult");
      }
    
      $(".question").toggle();
      $(".age").toggle();

      event.preventDefault();
    }));

    $('input[name="question"]').on('change', (function(e){
      var question = $("input:radio[name=question]:checked").val();
      
      if (question === "hat-yes") {
        alert("Then take it off");
      } else if (question === "hat-no") {
        alert("Great, leave it on. We sell lost hats in the back park.");
      } else {
        alert("Then we'll sell it");
      }

      event.preventDefault();
    }));
});

