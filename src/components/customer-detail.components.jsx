import React from "react";

export const CustomerDetailas = ({ cusDetail, isLoaded }) => {
  if (!isLoaded) {
    return <div>noot loaded</div>;
  }
  console.log(cusDetail);

  let { name, id } = cusDetail;

  return (
    <div className="custDetail">
      <span className="name">Name: {name}</span>
      <br />
      <span className="id">Id: {id}</span>
    </div>
  );
};

export default CustomerDetailas;
