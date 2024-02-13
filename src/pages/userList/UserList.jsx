import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/getall");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error (show error message, etc.)
      }
    };
    fetchUsers();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  const columns = [
    { field: "_id", headerName: "ID", width: 330 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImage" alt="" src={params.row.image} />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        disableRowSelectionOnClick
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={19}
        checkboxSelection
      />
    </div>
  );
};
