import styled from "styled-components";
const CartModulesStyles = styled.div`
  padding-top: 6rem;
  display: flex;
  align-items: flex-start;
  .ant-table-wrapper {
    margin: 0 auto;
    width: 60%;
  }
  .icon-delete {
    position: absolute;
    left: 55%;
    top: 7rem;
    cursor: pointer;
    color: #757575;
    &:hover {
      color: #f57224;
    }
    .text-delete {
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .sumary {
    padding: 16px 12px 10px;
    background: #fff;
    margin: 0 auto;
    width: 30%;
    .title {
      font-size: 18px;
      color: #212121;
      margin-bottom: 14px;
      position: relative;
      font-weight: 500;
    }
    .tmp-sum,
    .fee-shipping,
    .total {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-bottom: 1rem;
    }
    .tmp-sum,
    .fee-shipping {
      color: #757575;
    }
    .total {
      .sum {
        display: table-cell;
        font-size: 18px;
        color: #f57224;
        text-align: right;
      }
    }
    .vat {
      font-size: 12px;
      color: #424242;
      letter-spacing: 0;
      line-height: 16px;
      display: block;
      text-align: right;
      margin-top: 5px;
      margin-bottom: 1rem;
    }
    button {
      border-style: solid;
      background-color: #f57224;
      border-color: transparent;
      width: 100%;
      height: 40px;
      line-height: 14px;
      color: #fff;
      text-transform: uppercase;
      &:hover {
        color: #fff;
        background-color: #f57224;
      }
    }
  }
`;
export { CartModulesStyles };
