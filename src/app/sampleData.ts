import { parse } from "date-fns";

type TaskStatus = "Landlord accepted" | "Pending" | "Completed";

interface Task {
  deadline: Date;
  referenceId: string;
  status: TaskStatus;
}

function parseDeadline(dateStr: string): Date {
  return parse(dateStr, "dd/MM/yyyy HH:mm", new Date());
}

export const tasks: Task[] = [
  {
    deadline: parseDeadline("23/05/2025 14:40"),
    referenceId: "20304-F-01",
    status: "Landlord accepted"
  },
  {
    deadline: parseDeadline("01/06/2025 09:00"),
    referenceId: "20304-F-02",
    status: "Pending"
  },
  {
    deadline: parseDeadline("15/06/2025 16:30"),
    referenceId: "20304-F-03",
    status: "Completed"
  }
];