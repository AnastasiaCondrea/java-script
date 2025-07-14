// let price = 10;
// const subscription = "pr";

// if (subscription === "pro") {
//     price = 100;

// }

// console.log(price);
// console.log(subscription);




// function getPrice(subscription) {
//     let price = 0;
//     if (subscription === "pro") {
//         price = 100;
//     }
//     return price;
// }
 
// console.log(getPrice("free"));

// console.log(getPrice("pro"));


// a = b * 2;

// [ [a] = [[b]] * [2]]

// const num = "Hello"


// console.log("Jacob Mercer");
// console.log(26);

// let username = "Mango";
// username = "Poly";




// let username = "Mango";
// console.log(username); // "Mango"

// username = "Poly";
// console.log(username); // "Poly"




// let username;
// console.log(username); // undefined

// username = "Mango";
// console.log(username); // "Mango"
    





// const age = 20;
// console.log(age); // 20

// const username = "Mango";
// console.log(username); // "Mango"




// let username;
// username = "Mango";





// let pricePerItem = 2000;
// pricePerItem = 3500

// let productName = "Droid";
// productName = "Repair droid";





// const username = "Mango";
// console.log(user); // ReferenceError: user is not defined



// let username = "Mango";
// console.log(username);

// username = "Poly";
// console.log(username);





// age = 25;
// console.log(age); // 25




// const username = "Mango";

// username = "Poly";



// console.log(username);

// const username = "Mango";



// const age = 20;
// const salary = 3710.84;



// const username = 'Mango995';
// const description = "JavaScript is awesome!";



// const isModalOpen = true;
// const isLoggedIn = false;



// topSpeed = 160;
// distance = 617.54;
// login = "mango935";
// isOnline = true;
// isAdmin = false;


// let value = null;
// console.log(value); // null




// let username;
// console.log(username);

// const quantity = 17;
// console.log(typeof quantity); // виведе "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // виведе "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // виведе "boolean"

// let username;
// console.log(typeof username); // виведе "undefined"

// let status = null;
// console.log(typeof status); // виведе "object"



// let age = 25;
// age = age + 1;
// console.log(age); // 26


// let age = 25;
// age += 1;
// console.log(age); // 26



// const message = "Mango " + "is" + " happy";
// console.log(message); // "Mango is happy"


// const age = 24;
// const message = "Poly is " + age + " years old!";


// console.log("Mango" + 55); // "Mango55"
// console.log("Mango" + true); // "Mangotrue"


// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"


// const username = "Poly";
// const message = "Welcome " + username + "!";



// Явне перетворення типів

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"


// Неявне перетворення типів

// console.log("5" + 3); // "53"
// console.log("5" + true); // "5true"
// console.log("5" + false); // "5false"
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // "5undefined"


// console.log("false" + null)




// Шаблонні рядки

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"




// "Welcome " ", your room number is " та "!" — це статичний текст
// guestName та roomNumber — імена змінних.



// const guestName = "Mango";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"



// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;



// const orderedQuantity = "6";
// const pricePerDroid = "800";
// const deliveryFee = "50";
// const totalPrice = "4850";
// const message = "You ordered droids worth 4850 credits";


// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;




// const productName = "Repair droid";

// // Якщо у змінній зберігається рядок
// console.log(productName.length); // 12

// // Якщо рядковий літерал
// console.log("Repair droid".length); // 12




// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;




// const product = "Repair droid";
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'



// const product = "Repair droid";
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'


// const product = "Repair droid";
// console.log(product[product.length - 1]); // 'd'


// const courseTopic = "JavaScript essentials";
// const courseTopicLength = 21;
// const firstElement = "J";
// const lastElement = "s";



// let product = "Droid";
// console.log(product); // "Droid"

// product = "DrOid";
// console.log(product); // "DrOid"




// Незмінність рядків
// let username = "Poly";
// username[3] = "a";




// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false





// const age = 20;
// const isAdult = age >= 18;



