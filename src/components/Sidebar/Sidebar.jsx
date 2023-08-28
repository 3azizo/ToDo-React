import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import { createPortal } from "react-dom";

const Sidebar = ({ onCloseSidebar, onAddTask }) => {
  const NavLinkStyle = {
    padding: "15px",
    listStyleType: "none",
    color: "#fff",
    textDecoration: "none",
  };
  return createPortal(
    <div className={classes.sidebar}>
      <div>
        <button className="btn" onClick={onAddTask}>
          Add new task
        </button>
        <ul>
          <li>
            <NavLink
              to={"/today"}
              style={NavLinkStyle}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Today's tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              style={NavLinkStyle}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/important"}
              style={NavLinkStyle}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Important tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/completed"}
              style={NavLinkStyle}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Completed tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/unCompleted"}
              style={NavLinkStyle}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Uncompleted Task
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="layout" onClick={onCloseSidebar}></div>
    </div>,
    document.querySelector(".layout-root")
  );
};

export default Sidebar;
