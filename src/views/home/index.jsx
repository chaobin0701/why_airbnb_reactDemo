import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { FetchHomeDataAction } from "@/store/modules/home.js";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeLangfor from "./c-cpns/home-langfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    langforInfo,
    plusInfo,
  } = useSelector(
    (store) => ({
      goodPriceInfo: store.home.goodPriceInfo,
      highScoreInfo: store.home.highScoreInfo,
      discountInfo: store.home.discountInfo,
      recommendInfo: store.home.recommendInfo,
      langforInfo: store.home.langforInfo,
      plusInfo: store.home.plusInfo,
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
        {/* 折扣数据 */}
        {Object.keys(discountInfo).length && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        {/* 佛山精彩之地 */}
        {Object.keys(recommendInfo).length && (
          <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>
        )}
        {/* 想去的地方 */}
        {Object.keys(recommendInfo).length && (
          <HomeLangfor infoData={langforInfo}></HomeLangfor>
        )}
        {/* 高性价比区内容 */}
        {Object.keys(goodPriceInfo).length && (
          <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        )}
        {/* PLus区内容 */}
        {Object.keys(plusInfo).length && (
          <HomeSectionV1 infoData={plusInfo}></HomeSectionV1>
        )}
        {/* 高评分内容 */}
        {Object.keys(highScoreInfo).length && (
          <HomeSectionV3 infoData={highScoreInfo}></HomeSectionV3>
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
