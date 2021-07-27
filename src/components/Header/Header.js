import style from './Header.module.css';
import logo from '../../assets/img/logo.svg';
// import { FormControl, InputGroup } from 'react-bootstrap';

let Header = (props) => {
  const handleSearchTask = ({ target }) => {
    props.searchTask(target.value);
  };
  return (
    <header>
      <div className={style.wrapperLogo}>
        <img src={logo} alt="Logo" className={style.logo} />
      </div>

      {/* <InputGroup className="mb-2">
        <InputGroup.Text>
          <i class="bi bi-search"></i>
        </InputGroup.Text>
        <FormControl
          id="inlineFromInputGroup"
          placeholder="Search task for to do"
        />
      </InputGroup> */}
      <input
        type="text"
        className={style.headerInput}
        placeholder="Search task for to do"
        value={props.searchValue}
        onChange={handleSearchTask}
      />
    </header>
  );
};

export default Header;
