
//Khai báo biên tên a thuộc tính var có thể gắn các giá trị 
//khác nhau được và đặc chung  khai báo biến a 

// var a = 1
// var a = "string"
// var a = true
// // cơ chế hoistring đi từ trên xuống dưới thì thành đó ăn
// function demo() { 
//     var a = 5
//     console.log(a); //5
// }

// demo()


//let  không thể khai báo chung cho biến
let b =1
// let b ="string"
// let b =true

//let khi khai báo chỉ hiểu trong dấu {}
function demo() { 
  let  b = 5
    console.log(b); //5
}

console.log(b) // sẽ ra 1 


//const là hằng số không thể gắn giá trị khác
//const cũng không thể đặt tên khai báo trùng nhau
const demo1 = {name:"thanh" ,age:23}
// demo1 ={name:"tam" ,age:25}
demo1.nickName="tam"

console.log(demo1)

