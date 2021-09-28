const btnEl = document.querySelector(".btn-el");
const showTimeEl = document.querySelector(".show-time");
const tableEl = document.getElementById("table-el");
const countEl = document.getElementById("count-el");

btnEl.addEventListener("click", function () {

    const count = countEl.value;
    tableEl.innerHTML = '';

    if (count == 1) {
        for (let i = 0; i < 10000; i++) {
            setTimeout(function () {
                tableEl.innerHTML = "";
                insertRow(0);

            }, 100);
        }
        return;
    }

    for (let i = 0; i < count; i++) {
        insertRow(i);
    }
    //getTime();
});

function insertRow(rowIndex = 0) {
    numbers = getlottoNumber(1, 49);
    const row = tableEl.insertRow(rowIndex);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 10) {
            numbers[i] = "0" + numbers[i];
        }
        row.insertCell(i).textContent = numbers[i];
    }
}


function getlottoNumber(start, end, maxCount = 6, specialNumber = true) {
    let numbers = [];
    let count = 0;
    while (true) {
        const number = getRandNumber(start, end);
        //!==>not
        if (!numbers.includes(number)) {
            numbers.push(number);
            //count++;
            if (++count == maxCount) {
                break;
            }

        }
    }
    //a b
    //[23, 42, 26, 44, 17, 33, 4]
    //順序的寫法
    numbers.sort(function (a, b) {
        //1 -1 0
        return a - b;
    });

    //for (let i = 0; i < 6; i++) {
    //const number = getRandNumber(start, end);
    //numbers.push(number);
    //}

    //特別號
    if (specialNumber) {
        numbers.push(getRandNumber(start, end));
    };
    console.log(numbers);
    return numbers;
}

let colorIndex = 0;

function changeColor() {
    colors = ["#ba55d3", "#87cefa", "#ffa500", "#3cd371", "#ff0000"];
    document.querySelector("body").style.backgroundColor = colors[colorIndex++];

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}




function getRandNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


function getTime() {
    let date = new Date();
    //取得日期
    let day = date.toISOString().substring(0, 10);
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    showTimeEl.textContent = `${day} ${hour}: ${min} :${sec}`;

    setTimeout("getTime()", 1000);





    console.log(day, date.toISOString());
}