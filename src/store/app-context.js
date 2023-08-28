const appContext = React.createContext({
  tasks: [],
  totalTasks: tasks.length,
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
  clearTasks: () => {},
});
export default appContext;
