
  $(document).ready(function() {
  
    $('input[name="age"]').on('change', (function(e){
      var age = $("input:radio[name=age]:checked").val();
      
      if (age === "child") {
        alert("Child");
      } else if (age === "youth") {
        alert("youth");
      } else {
        alert("old");
      }
      
      event.preventDefault();
    }));
});

