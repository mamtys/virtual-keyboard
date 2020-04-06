
function getPreviousEndOfLine(text, pos) {
  return text
    .slice(0, pos)
    .split('')
    .reverse()
    .join('')
    .match(/\n|$/).index;
}

export default getPreviousEndOfLine;
