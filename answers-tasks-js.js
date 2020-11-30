//  Вопрос 1
//  Что вернет эта функция?
(function(x){
   delete x;
   return console.log(x);
 })(1);

//  Ответ: 1.


//  Вопрос 2
//  Какое значение выведется в консоль?
for (var i = 0; i < 10; i++) {
	console.log(i)
}
console.log(i)

//  Ответ: 10.


//  Вопрос 3
//  Что выведет данный код
console.log(str);
var str = 'Hello World'

//  Ответ: undefined.


//  Вопрос 4. 
//  Что не является типом данных в JS?
//  1)  Null
//  2)  BigInt
//  3)  Double
//  4)  Object

//  Ответ: 3) Double.


//  Вопрос 5.
//  Какой будет результат выполнения данного кода?
var y = 1, x = y = typeof x;
console.log(x);

//  Ответ: undefined.


//  Вопрос 6.
//  Что выведет данный код?
var Employee = {
   company: 'xyz'
 }
 var emp1 = Object.create(Employee);
 delete emp1.company
 console.log(emp1.company);


//  Ответ: 'xyz'.


//  Вопрос 7.
//  Что выведет данный код?
bar();
(function abc(){console.log('something')})();
function bar(){console.log('bar got called')};

//  Вывод: 
//  bar got called
//  something


//  Вопрос 8. 
//  Напишите цикл for, который будет выводить в консоль каждую секунду числа от 1 до 10 в течение 10 секунд. 
//  Использовать ES6+ нельзя(let, const, arrow functions и т.д.), код за пределами цикла тоже использовать нельзя. 
//  Только цикл for (...) {//code}

for (var i = 0; i < 1; i++) {
   var count = 0;
      setInterval(function() {
           setTimeout(function() { 
               console.log(++count);
               if (count >= 10) {
                   count -= count;
               }
           }, 1000);
   }, 1000);
}


//  Вопрос 9.
//  Как с помощью jQuery селектора выделить третий p во втором div внутри body?

{/* <body>
   <div>...</div>
   <div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>a</p>
      <p>b</p>
      <p>c</p>
   </div>
   <div>
      <p>b</p>
   </div>
</body> */}

//  Ответ:
      const divBlocks = $('div:eq(1) > p:eq(2)');
      console.log(divBlocks);


//  Вопрос 10. Необходимо написать код, который вернет массив, элементами которого являются значения из всех p содержащих только числа с помощью jQuery
{/* 
    <body>
    <div>...</div>
    <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>c1</p>
        <p>1d</p>
    </div>
    <div>
        <p>b</p>
    </div>
    </body>
*/}

//  Ответ:
      const result = [$('div:eq(1) > p:eq(0)').text(), $('div:eq(1) > p:eq(1)').text(), $('div:eq(1) > p:eq(2)').text() ];
      console.log(result);


//  Вопрос 11. 
//  Напишите регулярное выражение, которое выделит последнюю группу чисел (50076817, 50142825) из строк 

//  Ответ:
      const firstString = 'karta-pamyati-microsd-smartbuy-8gb-slass-10-sb8gbsdcl10-00-50076817';
      const secondString = 'karta-pamyati-microsd-netac-32gb-p500-standard-nt02p500stn-032g-s-50142825';

      const regexp = /\b50076817\b/g;
      const secondRegexp = /\b50142825\b/g;

      console.log(firstString.match(regexp).join(''));
      console.log(secondString.match(secondRegexp).join(''));


//  Вопрос 12. 
//  C помощью метода map() получить новый массив, в котором все значения будут умножены на 2. 
      let taskTwenty = [1, 3, 5, 6, 8];
      let result = taskTwenty.map((item) => {
         return item * 2;
      })

      console.log(result);

