import React, { memo } from "react";
import { LangforItemWrapper } from "./style";
const LangforItem = memo((props) => {
  const { itemData } = props;
  return (
    <LangforItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </LangforItemWrapper>
  );
});

LangforItem.propTypes = {};

export default LangforItem;
