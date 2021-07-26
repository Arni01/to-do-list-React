import style from './Navigation.module.css';
import cn from 'classnames';
import { Button } from 'react-bootstrap';

let Navigation = (props) => {
  // handleClickNav = ()
  return (
    <nav>
      <ul className={style.navList}>
        {props.nav.map((item) => {
          return (
            <li
              key={item.id}
              className={cn(style.navItem, { [style.active]: item.isActive })}
              onClick={({ target }) => props.activeLink(target)}
            >
              <span>{item.name}</span>
            </li>
          );
        })}
        {/* <li className={cn(style.navItem, style.active)} data-action="all">
          <span>All</span>
           <Button variant="link">All</Button> 
        </li>
        <li className={style.navItem} data-action="active">
          <span>Active</span>
        </li>
        <li className={style.navItem} data-action="done">
          <span>Done</span>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
