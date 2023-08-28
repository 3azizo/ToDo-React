import React, { useState } from "react";
import { createPortal } from "react-dom";
import classes from "./AddTask.module.scss";
import { AiOutlineClose } from "react-icons/ai";
const AddTask = ({ CloseModel }) => {
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [important, setImportant] = useState(null);
  const [completed, setCompleted] = useState(null);

  const submitHander = () => {};

  const Form = () => {
    return (
      <form className={classes.model} onSubmit={submitHander}>
        <div>
          <h2>Add a task</h2>
          <button onClick={CloseModel}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <label htmlFor="title"></label>
          <input type="text" id="title" placeholder="e.g study for the test" />
        </div>
        <div>
          <label htmlFor="date"></label>
          <input type="text" id="date" />
        </div>
        <div>
          <label htmlFor="desc">Description(optional)</label>
          <textarea id="desc" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="dir">select a directory</label>
          <input type="text" id="dir" />
        </div>
        <div>
          <div>
            <input type="radio" id="important" />
            <label htmlFor="important">Mark as important</label>
          </div>
          <div>
            <input type="radio" id="completed" />
            <label htmlFor="completed">Mark as completed</label>
          </div>
        </div>
      </form>
    );
  };

  const Layout = () => <div className="layout"></div>;

  return createPortal(
    <>
      <Form></Form>
      <Layout></Layout>
    </>,
    document.querySelector(".layout-root")
  );
};

export default AddTask;
