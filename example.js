const didYouMean = require('.')

async function main () {
  const query = await didYouMean('fidooshiary')
  console.log(query.suggestion) // => 'fiduciary'
}

main()
