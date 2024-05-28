import React, { useState } from "react";
import Input from "../base/Input";
import ButtonA from "../base/ButtonA";

type PropType = {
  index: number;
  name: string;
  price: number;
  quantity: number;
  onClickUpdate: () => void; 
  onClickDelete: () => void; 
};

export default function CartItem({ index, name, price, quantity, onClickUpdate, onClickDelete }: PropType) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleUpdate = () => {
    onClickUpdate();
  };

  const handleDelete = () => {
    onClickDelete();
  };

  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>{name}</td>
        <td>{price} USD</td>
        <td>
          <Input
            name={"cart-item-quantity-1"}
            type={"number"}
            value={itemQuantity}
            onChange={(e) => setItemQuantity(Number(e.target.value))}
          />
        </td>
        <td>
          <ButtonA type="info" title="Update" onClick={handleUpdate}></ButtonA>
          <ButtonA type="danger" title="Delete" onClick={handleDelete}></ButtonA>
        </td>
      </tr>
    </>
  );
}
