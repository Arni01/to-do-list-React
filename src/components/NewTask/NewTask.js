import { Button } from 'react-bootstrap';
import style from './NewTask.module.css';

let NewTask = (props) => {
  const handleTextarea = (e) => {
    // console.log(e);
    // if (e.key === 'Enter') {
    //   props.createNewTask();
    //   return;
    // }
    props.handleNewTaskText(e.target.value);
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
        // onKeyDownCapture={handleTextarea}
      ></textarea>
      {/* <button className={style.newTaskBtn}>ADD</button> */}
      <Button variant="primary" size="lg" onClick={props.createNewTask}>
        ADD
      </Button>
    </div>
  );
};

export default NewTask;
