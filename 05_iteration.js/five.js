const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (val){// it call back fn  
//     console.log(val);

// })
// coding.forEach((item) =>{// 
//     console.log(item);
// } )

// coding.forEach((item,index,arr) =>{// for each  acces of  value, index,arraylist
//     console.log(item,index,arr);
// })

const mycoding=[{
    languageName:"javascript",
    languageFileName:"js"
},
{
     languageName:"java",
     languageFileName:"java"
},
{
    languageName:"pyhton",
    languageFileName:"py"
},
]
// accesible of objects 
mycoding.forEach((item)=>{
    console.log(item.languageName);
})