import React, { memo } from "react";
import { FooterWrapper } from "./style";
const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="top">
          <ul>
            <li>爱彼迎</li>
            <li>工作机会</li>
            <li>爱彼迎新闻</li>
            <li>政策</li>
            <li>无障碍设施</li>
          </ul>
          <ul>
            <li>发现</li>
            <li>信任与安全</li>
            <li>商务差旅</li>
            <li>爱彼迎杂志</li>
            <li>Aribnb.org</li>
          </ul>
          <ul>
            <li>出租</li>
            <li>为什么要出租</li>
            <li>待客之道</li>
            <li>房东义务</li>
            <li>开展体验</li>
            <li>资源中心</li>
          </ul>
          <ul>
            <li>客服支持</li>
            <li>帮助</li>
            <li>邻里支持</li>
          </ul>
        </div>
        <div className="bottom">
          <p>
            © 2022 Airbnb, Inc. All rights reserved. 条款 · 隐私政策 · 网站地图
            · 全国旅游投诉渠道 12301
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
