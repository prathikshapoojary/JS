var words = ["A",'B','C','D']

words.forEach(element => {
    console.log(element)   
});

words.push('E')
console.log("\nfor push:",words)

words.pop()
console.log("\nfor pop:",words)

words.shift('A')
console.log("\nfor shift:",words)

words.unshift('A')
console.log("\nfor unshift:",words)

var words1 = [2,"A",'B',1,3,'C','D']
console.log("\nfor sorted:",words.sort())

console.log("\nfor concat:",words.concat(words1))

console.log("\nfor includes:",words.includes('C'))

console.log(words.lastIndexOf())
