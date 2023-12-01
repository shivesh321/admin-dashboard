import React from "react";
import UserRow from "./UserRow";

const Table = ({ users, handleDelete, handleSelect }) => {
  return (
    <table className=" w-full divide-y divide-gray-200 ">
      <thead className="px-6  bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
