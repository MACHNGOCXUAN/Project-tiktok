import Style from "./Sidebar.module.scss";
import clsx from "clsx";
function Sidebar() {
  return <aside className={clsx(Style.wrapper)}>Sideber</aside>;
}

export default Sidebar;