//  Вопрос 13. 
//  С помощью метода map() преобразовать исходные массив к виду ['Иван', 'Андрей', 'Саша']. 
//  Исходный массив [{"name": "Иван", "surname": "Иванов"}, {"name": "Андрей", "surname": "Иванов"}, {"name": "Саша", "surname": "Петров"}]

      let arr = [{"name": "Иван", "surname": "Иванов"}, {"name": "Андрей", "surname": "Иванов"}, {"name": "Саша", "surname": "Петров"}];
      const result = arr.map(item => item.name);
      console.log(result);


//  Вопрос 14 
//  С помощью метода filter() получить новый массив в котором останутся только значения меньше 5.
      let array = [1, 5, 8, 23, 2, 3, 1];
      console.log(array.filter((item) => {
         return item < 5;
      }))

//  В методе filter, в колбэк функции, указываем первый аргумент, который является порядковым элементом массива.
//  В теле функции возвращаем массив, у которого элементы меньше 5.


//  Вопрос 15 
//  Что выведет в консоль код? Дать развернутый ответ, почему уменьшается один amount а не другой

(function() {
	var fooAccount = {
		name: 'John',
		amount: 6000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 4000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.call(barAccount, totalAmount);
	};
	console.log(withdrawAmountBy(400));
	console.log(withdrawAmountBy(300));
	console.log(withdrawAmountBy(200));
}());

//  Для начала мы используем метод call, привязываем контекст к объекту (barAccount = this, totalAmount = arg);
//  Благодаря методу call() любой объект может использовать методы, принадлежащие другому объекту.

/* console.log(withdrawAmountBy(400)) => 
      deductAmount: function(amount) {
            this.amount -= amount;  // 4000 - 400 = 3600
            return this.amount; // 3600
   } */

/* console.log(withdrawAmountBy(300)) => 
   deductAmount: function(amount) {
         this.amount -= amount; // 3600 - 300 = 3300
         return this.amount; // 3300
} */

/* console.log(withdrawAmountBy(200)) => 
      deductAmount: function(amount) {
            this.amount -= amount; // 3300 - 200 = 3100
            return this.amount; // 3100
} */

//  Уменьшается один this.amount т.к метод deductAmount возвращает this.mount. 
//  Следовательно, в объекте barAccount, свойство amount будет переопределяться и сохраняться.
//  4000 -> 3600 -> 3300 -> 3100.
//  Ответ 3100.


//  Вопрос 16.
//  Что вернет код ['2', '2', '2', '2'].map(parseInt) и почему?

const task = ['2', '2', '2', '2'].map(parseInt);
console.log(task);

//  ParseInt принимает два аргумента: string и radix (основание). 

//  Первая итерация: val = '2', index = 0, array = ['2', '2', '2', '2']. => parseInt('2', 0); => 0 т.к второй аргумент является ложным, основание = 10.
//  Вторая итерация: val = '2', index = 1, array = ['2', '2', '2', '2']. => parseInt('2', 1); => NaN т.к второй аргумент равен одному, а такого основания нет. 
//  Третья итерация: val = '2', index = 2, array = ['2', '2', '2', '2']. => parseInt('2', 2); => NaN т.к в двоичной СС принимаются только два значения: 0 и 1. 
//  Четвертая итерация: val = '2', index = 3, array = ['2', '2', '2', '2']. => parseInt('2', 3); => 2 т.к 2 в троичной СС равен 2 в десятичной СС.

//  Третий аргумент (массив) игнорируется.
//  Итог: [2, NaN, NaN, 2];


//  Вопрос 17.
//  Что будет в консоли при выполнении данного кода и почему?

(function() {
	var x = 1;

	function x() {};
	
	console.log(x);	
})()

//  Сначала выполнится функция (Function Declaration) т.к у неё приоритет выше, чем у переменной,
//  а затем, интерпретатор выведет в консоль переменную x, которая равна 1.


//  18 вопрос.
//  Что выведется в консоли и почему?
var obj = {
   a: 1
};

