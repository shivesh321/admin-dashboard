import { useEffect, useState } from "react";

import Table from "./Table";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (user) => {
    setUsers(users.filter((u) => u.id !== user.id));
  };

  const handleSelect = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  return (
    <div>
      <Table
        users={users}
        handleDelete={handleDelete}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default AdminPanel;
