function myFunction()
{

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
{
  location.replace("https://asamasterson.com") // If IE the go to url. change 'https://asamasterson.com' to your url
}
else  // If another browser, do whats in the next set of curly brackets (nothing)
{
// nothing needed (only if you want to say something like well done your not using ie)
}

return false;
}
