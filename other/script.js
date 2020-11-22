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
let array = [1,2,3]
array.myForEach(e => console.log(e))

Array.prototype.myMap = function(callBack){
    let mapArray = []
    for(let i = 0; i < this.length; i++){
        mapArray.push(callBack(this[i]))
    }
    return mapArray
}

console.log([1,2,3].myMap(e => e*2))

Array.prototype.mySort = function(arr = this) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
}
console.log([1, 2, 5, 1, 3, 0, 0].mySort())

Array.prototype.myFilter = function(callBack, arr = this) {
    let filterArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            filterArray.push(arr[i])
        }
    }
    return filterArray
}
console.log([1, 3, 5, 6, 7, 8].myFilter((e => e > 5)))

Array.prototype.myFind = function(callBack, arr = this) {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i])) {
            return arr[i]
        }
    }
    return undefined
}
console.log([1, 3, 5, 6, 7, 8].myFind((e => e > 5)))