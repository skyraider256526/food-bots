import React from "react";

import "./order-summary.page.style.scss";

import { CustomerDetailas } from "../components/customer-detail.components";

import { OrderDetail } from "../components/order-details.components";

import { ResturantDetail } from "../components/resturant-details.components";

export class OrderSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      order: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://indapi.kumba.io/webdev/assignment")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          order: json
        });
      });
    console.log("Data fetched: ", this.state.isLoaded);
    console.log(this.state.order);
  }
  render() {
    // let { isLoaded, order } = this.state;

    // if (!isLoaded) {
    //   return (<span>Not Loaded</span>);
    // } else {
    //   return (<div>{JSON.stringify(order)}</div>);
    // }
    if (!this.state.isLoaded) {
      return (
        <div className="loading-screen">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </div>
      );
    }
    return (
      <div className="container">
        <CustomerDetailas
          cusDetail={this.state.order.user}
          isLoaded={this.state.isLoaded}
        />
        <ResturantDetail
          restaurantDetail={this.state.order.restaurant}
          isLoaded={this.state.isLoaded}
        />
        <OrderDetail
          itemsDetail={this.state.order.items[0]}
          isLoaded={this.state.isLoaded}
        />
      </div>
    );
  }
}

export default OrderSummary;
