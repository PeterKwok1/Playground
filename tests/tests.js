import { expect } from 'chai'

function titleCase(title) {
    const words = title.split(' ')
    const titleCasedWords = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1)
    })
    return titleCasedWords.join(' ')
}

expect(titleCase('the great mouse detective')).to.be.a('string')
expect(titleCase('a')).to.equal('A')
expect(titleCase('vertigo')).to.equal('Vertigo')

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective')