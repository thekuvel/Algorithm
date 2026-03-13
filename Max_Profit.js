let buildings = [
  { title: 'T', time: 5, earnings: 1500 },
  { title: 'P', time: 4, earnings: 1000 },
  { title: 'C', time: 10, earnings: 2000 },
]

function findMaxProfit(n) {
  // Initialize array to capture profit, building built and remaining time
  let profitArray = []
  let propertyArray = []
  let timeLeftArray = []
  function createNestedArrays(array) {
    for (i = 0; i < n; i++) array.push([])
  }
  createNestedArrays(profitArray)
  createNestedArrays(propertyArray)
  createNestedArrays(timeLeftArray)
  // console.log(profitArray)

  // Iterate available time from backwards n to 1
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

  // Calculate max profit and display output
  // console.log(profitArray, '\n', propertyArray, '\n', timeLeftArray)
  let maxEarning = 0
  let outputArray = []

  profitArray.map((array, i) => {
    array.map((val, j) => {
      count = { T: 0, P: 0, C: 0 }
      // console.log(val, timeLeftArray[i][j])
      let timeLeftArrayIndex = timeLeftArray[i][j] - 1
      // console.log(val, i, j, timeLeftArrayIndex)
      if (timeLeftArrayIndex >= 0) {
        // console.log(profitArray[timeLeftArrayIndex][j])
        let earnings = val + (profitArray[timeLeftArrayIndex][j] || 0)
        if (earnings >= maxEarning) {
          maxEarning = earnings
          // console.log(propertyArray[i][j], propertyArray[timeLeftArrayIndex][j])
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

  let maxProfit = Math.max(...outputArray.map((val) => val.earning))

  let sol = outputArray.filter((val) => val.earning === maxProfit)
  console.log(sol)
}
findMaxProfit(7)
findMaxProfit(8)
findMaxProfit(13)