// console.log(5 == 5); // true
// console.log(5 == 3); // false
// console.log(5 != 3); // true
// console.log(5 != 5); // false


// Погано, бо виконується неявне приведення рядків і булевого значення до числа
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false


// Добре, приведення типів не виконується
// console.log(5 === 5); // true
// console.log(5 === "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true






// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0



// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN



// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4


// console.log("10" > 5); // true
// console.log(10 > "5"); // true
// console.log(5 > true); // true
// console.log(5 < true); // false
// console.log("5" < true); // false




// console.log(Number.parseInt("5"));
// console.log(Number.parseInt("5.5"));
// console.log(Number.parseInt("5cm"));
// console.log(Number.parseInt("12qwe74"));
// console.log(Number.parseInt("12.46qwe79"));
// console.log(Number.parseInt("cm5"));
// console.log(Number.parseInt(""));
// console.log(Number.parseInt("qweqwe"));



// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN




// console.log(Math.floor(1.3)); // 1
// console.log(Math.floor(1.7)); // 1



// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2



// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 2


// console.log(Math.max(20, 10, 50, 40)); // 50


// console.log(Math.min(20, 10, 50, 40)); // 10



// console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294



// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004


// console.log(0.1 * 10 + 0.2 * 10); // 3
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3



// console.log((0.1 + 0.2).toFixed(1)); // "0.3"
// console.log((5).toFixed(2));  //  ”5.00”
// console.log((8.762195).toFixed(4));  //  “8.7622”



// function doStuff() {
//     // Тіло функції
//     console.log('Log inside multiply function');
//   }
  

// function calculate(x, y) {}

// calcualate(5, 8);




// function multiply(x, y, z) {
//     return x * y * z;
//   }
  
//   const result = multiply(2, 3, 5);
//   console.log(result); // 30
  



// function multiply(x, y, z) {
// 	const product = x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // undefined



// function multiply(x, y, z) {
//     console.log('The code before return is executed as usual');
  
//     return x * y * z;
  
//     console.log('This code is never executed because it is after return');
//   }
  
//   console.log(multiply(2, 3, 5)); // 30
  



// function multiply(x, y, z) {
// 	const product = x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // undefined



// function add(a, b, c) {
//     return a + b + c;
//     }
    
//     add(15, 27, 10)
//     add(10, 20, 30)
//     add(5, 10, 15)




// console.log("A");

// function logStuff() {
// 	console.log("B");
// }

// console.log("C");

// logStuff();

// console.log("D");
  


// // Глобальна змінна
// const value = "I'm a global variable";

// function foo() {
// // Можна звернутися до глобальної змінної
// 	console.log(value); // "I'm a global variable"
// }

// foo();
// // Можна звернутися до глобальної змінної
// console.log(value);
// // "I'm a global variable"



// function foo() {
// 	// Локальна змінна
// 	const value = "I'm a local variable";
// 	// Можна звернутися до локальної змінної
// 	console.log(value); // "I'm a local variable"
// }

// foo();
//   console.log(value); // ReferenceError: value is not defined
//                       // Помилка: локальну змінну не видно за межами
//                          функції




// function calculateTotalPrice (orderedQuantity, pricePerItem){
//     return orderedQuantity * pricePerItem
//   }
  
//   console.log(calculateTotalPrice(5, 100)); // "500"
//   console.log(calculateTotalPrice(8, 60)); // "480"
//   console.log(calculateTotalPrice(3, 400)); // "1200"
//   console.log(calculateTotalPrice(1, 3500)); // "3500"
//   console.log(calculateTotalPrice(12, 70)); // "840"
  



  
// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100


// let price = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 0



// function getPrice(subscription) {
//     let price = 0;
      
//     if (subscription === "pro") {
//       price = 100;
//     }
      
//     return price;
//   }
  
//   console.log(getPrice("free")); // 0
//   console.log(getPrice("pro")); // 100
  


// if (condition) {
//     // код, який виконується, якщо умова істинна
//   } else {
//     // код, який виконується, якщо умова хибна
//   }
  


