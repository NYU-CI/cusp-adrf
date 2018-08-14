// Helper function for form
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};


// Rules of Behavior form submission
var $form = $('form#rules-form'),
    url = 'https://script.google.com/macros/s/AKfycbxchL28m-7hAcYW5Fi0e_tkDpyEPR8ua8w4_NjP3o6yxgT89VP9/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var form_data = $form.serializeObject();
  var dt = new Date($.now());
  form_data['date'] = dt.toISOString();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form_data
  }).done(
    // do something
    alert("Thank you for your submission!")
  );
})
