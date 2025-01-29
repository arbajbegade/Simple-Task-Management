import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  useTheme,
  useMediaQuery,
} from "@mui/material";

type TaskTableProps = {
  filteredTasks: { id: number; title: string; completed: boolean }[];
  toggleTaskStatus: (id: number) => void;
};

const TaskTable: React.FC<TaskTableProps> = ({
  filteredTasks,
  toggleTaskStatus,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer component={Paper} className="shadow-lg">
      <div style={{ overflowX: "auto" }}>
        <Table className="min-w-full" aria-label="task table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#3A3D89", color: "white" }}>
              <TableCell
                className="font-semibold"
                style={{ color: "white", fontSize: "1rem" }}
              >
                Title
              </TableCell>
              <TableCell
                className="font-semibold"
                style={{ color: "white", fontSize: "1rem" }}
              >
                Status
              </TableCell>
              <TableCell
                className="font-semibold"
                style={{ color: "white", fontSize: "1rem" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((task, index) => (
              <TableRow
                key={task.id}
                hover
                className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
              >
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  {task.completed ? (
                    <span className="bg-green-200 text-green-800 px-3 py-2 rounded-md text-base">
                      Completed
                    </span>
                  ) : (
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-2 rounded-md text-base">
                      Pending
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <Switch
                    checked={task.completed}
                    onChange={() => toggleTaskStatus(task.id)}
                    color="primary"
                    size="medium"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default TaskTable;
