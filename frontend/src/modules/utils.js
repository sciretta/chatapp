export const textShortener = (text, spaces) => {
  if (typeof text !== 'string') return text
  const splitedText = text.split('')

  if (splitedText.length < spaces + 2) return text

  let shortText = []
  for (let i = 0; i <= spaces; i++) {
    shortText = [...shortText, splitedText[i]]
  }
  return [...shortText, '...'].join('')
}
