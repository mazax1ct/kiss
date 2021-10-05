function scrollCompensate () {
  if(document.body.scrollHeight > window.innerHeight) {
    var w = window.innerWidth - document.documentElement.clientWidth;
    $('head').append('<style id="scroll-compensate" type="text/css">.compensate-for-scrollbar{padding-right:'+ w +'px;}</style>');
    $('body').addClass('compensate-for-scrollbar');
  }
}
