function getClickedElementId(button) {
    if (button.innerHTML == "Добавить") {
        var father = button.parentNode;
        var grproduct = father.parentNode.id;
        button.innerHTML = 1;
        var plus = father.getElementsByClassName("plus");
        var minus = father.getElementsByClassName("minus");
        plus[0].style.display = 'block';
        minus[0].style.display = 'block';
    }
}
function plus(element) {
  var spanElement = element.previousElementSibling;
  var currentNumber = parseInt(spanElement.textContent);
  spanElement.textContent = currentNumber + 1;
}

function minus(element) {
  var spanElement = element.nextElementSibling;
  var currentNumber = parseInt(spanElement.textContent);

  if (currentNumber > 0) {
    spanElement.textContent = currentNumber - 1;
  }
  if (currentNumber < 2) {
    spanElement.textContent = "Добавить";
    var father = element.parentNode;
    var plus = father.getElementsByClassName("plus");
    var minus = father.getElementsByClassName("minus");
    plus[0].style.display = 'none';
    minus[0].style.display = 'none';
  }
}
