

var value;

window.onload = function () {

  var elem = document.getElementsByClassName("catPictureDiv")[0];

  elem.addEventListener('click', function(){
    numClicksSpan = document.getElementsByClassName("numClicks")[0];

    numClicksSpan.innerHTML = ++numClicksSpan.innerHTML;
  }, false);
}
