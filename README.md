# super-dictionary
##### [Documentation](https://dictionary.js.org)
[![npm version](https://shields.io/npm/v/super-dictionary.png)](https://npmjs.com/package/super-dictionary)
[![npm downloads](https://img.shields.io/npm/dt/super-dictionary?color=green.png)](https://npmjs.com/package/super-dictionary)
[![license](https://img.shields.io/npm/l/super-dictionary?color=red.png)](https://npmjs.com/package/super-dictionary)
[![npm bundle size](https://img.shields.io/bundlephobia/min/super-dictionary?color=green&label=size.png)](https://dictionary.js.org)

> Zero-Dependency All-Language API Wrapper for Dictionary API

## Installation

```
npm i super-dictionary
```



## Methods
```js
const dictionary = require('super-dictionary');

// as an async promise
async function run() {
	let data = await dictionary.getDefinition('hello');
	console.log(data);
}

// as a callback
dictionary.getSynonyms('nice').then(synonyms => {
	console.log(synonyms)
})
```

### Example Output
#### `getDefinition(word, language?)`
###### Can return an array of definitions with their part of speech or a simple definition
```json
[
  { pos: 'exclamation', definition: [ [Object] ] },
  { pos: 'noun', definition: [ [Object] ] },
  { pos: 'verb', definition: [ [Object] ] }
]
```
#### `getSynonyms(word, language?)`
###### Can return an array of synonyms with their definition counterparts or an object of one synonym with its definition

```json
[
  {
    num: 0,
    type: 'giving pleasure or satisfaction; pleasant or attractive.',
    synonyms: [
      'enjoyable',       'pleasant',
      'pleasurable',     'agreeable',
      'delightful',      'satisfying',
      'gratifying',      'acceptable',
      "to one's liking", 'entertaining',
      'amusing',         'diverting',
      'marvellous',      'good',
      'bonny',           'couthy',
      'irie',            'lovely',
      'great',           'neat',
      'lekker',          'mooi'
    ]
  },
  {
    num: 1,
    type: '(especially of a difference) slight or subtle.',
    synonyms: [
      'subtle',     'fine',
      'delicate',   'minute',
      'precise',    'exact',
      'accurate',   'strict',
      'close',      'careful',
      'meticulous', 'rigorous',
      'scrupulous', 'ultra-fine'
    ]
  },
  { num: 2, type: 'fastidious; scrupulous.', synonyms: [] }
]
```
`etc...`