//   const grade = 85;

//   if (grade >= 70) {
//     console.log("Satisfactory");
//   } else {
//     console.log("Unsatisfactory");
//   }
  



// const grade = 40;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }




// function checkGrade(grade) {
//     if (grade >= 70) {
//       return "Satisfactory";
//     } else {
//       return "Unsatisfactory";
//     }
//   }
  
//   console.log(checkGrade(40)); // Unsatisfactory
//   console.log(checkGrade(75)); // Satisfactory
  



// if (condition_1) {
//     // код, який виконується, якщо умова (condition_1) істинна
//   } else if (condition_2) {
//     // код, який виконується, якщо умова (condition_2) істинна
//   } else if (condition_3) {
//     // код, який виконується, якщо умова (condition_3) істинна
//   } else {
//       // код, який виконується, якщо всі умови хибні
//   }
  




// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }



// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//       return "There are no products in the order!";
//     } else if (ordered > available) {
//       return "Your order is too large, there are not enough items in stock!";
//     } else {
//       return "The order is accepted, our manager will contact you";
//     }
//   }



// <condition> ? <expression if condition is true> : <expression if condition is false>




// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'





// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'




// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10



// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10






// function getBiggerNumber(a, b) {
//     return a > b ? a : b;
//   }
  
//   console.log(getBiggerNumber(5, 10)); // 10
//   console.log(getBiggerNumber(20, 15)); // 20
//   console.log(getBiggerNumber(7, 7)); // 7
  




// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword
//       ? "Access granted"
//       : "Access denied, wrong password!";
//   }






// switch (expression) {
//     case value1:
//       // код, що виконується, якщо вираз (expression) дорівнює value1
//       break;
//     case value2:
//       // код, що виконується, якщо вираз (expression) дорівнює value2
//       break;
//     // ...
//     default:
//       // код, що виконується, якщо вираз (expression) не відповідає жодному значенню
//   }
  





// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }






// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }






// // Глобальна змінна
// const value = "I'm a global variable";

// if (true) {
// 	// Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// // Можна звернутися до глобальної змінної
// console.log(value); // "I'm a global variable"







// if (true) {
//     // Локальна змінна
//       const value = "I'm a local variable";
//     console.log(value); // "I'm a local variable"
//   }
  
//   // Помилка: локальну змінну не видно за межами блоку
//   console.log(value); // ReferenceError: value is not defined
  






// const globalVar = "Global";

// console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if(true) {
// 	const aVar = "A";
// 	console.log(globalVar); // Доступ до globalVariable з блоку A
//   console.log(aVar); // Доступ до aVar з блоку A
// 	// Немає доступу до bVar і cVar

// 	if(true) {
// 		const bVar = "B";
// 		console.log(globalVar); // Доступ до globalVariable з блоку B
// 	  console.log(aVar); // Доступ до aVar з блоку B
// 	  console.log(bVar); // Доступ до bVar з блоку B
// 		// Немає доступу до cVar
// 	}
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if(true) {
// 	const cVar = "C";
//   console.log(globalVariable); // Доступ до globalVar з блоку C
//   console.log(cVar); // Доступ до cVar з блоку C
// 	// Немає доступу до aVar і bVar
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar






// Логічні значення
// Логічні значення true та false залишаються незмінними.


// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false



// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true



// if(null) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

// if(0) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }




// if(5) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }




// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true




// if("") {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }


// if("batman") {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }




// Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. undefined
// 6. false



// Логічне «І»

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"

// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"

// console.log(3 && true); // true
// console.log(true && 3); // 3




// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""



// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false



// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }




// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }





// function getScreenType(screenWidth) {
//     const sm = 320;
//     const md = 768;
//     const lg = 1200;
  
//     if (screenWidth <= sm) {
//       return "Mobile screen";
//     } else if (screenWidth > sm && screenWidth <= md) {
//       return "Tablet screen";
//     } else if (screenWidth > md && screenWidth <= lg) {
//       return "Desktop screen";
//     } else {
//       return "Godzilla screen";
//     }
//   }
  
//   console.log(getScreenType(700));  // "Tablet screen"
//   console.log(getScreenType(1200)); // "Desktop screen"
//   console.log(getScreenType(1500)); // "Godzilla screen"
//   console.log(getScreenType(320));  // "Mobile screen"
  



// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
//   }


// Логічне «АБО»

// console.log(true || false); // true
// console.log(false || true); // true

// console.log(5 || false); // 5
// console.log(false || 5); // 5

// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"




// console.log(5 || 3); // 5
// console.log(3 || 5); // 3

// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"



// console.log(0 || false); // false
// console.log(false || 0); // 0

// console.log(null || ""); // ""
// console.log("" || null); // null



// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40


// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// // У консолі буде пусто, якщо жодна з умов не перетворилась на true
// if(screenWidth <= sm || screenWidth > md) {
// 	console.log("Mobile or Desktop screen");
// }



// Логічне «НІ»

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true



// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }



// const isBlocked = true;
// const canChat = !isBlocked; // !true -> false

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }



// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// // true && !false -> true && true -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }



// function canUserChat(isOnline, isBlocked) {
//     const canChat = isOnline && !isBlocked;
  
//     if (canChat) {
//       return "Can type in chat!";
//     } else {
//       return "Blocked from typing in chat!";
//     }
//   }
  
//   console.log(canUserChat(true, false));  // "Can type in chat!"
//   console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
//   console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
//   console.log(canUserChat(false, true));  // "Blocked from typing in chat!"
  




// function toggleModalVisibility(isVisible) {
//     return !isVisible;
//   }

// властивість
// const message = "JavaScript is awesome";
// console.log(message.length); // 21



// Виклик методу
// objectName.method()

// const message = "JavaScript is awesome";
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"






// str.slice(startIndex, endIndex)


// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'



// const fullName = "Jacob Mercer";
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'



// const fullName = "Jacob Mercer";
// console.log(fullName.slice()); // 'Jacob Mercer'




// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"



// Методи toLowerCase() і toUpperCase()

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"


// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"


// console.log('saMsUng' === 'samsung'); // false
// console.log('saMsUng' === 'SAMSUNG'); // false





// const brandName = 'samsung';
// const userInput = 'saMsUng';
// const lowercaseInput = userInput.toLowerCase();

// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true



// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('Doe')); // false


// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('jacob')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('mercer')); // false




// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }





// const str = "Hello, world!";

// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false (метод чутливий до регістру)



// const str = "Hello, world!";

// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false (метод чутливий до регістру)




// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//       return "File extension matches";
//     } else {
//       return "File extension does not match";
//     }
//   }




// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8



// const message = "Welcome to Bahamas!";
// const index = message.indexOf("hello");
// console.log(index); // -1



// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "



// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }



// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }



// function countClients(clientCounter, maxClients) {
//     let counter = clientCounter; // створюємо локальну змінну
  
//     while (counter < maxClients) {
//       console.log(counter);
//       counter += 1;
//     }
//   }
  
//   countClients(18, 25);
  




// function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
  
//     while (i <= number) {
//       total += i;
//       i += 1;
//     }
  
//     return total;
//   }



// do {
//     statement // код, який буде виконуватися
//  } while (condition);
 
 

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);




// for (Ініціалізація; Умова; Пост-вираз) {
//     // Тіло циклу
//   }
  


// Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією (повторенням) циклу. Якщо умова перетворюється на**true**, то виконується тіло циклу. Якщо умова перетворюється на false, то цикл завершується.
// Пост-вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови. Використовується для оновлення значення змінної-лічильника.
// Тіло циклу — це блок коду, який буде виконуватися на кожній ітерації циклу, якщо умова перетворюється на true.


// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }
  


// for (let i = 20; i >= 0; i -= 5) {
//     console.log(i);
//   }
  



// function sumUpTo(number) {
//     let sum = 0;
  
//     for (let i = 0; i <= number; i += 1) {
//       sum += i;
//     }
  
