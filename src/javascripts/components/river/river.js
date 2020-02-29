/* eslint-disable no-undef */
/* eslint-disable no-alert */
import $ from 'jquery';
import utilities from '../../helpers/utilities';

import bearData from '../../helpers/data/bearData';

const printBears = () => {
  let domString = '';
  bearData.bears.forEach((bear) => {
    domString += `
    <div class="card mx-5 mt-5" style="max-width: 18rem;">
    <img class="card-img-top" src="${bear.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">${bear.name}</h5><hr>
      <h6 class="text-center mb-3">Fishing Prowess</h6>
      <button class="failed btn btn-primary ml-3">Attempt</button>
      <button class=" booYaa btn btn-success ml-5">Success</button>
    </div>
  </div>
    `;
  });
  utilities.printToDom('bear-container', domString);
  $('.failed').click(() => {
    alert('Failed Attempt !');
  });
  $('.booYaa').click(() => {
    alert('Caught It !');
  });
};

export default { printBears };
