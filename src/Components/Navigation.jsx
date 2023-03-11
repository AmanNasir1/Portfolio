import React from "react";
import "./navigation.css"
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
      <HomeFilled className="icon" size={40} />
      </div>
      <div>
      <UserOutlined className="icon"/>
      </div>
      <div>
      <WechatFilled className="icon"/>
      </div>
      <div>
      <MailFilled className="icon"/>
      </div>
      <div>
      <ShoppingFilled className="icon"/>
      </div>
    </div>
  );
};

export default Navigation;