//     return sum;
//   }
  
//   console.log(sumUpTo(5)); // 15
//   console.log(sumUpTo(10)); // 55
//   console.log(sumUpTo(0)); // 0
  


// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6




// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5



// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4



// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5


// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//   }
  



// for (let i = 0; i < 10; i+=1) {
//     console.log(i);
  
//     if (i === 5) {
//       console.log('Met the number 5, interrupt the execution of the cycle');
//       break;
//     }
//   }
  
//   console.log('Log after cycle');
  




// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
// 			break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 6);
// console.log("Log after exiting function");




// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);




// rozgalujennea


// console.log("before");
// if (5 > 3) {
// }
// console.log("after");
// console.log(5 > 3);


// console.log("before");
// // true
// if (5 > 3) {
//     console.log("x > y");
// }
// console.log("after");


// console.log("before");
// // false ne potrapliaem v tilo funczii
// if (5 > 30) {
//     console.log("x > y");
// }
// console.log("after");




// console.log("before");
// // true
// if (true) {
//     console.log("x > y");
// }
// console.log("after");



// console.log("before");
// // false
// if (5 > 30) {
//     console.log("x > y");
// } else {
//     console.log("x < y");
// }
// console.log("after");


// console.log("before");
// // false
// if (10 > 3) {
//     console.log("x > y");
// } else {
//     console.log("x < y");
// }
// console.log("after");



// const sum = 100;
// if (sum >= 100) {
//     console.log("big chocolate");

// } else {
//     console.log("small chocolate");
// }


// nesuvora rivnisti

// const points = 1501;
// if (points <= 500) {
//     console.log("level 1");

// } else if (points > 500) {
//     console.log("level 2");

// }else if (points > 1500) {
//     console.log("level 3");

// } else {
//     console.log("level 4");

// }



// const points = 500;

// if (points > 1500) {
//     console.log("level 1");

// } else if (points > 500) {
//     console.log("level 2");

// }else if (points < 500) {
//     console.log("level 3");

// } else {
//     console.log("level 4");

// }




// const balance = 500;
// let message;

// if (balance >= 0) {
//     message = "Positive";

// } else {
//     message = "Negative";

// }
// console.log(message);



//  тернарний оператор шоб повернути значення

// const balance = 500;
// const message = balance >= 0 ? 'Positive' : 'Negative';
// console.log(message);


// const balance = -500;
// const message = balance >= 0 ? 'Positive' : 'Negative';
// console.log(message);




// const balance = -500;
// const message = balance >= 1000 ? 'more 1000' : balance >= 500 ? 'more 500' : "Negative";
// console.log(message);





// const balance = 500;
// let message;
// if (points > 1500) {
//     console.log("level 1");

// } else if (points > 500) {
//     console.log("level 2");

// }else if (points < 500) {
//     console.log("level 3");

// } else {
//     console.log("level 4");

// }




// области видимості



// глобальна

// const a = 15;
// console.log(a);



// const a = 15;
// if(true){
// console.log(a);

// }



// const a = 15;
// if (true) {
//     const b = 10;
// console.log(b);
// }


// const a = 15;
// if (true) {
//     const b = 10;
// console.log(a);
// }


// const a = 15;
// if (true) {
//     const b = 10;
// }
// if (true) {
//     const c = 5;
// console.log(a);
// }


// const a = 15;
// if (true) {
//     const b = 10;
// }
// if (true) {
//     const c = 5;
// console.log(c);
// }


// const a = 15;
// if (true) {
//     const b = 10;
// }
// if (true) {
//     const c = 5;
// console.log(b);
// }


// const a = 15;
// if (true) {
//     const b = 10;
// }
// if (true) {
//     const a = 5;
// console.log(a);
// }



// const hours = 14;
// const minutes = 0;
// let time;
// if (minutes > 0) {
//     time = '${hours} h. ${minutes} mn.'
// } else {
//     time = '${hours} h';
// }
// console.log(time);




