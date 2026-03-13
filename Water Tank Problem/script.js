let array = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0]
let units = 0
let maxNumber = Math.max(...array)

let tableBody = document.querySelector('.tableBody')
console.log(maxNumber, tableBody)

for (i = maxNumber; i > 0; i--) {
  let first = array.findIndex((val) => val >= i)
  let last =
    array.length - 1 - [...array].reverse().findIndex((val) => val >= i)
  let row = '<tr>'
  console.log(first, last)

  array.map((value, index) => {
    if (value >= i) {
      row += '<td class="yellowCell"></td>'
    } else if (index > first && index < last) {
      if (value < i) {
        row += '<td class="blueCell"></td>'
        units++
      }
    } else {
      row += '<td></td>'
    }
  })
  row += '<tr>'

  tableBody.innerHTML += row
}

let output = document.querySelector('.output')
output.innerHTML += `Output: ${units} units`
