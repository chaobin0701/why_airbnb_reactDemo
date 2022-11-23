import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 17px;
    color: ${(props) => props.color};
    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`;
