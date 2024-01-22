import clsx from "clsx";
import Style from "./Account.module.scss";
import { Tick } from "../Icons";
import Image from "../Image";
import { Link } from "react-router-dom";
function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={clsx(Style.wrapper)}>
      <Image className={clsx(Style.avata)} alt="Xuan" src={data.avatar} />
      <div className={clsx(Style.info)}>
        <h4 className={clsx(Style.name)}>
          {data.full_name}
          <span className={clsx(Style.tick)}>{data.tick && <Tick />}</span>
        </h4>
        <p className={clsx(Style.userName)}>{data.nickname}</p>
      </div>
    </Link>
  );
}
export default AccountItem;
