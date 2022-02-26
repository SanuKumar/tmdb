import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

const Users = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <h3 className="App">User's List</h3>
      {loading ? (
        "Loading..."
      ) : error ? (
        error
      ) : !users.length ? (
        "No data found"
      ) : (
        <table>
          <thead>
            <tr>
              {users.length &&
                Object.keys(users[0]).map((h) => <th key={h}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.language.map((l) => l).join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
