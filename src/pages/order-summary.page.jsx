import React from "react";

import "./order-summary.page.style.scss";

import { CustomerDetailas } from "../components/customer-detail.components";

import { OrderDetail } from "../components/order-details.components";

import { ResturantDetail } from "../components/resturant-details.components";

import { NavBar } from "../components/nav-bar/nav-bar";

export class OrderSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      order: {},
      isLoaded: false,
      pageNo: 0
    };
  }

  componentDidMount() {
    fetch("https://indapi.kumba.io/webdev/assignment")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          order: json,
          pageNo: 0
        });
      });
    console.log("Data fetched: ", this.state.isLoaded);
    console.log(this.state.order);
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
    let { isLoaded, order, pageNo } = this.state;

    if (!this.state.isLoaded) {
      return (
        <div className="loading-screen">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="loading"
          />
        </div>
      );
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className="grid-container">
          <CustomerDetailas cusDetail={order.user} />
          <ResturantDetail restaurantDetail={order.restaurant} />
          <OrderDetail
            items={order.items.slice(
              this.state.pageNo * 3,
              3 * (this.state.pageNo + 1)
            )}
            pageNo={pageNo + 1}
            handleDecresePageNo={this.handleDecresePageNo}
            handleIncresePageNo={this.handleIncresePageNo}
            totalPage={Math.ceil(order.items.length / 3)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
