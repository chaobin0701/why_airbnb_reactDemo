import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.primaryColor};
  .logo {
    display: flex;
    margin-left: 25px;
  }
`;
