const FIRST = [
    'Жизнь',
    'Брат',
    'Судьба',
    'Пацан',
    'Волк',
    'Друг',
    'Девушка',
    'Слово',
    'Свобода',
    'Двор',
    'Мама',
    'Тот, кто рядом',
    'Враг',
    'Отец',
    'Бродяга',
    'Мажор',
    'Машина',
    'Любовь',
    'Лох',
    'Волчица',
    ' '
]

const SECOND = [
    'всегда',
    'никогда',
    'порой',
    'иногда',
    'когда-то',
    'само собой',
    'через 20 лет',
    'сегодня',
    'сейчас',
    'уже',
    'вряд ли',
    ' '
]

const THIRD = [
    'не',
    ''
]

const FOURTH = [
    'поймет',
    'предаст',
    'полюбит',
    'будет',
    'пьет',
    'говорит',
    'бьет',
    'забудет',
    'поймет',
    'убьет',
    'придет',
    'идет',
    'ответит',
    ' '
]

const FIFTH = [
    'за свою любовь',
    'вопреки всем',
    'за маму',
    'за пацанов',
    'за двор',
    'меня',
    'как волк',
    'по-братски',
    'с друзьями',
    'пацанов',
    'тебя',
    'любовь',
    ' '
]
const random = (array) => Math.floor(Math.random() * array.length)

const selectWord = (array) => {
    const randomWord = random(array)
    const word = array[randomWord] !== ' ' ? `${array[randomWord]} ` : ''

    return word
}

const QuoteRandom = () => {
    const message = " ".concat(selectWord(FIRST), selectWord(SECOND), selectWord(THIRD), selectWord(FOURTH), selectWord(FIFTH))
    return message
}

module.exports = { QuoteRandom, random }