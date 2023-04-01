//TypeScript 
let summs1 = (a:number,b:number,y?:number) => {
    if(y) return a+b +y;
  
     return a +b;
 }
 console.log("Check summs1 = " ,summs1(2,5))