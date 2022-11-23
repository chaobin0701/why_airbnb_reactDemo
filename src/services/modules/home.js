import HYRequest from "../request/index";
// 高性价比房源信息
export function getHomeGoodPriceData() {
  return HYRequest.request({ url: "/home/goodprice" });
}

export function getHomeHighScoreData() {
  return HYRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return HYRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return HYRequest.get({
    url: "/home/hotRecommenddest",
  });
}

export function getHomeLongforData() {
  return HYRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return HYRequest.get({
    url: "/home/plus",
  });
}