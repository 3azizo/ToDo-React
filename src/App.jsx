import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";

import Today from "./pages/Today";
import All from "./pages/All";
import Completed from "./pages/Completed";
import Important from "./pages/Important";
import Uncompleted from "./pages/Uncompleted";
import NotFound from "./pages/NotFound";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const CloseModel = () => {
    setShowForm(false);
  };

  const showSidebarHandler = () => {
    setShowSidebar(true);
    console.log("test");
  };

  const openAddTaskForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <Header
        onClicked={showSidebarHandler}
        onShowForm={openAddTaskForm}
      ></Header>
      <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/today" element={<Today />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/important" element={<Important />}></Route>
        <Route path="/important" element={<Uncompleted />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      {showForm && <AddTask onClosed={CloseModel} />}
      {showSidebar && (
        <Sidebar
          onCloseSidebar={() => setShowSidebar(false)}
          onAddTask={openAddTaskForm}
        />
      )}
    </>
  );
}

export default App;
