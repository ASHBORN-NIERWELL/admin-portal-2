import React from "react";
import { format } from "date-fns";
import "@/app/styles/taskRow.css"

type TaskStatus = "Landlord accepted" | "Pending" | "Completed";

interface Task {
  deadline: Date;
  referenceId: string;
  status: TaskStatus;
}

interface TaskRowProps {
  task: Task;
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
  return (
    <div className="task-row-style">
      <div>
        <p className="task-reference-id">{task.referenceId}</p>
        <p className="task-deadline">
          {format(task.deadline, "dd/MM/yyyy HH:mm")}
        </p>
      </div>
      <div>
        <span
          className="task-status"
        >
          {task.status}
        </span>
      </div>
      <div>
        <button className="action-button">
            start
        </button>
      </div>
    </div>
  );
};

export default TaskRow;
