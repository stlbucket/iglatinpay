const Promise = require('bluebird')

function pigLatinizer(input){
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const sentenceSplit = input.split(' ')
  const pigLatin = sentenceSplit.map(
    word => {
      let result;

      const firstVowelIndex = vowels.reduce(
        (acc, vowel) => {
          if (acc > -1 && acc < word.indexOf(vowel)) {
            return acc
          } else {
            return word.indexOf(vowel)
          }
        },
        -1
      )

      //move all text prior to first vowel to end of word
      const wordStart = word.slice(0, firstVowelIndex)
      const wordEnd = word.slice(firstVowelIndex)
      result = `${wordEnd}${wordStart}ay`

      return result
    }
  ).join(' ')

  return Promise.resolve(pigLatin)
}

module.exports = pigLatinizer