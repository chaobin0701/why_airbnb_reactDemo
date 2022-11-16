import React, { memo } from "react";

import { HeaderWrapper } from "./style";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
const AppFooter = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft className="left">1</HeaderLeft>
      <HeaderCenter className="center">2</HeaderCenter>
      <HeaderRight className="right">3</HeaderRight>
    </HeaderWrapper>
  );
});

export default AppFooter;
