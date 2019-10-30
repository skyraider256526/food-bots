import React from "react";

export const ResturantDetail = ({ restaurantDetail }) => {
  console.log(restaurantDetail);

  const { name, city, state, street, zipcode } = restaurantDetail;

  return (
    <div className="resaturant-detail">
      <h5 style={{ textDecoration: "underline wavy blue" }}>
        <b>Restaurant Detail</b>
      </h5>
      <div>City: {city}</div>
      <div>Name: {name}</div>
      <div>State: {state}</div>
      <div>Street: {street}</div>
      <div>Zip-code: {zipcode}</div>
    </div>
  );
};
export default ResturantDetail;
