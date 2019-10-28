import React from "react";

export const ResturantDetail = ({ restaurantDetail }) => {
  console.log(restaurantDetail);

  const { name, city, state, street, zipcode } = restaurantDetail;

  return (
    <div className="resaturant-detail">
      <span>{city}</span>
      <span>{name}</span>
      <span>{state}</span>
      <span>{street}</span>
      <span>{zipcode}</span>
    </div>
  );
};
export default ResturantDetail;
