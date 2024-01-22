import clsx from "clsx";
import Style from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Header({ title, onBack }) {
  return (
    <header className={clsx(Style.header)}>
      <button className={clsx(Style.back)} onClick={onBack}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <p className={clsx(Style["header-title"])}>{title}</p>
    </header>
  );
}

export default Header;
