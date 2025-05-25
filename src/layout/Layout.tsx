import { PropsWithChildren } from "react";
import Header from "./Header";
import "./layout.scss";

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
