function addNumberOrString(a:number | string, b:number | string) {
    if (typeof a === 'number' && typeof b ==='number'){
        return a+b
    }
    if (typeof a === 'string' && typeof b ==='string'){
        return a.concat(b)
    }
    throw new Error("EEErrorrr")
}
console.log(">>>Check",addNumberOrString(3, 3))