import styled from "styled-components";
export const FooterWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.borderColor};
  padding: 30px 0;
  .content {
    ${(props) => props.theme.mixin.content}
    .top {
      display: flex;
      padding-bottom: 20px;
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
      ul {
        display: flex;
        flex-direction: column;
        padding-right: 140px;
        & > li {
          color: ${(props) => props.theme.textColor1};
          padding: 2px 0;
        }
        & > li:nth-child(1) {
          font-weight: bold;
          color: ${(props) => props.theme.textColor};
          margin-bottom: 5px;
        }
        & > li:nth-child(n + 2) {
          cursor: pointer;
        }
        & > li:nth-child(n + 2):hover {
          text-decoration: underline;
        }
      }
    }
    .bottom {
      margin-top: 20px;
      p {
        text-align: center;
        color: ${(props) => props.theme.textColor1};
      }
    }
  }
`;
