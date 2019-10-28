import React from "react";

export const OrderDetail = ({ items, pageNo }) => {
  console.log(items, pageNo);
  const orderedItems = items.map(item => {
    const { name, category, price, currency, tax, quantity } = item;
    return (
      <React.Fragment>
        <div>Name: {name}</div>
        <div>Category: {category}</div>
        <div>Price: {price}</div>
        <div>Currency: {currency}</div>
        <div>Tax: {tax}</div>
        <div>Quantity:{quantity}</div>

        <hr class="style-seven" />
      </React.Fragment>
    );
  });
  return (
    <div className="order-detail">
      <hr class="style-seven" />
      {orderedItems}
    </div>
  );
};
export default OrderDetail;
