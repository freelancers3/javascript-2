// let a;
// const B = 5;

// // B = 10; // TypeError: Assignment to contstant variable.
// a = 10;

// console.log(++a); // 11
// console.log(a) // 11


// console.log(a == "11"); // true: value 

// console.log(a === "11"); // false : value && data type



// switch (key) {
//     case value1:
//         // code 1
//     break;
//     case value2:
//         // code 2
//     break;
//     default:
//         // code 3
//     break;
// }

// read the temprature 

/* let temp = prompt("ما هي درجة الحرارة ؟");

// Categorize the tempratures:
//console.log(typeof temp);
temp = Number(temp);
//console.log(typeof temp );

// Ternary experssion:
let Categoy =
    (temp < 18) ? "بارد"
        : (temp >= 18 && temp <= 30) ? "معتدل"
            : (temp > 30 && temp < 50) ? "حار"
                : "قيمة غير صالحة";

//console.log(Categoy);

switch (Categoy) {
  case "بارد":
    console.log(Categoy);
    break;
  case "معتدل":
    console.log(Categoy);
    break;
  case "حار":
    console.log(Categoy);
    break;
    default:
        console.log(Categoy);
    break;
};

*/
// example of switch case

let fruit = prompt("What is your favorit fruit ? ");

switch (fruit) {
    case "apple":
        console.log("Apples are tasty !!");
    break;
    case "banana":
        console.log("Bananas are full of potassium");
    break;
    case "orange":
        console.log("Oranges are great sorce of vitamin C");
    break;
    case "mango":
        console.log("Mangoes are wonderfully sweet!");
    break;
    default:
        console.log("Sorry, we don't have information about this fruit: " + fruit);
    break;
}








