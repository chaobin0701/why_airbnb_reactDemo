import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionList from "@/components/section-rooms";

const HomeSection = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionList roomList={infoData} itemWidth="25%"></SectionList>
    </HomeSectionWrapper>
  );
});

HomeSection.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSection;
