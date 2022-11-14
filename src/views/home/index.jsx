import React, { memo, useEffect } from "react";
import request from "@/services";
const Home = memo(() => {
  // 网络请求的代码
  useEffect( () => {
    request.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
    })
  }, []);
  return <div>Home</div>;
});

export default Home;
