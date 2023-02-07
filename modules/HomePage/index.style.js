import styled from "styled-components";
const HomePageStyle = styled.div`
  text-align: center;
  padding-top: 5rem;
  margin: 0 10rem;
  .card-channels {
    padding-top: 1rem;
    .ant-row .card-channels-item {
      height: 40px;
      background: #fff;
      border-radius: 20px;
      margin-right: 10px;
      text-align: left;
      display: flex;
      align-items: center;
      &:hover {
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
        -webkit-transform: all 0.3s ease-in-out;
        -ms-transform: all 0.3s ease-in-out;
        transform: all 0.3s ease-in-out;
        position: relative;
      }
      .card-channels-icon {
        img {
          width: 32px;
          height: 32px;
          margin: 4px;
        }
      }
      .card-channels-name {
        margin-left: 4px;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .home-category {
    text-align: left;
    margin-top: 1rem;
    .home-category-header {
      font-size: 22px;
      color: #424242;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .home-category-content {
      margin-bottom: 12px;

      .fs-content-header {
        background-color: #fff;
        display: flex;
        overflow: hidden;
        border-bottom: #d5d5d5 1px solid;
        height: 60px;
        line-height: 60px;

        padding: 0 10px;
        .fs-header-left {
          width: 20%;
          font-weight: 500;
          font-size: 14px;
          color: #f57224;
        }
        .fs-header-mid {
          width: 60%;
          font-size: 14px;
          margin-right: 10px;
          color: #202020;
        }
        .fs-header-right {
          font-weight: 500;
          font-size: 14px;
          float: right;
          display: block;
          border: 1px solid #f57224;
          border-radius: 2px;
          color: #f57224;
          height: 35px;
          background-color: transparent;
          line-height: 35px;
          text-align: center;
          padding-left: 10px;
          padding-right: 10px;
          margin-right: 11px;
          margin-top: 13px;
        }
        .fs-header-right {
          text-transform: uppercase;
        }
      }
      .fs-content-body {
        background-color: #fff;
      }
      .fs-content-body,
      .official-store-content-body {
        display: flex;
        justify-content: space-between;
        .ant-card {
          margin: 10px 10px;
          border: none;
          &:first-child {
            margin: 10px 10px 10px 0px;
          }
          &:last-child {
            margin: 10px 0px 10px 10px;
          }
          .ant-card-cover {
            img {
              width: 188px;
              height: 188px;
            }
          }
          .ant-card-body {
            padding: 10px;
            .card-title {
              overflow: hidden;
              /* text-overflow: ellipsis; */
              -webkit-line-clamp: 2;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              margin-bottom: 4px;
              font-size: 14px;
            }
            .card-price {
              font-size: 18px;
              color: #f57224;
              letter-spacing: -0.56px;
              line-height: 22px;
            }
            .card-origin-price {
              .price,
              .currence {
                color: #9e9e9e;
                text-decoration: line-through;
              }
              .discount {
                color: #212121;
              }
            }
          }
        }
      }
      .official-store-content-body {
        .card-official-stores-brand-overlay {
          width: 188px;
          height: 25px;
          top: 155px;
          left: 0;
          position: absolute;
          opacity: 0.25;
          background: rgba(0, 0, 0, 0.04);
          background: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.5) 100%
          );
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.5) 100%
          );
        }
        .ant-card-body .brand-logo {
          text-align: center;
          img {
            box-shadow: 0 0 4px 0 rgb(0 0 0 / 25%);
            width: 52px;
            height: 52px;
            background-color: #fff;
            padding: 4px;
            position: relative;
            margin: -25px auto 0;
            overflow: hidden;
          }
        }
        .card-title {
          text-align: center;
          .des {
            font-size: 12px;
            line-height: 14px;
            color: #9e9e9e;
            margin: 0 8px;
          }
        }
      }
      .category-list-content-body {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        .ant-col {
          height: 150px;
          .ant-card {
            padding-top: 1rem;
            .ant-card-cover {
              width: 80px;
              height: 80px;
              margin: 0 auto;
              img {
                width: 80px;
                height: 80px;
              }
            }
            .ant-card-body {
              padding: 0;
              text-align: center;
              .card-title {
                margin-top: 10px;
                .name {
                  margin: 8px 12px 0;
                  font-size: 14px;
                  color: #212121;
                  line-height: 18px;
                  height: 36px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export { HomePageStyle };
