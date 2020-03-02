import $ from 'jquery';
import utilities from '../../helpers/utilities';

import bearData from '../../helpers/data/bearData';

const printBears = () => {
  let domString = '';
  const bears = bearData.getBears();
  bears.forEach((bear) => {
    domString += `
    <div class="card mx-5 mt-5" style="max-width: 18rem;">
    <img class="card-img-top" src="${bear.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">${bear.name}</h5><hr>
      <h6 class="text-center mb-3">Fishing Prowess</h6>
      <button class="failed btn btn-primary ml-3">Attempt</button>
      <button class="booYaa btn btn-success ml-5">Success</button>
      <div class="fa mt-3">
        <p class="attempts">Failed Attempts:</p>
        <input type="text" id="attempts" value="${bear.attempts}">
      </div>
      <div class="sa">
        <p>Successful Attempts:</p>
        <input type="text" id="success" value="${bear.successes}">
      </div>
      <div class="fc">
        <p>Fish Caught:</p>
        <input type="text" id="total" value="${bear.successes}">
      </div>
    </div>
  </div>
    `;
  });
  utilities.printToDom('bear-container', domString);

  $(document).on('click', '.failed', () => {
    console.error('Failed attempt!!');
  });

  $(document).on('click', '.booYaa', () => {
    console.error('Success!!');
  });
};

export default { printBears };
