$(document).ready(function () {
    $("#contactusform").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
            digits: true,
            minlength: 11,
            maxlength: 11
        }
      },
      messages: {
        name: "Please specify your name",
        email: {
            required: "Enter a valid email address",
            email: "Email format: name@domain.com"
        },
        phone: {
            digits: "The value must be a number",
            minlenght: "please insert a number of {0} digits",
            maxlength: "please insert a number of {0} digits"
        }
      }
    });
});
