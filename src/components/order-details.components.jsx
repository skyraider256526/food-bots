import React from "react";

export class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      pageNo: 0
    };
    // totalItems,
    //   items,
    //   pageNo,
    //   totalPage,
    //   handleDecresePageNo,
    //   handleIncresePageNo;
  }
  handleIncresePageNo = () => {
    this.setState(prevState => {
      if (prevState.pageNo === 3) {
        return { pageNo: 0 };
      }

      return { pageNo: prevState.pageNo + 1 };
    });
  };
  handleDecresePageNo = () => {
    this.setState(prevState => {
      if (prevState.pageNo === 0) {
        return { pageNo: 0 };
      }

      return { pageNo: prevState.pageNo - 1 };
    });
  };
  render() {
    const totalTax = this.state.items.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue.price * currentValue.tax) / 100,
      0
    );
    const itemsTotal = this.state.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    const itemsToRender = this.state.items.slice(
      this.state.pageNo * 3,
      3 * (this.state.pageNo + 1)
    );
    const totalPage = Math.ceil(this.state.items.length / 3);
    // pageNo=pageNo + 1

    // console.log(items, pageNo);
    const orderedItems = itemsToRender.map(item => {
      const { name, category, price, currency, tax, quantity } = item;
      return (
        <React.Fragment>
          <div>Name: {name}</div>
          <div>Category: {category}</div>
          <div>Price: {price}</div>
          <div>Currency: {currency}</div>
          <div>Tax: {tax}%</div>
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
          <button onClick={this.handleDecresePageNo}>Prev</button>
          <span>
            Page {this.state.pageNo + 1} of {totalPage}
          </span>
          <button onClick={this.handleIncresePageNo}>Next</button>
        </div>
        <span className="bill">
          <b>
            No. of items: {this.state.items.length} | Total tax: INR {totalTax}{" "}
            | Total price: INR {itemsTotal} | Total Bill: INR{" "}
            {totalTax + itemsTotal}
          </b>
        </span>
        <span></span>
      </div>
    );
  }
}
export default OrderDetail;
