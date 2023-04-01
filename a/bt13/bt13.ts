let age:number = 18

if(age >=18){
    console.log("Được uống rượu bia")
}else{
    console.log("Không được uống rượu bia")
}


let disCount :number;
let itemCount =11;
if (itemCount > 0 && itemCount <= 5 ){
    disCount= 1
} else if (itemCount >5 && itemCount <=10) {
    disCount= 7
}else if ( itemCount >10 && itemCount <=15){
    disCount= 11
} else{
    disCount= 25
}
console.log("Check disCount = " ,disCount)