

// $(document).ready(function() {
//    $(".grandma").submit(function(event) {
//     event.preventDefault();
//     // var str = $("form").serialize();
//     // alert(str);
//     $.post( "/grandma", $(this).serialize() );
//     var content = $( data ).find( "#grandma_says" );
//     $( "span" ).empty().append( "Grandma says: ".concat(content.text()) );
//   });
// });

$(document).ready(function() {
   $(".grandma").submit(function(event) {
    event.preventDefault();
    $.post( "/grandma", $(this).serialize(), function(data) {
      alert($("#grandma_says").html);
      $("#grandma_says").html(data);
    });
  });
});


