window.onload = function ()
{
  var clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      heightPx = clientHeight + "px";
  document.querySelector("#header-wrapper").style.height =  window.header.style.height = heightPx;
}
