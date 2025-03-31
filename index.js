// let lesson = "Javascript";
// console.log(lesson.substring(2,6));
// console.log(lesson.slice(-5,-1));
// console.log(lesson.replaceAll("a","e"));
// console.log(lesson.split(" "));
// const splitLesson= lesson.split("");
// console.log(splitLesson);
// console.log(splitLesson.join(""));
// console.log((lesson +" ").repeat(2));
// let school = "AkiraChix";
// console.log(`I am learning ${lesson} in ${school} `);
// let word1 = "Hello";
// let word2 = "Javascript";
// console.log(word1.concat(" ",word2));
// let str = "extravaganza";
// console.log(str.slice(8));
// const food = "The quick fox jumped over the lazy dog";
// console.log(food.slice(4,0,"eat"));
// // let food1 = food.slice(0,3);
// // let food2 = food.slice(4,);
// // console.log(food1 +" " + "eat" + " "+ food2);
// const story = "The quick brown fox jumped over the lazy dog";
// // console.log(story.count("the"));
// // console.log(story.count("brown"));
// let str1 = "The pupils are reading in library";
// console.log(str1.includes("are"));
// let word1 = "Wonderful";
// console.log (word1.toUpperCase) 
// let string = "An undERneath world";
// let splitedword = string.split(" ");
// console.log(splitedword);
// splitedword.forEach((item,index)=>{splitedword[index] = item.charAt(0).toUpperCase()+ item.slice(1).toLowerCase ()});
// let finalword = splitedword.toString();
// // let finalword = splitedword.join(" ");
// console.log(finalword);
// let veggies = ["Tomato","Spinach","cauliflower","cucumber","Tomato","cauliflower"];
// // console.log(veggies.at(3));
// console.log(veggies.indexOf("Spinach"));
// console.log(veggies.lastIndexOf("cauliflower"));
// console.log(veggies.push("Carrot"));
// console.log(veggies);
// console.log(veggies.pop());
// console.log(veggies);
// console.log(veggies.unshift("Celery"));
// console.log(veggies);
// console.log(veggies.shift());
// console.log(veggies);
// let vegan = [];
// console.log(vegan.shift());
// console.log(vegetables.splice(0,1,"spinach"));
// console.log(vegetables);
// let  vegetables = ["cucumber","Tomato","cauliflower","Tomato","Spinach"];
// vegetables.fill("avocado",2,4);
// console.log(vegetables);
// vegetables.map((veggie)=>{vegetables.push("Mint")});
let  vegetables = ["cucumber","tomato","cauliflower","4tomato","5spinach"];
let vegetable = vegetables.map((veggie,index)=>
 vegetables[index] = veggie.at(0).toUpperCase()+veggie.slice(1).toLowerCase()
);
console.log(vegetable);

// let vegetable = vegetables.forEach((item,index)=>{
//     vegetables[index] = Number(item.at(0)) + item.slice(1).toLocaleUpperCase()
// });
// console.log(vegetables); 