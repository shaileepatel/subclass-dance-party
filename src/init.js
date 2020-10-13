$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {
    // for (var i = 0; i < window.dancers.length; i++) {
    //   window.dancers[i].lineUp();
    // }
    $('.fly').animate({
      top: '550',
    });
    $('.jump').animate({
      top: '550',
    });
    $('.zoomInAndOut').animate({
      top: '550',
    });
  });

  $('.battleButton').on('click', function(event) {
    console.log('battle on');
    $('.jump').animate({
      left: '75',
    });
    $('.zoomInAndOut').animate({
      left: '75',
    });
    $('.fly').animate({
      left: '400',
    });
    $('body').addClass('newbg');
  });

  $('.addDancerButton').on('click', function(event) {

    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(dancer);
    $('body').append(dancer.$node);
  });
});

