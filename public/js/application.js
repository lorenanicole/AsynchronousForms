// $(document).ready(function() {
//   $( "form" ).submit(function( event ) {
//     alert( "Handler for .submit() called." );
//   }
//   // This is called after the document has loaded in its entirety
//   // This guarantees that any elements we bind to will exist on the page
//   // when we try to bind to them

//   // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
//   );
// });

// $(document).ready(function() {
//   $( "form" ).submit(function( event ) {
//     // attach event handler to the form
//     event.preventDefault();
//     //stop form from normal submission
//     var $form = $(this);
//     // get values from elements on the page
//     term = $form.find( "input[name='user_input']" ).val(),
//     url = $form.attr( "action" );
//     // send data via post
//     var posting = $.post( url, { user_input: term } );
//     console.log(term);
//     console.log(url);
//     console.log(posting);
//     // Put the results in a div
//     posting.done(function( data ) {
//     var content = $( data ).find( "#content" );
//     console.log(content);
//     $( "#result" ).empty().append( content );
//     });
//   });
// });

$(document).ready(function() {
  $( "form" ).submit(function( event ) {
    // attach event handler to the form
    event.preventDefault();
    //stop form from normal submission
    var $form = $(this);
    var str = $( $form ).serialize();
    $( "#results" ).text( str );
    // get values from elements on the page
    // term = $form.find( "input[name='user_input']" ).val(),
    url = $form.attr( "action" );
    // send data via post
    var posting = $.post( url, str );
    console.log(posting);
    // console.log(url);
    // console.log(posting);
    // Put the results in a div
    posting.done(function( data ) {
    var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( content );
    });
  });
});

// function showValues() {
//     var str = $( "form" ).serialize();
//     $( "#results" ).text( str );
//   }
//   $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
//   $( "select" ).on( "change", showValues );
//   showValues();