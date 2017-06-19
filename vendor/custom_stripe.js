// Event Listeners
$('#payment-form').on('submit', generateToken);
 
var generateToken = function(e) {
    var form = $(this);
 
    // No pressing the buy now button more than once
    form.find('button').prop('disabled', true);
 
    // Create the token, based on the form object
    Stripe.create(form, stripeResponseHandler);
 
    // Prevent the form from submitting
    e.preventDefault();
};
 
var stripeResponseHandler = function(status, response) {};