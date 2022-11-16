import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { FetchHomeDataAction } from "@/store/modules/home.js";
import SectionHeader from "@/components/section-header";

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo } = useSelector(
    (store) => ({
      goodPriceInfo: store.home.goodPriceInfo,
    }),
    shallowEqual
  );
  // 异步获取数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <SectionHeader title={goodPriceInfo.title} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
