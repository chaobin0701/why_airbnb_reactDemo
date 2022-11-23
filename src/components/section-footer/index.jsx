import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";
import IconMoreArrow from "@/accets/svg/icon-more-arrow";

const SectionFooter = memo((props) => {
  const { name } = props;
  let showMessgae = "显示全部";
  if (name) {
    showMessgae = `显示更多${name}房源`;
  }
  return (
    <SectionFooterWrapper
      color={showMessgae === "显示全部" ? "#000" : "#008489"}
    >
      <div className="info">
        <span className="text">{showMessgae}</span>
        <span className="icon">
          <IconMoreArrow></IconMoreArrow>
        </span>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
