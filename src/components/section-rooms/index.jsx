import React, { memo } from "react";
import { SectionWrapper } from "./style";
import PropTypes from "prop-types";
import RoomItem from "@/components/room-item";

const SectionRomms = memo((props) => {
  const { roomList = [], itemWidth } = props;
  return (
    <SectionWrapper>
      <div className="room-list">
        {roomList?.list?.slice(0, 8)?.map((item) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
          );
        })}
      </div>
    </SectionWrapper>
  );
});

SectionRomms.propTypes = {
  roomList: PropTypes.object,
};

export default SectionRomms;
