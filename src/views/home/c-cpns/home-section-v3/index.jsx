import React, { memo } from "react";
import { SectionV3 } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  return (
    <SectionV3>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item.id}
              ></RoomItem>
            );
          })}
        </ScrollView>
      </div>
    </SectionV3>
  );
});

export default HomeSectionV3;
