let buildings = [
  { title: 'T', time: 5, earnings: 1500 },
  { title: 'P', time: 4, earnings: 1000 },
  { title: 'C', time: 10, earnings: 2000 },
]

function findMaxProfit(n) {
  // Initialize array to capture profit, properties and remaining time left
  let profitArray = []
  let propertyArray = []
  let timeLeftArray = []
  function createNestedArrays(array) {
    for (i = 0; i < n; i++) array.push([])
  }
  createNestedArrays(profitArray)
  createNestedArrays(propertyArray)
  createNestedArrays(timeLeftArray)

  // Find maxProfit at given time
  for (i = n; i > 0; i--) {
    let maxProfit = 0

    // for every val of n, i.e given time, find best building that earn max profit
    buildings.map((b) => {
      let remainingTime = i - b.time
      let earnings = remainingTime * b.earnings

      if (earnings > maxProfit || earnings == maxProfit) {
        maxProfit = earnings
        profitArray[i - 1].push(earnings)
        propertyArray[i - 1].push(b.title)
        timeLeftArray[i - 1].push(remainingTime)
      }
    })
  }

  // Calculate output array with earning and buildings
  let maxEarning = 0
  let outputArray = []

  profitArray.map((array, i) => {
    array.map((val, j) => {
      count = { T: 0, P: 0, C: 0 }
      let timeLeftArrayIndex = timeLeftArray[i][j] - 1
      if (timeLeftArrayIndex >= 0) {
        let earnings = val + (profitArray[timeLeftArrayIndex][j] || 0) // Add current building earning + future building earning
        if (earnings >= maxEarning) {
          maxEarning = earnings
          if (propertyArray[i][j]) {
            count[propertyArray[i][j]]++
          }
          if (propertyArray[timeLeftArrayIndex][j]) {
            count[propertyArray[timeLeftArrayIndex][j]]++
          }
        }
      }
      let output = { earning: maxEarning, count: count }
      outputArray.push(output)
    })
  })

  // Find maxearning and display output

  let maxProfit = Math.max(...outputArray.map((val) => val.earning))
  let sol = outputArray.filter((val) => val.earning === maxProfit)
  console.log(sol)
}
findMaxProfit(7)
findMaxProfit(8)
findMaxProfit(13)
