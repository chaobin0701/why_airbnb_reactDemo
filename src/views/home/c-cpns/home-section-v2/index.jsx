// import propTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2 } from "./style";
import SectionHeader from "@/components/section-header";
import SectionList from "@/components/section-rooms";
import SectionTables from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  // 数据的转换
  const initiaName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initiaName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  // 按钮的回调
  const tabCLickHandle = useCallback(function (index, item) {
    setName(item);
  }, []);
  return (
    <SectionV2>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTables
        tabNames={tabNames}
        tabClick={tabCLickHandle}
      ></SectionTables>
      <SectionList
        roomList={{ list: infoData.dest_list?.[name] }}
        itemWidth="33.333%"
      ></SectionList>
      <SectionFooter name={name}></SectionFooter>
    </SectionV2>
  );
});

HomeSectionV2.propTypes = {};

export default HomeSectionV2;