(function(obj) {
   obj = {
      a: 2
   };

})(obj);

console.log(obj.a);

/* В консоли выведется 1, потому что внешняя переменная obj остаётся привязанной к первоначальному
объекту, а внутренняя локальная переменная obj в своей области (scope) ссылается на
новый объект, поэтому ничего не изменится. */


//  19 задание.
//  Что выведется в консоли и почему?
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//  Переменная объявлена с помощью var, а значит, если мы её вызываем до определения значения, то в консоли будет выводится undefined.
//  Во втором случае происходит поднятие и вызов функции, которая возвращает и выводит в консоль 2.


//  Вопрос 20.
//Что будет в консоли и почему?
var fullname = 'Mark Ivanov';
var obj = {
   fullname: 'Joe Milner',
   prop: {
      fullname: 'David Smith',
      getFullname: function() {
         return this.fullname; // this.fullname обращается к родителю (prop.fullname).
      }
   }
};

console.log(obj.prop.getFullname()); // 'David Smith'

var test = obj.prop.getFullname; // undefined

console.log(test());

// Вывод консоли:
// 'David Smith'
//  undefined
//  Пояснение: в переменной test мы отвязываем метод от объекта, происходит потеря контекста this.

var bindThis = obj.prop.getFullname.bind(obj);

var test3 = obj.prop.getFullname(); // undefined

console.log(test3)




// Other tasks 

const string = 'Завтрак в 09:00 в комнате 123:456.';
const regexp = /\b\d\d:\d\d\b/g;
console.log(string.match(regexp).join('')) 

//RegExp

let matches = "JavaScript".match(/HTML/) || [];

if (!matches.length) {
    console.log("Совпадений нет"); // теперь работает
}

// без флага g
console.log( "We will, we will".replace(/we/i, "I") ); // I will, we will

// с флагом g
console.log( "We will, we will".replace(/we/ig, "I") ); // I will, I will

console.log( "We will, we will".replace(/we/ig, "$$") ); // $ will, $ will

console.log( "We will, we will".replace(/we/ig, "$& anar") ); // We will anar, We will anar

console.log( "We will, we will".replace(/we/ig, "$`") ); // $ will, $ will

console.log( "Люблю HTML".replace(/HTML/, "$& и JavaScript") ); // Люблю HTML и JavaScript


let str = "Я ЛюБлЮ JavaScript";
let regexp = /люблю/i;

console.log( regexp.test(str) ); // true


let str = "+7(903)-123-45-67";

let regexp = /\d/g;

console.log( str.match(regexp).join('') ); // 7


let str = "Есть ли стандарт CSS4?";
let regexp = /CSS\d/g;

console.log( str.match(regexp) ); // CSS4

console.log( "I love HTML5!".match(/\s\w\w\w\w\d/) ); // ' HTML5'

let str = "+7(903)-123-45-67";

console.log( str.replace(/\D/g, "") ); // 79031234567

var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let str = "A ბ ㄱ";

console.log( str.match(/\p{L}/gu) ); // A,ბ,ㄱ
console.log( str.match(/\p{L}/g) ); // null (ничего не нашло, так как нет флага "u")


let regexp = /\p{sc=Han}/gu; // вернёт китайские иероглифы

let str = `Hello Привет 你好 123_456`;

console.log( str.match(regexp) ); // 你,好

let regexp = /\p{Sc}\d/gu;

let  str = `Цены: $2, €1, ¥9`;

console.log( str.match(regexp) ); // $2,€1,¥9

let str1 = "Mary had a little lamb";
console.log( /lamb$/.test(str1) );

let str = `1е место: Винни
2е место: Пятачок
3е место: Слонопотам`;

console.log( str.match(/^\d/gm) ); // 1, 2, 3

let str = `Винни: 1
Пятачок: 2
Слонопотам: 3`;

console.log( str.match(/\d\n/gm) ); // 1\n,2\n