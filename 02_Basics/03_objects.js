const lastLoggedInDays = Symbol()
const obj = {
   name: "Ram",
   age: "30 years",
   location: "Mumbai",
   email: "ram123@gmail.com",
   isLoggedIn: false,
   [lastLoggedInDays]: ["Monday", "Friday"]
}
// console.log(obj.location);
// console.log(obj.age);
// console.log(obj["email"]);
// console.log(obj[lastLoggedInDays]);

obj.name = "Hariom"
Object.freeze(obj)
obj.name = "hiiiiiii"
// console.log(obj);

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "2323adad"
tinderUser.email = "abc23@gmail.com"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
// console.log(tinderUser.hasOwnProperty('email'));

const regularUser = {
   email: "abc2323@gmail.com",
   id: "3434er",
   fullname: {
      abc: {
         a: 1, b: 2, c: 3
      }
   }
}
// console.log(regularUser.fullname.abc.b);

const obj1 = {a:1, b:2, c:3, d:4}
const obj2 = {e:5, f:6, g:7, h:8}
const obj3 = {i:9, j:10, k:11, l:12}
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// const objj = {obj1,obj2,obj3}
// const objj = Object.assign({},obj1, obj2, obj3)
objj = {...obj1, ...obj2, ...obj3}
// console.log(Object.keys(objj));
// console.log(Object.values(objj));
// console.log(Object.entries(objj));
// console.table(objj);
// console.log(objj);

// ++++++++++++++++ De-structuring of object ++++++++++++++++++++++
const course = {
   coursename: "JavaScript",
   price: "999",
   courseInstructor: "Hitesh Chaudhary"
}
// console.table(course);
// console.log(course.courseInstructor);

const {courseInstructor : mentor} = course
console.log(mentor);

// +++++++++++++++++++++ APIs +++++++++++++++++++++++++++++++




