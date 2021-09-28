let data = [
    [1, 2, 'jerry', 35.4, true],
    [1, 2, 'jerry', 35.4, true],
    [1, 2, 'jerry', 35.4, true],
    [1, 2, 'jerry', 35.4, true],
];

for (let i = 0; i < data.length; i++) {
    //console.log[i];
    for (let j = 0; j < data[i].length; j++) {
        console.log(data[i][i]);
    }
}
data.push('kevin');
console.log(data, data.length);
console.log(data[data.length - 1]);
//console.log(data.pop());
console.log(data.join(','));

/**console.log(25 == "25");
console.log(25 === "25");
    
let result = -1;
//true or false
if (result < 0) {
    alert(result);
}
    
// if result>0:
//print('1')
*/

//輸入
/**let num1 = prompt("請輸入數字1");
let num2 = prompt("請輸入數字2");
    
console.log(num1, num2, typeof (num1), typeof (num2));
num1 = parseFloat(num1);
num2 = parseInt(num2);
console.log(num1, num2, typeof (num1), typeof (num2));
    
alert(Number(num1) + Number(num2));
*/
console.log(Math.random());
let x = Math.random() * 20;
console.log(x);
console.log(Math.floor(x) + 1);
//console.log(Math.random() * 10);
/**
*取得1-49的亂數
*使用Math類別
*/


start = 1;
end = 49;
console.log(Math.floor(Math.random() * (end - start + 1)) + start);


let width = 10;
let height = 20;

let area = width * height;

console.log('寬 ' + width + ' 長 ' + height + ' 面積為: ' + area);
console.log(`寬 ${width} 長  ${height} 面積為: ${area}`);
document.write(`<h2>寬 ${width} 長  ${height} 面積為: ${area}</h2>`);


const PI = 3.1415926
let y = 20;
const email = "jerry@gmail.com";

//x=x+1
x++;
console.log(x);
x += 1;
x -= 1;
x--;//x=x-1
console.log(x);




console.log(email[5], email.length);
console.log(email.includes("jerry"));
//自動轉型
console.log(5 / "2");
console.log(5 / "a");

{

    let x = "10";
    console.log(x, typeof (x));
}
//ctrl+/
//print(x);
x = 20.5;
console.log(x, typeof (x));
document.write("<h1>" + x + "</h2>");
alert("<h1>" + x + "</h2>");