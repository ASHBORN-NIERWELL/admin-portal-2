import React from "react";
import TaskRow from "@/app/components/taskRow";
import { tasks } from "@/app/sampleData";

const Page: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold p-4 border-b">Task List</h1>
      {tasks.map((task) => (
        <TaskRow key={task.referenceId} task={task} />
      ))}
    </div>
  );
};

export default Page;
