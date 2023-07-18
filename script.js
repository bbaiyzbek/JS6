//
// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//         gender: 'male'
//     },
//     {
//         name: 'Petr',
//         age: 29,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//         gender: 'female'
//     },
//     {
//         name: 'Nikita',
//         age: 30,
//         isMarried: false,
//         gender: 'male'
//     }
// ]
//
// console.log(arrayObj.filter(user => user.gender === 'male' && user.age < 24 && !user.isMarried));
// console.log(arrayObj.filter(user => user.gender === 'female'));
// console.log(arrayObj.filter(user => user.age>24 && user.isMarried));

/////////////////////////////////////////////////////////////////////////////////
///Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// function handleObject(array){
//  return array.reverse()
// }
// console.log(handleObject([1, 2, 3]))

/////////////////////////////////////////////////////////////////////////////
///Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// function checkObject(array){
// return array.filter((el)=>el > 0 || el === 'string')
// }
// console.log(checkObject([0, 1, false, 2, undefined, '', 3, null]))

////////////////////////////////////////////////////////////////////////////
/// Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// function checkRepeat(array){
//     return array.filter((el, id) => array.indexOf(el) === id )
// }
// console.log(checkRepeat([1, 2, 3, 1, 2]))

////////////////////////////////////////////////////////////////////////////
///Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.///

// const array = ['a', 'b', 'c']
// const array1 = [1, 2, 3]
// console.log([...array, ...array1])

///////////////////////////////////////////////////////////////////////////
///Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6///
//
// const array = [1, 2, 3]
// function handleObject (a, b, c){
//     return [...array, ...a, ...b, ...c]
// }
// console.log(handleObject([4], [5], [6]))

//////////////////////////////////////////////////////////////////////////
///Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6///

// const array = [1, 2, 3]
// function handleObject (a, b, c){
//     return [...a, ...b, ...c, ...array]
// }
// console.log(handleObject([4], [5], [6]))

///////////////////////////////////////////////////////////////////////////
///Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].///

// const array = [1, 2, 3, 4, 5]
// array.splice(1,2)
// console.log(array)

/////////////////////////////////////////////////////////////////////////////
///Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.///

// const arrayObj =
//     {
//         js: 'test',
//         jq: 'hello',
//         css: 'world'
//     }
// console.log(Object.keys(arrayObj))

////////////////////////////////////////////////////////////////////////////
///Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// ['Капуста', 'Репа', 'Редиска', 'Морковка']
// function checkString (array){
//     return array.join(',')
// }
// console.log(checkString(['Капуста', 'Репа', 'Редиска', 'Морковка']))

////////////////////////////////////////////////////////////////////////////
///Пользователь вводит строку кириллицей разного регистра.
// Напишите функцию, которая принимает строку в качестве аргумента
// и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]

// function changeRegister(str){
//     let a =  str.split('').map((el) => {
//         if(el === el.toUpperCase()) {
//             return el.toLowerCase();
//         } else {
//             return el.toUpperCase();
//         }
//     }).join('')
//     return [a]
// }
// console.log(changeRegister('КаЖдЫй ОхОтНиК'))

//////////////////////////////////////////////////////////
///1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка

// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// console.log(cars.filter(car => car.price >= 40000 && car.price <= 60000 && car.year >= 2019 ));
// console.log(cars.filter(car => car.make === 'Mercedes'))
