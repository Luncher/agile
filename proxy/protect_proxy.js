class Bar {
  constructor () {

  }

  drink () {
    console.log('peron drink')
  }
}

class ProxyBar extends Bar {
  constructor (age, bar) {
    super()
    this.bar = bar
    this.personAge = age
  }

  drink () {
    if (this.personAge > 18) {
      this.bar.drink()
    } else {
      console.log('person can not drink')
    }
  }
}

const bar = new Bar()
const pbar = new ProxyBar(10, bar)
pbar.drink()

const pbar2 = new ProxyBar(19, bar)
pbar2.drink()