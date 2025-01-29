import Folder from "../ui/Folder";
import NavigateBreadCrumbs from "../ui/NavigateBreadCrumbs";
import TaskIcon from '@mui/icons-material/Task';
import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import Filters from "./Filters";
import TaskTable from "./table";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const TaskListData = () => {
  const { filteredTasks, toggleTaskStatus, setFilter, filter } = useTasks();

  return (
    <div className="bg-white shadow rounded">
      <div className="flex justify-between items-center py-1 px-3">
        <div>
          <NavigateBreadCrumbs>
            <Link to="/">Back</Link>
            <span>Task </span>
          </NavigateBreadCrumbs>
          <Folder label="Task List" icon={<TaskIcon />} />
        </div>
        <div>
          <Link to="/add-task">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              style={{
                backgroundColor: "#3A3D89",
                color: "white",
              }}
            >
              Add Task
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-end ">
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <hr />
      <div className="min-h-[75vh] p-4">
        <TaskTable
          filteredTasks={filteredTasks}
          toggleTaskStatus={toggleTaskStatus}
        />
      </div>
    </div>
  );
};

export default TaskListData;
