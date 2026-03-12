// Функція «Діалог з користувачем»
function dialogWithUser() {
    let name = prompt("Як вас звати?");
    let direction = prompt("Який напрямок вас цікавить: Туреччина, Італія, Іспанія чи Єгипет?");
    let nights = prompt("На скільки ночей плануєте відпочинок?");

    if (!name || !direction || !nights) {
        alert("Будь ласка, заповніть усі дані.");
        return;
    }

    nights = Number(nights);

    let message = "";

    if (nights <= 3) {
        message = name + ", вам підійде короткий відпочинок у напрямку " + direction + ".";
    } else if (nights <= 7) {
        message = name + ", для тижневого відпочинку радимо розглянути " + direction + ".";
    } else {
        message = name + ", для тривалої відпустки напрямок " + direction + " буде чудовим варіантом.";
    }

    for (let i = 1; i <= 3; i++) {
        console.log("Повідомлення " + i + ": " + message);
    }

    alert(message);
}

// Функція виводу інформації про розробника
function showDeveloperInfo(surname, name, position = "студент") {
    alert("Розробник сторінки: " + surname + " " + name + "\nПосада: " + position);
}

// Функція порівняння двох рядків
function compareDestinations() {
    let str1 = prompt("Введіть перший напрямок:");
    let str2 = prompt("Введіть другий напрямок:");

    if (str1 === null || str2 === null || str1 === "" || str2 === "") {
        alert("Потрібно ввести обидва рядки.");
        return;
    }

    if (str1 > str2) {
        alert("Більший рядок: " + str1);
    } else if (str2 > str1) {
        alert("Більший рядок: " + str2);
    } else {
        alert("Рядки однакові.");
    }
}

// Зміна фону сторінки на 30 секунд
function changeBackground30Sec() {
    let oldBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#fca0ff";

    alert("Фон сторінки змінено на 30 секунд.");

    setTimeout(function () {
        document.body.style.backgroundColor = oldBackground;
        alert("30 секунд минуло. Фон сторінки відновлено.");
    }, 30000);
}


// 1. Перенаправлення через location
function redirectToContacts() {
    let answer = confirm("Перейти на сторінку контактів?");
    if (answer) {
        location.href = "contacts.html";
    }
}

// 2. getElementById і querySelectorAll
function findElementsDemo() {
    let title = document.getElementById("main-title");
    let notes = document.querySelectorAll(".hotel-note");

    title.textContent = "Популярні готелі — елементи знайдено";

    for (let i = 0; i < notes.length; i++) {
        notes[i].style.border = "1px solid black";
        notes[i].style.padding = "8px";
    }

    alert("Знайдено заголовок через getElementById і " + notes.length + " елементи через querySelectorAll.");
}

// 3. innerHTML, outerHTML, nodeValue / data, textContent
function changeNodeProperties() {
    // textContent
    let title = document.getElementById("main-title");
    title.textContent = "Оновлений огляд популярних готелів";

    // innerHTML
    let videoText = document.getElementById("video-text");
    videoText.innerHTML = "Нижче представлено <b>оновлений</b> відеоогляд сучасного курортного готелю:";

    // outerHTML
    let firstNote = document.querySelector(".hotel-note");
    firstNote.outerHTML = '<p class="note hotel-note"><b>Luxury Resort</b> — оновлений опис через outerHTML.</p>';

    // nodeValue / data
    let domBox = document.getElementById("dom-box");
    let textNode = domBox.firstChild;

    console.log("nodeValue до зміни:", textNode.nodeValue);
    console.log("data до зміни:", textNode.data);

    textNode.nodeValue = "Текст у блоці змінено через nodeValue.";
}

