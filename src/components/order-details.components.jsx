import React from "react";

export const OrderDetail = ({ itemsDetail, isLoaded }) => {
  if (!isLoaded) {
    return <div>not loaded</div>;
  }
  console.log(itemsDetail);
  
  const { name, category, price, currency, tax, quantity } = itemsDetail;
  return (
    <div className="order-detai">
      <span>{name}</span>
      <span>{category}</span>
      <span>{price}</span>
      <span>{currency}</span>
      <span>{tax}</span>
      <span>{quantity}</span>
    </div>
  );
};
export default OrderDetail;
