import React from "react";

const UserInformation = ({ user, setModalData }) => {
  return (
    <>
      <tr style={{ border: "0px" }}>
        <td style={{ padding: "0px" }}>
          <div
            className="background-info"
            onClick={() => setModalData(false)}
          ></div>
          <div className="info-container">
            <span className="close" onClick={() => setModalData(false)}>
              X
            </span>
            <div className="border">
              {user.name} <br/>
              {user.city}<br/>
              {user.date.slice(0, 10)}<br/>
              {user.payment ? "PAGO" : "DEUDA"} <br/>
              ${user.total}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserInformation;
