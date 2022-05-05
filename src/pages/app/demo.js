import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import TableRow from "./table";
// import TableRow from "./table";
const Demo = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      <div className="p-5 bg-gray-200 shadow rounded-lg">
        <h1>Zigara Riders</h1>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                firstName
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                lastName
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                route
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                phone
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr className="p-5 bg-gray-100 shadow rounded-lg w-full">
                <TableRow
                  key={task._id}
                  task={task}
                  onDelete={onDelete}
                  onToggle={onToggle}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Demo;
