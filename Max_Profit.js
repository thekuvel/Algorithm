let buildings = [
  { title: 'T', time: 5, earnings: 1500 },
  { title: 'P', time: 4, earnings: 1000 },
  { title: 'C', time: 10, earnings: 2000 },
]

function findMaxProfit(totalTime) {
  // Initilizing profit array pa
  let pa = Array(totalTime + 1)
    .fill(null)
    .map(() => [])

  pa[0].push({ earning: 0, count: { T: 0, P: 0, C: 0 } })

  for (let t = 1; t <= totalTime; t++) {
    for (let b of buildings) {
      if (t >= b.time) {
        let remainingTime = t - b.time

        // If remainingTime == 0, we can still build this building
        if (pa[remainingTime].length === 0) {
          pa[t].push({
            earning: remainingTime * b.earnings,
            count: { T: 0, P: 0, C: 0, [b.title]: 1 },
          })
        }

        for (let prev of pa[remainingTime]) {
          let earning = prev.earning + remainingTime * b.earnings
          let count = { ...prev.count, [b.title]: prev.count[b.title] + 1 }
          pa[t].push({ earning, count })
        }
      }
    }

    if (pa[t].length > 0) {
      let maxEarning = Math.max(...pa[t].map((s) => s.earning))
      pa[t] = pa[t].filter((s) => s.earning === maxEarning)
    }
  }

  console.log(`Max Profit: ${pa[totalTime][0].earning}`)
  console.log('All optimal solutions:', pa[totalTime])
}

// Find max profit
findMaxProfit(7)
