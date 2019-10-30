import React from "react";

export const CustomerDetailas = ({ cusDetail }) => {
  console.log(cusDetail);

  let { name, id } = cusDetail;

  return (
    <div className="custDetail">
      <h5 style={{ textDecoration: "underline wavy blue" }}>
        <b>Customer Detail</b>
      </h5>
      <br />
      <span className="name">Name: {name}</span>
      <br />
      <span className="id">Id: {id}</span>
    </div>
  );
};

export default CustomerDetailas;
