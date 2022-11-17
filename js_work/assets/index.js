/*
let arr = {
    hello: "Привет ",
    world: "мир",
    point: "!"
};
alert(arr.hello + arr.world + arr.point);
*/

/*
let arr = ['hello', 'world', '!'];

let text = arr.join(" ");
alert (text);
*/

/*

let arr = ['hello ', 'world', '!'];
arr.splice(0, 1, "goodbye ")
alert(arr);
*/

/*
let user1 = {
    name: "Kolya",
    money: 500
} ;
let user2 = {
    name: "Petya",
    money: 600
};
alert(`У ${user1.name} ${user1.money} зарплата`);
alert(`У ${user2.name} ${user2.money} зарплата`);
*/

/*
var arr = {
    'ru': ['голубой', 'красный', 'зелёный'],
    'en': ['blue', 'red', 'green'],
};
alert(arr.ru[1]);
*/

/*
var arr = ['a', 'b', 'c']
alert(arr);
*/

/*
var arr = ['a', 'b', 'c']
alert(arr[0])
alert(arr[1])
alert(arr[2])
*/

/*
arr = ['a', 'b', 'c', 'd'] 
alert(`${arr[0]} + ${arr[1]}`);
alert(`${arr[2]} + ${arr[3]}`);
*/

/*
res = 0;
arr = [2, 5, 3, 9];
arr1 = arr[0] + arr[1];
arr2 = arr[2] + arr[3];
res = arr1 * arr2;
alert(res);
*/

/*
var obj = {
    a: 1,
    b: 2,
    c: 3,
};
alert(obj.c);

*/

/*
var obj = {
Коля: '1000', 
Вася: '500',
Петя: '200',
};
alert(obj.Петя);
alert(obj.Коля)
*/

/*
let today = "чт";
var obj = {
    "пн": 1,
    "вт": 2,
    "ср": 3,
    "чт": 4,
    "пт": 5,
    "сб": 6,
    "вс": 7,
};
for ( let i in obj ){
    if ( i == today){
        alert(obj[i]);
    }
}
*/

/*
let day = 3;
var obj = {
    "пн": 1,
    "вт": 2,
    "ср": 3,
    "чт": 4,
    "пт": 5,
    "сб": 6,
    "вс": 7,
};
for ( let i in obj ){
    if ( obj[i] == day){
        alert(i);
    }
}
*/

/*
let arr = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

alert(arr[1] [0]);
*/

/*
let arr = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world'}
alert(arr.js[0] );
*/


/*
let arr = {
    ru : ['пн', "вт", "ср", "чт", "пт", "сб", "вс"],
    en : ["pn", "vt", "sr", "cht", "pt", "sb", "ws"]
}

alert(arr.ru[0]);
alert(arr.en[2]);
*/

/*
let lang = prompt('Напишите предпочитаемый язык, например ru en');
let day = prompt('Напишите день недели');
let arr = {
    ru : ['пн', "вт", "ср", "чт", "пт", "сб", "вс"],
    en : ["pn", "vt", "sr", "cht", "pt", "sb", "ws"]
}

alert(arr[lang][day]);
*/


