import React, { Component } from "react";
import CartItem from "./../cart/cartItem";
import Information from "./information";
export default class CartRellll extends Component {
  render() {
    var { cart } = this.props;

    return (
      <div>
        <div className="cartrell">
          <span
            style={{ fontWeight: "700", fontStyle: "italic", fontSize: "19px" }}
          >
            Thành Tiền
          </span>
          <h2>
            <strong>{this.showTota(cart)}</strong>
          </h2>
        </div>
        <Information show={this.showTota} />
      </div>
    );
  }
  showTota = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        let prices = cart[i].productsss.price;
        total += Math.abs(parseFloat(prices.toString())) * cart[i].quantity;
      }
    }
    return total;
  };
}
