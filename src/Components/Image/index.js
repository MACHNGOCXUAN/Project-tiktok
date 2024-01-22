import { forwardRef, useState } from "react";
import images from "../../assets/image";
import clsx from "clsx";
import Style from "./Image.module.scss";

function Image({ src, alt, className, ...props }, ref) {
  const [fallback, setFallBack] = useState("");

  const handOnError = () => {
    setFallBack(images.noImage);
  };

  return (
    <img
      className={clsx(Style.wrapper, className)}
      ref={ref}
      {...props}
      alt={alt}
      src={fallback || src}
      onError={handOnError}
    />
  );
}
export default forwardRef(Image);
