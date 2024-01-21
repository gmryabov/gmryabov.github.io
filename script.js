var cart = document.getElementById("cart");
var cartItems = []
var data_items = {}
var code_html = ""
var cartInner = document.getElementById("cart_inner");
let tg = window.Telegram.WebApp;

var MainButton = tg.MainButton;


MainButton.text = "Корзина"

tg.onEvent('mainButtonClicked', function() {
if (MainButton.text !== "Корзина") {
        document.getElementById("catalog").style.display = "none";
        document.getElementById("form").style.display = "flex";
        cartInner.style.display = "block"
    //        document.getElementById("name").value = tg.initDataUnsafe.first_name + " " + tg.initDataUnsafe.last_name
        console.log(cartItems)

        var arr = [];
        for (var i = 0; i < cartItems.length; i++)  {
            var target = cartItems[i];
            var count = 0;
                for (let i = 0; i < cartItems.length; i++) {
                    if (target == cartItems[i]) {
                        count++
                    }
                }
            var prod = document.getElementById(target)
            var img = prod.querySelector('img');
            var name = prod.querySelector('h1').textContent;
            var cost = prod.querySelector('.cost').textContent;
            if (count == 1) {
                data_items[name]={"cost":parseInt(cost),
                                  "count": count,
                                  "summ": parseInt(cost)}
                code_html += "<div class='item'><img class='cart_img' src="+img.src+"><h1 class='cart_item_name'>"+name+"</h1><span class='cost_cart'>"+cost+"</span></div>"
            } else {
                if (arr.indexOf(target) !== -1) {
                    console.log("pass");
                } else {
                    arr.push(target)
                    data_items[name]={"cost":parseInt(cost),
                                      "count": count,
                                      "summ": parseInt(cost)*count}
                    code_html += "<div class='item'><img class='cart_img' src="+img.src+"><h1 class='cart_item_name'>"+name+"</h1><span class='cost_cart'>"+parseInt(cost)*count+" ₽</span></div>"
                }
            }
        }
        cartInner.innerHTML = code_html
    }
});


function getClickedElementId(button) {
    if (button.innerHTML == "Добавить") {
        MainButton.show();
        var father = button.parentNode;
        var grproduct = father.parentNode;
        button.innerHTML = 1;
        var plus = father.getElementsByClassName("plus");
        var minus = father.getElementsByClassName("minus");
        plus[0].style.display = 'block';
        minus[0].style.display = 'block';
        var cost = grproduct.getElementsByClassName("cost")[0];
        if (MainButton.text == "Корзина") {
            MainButton.text = parseInt(cost.textContent)
            var item = button.parentNode.parentNode.id;
            cartItems.push(item)
        } else {
            MainButton.text = parseInt(MainButton.text) + parseInt(cost.textContent);
            var item = button.parentNode.parentNode.id;
            cartItems.push(item)
        }
    }
}

function plus(element) {
    var spanElement = element.previousElementSibling;
    var currentNumber = parseInt(spanElement.textContent);
    spanElement.textContent = currentNumber + 1
    var fatherPlus = element.parentNode.parentNode;
    var cost = parseInt(fatherPlus.getElementsByClassName("cost")[0].textContent);
    MainButton.text = parseInt(MainButton.text) + cost
    var item = element.parentNode.parentNode.id;
    cartItems.push(item)
}

function minus(element) {
    var spanElement = element.nextElementSibling;
    var currentNumber = parseInt(spanElement.textContent);
    var item = element.parentNode.parentNode.id;
    var index = cartItems.indexOf(item)
    if (index !== -1) {
      cartItems.splice(index, 1);
    }

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
    MainButton.text = parseInt(MainButton.text) - cost
    if (MainButton.text == "0") {
        MainButton.hide();
    }
}


var order = document.getElementById("order");
tg.expand();


order.addEventListener("click", () =>{
    event.preventDefault();
    var error = document.getElementById("error")
    error.innerText = ""
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    if (name.length < 3) {
        error.innerText = "Ошибка в имени"
        return;
    }
    if (number.length < 10) {
        error.innerText = "Ошибка в номере"
        return;
    }
    let data = {
        name: name,
        number: number,
        items: data_items,
    }
    console.log(data)
    tg.sendData(JSON.stringify(data))
    tg.close();
});

function inputClick(inp) {
    var fath = inp.parentNode
    fath.style.padding = "0 0 30vw 0";
}


