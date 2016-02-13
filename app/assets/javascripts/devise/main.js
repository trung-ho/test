var DevisedMainJs = {};

(function() {
	var validate_sign_in = DevisedMainJs.validate_sign_in = function() {
  	$("#new_user").validate();
  }

  var validate_sign_up_first_step = DevisedMainJs.validate_sign_up_first_step = function() {
  	$("#new_user").validate();

		$( "#user_email_confirmation" ).rules( "add", {
	    equalTo: "#user_email",
	    messages: {
		    equalTo: "Your email is not match. Please try again."
		  }
	  });

	  $( "#user_password" ).rules( "add", {
	    minlength: 6
	  });

  	$('#move-second-step').click(function() {
      $("#new_user").valid();
  	});
  }
} ());
