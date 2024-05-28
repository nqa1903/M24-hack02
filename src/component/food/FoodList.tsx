import React from "react";
import FoodItem from "./FoodItem";

interface FoodItemType {
    name: string;
    price: number;
    src: string;
    alt: string;
    inStock: number;
  }
  
  interface PropType {
    updateCart: (updatedCartItems: FoodItemType[]) => void; 
  }

export default function FoodList() {
  return (
    <>
      <div className="panel-body" id="list-product">
        <div>
          <FoodItem
            name={"Pizza"}
            price={15}
            src={
              "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true"
            }
            alt={"pizza"}
            inStock={10}
            updateCart={function (name: string, quantity: number): void {
              throw new Error("Function not implemented.");
            }}
          ></FoodItem>
        </div>
        <div>
          <FoodItem
            name={"Hamburger"}
            price={15}
            src={
              "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true"
            }
            alt={"hamburger"}
            inStock={0}
            updateCart={function (name: string, quantity: number): void {
              throw new Error("Function not implemented.");
            }}
          ></FoodItem>
        </div>
        <div>
          <FoodItem
            name={"Bread"}
            price={20}
            src={
              "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true"
            }
            alt={"bread"}
            inStock={5}
            updateCart={function (name: string, quantity: number): void {
              throw new Error("Function not implemented.");
            }}
          ></FoodItem>
        </div>
        <div>
          <FoodItem
            name={"Cake"}
            price={10}
            src={
              "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true"
            }
            alt={"cake"}
            inStock={8}
            updateCart={function (name: string, quantity: number): void {
              throw new Error("Function not implemented.");
            }}
          ></FoodItem>
        </div>
      </div>
    </>
  );
}
