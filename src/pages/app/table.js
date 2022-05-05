import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TableRow = ({ task, onDelete, onToggle }) => {
  return (
    <>
      <td className="p-3 text-sm text-gray-700">{task.firstname}</td>
      <td className="p-3 text-sm text-gray-700">{task.lastname}</td>
      <td className="p-3 text-sm text-gray-700">{task.route}</td>
      <td className="p-3 text-sm text-gray-700">{task.phonenumber}</td>
      <td className="p-3 text-sm text-gray-700">
        <RiDeleteBin2Fill
          style={{ color: "red", cursor: "pointer", fontSize: "25px" }}
          onClick={() => onDelete(task._id)}
        />
      </td>
    </>
  );
};
export default TableRow;
