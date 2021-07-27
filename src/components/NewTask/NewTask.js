import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import style from './NewTask.module.css';

let NewTask = (props) => {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleTextarea = (e) => {
    props.handleNewTaskText(e.target.value);
  };
  const handleCreateNewTask = () => {
    if (props.textTask === '') {
      setErr(true);
      setTimeout(setErr, 2000, false);
      return;
    }
    setShow(true);
    props.createNewTask();
    setTimeout(setShow, 1500, false);
  };

  return (
    <div className={style.newTask}>
      <label htmlFor="new-task__area">New Task</label>
      <textarea
        name="newTask"
        id="new-task__area"
        // cols="15"
        rows="3"
        value={props.textTask}
        onChange={handleTextarea}
      ></textarea>
      <div className={style.wrapper}>
        {show && <Alert variant="success">Task added</Alert>}
        {err && <Alert variant="danger">Enter the text of the task</Alert>}
        <Button variant="primary" size="lg" onClick={handleCreateNewTask}>
          ADD
        </Button>
      </div>
    </div>
  );
};

export default NewTask;
