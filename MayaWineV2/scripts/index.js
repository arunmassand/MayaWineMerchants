$(document).ready(function() {

  // YOUR CODE GOES HERE
  var $form = $('#email-sign-up');

  // Prevent page refreshing every time there is a submission
  // Can trust that event parameter comes in for all event handlers (i.e. on.('something'))
  $form.on('submit', function(event) {
    event.preventDefault();
    // Retrieve input of form
    var $input = $form.find('.email-input')
    // Save input of form in val
    var val = $input.val();

    if (val == '') {
      alert('Please fill out required field');
    }
    else {
      // Email to someone
      event.preventDefault();
      $('#email-sign-up').attr(
        'action',
        'mailto:amboy101@gmail.com?subject=New Subscriber');
      $('#email-sign-up').submit();
    }

    console.log(val);

    // Reset form
    $input.val('');

  });

 });
