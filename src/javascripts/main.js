import bearForm from './components/bearForm/bearForm';
import printBears from './components/river/river';
import '../styles/main.scss';

const init = () => {
  bearForm.printForm();
  printBears.printBears();
};

init();
