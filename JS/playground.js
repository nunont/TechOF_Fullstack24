

var colors = [
    'red', 'blue', 'brown', 'yellow', 'green', 'black', 'white', 'purple', 'pink', 'orange'
]

var resultHTMl = '';

var colorsLength = colors.length; 

for (var i = 0; i < colors.length; i++){
    console.log(colors[i])
    resultHTMl += colors[i] + ',';
}

console.log(resultHTMl)

const arr = [1, 3, 10000, 29]
arr.sort()
arr