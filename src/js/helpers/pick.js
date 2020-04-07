function pick(table, array) {
  return array.reduce((acc, curr) => {
    acc[curr] = table[curr];
    return acc;
  }, {});
}

export default pick;
