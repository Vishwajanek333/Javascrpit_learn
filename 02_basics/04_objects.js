//const snapUser=new Object()
const snapUser={}

snapUser.id="12abc"
snapUser.name ="samam"
snapUser.isLoggedIn = false
console.log(snapUser);

//  providing object inside objects
const regualarUSer ={
email:"some@gamil.com",
fullname: {
    userfullname:{
        firstname:"vishwa",
        lastname:"janek"
    }
}
}
// to access use dot(.)
console.log(regualarUSer.fullname); 
console.log(regualarUSer.fullname.userfullname);
console.log(regualarUSer.fullname.userfullname.firstname); 

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3 ={ obj1, obj2}// its like push operation
//const obj3=Object.assign({},obj1,obj2,obj4)// it will combine all items in{}(target  from sourece (objects))

const obj3={...obj1,...obj2}// spread concept
console.log(obj3);

const user = [  // array ka object
    {

    },

    {
        id:1,
        email:"vish@mail.com",
    }
    
    
]

user[1].email
console.log(snapUser);

console.log(Object.keys(snapUser));// in form of array
console.log(Object.values(snapUser));
console.log(Object.entries(snapUser));

console.log(snapUser.hasOwnProperty('isLoggedIn'));



// destructureing of objects

const course={
    coursename:"js with vish",
    price:"666",
    courseInstructor:"hitesh"

}
// when we want to access or use 
//course.courseInstructor // it not good pratice
const{courseInstructor:instructor}=course
//console.log(courseInstructor);
console.log(instructor);

//  api and json basics
// json
        // { "name":"vish",
        //     "coursename":"js",
        //     "instructor:"hitesh"
        // }
// api not object types but also in arrays format 
[
    {},
    {},
]
// lets check the  random api how it looks  we can also extract the values  json we  see in future 

