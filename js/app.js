(function($) {

	// smooth scroll

	$('.nav a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				if ($('#navbar').hasClass('in')) {
					$(".navbar-toggle").click();
				}
				return false;
			}
		}
	});

    function resetForm() {
        $('.form-horizontal').find('input:text, input:password, input:file, select, textarea, input:number').val('');
        $('.alert-success').fadeOut();
    }

    // process the form
    $('form').submit(function(event) {

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'service'           : $('select[name=service]').val(),
            'phone'             : $('input[name=phone]').val(),
            'message'           : $('textarea[name=message]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'inc/process.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                // console.log(data); 

                // here we will handle errors and validation messages
                if ( ! data.success) {
                    
                    // handle errors for name ---------------
                    if (data.errors.name) {
                        $('#name-group').addClass('has-error'); // add the error class to show red input
                        $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for email ---------------
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); // add the error class to show red input
                        $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for email ---------------
                    if (data.errors.service) {
                        $('#service-group').addClass('has-error'); // add the error class to show red input
                        $('#service-group').append('<div class="help-block">' + data.errors.service + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for phone ---------------
                    if (data.errors.phone) {
                        $('#phone-group').addClass('has-error'); // add the error class to show red input
                        $('#phone-group').append('<div class="help-block">' + data.errors.phone + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for message ---------------
                    if (data.errors.message) {
                        $('#message-group').addClass('has-error'); // add the error class to show red input
                        $('#message-group').append('<div class="help-block">' + data.errors.message + '</div>'); // add the actual error message under our input
                    }

                } else {

                    // ALL GOOD! just show the success message!
                    $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                    setTimeout(function() {
                        $('#bookAppt').modal('hide');
                        resetForm();
                    }, 2000);

                    // usually after form submission, you'll want to redirect
                    // window.location = '/thank-you'; // redirect a user to another page

                }
            })

            // using the fail promise callback
            .fail(function(data) {

                // show any errors
                // best to remove for production
                // console.log(data);
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

    // var RecaptchaOptions = { theme : 'custom' };

    // $('#submit_button').click(function() { 
    //     $.ajax({
    //         type: 'POST',
    //         url: 'inc/email.php',
    //         data: $('form#myform').serialize(),
    //         dataType: 'json',
    //         beforeSend: function() {
    //             var resp_field = $('#recaptcha_response_field').val();
    //             var name = $('#name').val();
    //             var email = $('#email').val();
    //             var message = $('#message').val();
    //             if (!resp_field || !name || !email || !message) { 
    //                 $('#output').html('All fields are required');
    //                 return false; 
    //             }
    //             emailpat = /^([a-z0-9])+([\.a-z0-9_-])*@([a-z0-9])+(\.[a-z0-9_-]+)+$/i;
    //             if (!emailpat.test(email)) {
    //                 $('#output').html('The e-mail address is not valid.'); 
    //                 return false;
    //             }
    //         },
    //         success: function(response) {
    //             if (response.status == 'success') {
    //                 $('#formcont').html('');
    //             }
    //             $('#output').html(response.errmessage);
    //         }
    //     });
    // });

	// Form validation via plugin
    // var submitMessage     = $('#submit-message'),
    //     messageContainer  = submitMessage.find('span'),
    //     loading           = $('#loading');
        
    // function showMessage(message, classAttr) {
    //     messageContainer.text(message)
    //     messageContainer.attr('class', classAttr);
    // }
    
        
    // $('#contact-form').validate({        
               
    //     // Override to submit the form via ajax
    //     submitHandler: function(form) {
    //         var options = {
    //             beforeSubmit: function() {
    //                 loading.show();
    //             },
    //             success: function() {
    //                 showMessage('Thank you! Your email has been submitted.', 'success');
    //                 form.reset();
    //                 loading.hide();
    //             },
    //             error: function() {
    //                 showMessage('We\'re sorry, your email could not be sent. Please try again later.', 'failure');
    //                 loading.hide();
    //             }
    //         };
    //         $(form).ajaxSubmit(options);
    //     },
    //     invalidHandler: function() {
    //         showMessage('There were some problems with your submission.', 'failure');
    //     }
    // });


})(jQuery);