import React, { useState } from "react";

const UserRow = ({ user, handleDelete, handleSelect }) => {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <tr className=" bg-white divide-y divide-gray-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <input
          type="checkbox"
          onChange={() => handleSelect(user)}
          className="form-checkbox h-4 w-4 text-blue-600"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.role}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <button
          onClick={handleEdit}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
