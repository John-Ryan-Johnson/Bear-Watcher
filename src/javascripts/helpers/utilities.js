const printToDom = (divId, domString) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = domString;
};

export default { printToDom };
