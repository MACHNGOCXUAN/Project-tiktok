import clsx from "clsx";
import Button from "../../Button";
import Style from "./Menu.module.scss";

function MenuItem({ data, onClick }) {
  const classname = clsx(Style["menu-item"], {
    [Style.separate]: data.separate,
  });
  return (
    <Button
      className={classname}
      icon={data.icon}
      to={data.to}
      herf={data.herf}
      target="_blank"
      onClick={onClick}
    >
      <span>{data.title}</span>
    </Button>
  );
}

export default MenuItem;
