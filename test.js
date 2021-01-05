const didYouMean = require('.')

describe('googleDidYouMean', () => {
  test('monetery', async () => {
    const suggestion = await didYouMean('monetery')
    expect(suggestion).toEqual('monetary')
  })

  test('fidooshiary', async () => {
    const suggestion = await didYouMean('fidooshiary')
    expect(suggestion).toEqual('fiduciary')
  })

  test('yee', async () => {
    const suggestion = await didYouMean('yee yee')
    expect(suggestion).toEqual(null)
  })

  test('george floid', async () => {
    const suggestion = await didYouMean('george floid')
    expect(suggestion).toEqual('george floyd')
  })

  test('miluea', async () => {
    const suggestion = await didYouMean('miluea')
    expect(suggestion).toEqual('milieu')
  })

  test('good query', async () => {
    const suggestion = await didYouMean('good query')
    expect(suggestion).toEqual(null)
  })
})
