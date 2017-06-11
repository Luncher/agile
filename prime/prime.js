function genratePrimes (maxValue) {
  if (maxValue >= 2) {
    const fill = Array(maxValue + 1).fill(true, 2)
    for (let i = 2; i < Math.sqrt(maxValue + 1); i++) {
      for (let j = i * 2; j < maxValue + 1; j += i) {
        fill[j] = false
      }
    }
    return fill.reduce((acc, cur, index) => {
      if (cur) {
        acc.push(index)
      }
      return acc
    }, [])
  } else {
    return []
  }
}

const primes = genratePrimes(100)
console.dir(primes)
console.log(primes.length)