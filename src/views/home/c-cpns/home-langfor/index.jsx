import React, { memo } from "react";
import { LangforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LangforItem from "@/components/langfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLangfor = memo((props) => {
  const { infoData } = props;
  return (
    <LangforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="langfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LangforItem itemData={item} key={item.city}></LangforItem>;
          })}
        </ScrollView>
      </div>
    </LangforWrapper>
  );
});

HomeLangfor.propTypes = {};

export default HomeLangfor;
