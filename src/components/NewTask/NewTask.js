import { Button } from 'react-bootstrap';
import style from './NewTask.module.css';

let NewTask = (props) => {
  const handleTextarea = ({ target }) => {
    props.handleNewTaskText(target.value);
  };

  return (
    <div className={style.newTask}>
      <label htmlFor="new-task__area">New Task</label>
      <textarea
        name="newTask"
        id="new-task__area"
        cols="15"
        rows="15"
        value={props.textTask}
        onChange={handleTextarea}
      ></textarea>
      {/* <button className={style.newTaskBtn}>ADD</button> */}
      <Button variant="primary" size="lg" onClick={props.createNewTask}>
        ADD
      </Button>
    </div>
  );
};

export default NewTask;
