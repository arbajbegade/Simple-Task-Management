import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import TaskListData from "./components/list";
import CreateTask from "./components/form/create";

const App: React.FC = () => {
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<TaskListData />} />
            <Route path="/add-task" element={<CreateTask />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </TaskProvider>
    </Router>
  );
};

export default App;
