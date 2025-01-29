import React from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TaskContext";

interface FormData {
  title: string;
  status: string;
}

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: { status: "Pending" },
  });

  const onSubmit = (data: FormData) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      completed: data.status === "Completed",
    };
    addTask(newTask);
    reset();
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            id="title"
            {...register("title", { required: true, maxLength: 50 })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            {...register("status")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#3A3D89] text-white font-medium py-2 px-4 rounded-lg hover:opacity-95"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
