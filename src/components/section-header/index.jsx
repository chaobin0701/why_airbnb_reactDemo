import React, { memo } from "react";
import { SectionHeaderWrapper } from "./style";
const SectionHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
    </SectionHeaderWrapper>
  );
});

export default SectionHeader;
