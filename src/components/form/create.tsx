import NavigateBreadCrumbs from "../../ui/NavigateBreadCrumbs";
import { Link } from "react-router-dom";
import Folder from "../../ui/Folder";
import AddTaskIcon from '@mui/icons-material/AddTask';
import TaskForm from "./form";

const CreateTask = () => {
  return (
    <div className="bg-white shadow rounded">
      <div className="flex justify-between items-center py-1 px-3">
        <div>
          <NavigateBreadCrumbs>
            <Link to="/">Back</Link>
            <span>Task create</span>
          </NavigateBreadCrumbs>
          <Folder label="Task Form" icon={<AddTaskIcon />} />
        </div>
      </div>
     
      <hr />
      <div className="min-h-[75vh] p-4">
        <TaskForm/>
      </div>
    </div>
  );
};

export default CreateTask;
