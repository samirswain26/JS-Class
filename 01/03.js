function formatNumber(num) {
  return num.toFixed(2);
}
// console.log(formatNumber(2));
// console.log(formatNumber)

function samir(){
  return "a"
}
// console.log(samir())

// Function Call samir()

// Func execute 
// function samir(){
//   return "a"
// }
// console.log(samir())

function b (){
  return "a"
  console.log("Hello Guys")
}

// console.log(b())

function num (num){
  return num
}
// console.log(num("2"))

function name (name){
  return (
    console.log(`My name is : ${name}`)
  )
}

// name("samir")

// function condition(name){
//   const a = "samir"

//   if(a === "samir"){
//     console.log(`Hello ${name}`)
//   }else{
//     console.log(`Hello ${"name"}`)
//   }
// }
// condition("samir")

function name (name) {
  if(!name){
    return null
  }else if(typeof name !== "string"){
    return (console.log(`name should be string`))
  }else{
    return (
      console.log(`My name is : ${name}`)
    )
  }
}
name(123)
// console.log(name("name"))
// today task is what is the diff between === and == , != and !==