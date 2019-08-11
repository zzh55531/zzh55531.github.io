<script type="text/javascript">
(function(doc,win){
      var docEl =doc.documentElement,
              resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
              recalc = function(){
                  var clientWidth = docEl.clientWidth>375 ? 375 :docEl.clientWidth;
                  if (!clientWidth) {return};
                  docEl.style.fontSize = 16 * (clientWidth/375) + 'px';
              };
      recalc();
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document,window)
</script>
