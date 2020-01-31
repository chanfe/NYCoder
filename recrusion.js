class Something{
    constructor(){

    }
    some(){

    }
}

const countdown = n => {
    if (n < 0){
        console.log("this is a negivtive number")
        return;
    }
    if(isNaN(n)){
        console.log("Not a number")
        return;
    }
    if (n == Infinity){
        console.log("infinity?")
        return;
    }
    if (n == 0){
        return;
    }
    else{
        console.log(n)
        return countdown(n-1)
    }
}

const fibonacci_num = n => {
    if (n == 0 || n == 1){
        return 1
    }
    else{
        return fibonacci_num(n - 2) + fibonacci_num(n - 1)
    }
}

const fibonacci_arr = n => {
    
}

const flatten_arr = (n, newarr = []) => {
    for(let i =0; i < n.length; i++){
        if(Array.isArray(n[i])){
            newarr = newarr.concat(flatten_arr(n[i], []))
        }
        else{
            newarr.push(n[i])
        }
    }
    return newarr
}

// let a = flatten_arr([1,[2,3,4],[5,[6],7],[8,[9,-1],[[10]]]])
// let b = flatten_arr([1,2,[3,[4]],[[5]]])
// console.log(a)


const product_arr = (n) => {
    if (n.length === 0) return 1
    let n1 = n.pop()
    if (n1 === 0) return 0
    return n1 * product_arr(n)
}

let a = product_arr([1,2,3])
let b = product_arr([4,0,6])
console.log(a)
console.log(b)


