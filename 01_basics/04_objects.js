// singleton 

//const tinderUser = new Object()

// const tinderUser1 = {}     is a non singleton object
//console.log(tinderUser1);

const tinderUser = {}
tinderUser.id = "123gfd"
tinderUser.name = "gaurav"
tinderUser.loggedIn = false
 
//console.log(tinderUser);

const regularUser = {
    name : "Gaurav",
    email : "gauravkumar@gmail.com",
    loggedIn : true,
    fullName : {
        username : {
            firstname : "shinu",
            lastname : "nishad",
        
        }
    }
}

//console.log(regularUser.fullName.username.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1,obj2,obj4)

//const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('name'));

const course = {
    courseName : "java script",
    price : "9999",
    courseconstractor : "Gaurav",
}
  
console.log(course.price);

//course.courseName
//console.log(course.courseName);


const {courseconstractor} = course
console.log(courseconstractor);

const {courseconstractor: instractor} = course  // destrecture 
console.log(instractor)

