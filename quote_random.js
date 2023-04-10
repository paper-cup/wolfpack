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
    'меня',
    'как волк',
    'по-братски',
    'с друзьями',
    'пацанов',
    'тебя',
    ' '
]

const selectWord = (array) => {
    const random = Math.floor(Math.random() * array.length)
    return `${array[random]} `
}

const QuoteRandom = () => {
    const message = " ".concat(selectWord(FIRST), selectWord(SECOND), selectWord(THIRD), selectWord(FOURTH), selectWord(FIFTH))
    return message
}

module.exports = { QuoteRandom }