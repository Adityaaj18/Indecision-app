const multiplier = {
    numbers:[2,3,4],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}
console.log(multiplier.multiply());