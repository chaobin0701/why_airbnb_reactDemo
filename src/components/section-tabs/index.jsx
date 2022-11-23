import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import PropTypes from "prop-types";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  // 点击事件
  function itemClickHandle(item, index) {
    setCurrentIndex(index);
    tabClick(index, item);
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              key={index}
              onClick={(e) => itemClickHandle(item, index)}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tableNames: PropTypes.array,
};
export default SectionTabs;
