import React from "react";

export const ResturantDetail = ({restaurantDetail, isLoaded}) => {
  if (!isLoaded) {
    return <div>not loaded</div>;
  }
  console.log(restaurantDetail);
  
  const { name, city, state, street, zipcode } = restaurantDetail;

  return (
    <div className="resturant-detail">
      <span>{city}</span>
      <span>{name}</span>
      <span>{state}</span>
      <span>{street}</span>
      <span>{zipcode}</span>
    </div>
  );
};
export default ResturantDetail;
