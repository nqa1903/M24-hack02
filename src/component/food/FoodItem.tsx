import React, { useState } from "react";
import Input from "../base/Input";

type PropType = {
  name: string;
  price: number;
  src: string;
  alt: string;
  inStock: number;
  updateCart: (name: string, quantity: number) => void; // Thêm prop để cập nhật giỏ hàng
};

export default function FoodItem({ name, price, src, alt, inStock, updateCart }: PropType) {
  const [stock, setStock] = useState(inStock);
  const [quantity, setQuantity] = useState(1);

  const handlePurchase = () => {
    if (quantity > 0 && quantity <= stock) {
      setStock(stock - quantity);
      updateCart(name, quantity); // Cập nhật giỏ hàng
    }
  };

  return (
    <>
      <div className={`media product ${stock <= 0 ? 'disabled' : ''}`}>
        <div className="media-left">
          <a href="#">
            <img
              className="media-object"
              src={src}
              alt={alt}
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{name}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
            asperiores veniam repellat unde debitis quisquam magnam magni ut
            deleniti!
          </p>
          <Input 
            name={name} 
            type="number" 
            disabled={stock <= 0} 
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <a 
            data-product={stock > 0 ? 1 : 0} 
            className={`price ${stock <= 0 ? 'disabled' : ''}`} 
            aria-label={`Price of ${name}`} 
            style={{ pointerEvents: stock <= 0 ? 'none' : 'auto' }}
            onClick={handlePurchase}
          >
            {price} USD
          </a>
          <p>In Stock: {stock}</p>
        </div>
      </div>
    </>
  );
}
