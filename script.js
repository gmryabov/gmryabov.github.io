<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shop</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Montserrat', sans-serif;
            font-weight: 200;
            color: var(--tg-theme-text-color);
            background: var(--tg-theme-secondary-bg-color);
        }
        h1 {
            /* width: 100%; */
            /* margin-top: 10px; */
            margin-bottom: 10px;
            font-size: 4vw;
        }
        img {
            width: 15vw;
            margin: 10% auto;
        }
        p {
            width: 350px;
            margin: 0 auto;
        }
        span {
            font-size: 2.5vw;
        }
        .row {
            display: flex;
            width: 100%;
            padding: 5px 20px 5px;
            text-align: center;
            justify-content: space-evenly;
        }
        .area_span {
            position: relative;
            color: var(--tg-theme-button-color);
            background: #ffdb70;
            border: 0;
            border-radius: 5px;
            height: 5vw;
            width: 20vw;
            font-size: 3.5vw;
            font-weight: 500;
            cursor: pointer;
            transition: all 500ms ease;
            border-radius: 0px 0px 5px 5px;
            height: 5vw;
            width: 100%;
        }
        .area_span:hover {
            background: #5bc8fb;
        }
        button {
            font-family: 'Montserrat', sans-serif;
            border: none;
            background: none;
            color: var(--tg-theme-button-text-color);
            font-size: 2.5vw;
            cursor: pointer;
        }
        .plus {
            right: 1%;
            top: 0%;
            position: absolute;
        }
        .minus {
            left: 1%;
            top: 0%;
            position: absolute;
        }
        .col {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: column;
            background: var(--tg-theme-bg-color);
            width: 30%;
            border-radius: 10px;
        }
        .plus, .minus {
            width: 25%;
            height: 100%;
            display: none;
        }
        .cost {
            font-size: 3vw;
            margin-bottom: 1vw;
        }
        #cart {
            position: sticky;
            display: flex;
            bottom: 2%;
            align-items: center;
            justify-content: center;
            padding: 2% 0 2% 0;
            background: var(--tg-theme-button-color);
            margin: 0 10%;
            border-radius: 10px;
            color: var(--tg-theme-button-text-color);
            margin-top: 10%;
            cursor: pointer;
        }
        #form {
            display: none;
            align-items: center;
            flex-direction: column;
            border-radius: 10px 10px 0 0;
            background: var(--tg-theme-bg-color);
            position: fixed;
            width: 100%;
            bottom: 0;
            transition: 0.5s ease-in-out;
        }
        input {
            color: var(--tg-theme-text-color);
            margin: 1%;
            padding: 1%;
            box-sizing: border-box;
            background: var(--tg-theme-secondary-bg-color);
        }
        .cart_img {
            width: 10%;
            margin: 0 1%;
        }
        .item {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            margin: 1%;
        }
        .cart_item_name {
            margin: 1%;
            font-size: 3vw;
        }
        .cost_cart {
            margin-top: 0.3%;
        }
        #cart_inner {
            display: none;
        }
        #order {
            width: 35vw;
            height: 100%;
            border-radius: 5px;
            background: var(--tg-theme-button-color);
            font-size: 5vw;
            padding: 1%;
            margin-bottom: 5%;
        }
        #name {
            margin-top: 5%;
        }
    </style>
</head>
<body>
    <div id="catalog">
        <div class="row">
            <div class="col" id="col1">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f373/512.gif" alt="🍳">
                <h1>Глазунья</h1>
                <span class="cost">159 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
            <div class="col" id="col2">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f345/512.gif" alt="🍅">
                <h1>Помидор</h1>
                <span class="cost">59 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
            <div class="col" id="col3">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f35d/512.gif" alt="🍝">
                <h1>Паста</h1>
                <span class="cost">259 ₽</span>
                <div class="area_span" onclick="getClickedElementId(this)">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col" id="col4">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f35c/512.gif" alt="🍜">
                <h1>Боул</h1>
                <span class="cost">359 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
            <div class="col" id="col5">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.gif" alt="🍿">
                <h1>Попкорн</h1>
                <span class="cost">259 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
            <div class="col" id="col6">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.gif" alt="🎂">
                <h1>Торт</h1>
                <span class="cost">299 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col" id="col7">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.gif" alt="☕">
                <h1>Кофе</h1>
                <span class="cost">199 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
            <div class="col" id="col8">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f379/512.gif" alt="🍹">
                <h1>Коктейль</h1>
                <span class="cost">229 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
            <div class="col" id="col9">
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f377/512.gif" alt="🍷">
                <h1>Вино</h1>
                <span class="cost">1299 ₽</span>
                <div class="area_span">
                    <button class="minus" onclick="minus(this)">-</button>
                    <span onclick="getClickedElementId(this)">Добавить</span>
                    <button class="plus" onclick="plus(this)">+</button>
                </div>
            </div>
        </div>
        <div id="cart">CART</div>
    </div>
    <div id="cart_inner">
        <div class="items">
            <div class="item">
                <img class="cart_img" src="image.gif">
                <h1 class="cart_item_name">Наименование</h1>
                <span class="cost_cart">0 ₽</span>
            </div>
        </div>
    </div>
    <form id="form">
            <input type="text" placeholder="Имя" id="name" onclick="inputClick(this)">
            <input type="text" placeholder="Номер" id="number" onclick="inputClick(this)">
            <button id="order">Оформить</button>
        </form>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script src="script.js"></script>
</body>
</html>
