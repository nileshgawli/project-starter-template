$(document).ready(function(){
    $('#emailHelp').hide();
    $('#passwordHelp').hide();
    $('#conPasswordHelp').hide();
    // Error msg Start
        $('#proceed').click(function() {
          var sEmail = $('#email').val();
          if ($.trim(sEmail).length == 0) {
            $('#emailHelp').show();
            e.preventDefault();
          }
          if (validateEmail(sEmail)) {
            $('#emailHelp').hide();
          } else {
            $('#emailHelp').show();
            e.preventDefault();
          }
        });

        $('#proceed').click(function(event) {
            if ($('#pass').val().length == 0) { //if pass field is empty
                $('#passwordHelp').show();
                preventDefault(event);
          }
          if ($('#pass').val().length) { //if pass has value
            $('#passwordHelp').hide();
            $('#proceed').click(function(){
              window.location("/OTP/index.html");
            });
          }

        });
        $('#proceed').click(function(event) {
            if ($('#confirm-pass').val().length == 0) { //if pass field is empty
                $('#conPasswordHelp').show();
                preventDefault(event);
          }
          if ($('#comfirm-pass').val().length) { //if pass has value
            $('#conPasswordHelp').hide();
            $('#proceed').click(function(){
              window.location("/OTP/index.html");
            });
          }

        });

      function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
          return true;
        } else {
          return false;
        }
    }


});