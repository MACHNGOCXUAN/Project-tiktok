import clsx from "clsx";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import Style from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  return (
    <div className={clsx(Style.wrapper)}>
      <Header />
      <div className={clsx(Style.container)}>
        <Sidebar />
        <div className={Style.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
