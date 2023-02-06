import styled from "styled-components";
const LoginModuleStyle = styled.div`
  width: 50%;
  margin: auto;
  .login-title {
    display: flex;
    line-height: 26px;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: #424242;
    }
    .login-other {
      color: #757575;
      .register {
        color: blue;
      }
    }
  }
  .login-modal {
    background-color: #fff;
    .ant-form {
      display: flex;
      padding: 1rem;
      .form-login {
        width: 50%;

        .ant-col-20 {
          max-width: 100%;
        }
      }
      .btn-login {
        width: 50%;
        text-align: center;
        margin-top: 10px;
        .btn-login {
          width: 90%;
          height: 3.5rem;
          order-style: solid;
          background-color: #f57224;
          border-color: transparent;
          text-transform: uppercase;
          &:hover {
            color: #fff;
            background-color: #d0611e;
            border-color: transparent;
            text-decoration: none;
          }
          &.btn-login-fb {
            height: 3rem;
            background: #3b5998;
          }
          &.btn-login-gg {
            height: 3rem;
            background: #d34836;
          }
        }
        .ant-form-item {
          margin-bottom: 10px;
        }
      }
      .ant-form-item .ant-form-item-label {
        > label {
          height: 0;
        }
        .ant-form-item-required::before {
          content: "";
        }
        .ant-form-item-required::after {
          display: inline-block;
          font-size: 12px;
          line-height: 1;
          content: "*";
        }
      }
    }
  }
`;

export { LoginModuleStyle };
