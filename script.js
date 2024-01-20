var cart = document.getElementById("cart");

function getClickedElementId(button) {
    if (button.innerHTML == "Добавить") {
        var father = button.parentNode;
        var grproduct = father.parentNode;
        button.innerHTML = 1;
        var plus = father.getElementsByClassName("plus");
        var minus = father.getElementsByClassName("minus");
        plus[0].style.display = 'block';
        minus[0].style.display = 'block';
        var cost = grproduct.getElementsByClassName("cost")[0];
        if (cart.textContent == "CART") {
            cart.innerHTML = parseInt(cost.textContent)
        } else {
            var cartVal = parseInt(cart.textContent) + parseInt(cost.textContent);
            cart.innerHTML = cartVal
        }
    }
}
function plus(element) {
  var spanElement = element.previousElementSibling;
  var currentNumber = parseInt(spanElement.textContent);
  spanElement.textContent = currentNumber + 1
  var fatherPlus = element.parentNode.parentNode;
  var cost = parseInt(fatherPlus.getElementsByClassName("cost")[0].textContent);
  var cartVal = parseInt(cart.textContent)
  cart.innerHTML = cartVal + cost
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
  var fatherMinus = element.parentNode.parentNode;
  var cost = parseInt(fatherMinus.getElementsByClassName("cost")[0].textContent);
  var cartVal = parseInt(cart.textContent)
  cart.innerHTML = cartVal - cost
  if (cart.textContent == "0") {
    cart.innerHTML = "CART"
  }
}
