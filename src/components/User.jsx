import { useState } from "react";
import UserInformation from "./UserInformation";
const User = ({ user }) => {
  const [modalData, setModalData] = useState(false);
  return (
    <>
      <tbody>
        <tr style={{ cursor: "pointer" }}>
          <td style={{ cursor: "auto" }}>
            <input style={{ cursor: "pointer" }} type="checkbox" />
          </td>
          <td onClick={() => setModalData(!modalData)}>{user.id}</td>
          <td onClick={() => setModalData(!modalData)}>{user.name}</td>
          <td onClick={() => setModalData(!modalData)}>{user.city}</td>
          <td onClick={() => setModalData(!modalData)}>
            {user.date.slice(0, 10)}
          </td>
          <td onClick={() => setModalData(!modalData)}>
            {user.payment ? "PAGO" : "DEUDA"}{" "}
          </td>
          <td onClick={() => setModalData(!modalData)}>${user.total}</td>
        </tr>
      </tbody>
      {modalData ? (
        <UserInformation user={user} setModalData={setModalData} />
      ) : null}
    </>
  );
};

export default User;
