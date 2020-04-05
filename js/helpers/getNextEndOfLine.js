function getNextEndOfLine(text, pos) {
  return text
    .slice(pos)
    .split('')
    .join('')
    .match(/\n|$/).index;
}

export default getNextEndOfLine;