// 4. createElement, createTextNode, append, prepend, after
function insertNodesDemo() {
    let servicesList = document.getElementById("services-list");

    // createElement + createTextNode
    let newItem = document.createElement("li");
    let newText = document.createTextNode("Сніданок у номер");
    newItem.append(newText);

    // append
    servicesList.append(newItem);

    // prepend
    servicesList.prepend("Доступні послуги: ");

    // after
    servicesList.after(" Після списку додано пояснювальний текст.");

    // append у блок
    let domBox = document.getElementById("dom-box");
    domBox.append(" Додано новий рядок через append().");
}

// 5. replaceWith і remove
function replaceAndRemoveDemo() {
    let domBox = document.getElementById("dom-box");

    let newElement = document.createElement("div");
    newElement.textContent = "Цей блок замінив попередній через replaceWith().";
    newElement.className = "dom-box";

    domBox.replaceWith(newElement);

    let hotelLinksRow = document.querySelector(".hotel-links");
    if (hotelLinksRow) {
        hotelLinksRow.remove();
    }

    alert("Один елемент замінено, інший видалено.");
}

// 6. document.write
function writeDemo() {
    document.write("<h2 style='text-align:center;'>Сторінку перезаписано через document.write()</h2>");
    document.write("<p style='text-align:center;'>Цей текст додано методом document.write().</p>");
}




// ===============================
// ЛАБОРАТОРНА: Події JavaScript
// ===============================

// Функція для виводу повідомлень у інформаційний блок
function logMessage(message) {
    const log = document.getElementById("event-log");
    log.innerHTML = message;
}

// --------------------------------------------------
// 1. Обробник через HTML-атрибут onclick
// --------------------------------------------------

function cardClickAttributeHandler(event) {

    const card = event.currentTarget;

    card.classList.toggle("active-card");

    console.log("Ви обрали готель «Luxury Resort» для детальнішого перегляду.");
}



// --------------------------------------------------
// 2. Обробник через властивість DOM-елемента
// --------------------------------------------------

const hotelCard2 = document.getElementById("hotel-card-2");

hotelCard2.onmouseover = function () {

    hotelCard2.style.backgroundColor = "#eef6ff";
    hotelCard2.style.transform = "scale(1.03)";

    logMessage("Картку готелю «City Hotel» виділено для попереднього перегляду.");

};

hotelCard2.onmouseout = function () {

    hotelCard2.style.backgroundColor = "#ffffff";
    hotelCard2.style.transform = "scale(1)";

};



// --------------------------------------------------
// 3. addEventListener з кількома обробниками
// --------------------------------------------------

const multiHandlerBtn = document.getElementById("multi-handler-btn");

function firstClickHandler() {

    console.log("Система перевіряє доступність номерів у вибраному готелі.");

}

function secondClickHandler() {

    alert("Перевірка бронювання виконана. Номери доступні!");

}

multiHandlerBtn.addEventListener("click", firstClickHandler);
multiHandlerBtn.addEventListener("click", secondClickHandler);



// --------------------------------------------------
// 4. Об'єкт-обробник події (handleEvent)
// --------------------------------------------------

const currentTargetBox = document.getElementById("current-target-box");

const connectObjectHandlerBtn = document.getElementById("object-handler-btn");
const removeObjectHandlerBtn = document.getElementById("remove-object-handler-btn");

const hotelObjectHandler = {

    handleEvent(event) {

        event.currentTarget.classList.toggle("highlight-box");

       logMessage(
    "Інтерактивна панель гостя активована для елемента з id: " 
    + event.currentTarget.id
);

    }

};



// Підключення об'єкта-обробника

connectObjectHandlerBtn.addEventListener("click", function () {

    currentTargetBox.addEventListener("click", hotelObjectHandler);

    logMessage("Обирайте Business Stay для ділових поїздок, Luxury Resort для розкішного відпочинку, City Hotel для міського туризму");

});



// --------------------------------------------------
// 5. Видалення обробника події
// --------------------------------------------------

removeObjectHandlerBtn.addEventListener("click", function () {

    currentTargetBox.removeEventListener("click", hotelObjectHandler);

    logMessage("Інформаційне поле деактивовано. Клікніть «Який готель обрати?» для повторного перегляду.");

});


