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
    const suggestionLink = $('a[href^="/search?"][href*="spell=1"]')
    const suggestion = (suggestionLink && suggestionLink.length) ? $(suggestionLink[0]).text() : null
    return { suggestion }
  } catch (error) {
    return { suggestion: null, error }
  }
}

module.exports = didYouMean
