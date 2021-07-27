import style from './Navigation.module.css';
import cn from 'classnames';

let Navigation = (props) => {
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
      </ul>
    </nav>
  );
};

export default Navigation;
