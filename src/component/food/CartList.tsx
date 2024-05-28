import React from "react";
import CartItem from "./CartItem";

type CartItemType = {
  name: string;
  price: number;
  quantity: number;
};

type PropType = {
  cartItems: CartItemType[];
  onClickUpdate: () => void; 
  onClickDelete: () => void; 
};

export default function CartList({ cartItems, onClickUpdate, onClickDelete }: PropType) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "4%" }}>STT</th>
              <th>Name</th>
              <th style={{ width: "15%" }}>Price</th>
              <th style={{ width: "4%" }}>Quantity</th>
              <th style={{ width: "25%" }}>Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                index={index + 1}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onClickUpdate={onClickUpdate}
                onClickDelete={onClickDelete}
              />
            ))}
          </tbody>
          <tfoot id="my-cart-footer">
            <tr>
              <td colSpan={4}>
                There are <b>{totalQuantity}</b> items in your shopping cart.
              </td>
              <td colSpan={2} className="total-price text-left">
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
