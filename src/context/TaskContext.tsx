import React, { createContext, useState, useContext, ReactNode } from 'react';
import { fetchApi } from '../services/fetchApi';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: Task[];
  filteredTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (task: Task) => void;
  toggleTaskStatus: (taskId: number) => void;
  setFilter: (filter: string) => void;
  filter: string;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('All');

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleTaskStatus = (taskId: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  React.useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchApi();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; 
  });

  return (
    <TaskContext.Provider
      value={{ tasks, filteredTasks, setTasks, addTask, toggleTaskStatus, setFilter, filter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
