var $ = jQuery.noConflict();
$(document).ready(function($){
var stripe = Stripe($("#wpw_stripe").attr('wpw_pk_key'));
var elements = stripe.elements();
var style = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
var card = elements.create('card', {style: style});
card.mount('#card-element');
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  stripe.createToken(card).then(function(result) {
    if (result.error) {
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      stripeTokenHandler(result.token);
    }
  });
});
function stripeTokenHandler(token) {
$("#wpw_accord").removeClass("wpw_show").addClass("wpw_hide");
$("#loader_id-stripe").removeClass("wpw_hide").addClass("wpw_show");
$("#form_stripe").removeClass("wpw_show").addClass("wpw_hide");  
var wpw_external_acc = $("#wpw_stripe").attr('wpw_external_acc'); 
    
  $.ajax({
   url : wpw_external_acc,
   type : 'POST',
   data: "wpw_api=paye&wpw_type=stripe&stripeToken="+token.id+"&wpw_sub_pay="+$("form #wpw_sub_pay").val()+"&wpw_ukey_pay="+$("form #wpw_ukey_pay").val()+"&wpw_token_pay="+$("form #wpw_token_pay").val()+"&wpw_wpkey_pay="+$("form #wpw_wpkey_pay").val()+"&wpw_install_pay="+$("form #wpw_install_pay").val(),
   success : function(data){ 
       var obj = $.parseJSON(data);
       if(obj.success){
        if(obj.wp_account.authentication=='true'){
            if(obj.stripe_payment.result=='true'){
                  $.ajax({
                   url :  $("#wpw_stripe").attr('wpw_url_ajax'),
                   type : 'POST',
                   data: "action=wpw_update_acs&wpw_license="+obj.wp_adding_license.license+"&wpw_agreement="+obj.wp_adding_license.agreement+"&wpw_wpkey="+obj.wp_adding_license.wpkey+"&wpw_path="+obj.wp_adding_license.path+"&wpw_registration="+obj.wp_adding_license.registration,
                   success : function(data){
                      $(location).attr('href', $("#wpw_stripe").attr('wpw_url_adm')+'admin.php?page=wpw-setting')
                    }
              });
            }else{
                $("#wpw_accord").removeClass("wpw_show").addClass("wpw_hide");
                $("#loader_id-stripe").removeClass("wpw_show").addClass("wpw_hide");
                $("#form_stripe").removeClass("wpw_hide").addClass("wpw_show");
            }
        }else{
            $(location).attr('href', $("#wpw_stripe").attr('wpw_url_adm')+'admin.php?page=wpw-setting');
        }
       }
   }
  });
}
$('#accept_trm_01').change(function(){
    if($('#accept_trm_01').is(":checked"))
    {
        if($('#accept_trm_02').is(":checked"))
            {
                $("#wpw_accord").removeClass("wpw_show").addClass("wpw_hide");
                $("#loader_id-stripe").removeClass("wpw_show").addClass("wpw_hide");
                $("#form_stripe").removeClass("wpw_hide").addClass("wpw_show");
            }
    }  
});
$('#accept_trm_02').change(function(){
    if($('#accept_trm_01').is(":checked"))
    {
        if($('#accept_trm_02').is(":checked"))
            {
                $("#wpw_accord").removeClass("wpw_show").addClass("wpw_hide");
                $("#loader_id-stripe").removeClass("wpw_show").addClass("wpw_hide");
                $("#form_stripe").removeClass("wpw_hide").addClass("wpw_show");
            }
    }
});

});