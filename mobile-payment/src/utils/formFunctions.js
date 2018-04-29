export const phoneStrClear = phone => phone.replace(/[^0-9]/gim, '');

export const inputNumbersOnly = e => {
  const chr = getChar(e);

  if (e.ctrlKey || e.altKey || e.metaKey) return;

  if (chr === null) return;

  return !(chr < '0' || chr > '9');
};

const getChar = e => {
  if (e.which === null) {

    if (e.keyCode < 32) return null;
    return String.fromCharCode(e.keyCode);
  }

  if (e.which !== 0 && e.charCode !== 0) {

    if (e.which < 32) return null;
    return String.fromCharCode(e.which);
  }

  return null;
};
