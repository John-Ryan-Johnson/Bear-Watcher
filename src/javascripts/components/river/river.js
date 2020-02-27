import utilities from '../../helpers/utilities';

import bearsData from '../../helpers/data/bearsData';

const printBears = () => {
  let domString = '';
  bearsData.bears.forEach((bear) => {
    domString += `
      <div class="col-3 mt-5">
        <div class="card text-center">
          <img src="${bear.imageUrl}" class="card-img-top" alt="bear pic">
          <div class="card-body">
            <h4 class="card-title">${bear.name}</h4>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    `;
  });
  utilities.printToDom('bear-container', domString);
};

export default { printBears };
