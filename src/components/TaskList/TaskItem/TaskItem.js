import style from './TaskItem.module.css';
import cn from 'classnames';
import deleteImg from '../../../assets/img/delete.svg';

let TaskItem = (props) => {
  const handleClickTask = (e) => {
    if (
      e.target.tagName !== 'BUTTON' &&
      e.target.parentElement.tagName !== 'BUTTON'
    ) {
      props.taskDone(props.id);
    }
    if (e.target.dataset.type === 'mark') {
      props.taskMark(props.id);
    }
    if (
      e.target.dataset.type === 'delete' ||
      e.target.parentElement.dataset.type === 'delete'
    ) {
      props.taskDelete(props.id);
    }
  };

  return (
    <li
      className={cn(
        style.taskItem,
        { [style.important]: props.isMark },
        { [style.done]: props.isDone }
      )}
      onClick={handleClickTask}
    >
      <span>{props.text}</span>
      <button
        className={cn(style.buttonMark, style.notImportant)}
        data-type="mark"
      >
        MARK IMPORTANT
      </button>
      <button className={style.buttonDelete} data-type="delete">
        <img src={deleteImg} alt="Delete" />
      </button>
    </li>
  );
};

export default TaskItem;
