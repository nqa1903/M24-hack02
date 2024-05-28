import React from "react";

type PropType = {
  name?: string;
  type?: "text" | "number" | "date" | "email" | "password";
  disabled?: boolean;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  name,
  type,
  disabled,
  value,
  onChange,
}: PropType) {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
}
