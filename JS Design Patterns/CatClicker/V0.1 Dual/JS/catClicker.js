

var value;

window.onload = function () {

  var elem1 = document.getElementsByClassName("catPictureDiv1")[0];

  elem1.addEventListener('click', function(){
    numClicksSpan1 = document.getElementsByClassName("numClicks1")[0];

    numClicksSpan1.innerHTML = ++numClicksSpan1.innerHTML;
  }, false);

  var elem2 = document.getElementsByClassName("catPictureDiv2")[0];

  elem2.addEventListener('click', function(){
    numClicksSpan2 = document.getElementsByClassName("numClicks2")[0];

    numClicksSpan2.innerHTML = ++numClicksSpan2.innerHTML;
  }, false);
}