// const hours = 14;
// const minutes = 0;
// let time;
// const message = minutes > 0 ? '${hours} h. ${minutes} mn.' : '${hours} h.';
// console.log(message);



// const hours = 14;
// const minutes = 10;
// let time;
// const message = minutes > 0 ? '${hours} h. ${minutes} mn.' :
//     '${hours} h';
// console.log(message);



// const deadline = 10;
// if (deadline === 0) {
//     console.log("Today");
// } else if (deadline === 1) {
//     console.log("Tomorrow");
// } else if (deadline === 2) {
//     console.log("Overtomorrow");
// } else {
//     console.log("Date in the future");
// }

// const deadline = 0;
// if (deadline === 0) {
//     console.log("Today");
// } else if (deadline === 1) {
//     console.log("Tomorrow");
// } else if (deadline === 2) {
//     console.log("Overtomorrow");
// } else {
//     console.log("Date in the future");
// }


// const user = "Alice";
// switch (user) {
//     case "Petya":
//         console.log("case 1");
//         break;
//     case "Alice":
//         console.log("case 2");
//         break;
//         case "Yura":
//             console.log("case 3");
//         break;
//     default:
//         console.log("default");
// }
 

// const user = "Alice";
// switch (user) {
//     case "Petya":
//         console.log("case 1");
//         // break;
//     case "Alice":
//         console.log("case 2");
//         // break;
//         case "Yura":
//             console.log("case 3");
//         // break;
//     default:
//         console.log("default");
// }
 


// function foo() {
// switch(user) {
//     case "Petya":
//         console.log("case 1");
//         return 1;
//     case "Alice":
//         console.log("case 2");
//         return 2;
//         case "Yura":
//             console.log("case 3");
//         return 3;
//     default:
//         console.log("default");
// }
// }
// console.log(foo());







// const deadline = 0;
// switch (deadline) {
//     case 0:
//         console.log("Today");
//         break;
//         case 1:
//             console.log("Tomorrow");
//         break;
//         case 2:
//             console.log("Overmorrow");
//         break;
//         defoult:
//         console.log("Date in the future");
    
// }


// const deadline = '0';
// switch (deadline) {
//     case 0:
//         console.log("Today");
//         break;
//         case 1:
//             console.log("Tomorrow");
//         break;
//         case 2:
//             console.log("Overmorrow");
//         break;
//         default:
//         console.log("Date in the future");
    
// }



// const option = 1;
// let message = "";
// switch (option) {
//     case 1:
//         message = 'zabrati tovar';
//         break;
//         case 1:
//             message = 'dostavka zavtra';
//         break;
//         case 1:
//             message = 'otpravca segodnea';
//         break;
//     default:
//         message = 'perezvonit menadzer';
// }
// console.log(message);
    



// ---------------Масиви----------------

// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// const mixed = ['apple', 10, true]; // масив з елементами різних типів

// arrayName[index]



// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'



// const planets = ['Earth', 'Mars', 'Venus'];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'



// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[3]); // undefined
// console.log(planets[999]); // undefined




// Перевизначення значення елемента
    
    
    
// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']


// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];




// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);



// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length); // 3




// const planets = ['Earth', 'Mars', 'Venus'];

// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
// }



// function getOrderQuantity(order) {
//   return order.length;
// }




// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"




// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];
//   return [lastIndex, lastElement];
// }





// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія





// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]






// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]




// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// b[0] = "Ajax";
// console.log(a); // ["Ajax", "Jacob"]
// console.log(b); // ["Ajax", "Jacob"]




// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// console.log([] === []); // false




// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;




// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"


// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN




// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }




// const array= [false];
// const result = array ? "A" : "B";





// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'




// function transformString(string) {
// 	const words = string.split("_");
// 	return words.join("-");
// }

// transformString("user_age"); // "user-age"
// transformString("price_per_droid"); // "price-per-droid"




// function getLength(array) {
//   const string = array.join("");
//   return string.length;
// }





// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]




// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']



// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]




// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]




// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]



// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]



// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);




