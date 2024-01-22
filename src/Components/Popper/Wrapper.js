import clsx from "clsx";
import Style from "./Popper.module.scss";

function Wrapper({ children }) {
  return <div className={clsx(Style.wrapper)}>{children}</div>;
}
export default Wrapper;
