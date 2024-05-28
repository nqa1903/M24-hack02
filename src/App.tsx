import React, { useState } from "react";
import FoodList from "./component/food/FoodList";
import CartList from "./component/food/CartList";

interface CartItemType {
  name: string;
  price: number;
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleUpdateCart = (updatedCartItems: CartItemType[]) => {
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="row">
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
                </div>
                <FoodList updateCart={handleUpdateCart} />
              </div>
            </div>
          </div>
          <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h1 className="panel-title">Your Cart</h1>
                </div>
                <CartList cartItems={cartItems} onClickUpdate={handleUpdateCart} onClickDelete={handleUpdateCart} />
              </div>
              <div className="alert alert-success" role="alert" id="mnotification">
                Add to cart successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
