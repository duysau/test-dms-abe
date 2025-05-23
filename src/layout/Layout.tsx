import React from "react";
import "./layout.scss";

export const Layout = (props) => {
  return (
    <div className="layout__container">
      <div className="layout__header">Header</div>
      <div className="layout__content">{props.children}</div>
    </div>
  );
};
