;(() => {
  const getLastSymbolIndex = (str, symbol) => symbol && symbol.length === 1 ? str.lastIndexOf(symbol) : -1;

  const func = (str, symbolA, symbolB) => {

    if (!str || (!symbolA && !symbolB)) {
      return -1;

    } else {
      const lastSymbolAIndex = getLastSymbolIndex(str, symbolA);
      const lastSymbolBIndex = getLastSymbolIndex(str, symbolB);

      if (lastSymbolAIndex >= lastSymbolBIndex) {
        return lastSymbolAIndex;

      } else {
        return lastSymbolBIndex;
      }
    }
  };

  console.log(func('abcdef', 'a', ''));
  console.log(func('', '', 'a'));
  console.log(func('abcdef', 'ab', 'ef'));
  console.log(func('abcdef', 'f', 'e'));
})();






