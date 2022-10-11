import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import User from "./User";

const SearchComponents = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setCheck] = useState(true)

  const URL =
    "https://633ee4220dbc3309f3c04d34.mockapi.io/client-information/client-information";
  const callAPI = async () => {
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  useEffect(() => {
    callAPI();
  }, []);
  //   console.log(users);
 const checkAll = () => {
    document.querySelectorAll('input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = check;
    });
}
  return (
    <div className="table-scroll">
      <Table striped bordered hover className="table-center">
        <thead className="header-table">
          <tr>
            <th>
              <input type="checkbox" onClick={checkAll}/>
            </th> 
            <th>Id</th>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Fecha</th>
            <th>Pago</th>
            <th>Total</th>
          </tr>
        </thead>

        {loading ? (
          <tbody style={{height: "400px"}}>
            <tr style={{textAlign:"center", margin:"0 auto"}}>
              <td>Cargando...</td>
            </tr>
          </tbody>
        ) : (
          <>
            {users.map((user) => (
              <>{users ? <User user={user} key={user.name} /> : null}</>
            ))}
          </>
        ) }
      </Table>
    </div>
  );
};

export default SearchComponents;
