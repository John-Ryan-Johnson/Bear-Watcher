import utilities from '../../helpers/utilities';

import './bearForm.scss';

const loadForm = () => {
  const domString = `
    <form>
      <div class="form-row align-items-center mt-5 ml-3">
       <div class="col-auto">
         <label class="sr-only" for="inlineFormInput">Name</label>
          <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Bear Name">
        </div>
        <div class="col-auto">
          <label class="sr-only" for="inlineFormInputGroup">Username</label>
          <div class="input-group mb-2">
           <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="ImageUrl">
          </div>
        </div>
        <div class="col-auto">
         <button type="submit" class="btn btn-danger mb-2">Submit</button>
        </div>
      </div>
    </form>
  `;
  utilities.printToDom('form-container', domString);
};

export default { loadForm };
