import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HomeWrapper } from "./style";
import { FetchHomeDataAction } from "@/store/modules/home.js";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo,recommendInfo } = useSelector(
    (store) => ({
      goodPriceInfo: store.home.goodPriceInfo,
      highScoreInfo: store.home.highScoreInfo,
      discountInfo: store.home.discountInfo,
      recommendInfo:store.home.recommendInfo
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
      <div className="content">
        {/* 折扣数据 */}
        {Object.keys(discountInfo).length && (<HomeSectionV2 infoData={discountInfo}></HomeSectionV2>)}
        {/* 佛山精彩之地 */}
        {Object.keys(recommendInfo).length && (<HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>)}
        {/* 高性价比区内容 */}
        {Object.keys(goodPriceInfo).length && (<HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>)}
        {/* 高评分内容 */}
        {Object.keys(highScoreInfo).length && (<HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>)}
      </div>
    </HomeWrapper>
  );
});

export default Home;
