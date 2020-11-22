// task 1
function myFor(arg,arg2) {
    if(arg === arg2){
        console.log(arg)
    }else{
        myFor(arg+=1,arg2) 
    }
}
myFor(0,10)

//task 2
function sum(a) {
    console.log(a)
    return (n) => sum(a+n)
}
sum(5)(3)(1)(0)

//task 3
let num = 0
Object.prototype.calculate = val => num += val
Object.prototype.add = val => num += val
Object.prototype.myltiply = val => num *= val
Object.prototype.result = () => console.log(num)

calculate(5).add(10).myltiply(2).result()

// task 4
Array.prototype.myForEach = function(callBack){
    for(let i = 0; i < this.length; i++){
        callBack(this[i])
    }
}
[1,2,3].myForEach(e => console.log(e))

Array.prototype.myMap = function(callBack){
    let mapArray = []
    for(let i = 0; i < this.length; i++){
        mapArray.push(callBack(this[i]))
    }
    return mapArray
}

console.log([1,2,3].myMap(e => e*2))


function sort(arr) {
    let first = arr[0]
    for (let i = 0; i < arr.length; i++) {

    }
}
sort([1, 2, 5, 1, 3])