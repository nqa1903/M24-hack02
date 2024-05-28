import React from "react";

type PropType = {
  type: "info" | "danger";
  title: string;
  onClick?: () => void; // Thêm prop onClick vào type PropType
};

const BTN_INFO = "info";
const BTN_DANGER = "danger";

export default function ButtonA({ type, title, onClick }: PropType) {
  return (
    <>
      <a className={`label label-${type === BTN_INFO ? BTN_INFO : BTN_DANGER}`} onClick={onClick}>
        {title}
      </a>
    </>
  );
}
