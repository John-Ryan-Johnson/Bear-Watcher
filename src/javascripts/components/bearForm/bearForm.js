import utilities from '../../helpers/utilities';
import bearData from '../../helpers/data/bearData';
import printBears from '../river/river';


const addBear = (e) => {
  e.preventDefault();
  const bears = bearData.getBears();
  const newBear = {
    name: document.getElementById('bear-name').value,
    imageUrl: document.getElementById('bear-image').value,
  };
  bears.push(newBear);
  document.getElementById('bear-form').reset();
  printBears.printBears();
};

const printForm = () => {
  const domString = `
    <form id="bear-form">
      <div class="form-row align-items-center mt-5 mb-5">
       <div class="col-auto">
         <label class="sr-only" for="bear-name">Name</label>
          <input type="text" class="form-control mb-2" id="bear-name" placeholder="Bear Name">
        </div>
        <div class="col-auto">
          <label class="sr-only" for="bear-image">ImageUrl</label>
          <div class="input-group mb-2">
           <input type="text" class="form-control" id="bear-image" placeholder="ImageUrl">
          </div>
        </div>
        <div class="col-auto">
         <button type="submit" class="btn btn-danger mb-2" id="submit-form">Submit</button>
        </div>
      </div>
    </form>
  `;
  utilities.printToDom('form-container', domString);
  document.getElementById('submit-form').addEventListener('click', addBear);
};

export default { printForm };
