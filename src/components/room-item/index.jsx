import React, { memo } from "react";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";
const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%" } = props;
  return (
    <RoomWrapper itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" . ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 4.5}
            precision={0.5}
            readOnly
            sx={{ fontSize: "12px", color: "rgb(0,132,137)" }}
          ></Rating>
          <span>{itemData.reviews_count}</span>
          <span>
            {itemData.bottom_info?.content ? " · " : ""}
            {itemData.bottom_info?.content}
          </span>
        </div>
      </div>
    </RoomWrapper>
  );
});

export default RoomItem;
