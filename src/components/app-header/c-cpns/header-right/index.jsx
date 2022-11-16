import React, { memo } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/accets/svg/icon-global.jsx";
import IconProfileMenu from "@/accets/svg/icon-profile-menu.jsx";
import IconProfileAvatar from "@/accets/svg/icon-profile-avatar.jsx";
const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登陆</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile">
        <IconProfileMenu></IconProfileMenu>
        <div className="avatar">
          <IconProfileAvatar></IconProfileAvatar>
        </div>
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
