const axios = require('axios')
const cheerio = require('cheerio')

async function didYouMean (query) {
  const url = 'https://www.google.com/search'
  const params = {
    q: query,
    hl: 'en'
  }

  let response

  try {
    response = await axios.get(url, { params })
    const html = response.data
    const $ = cheerio.load(html)
    const suggestion = $('a[href^="/search?"][href*="spell=1"]')
    return (suggestion && suggestion.length) ? $(suggestion[0]).text() : null
  } catch (error) {
    if (error.response.status !== 404) {
      console.error('error fetching url', url, error)
    }
    return null
  }
}

module.exports = didYouMean
