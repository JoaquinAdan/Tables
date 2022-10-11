import React from "react";
import { useState, useEffect } from "react";
import UserInformation from "./UserInformation";
import Table from "react-bootstrap/Table";

const SearchComponents = () => {
  const [modalData, setModalData] = useState(false);
  const [users, setUsers] = useState([]);

  const URL =
    "https://633ee4220dbc3309f3c04d34.mockapi.io/client-information/client-information";
  const callAPI = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    callAPI();
  }, []);
  

  return (
    <div className="table-scroll">
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Fecha</th>
            <th>Pago</th>
            <th>Total</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody key={user.name}>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => setModalData(!modalData)}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.date.slice(0, 10)}</td>
              <td>{user.payment ? "PAGO" : "DEUDA"} </td>
              <td>${user.total}</td>
            </tr>
            {modalData ? (
              <UserInformation user={user} setModalData={setModalData} />
            ) : null}
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default SearchComponents;
