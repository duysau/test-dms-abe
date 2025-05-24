import React, { PropsWithChildren } from "react";
import "./layout.scss";
import Header from "./Header";
import NavBar from "./Nav";

export const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <div className="layout__container">
      <div className="layout__header">
        <Header />
        <NavBar />
      </div>
      <div className="layout__content">{props.children}</div>
    </div>
  );
};
