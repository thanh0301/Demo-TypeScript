
//Array TypeScript
let myarrs: string []= [ 'tao', 'chuoi' ,'le' ,'dao'] //ok
let myarrs1: string []= [ 'tao', 'chuoi' ,'le' ,'dao',21] // lỗi
let myarrs2: (string | number) []= [ 12,'tao', 'chuoi' ,'le' ,'dao' ,21] //ok

console.log('Check :' , myarrs2)