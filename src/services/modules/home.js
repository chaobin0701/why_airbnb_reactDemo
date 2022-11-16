import HYRequest from "../request/index";
export function getHomeGoodPriceData() {
  return HYRequest.request({ url: "/home/goodprice" });
}
