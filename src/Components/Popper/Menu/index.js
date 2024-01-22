import Tippy from "@tippyjs/react/headless";
import clsx from "clsx";
import Style from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const defaultOnchange = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultOnchange,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderMenu = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      render={(attrs) => {
        return (
          <div className={clsx(Style["menu-items"])} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              )}
              {renderMenu()}
            </PopperWrapper>
          </div>
        );
      }}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
