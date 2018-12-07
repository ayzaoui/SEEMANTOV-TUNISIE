$(function() {
    
    $('#infosCV').hide();
    $( "#infosContact" ).change(function() {
        if($('#infosContact').val()==3)
        {
             $('#infosCV').show();
        }
        else
        {
           $('#infosCV').hide();
           $('#cv').val("");
        }
    });
  
});