

  // const words = ["оно","того","это"];

  // const phrase = prompt
  
  //  ('Введите строку из  слов, разделяя их пробелами,не употребляя слова : "оно","того","это" ');
  //  const str = phrase.split(" ").map(element => words.includes(element) ? "BEEP" : element).join(" ");

  // ========================

  

//  let arr = ["usd","eur","gbp","uah"] ;
//  let strBegin = "<select>";
//  let strEnd = "</select>"
 


// let strMiddle = strBegin +  arr.reduce((accumulator,elem)=>accumulator +
//    `<option value="${elem}">${elem}</option>`, "")
// console.log(strMiddle);
  
//  let str = strMiddle + strEnd;
//  console.log(str);
 

//  document.write(str) //document.write відобразить ваш HTML на сторінці
// ==================================

// let line = prompt('vvedite tekst'); 
// let arr = line.split('')
 
// let variant1 = []; 
// let variant2 = []; 
// let variant3 = []; 
 
// for (let i of line) { 
//   if (i === "[") { variant1.push('['); } 
//   else if (i === ']') {variant1.pop() ;}
//    else if (i === "(") { variant2.push('('); }
//     else if (i === ')') { variant2.pop();  } 
//     else if (i === "{") { variant3.push('{'); } else if (i === '}') { variant3.pop();} 
// } 
 
// alert(variant1.length === 0 && variant2.length === 0 && variant3.length === 0? 'ok' : 'error'); 

// ============================

//  1. 


// const car = {
//      model: "Malibu",
//      make: "Chevrolet",
//      year: 2017,
//      colour: "Blue",};


// const dog = {
// name: "Sharik",
// weight: 10,
// age: 1,
// breed: "mixed",
// activity: "run",};


// 2.


//  const car = {
//        [prompt("Введите параметр автомобиля")]: prompt("Введите значение параметра автомобиля"),
//        make: "Chevrolet",
//        model: "Malibu",
//        year: 2017,
//        colour: "Blue",};
      //  console.log(car);

      //  const dog = {
      //   name: "Sharik",
      //   weight: 10,
      //   age: 1,
      //   breed: "mixed",
      //   activity: "run",
      //   [prompt("Введите характеристику")]: prompt("Введите значение "),
      // };

      //3. 
      //  
      
      
      //  const newCar = {};
      //  newCar.mileage = prompt("Введите пробег автомобиля");
      //  console.log(newCar);
      //  Object.assign(newCar,car);
      //  console.log(newCar);
      //  console.log(car);

// ==================================
//     4. 


// var nechto = {

// tagName :"body",
// children:[ 
//           {tagName :"div",
//            children:[
//             {tagName : "span",
//              children: ["Enter a data please"]},

//            {tagName :"br"},

//            {tagName :"input",
//             attrs:{ type:'text', id:'name'}
//             },
//            {tagName :"input",
//             attrs:{ type:'text', id:' surname '}
//             },
//              ]},

            
//        {tagName:"div",
//            children:[
//              { tagName : "button", 
//                   attrs:
//                   { id:'ok', 
//                      children: ["OK"]}},
//              { tagName : "button", 
//              attrs:{ id:" cancel ", 
//                      children: ["Cancel "]}}
//            ]
//           }
//         ],
//       }

//       const { children: [{ children: [, , , { children: [text] }] }] } = nechto; 
      
      


// =======================================================================================
//    5   

      // console.log(nechto.children[1].children[1].attrs.children)
      // console.log(nechto.children[0].children[3].attrs.id)
      // ============================================================================
      //6. 

      // nechto.children[0].nechto = nechto
      // nechto.children[1].nechto = nechto
// ===========================================================================
      // 7.

      // nechto.children[1].children[0].attrs.class = prompt("VVEDITE")


//       8. Все равно не понимаю  это ж было раньше такое задание? 
// Використовуючи деструктуризацію структури із завдання HTML Tree:
// Виведіть значення тексту у тезі span,
// const { children: [{ children: [{children:[text]}] }] } = nechto;
//       console.log(text); 
// Виведіть значення тексту в другій кнопці та
//  console.log(nechto.children[1].children[1].attrs.children)
// Виведіть значення атрибуту id у другому input.
// console.log(nechto.children[0].children[3].attrs.id)

// ================================================================
// 8..


// let arr = [1,2,3,4,5, "a", "b", "c"]
// let [odd1, even1, odd2, even2,odd3,...arr2]=arr
// ==============================================================
// 9.

// let arr = [1, "abc"]
// let[ ,[s1,s2,s3]] = arr
// =======================================================
// 10.
// let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, {name: 'Nikolay'}]}


// let {children:[{name:name1},{name:name2}] }=obj
// console.log(name1,name2);
// ======================================================
// 11.


//  let arr = [1,2,3,4, 5,6,7,10]
//  let {0:a, 1 :b, length} =  arr
//  console.log(a,b,length);

// =================================================
// 12.
// 

//  const car = {
//          key: prompt("Введите значение параметра автомобиля"),
//          make: "Chevrolet",
//          model: "Malibu",
//          year: 2017,
//          colour: "Blue",};
         

//          const{key, ...param} = car;
//          console.log(param);


// =================================
// 13 
// const car = {
//   "Name": "chevrolet chevelle malibu",
//   "Cylinders": 8,
//   "Displacement": 307,
//   "Horsepower": 130,
//   "Weight_in_lbs": 3504,
//   "Origin": "USA",
//   "in_production": false
// }

// sum = "<form>";

// for (let key in car) {
  
  

//     let inputType =  (typeof car[key] === 'number'? 'number':
//                       typeof car[key] === 'boolean'? 'checkbox': 'text')
  
//   sum += `<label>${key}: <input type="${inputType}" ${inputType === 'checkbox' ? 'checked' : 'value'}="${car[key]}"/></label>`
// };

// sum += "</form>";

// document.write(sum);



// ==========================================
// 14
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {

//       let currencyToConvert = prompt("вводить вхідну валюту");
//       currencyToConvert = currencyToConvert.toUpperCase();
//       let targetCurrency = prompt("вводить валюту, в яку відбувається конвертація");
//       targetCurrency = targetCurrency.toUpperCase()
//       const amount = Number.parseFloat(prompt("вводить суму у вхідній валюті"));

//       let rate = data.rates[targetCurrency];


//       let sumTargetCurrency = amount * rate;

//         alert(`${amount} ${currencyToConvert} = ${sumTargetCurrency} ${targetCurrency}`)
    
            
//             console.log(rate)
//             console.log(data) 
        //  })

        // =====================================
        // 15

         //      fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    //  .then(data => {
    // const arr =  Object.keys(data.rates);

    // let   str = "<select>";
 
    //  for (let i of arr) {str+=`<option value="${i}">${i}</option>`}
  
    // str+= "</select>" ; document.write(str); }
      
    //  )