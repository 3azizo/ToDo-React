import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import avatar from "../../assets/avatar5.png";
import classes from "./Header.module.scss";
const Header = ({ onClicked, onShowForm }) => {
  let newDate = new Date();
  let date = newDate.toLocaleDateString();

  return (
    <header className={classes.navbar}>
      <button className={classes["menu-container"]} onClick={onClicked}>
        <AiOutlineMenu />
      </button>
      <div>
        <input
          className={classes["search-input"]}
          type="text"
          placeholder="search task"
        />
      </div>
      <div>
        <span>To-Do LIST</span>
        <div>{date}</div>
      </div>
      <div className={classes["avatar-container"]}>
        <button className="btn" onClick={onShowForm}>
          Add new task
        </button>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
