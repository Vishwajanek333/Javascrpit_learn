// Immediately invoked functoion expresss(iife)
// sybtax:
(function chai(){
    console.log(`DB Connected`);
} )();// ;here terminate the  fn by explcilite
// firest () fn is define
// () 2nd is executeing 

// why we use iife ? bcz to avoid polluting the globalscope:varibale inside and iife are private and do not leak into the global scope

( ()=> {
    console.log(`DB connected two ` );
})()
