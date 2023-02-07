import styled from "styled-components";
const NavBarStyle = styled.nav`
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 10px 10px 0 10rem;
  height: 5rem;
  .navbar-nav {
    text-align: center;
    display: flex;
    align-items: center;
    ${"" /* justify-content: center; */}
    .nav-logo {
      width: 12%;
      margin-right: 5rem;
    }
    .nav-search {
      width: 50%;
      margin-right: 1rem;
      .ant-input {
        border-radius: 0;
        &:hover {
          border-color: #d9d9d9;
        }
        &:focus {
          border-color: #d9d9d9;
          box-shadow: none;
        }
      }
      .ant-input-group-addon {
        button {
          background-color: #f57224;
          border-radius: 0 !important;
        }
      }
    }
    .nav-cart {
      margin-right: 1rem;
    }
    .nav-logout {
      cursor: pointer;
    }
  }
`;

export { NavBarStyle };
