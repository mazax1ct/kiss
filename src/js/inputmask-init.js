$(document).ready(function() {
  $(".js-phone-mask").inputmask("+7 (999) 999 - 99 - 99", {
    "clearIncomplete": true,
    showMaskOnHover: false,
    "onincomplete": function() {$(this).parent('.input-label').removeClass('changed'); }
  });
});
