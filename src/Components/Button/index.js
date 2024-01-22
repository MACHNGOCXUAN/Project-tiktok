import clsx from "clsx";
import Style from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button({
  to,
  herf,
  primary = false,
  follow = false,
  big = false,
  getapp = false,
  upload = false,
  disabled = false,
  icon,
  children,
  onClick,
  ...passProp
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProp,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (herf) {
    props.href = herf;
    Comp = "a";
  }

  const classname = clsx(Style.wrapper, {
    [Style.primary]: primary,
    [Style.follow]: follow,
    [Style.big]: big,
    [Style.getapp]: getapp,
    [Style.upload]: upload,
    [Style.disabled]: disabled,
  });

  return (
    <Comp className={classname} {...props}>
      {icon && <span className={clsx(Style.icon)}>{icon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
