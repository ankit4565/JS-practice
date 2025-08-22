// Primitive  (call by value)

// 7  types: String , Number , Boolean , null, undefined, Symbol, BigInt

 const score = false
 let userEmail = undefined

 const id  = Symbol('123')
 const  anotherId = Symbol('123')
//  console.log(id == anotherId);
 const bigNumber = 3456685449898599n
 

//  Reference type (Non primitive)

// Array, Objects, Functions

 const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "Ankit",
    age: 20,
 }
 
    const myfunction = function(){
      // console.log("Hello World");
      
    }
   //  console.log(typeof heros);

    




    // **************************************** Memory Allocation *************************

    // Stack (Primitive),  Heap (Non-Primitive)

    let myYoutubename = "Ankit4565"
    let anothername = myYoutubename
    anothername = "Bowade" // Copy
   //  console.log(anothername);
   //   console.log(myYoutubename);

     let userOne = {
      email: "user@gmail.com",
      upi: "user@apl"
     }

     let userTwo = userOne

     userTwo.email = "eagle00154@gmail.com"
    console.log(userTwo);
    