import React, { PropsWithChildren } from "react";
import "./layout.scss";
import Header from "./Header/Header";

export const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <div className="layout__container">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">{props.children}</div>
    </div>
  );
};
