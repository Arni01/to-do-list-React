import style from './TaskItem.module.css';
import cn from 'classnames';
import deleteImg from '../../../assets/img/delete.svg';

let TaskItem = (props) => {
  const handleTaskDone = (e) => {
    if (
      e.target.tagName !== 'BUTTON' &&
      e.target.parentElement.tagName !== 'BUTTON'
    ) {
      let id =
        e.target.tagName === 'LI' ? e.target.id : e.target.parentElement.id;
      props.taskDone(id);
    }
  };
  const handleTaskMark = ({ target }) => {
    props.taskMark(target.parentElement.id);
  };
  return (
    <li
      className={cn(
        style.taskItem,
        { [style.important]: props.isMark },
        { [style.done]: props.isDone }
      )}
      id={props.id}
      onClick={handleTaskDone}
    >
      <span>{props.text}</span>
      <button
        className={cn(style.buttonMark, style.notImportant)}
        onClick={handleTaskMark}
      >
        MARK IMPORTANT
      </button>
      <button className={style.buttonDelete}>
        <img src={deleteImg} alt="Delete" />
      </button>
    </li>
  );
};

export default TaskItem;
