import React from "react";

export const OrderDetail = ({
  items,
  pageNo,
  totalPage,
  handleDecresePageNo,
  handleIncresePageNo
}) => {
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
      <div className="button-container">
        <button onClick={handleDecresePageNo}>Prev</button>
        <span>
          Page {pageNo} of {totalPage}
        </span>
        <button onClick={handleIncresePageNo}>Next</button>
      </div>
    </div>
  );
};
export default OrderDetail;
