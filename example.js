const didYouMean = require('.')

async function main () {
  const suggestion = await didYouMean('fidooshiary')
  console.log(suggestion) // => 'fiduciary'
}

main()
