function insertAfterCursor(input, value) {
  const pos = input.selectionStart;
  console.log(input.textContent);
  if (input.textContent.length === 0) {
    input.textContent.concat(value);
    console.log(input.textContent);
    return;
  }

  input.textContent
    .split('')
    .splice(pos, 0, value)
    .join('');
}

export default insertAfterCursor;
