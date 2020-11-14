# google-did-you-mean

Fetch Google search suggestions for misspelled queries by scraping for 'Did you mean...' and 'Showing results for...' links.

This package makes HTTP requests to Google's public search page so it doesn't require an API key.

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install google-did-you-mean
```

## Usage

```js
const didYouMean = require('google-did-you-mean')

async function main () {
  const suggestion = await didYouMean('fidooshiary')
  console.log(suggestion) // => 'fiduciary'
}

main()
```

## API

This module exports a single async function:

### `async didYouMean(query)`

- `query` is a required string
- Returns a promise that resolves to a string or `null` if no suggestion is found.s

## Tests

```sh
npm install
npm test
```

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js
- [cheerio](https://ghub.io/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server

## Dev Dependencies

- [jest](https://ghub.io/jest): Delightful JavaScript Testing.
- [standard](https://ghub.io/standard): JavaScript Standard Style

## License

MIT
