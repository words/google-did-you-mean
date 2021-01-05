const didYouMean = require('.')
const nock = require('nock')

describe('googleDidYouMean', () => {
  test('monetery', async () => {
    const query = await didYouMean('monetery')
    expect(query.suggestion).toEqual('monetary')
  })

  test('fidooshiary', async () => {
    const query = await didYouMean('fidooshiary')
    expect(query.suggestion).toEqual('fiduciary')
  })

  test('yee', async () => {
    const query = await didYouMean('yee yee')
    expect(query.suggestion).toEqual(null)
  })

  test('george floid', async () => {
    const query = await didYouMean('george floid')
    expect(query.suggestion).toEqual('george floyd')
  })

  test('good query', async () => {
    const query = await didYouMean('good query')
    expect(query.suggestion).toEqual(null)
  })

  test('429 response (too many reqeusts)', async () => {
    nock.disableNetConnect()
    const mock = nock('https://www.google.com')
      .get('/search')
      .query({
        q: 'hyperactive',
        hl: 'en'
      })
      .reply(429)

    const query = await didYouMean('hyperactive')
    expect(mock.isDone()).toBe(true)
    expect(query.suggestion).toBe(null)
    expect(query.error.request.response.statusCode).toEqual(429)
    nock.cleanAll()
    nock.enableNetConnect()
  })
})
