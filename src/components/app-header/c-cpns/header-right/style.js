import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 25px;

  .btns {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
    .btn {
      border-radius: 21px;
      padding: 12px;
      transition: color 250ms ease;
    }
    .btn:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
  .profile {
    display: flex;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    border: 1px solid rgb(221, 221, 221);
    align-items: center;
    ${props => props.theme.mixin.boxShadow}
    .avatar {
      margin-left: 10px;
    }
  }
`;
