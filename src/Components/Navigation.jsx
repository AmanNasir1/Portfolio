import React from "react";
import "./navigation.css";
import {
  HomeFilled,
  UserOutlined,
  WechatFilled,
  MailFilled,
  ShoppingFilled,
} from "@ant-design/icons";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <a href="#home">
          <HomeFilled className="icon" size={40} />
        </a>
      </div>
      <div>
        <a href="#about">
          <UserOutlined className="icon" />
        </a>
      </div>
      <div>
        <a href="#portfolio">
          <ShoppingFilled className="icon" />
        </a>
      </div>
      <div>
        <MailFilled className="icon" />
      </div>
      {/* <div>
        <WechatFilled className="icon" />
      </div> */}
    </div>
  );
};

export default Navigation;
