function insertAfterCursor(input, value) {
  const pos = input.selectionStart;

  input.textContent
    .split('')
    .splice(pos, 0, value)
    .join('');
}

export default insertAfterCursor;
