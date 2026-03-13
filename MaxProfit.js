let buildings = [
  { title: 'T', time: 5, earnings: 1500 },
  { title: 'P', time: 4, earnings: 1000 },
  { title: 'C', time: 10, earnings: 2000 },
]

buildings.sort((a, b) => a.time - b.time)

function maxProfit(n) {
  let profitArray = new Array(n - buildings[0].time).fill(0)
  let propertyArray = new Array(n - buildings[0].time).fill(null)
  let timeLeftArray = new Array(n - buildings[0].time).fill(0)

  for (t = n; t >= 0; t--) {
    let maxProfit = 0
    let property = null
    let timeLeft = 0

    buildings.map((b) => {
      let remainingTime = t - b.time
      let profit = remainingTime * b.earnings
      if (profit > maxProfit) {
        maxProfit = profit
        property = b.title
        timeLeft = remainingTime
      }
    })
    profitArray[t] = maxProfit
    propertyArray[t] = property
    timeLeftArray[t] = timeLeft
  }
  // Calculate property, earnings and print output
  // console.log(profitArray, timeLeftArray, propertyArray)

  let maxEarnings = 0
  let count = { T: 0, P: 0, C: 0 }
  profitArray.map((v, i) => {
    let earnings = v + profitArray[timeLeftArray[i]]
    if (earnings > maxEarnings) {
      count = { T: 0, P: 0, C: 0 }
      maxEarnings = earnings
      // console.log(propertyArray[i], propertyArray[timeLeftArray[i]])
      if (propertyArray[i]) {
        count[propertyArray[i]]++
      }
      if (propertyArray[timeLeftArray[i]]) {
        count[propertyArray[timeLeftArray[i]]]++
      }
    }
  })
  console.log('Output', maxEarnings, count)
}
maxProfit(7)
maxProfit(8)
maxProfit(13)
