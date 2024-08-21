// forIn ===> suitable for Object

const myObject =  {
    js : 'javaScript',
    cpp : " c++",
    java : "java",
    php : "php"

}

// console.log(myObject);
for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    
    
    console.log(`${key} course is ${myObject[key]}`);
    
}